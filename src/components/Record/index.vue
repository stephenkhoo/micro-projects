<template>
  <App :title="'Record for ' + Type" :home="true">
    <div class="w-full sticky left-0">
      <MaterialInput name="yearmonth" placeholder="Year-Month" v-model:value="yearmonth"/>
      <MaterialInput name="type" placeholder="Type" v-model:value="Type"/>
      <button @click="search" class="text-center my-2 mx-auto block w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </div>
    <div class="max-h-full border-gray-200 text-xl">
      <div class="sticky top-0">
        <div class="flex">
          <div class="font-bold bg-white border-b border-t w-40 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">Date</div>
          <div class="font-bold bg-white border-b border-t w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">T</div>
          <div class="font-bold bg-white border-b border-t w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">K</div>
          <div class="font-bold bg-white border-b border-t w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">CY</div>
          <div class="font-bold bg-white border-b border-t w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">Beng</div>
          <div class="font-bold bg-white border-b border-t w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">Hoon</div>
          <div class="font-bold bg-white border-b border-t w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">Sim</div>
          <div class="font-bold bg-white border-b border-t w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">Total</div>
        </div>
      </div>
      <div v-if="records.length">
        <div class="flex" v-for="record in records" :key="record.id">
          <div class="w-40 flex-grow-2 flex-shrink-0 text-right px-4 py-4 border-b border-r border-gray-200">
            {{ record.properties['Date'].date.start }}
          </div>
          <NoOfPackage :no_of_package="record.properties['T'].number" />
          <NoOfPackage :no_of_package="record.properties['K'].number" />
          <NoOfPackage :no_of_package="record.properties['CY'].number" />
          <NoOfPackage :no_of_package="record.properties['Beng'].number" />
          <NoOfPackage :no_of_package="record.properties['Hoon'].number" />
          <NoOfPackage :no_of_package="record.properties['Sim'].number" />
          <NoOfPackage :no_of_package="total_of_package(record)" />
        </div>
        <div class="flex">
          <div class="w-40 flex-grow-2 flex-shrink-0 text-right px-4 py-4 border-b border-r border-gray-200">
            Month total
          </div>
          <NoOfPackageAndIncentive :data="total_of_account('T')" />
          <NoOfPackageAndIncentive :data="total_of_account('K')" />
          <NoOfPackageAndIncentive :data="total_of_account('CY')" />
          <NoOfPackageAndIncentive :data="total_of_account('Beng')" />
          <NoOfPackageAndIncentive :data="total_of_account('Hoon')" />
          <NoOfPackageAndIncentive :data="total_of_account('Sim')" />
          <NoOfPackageAndIncentive :data="total_of_this_month()" />
        </div>
      </div>
      <div class="px-4 py-4 border-b" v-else>
        No records
      </div>
    </div>
  </App>
</template>

<script>
import App from '../App.vue';
import MaterialInput from '../MaterialInput.vue';
import NoOfPackage from '../NoOfPackage.vue';
import NoOfPackageAndIncentive from '../NoOfPackageAndIncentive.vue';

export default {
  name: 'Report',
  components: {
    App, MaterialInput, NoOfPackage, NoOfPackageAndIncentive
  },
  mounted () {
    this.fetchRecords();
    this.fetchIncentiveTiers();
  },
  methods: {
    total_of_package(record) {
      return ['T', 'K', 'CY', 'Beng', 'Hoon', 'Sim'].map(account => record.properties[account].number || 0).reduce((cul, value) => cul + value);
    },
    total_of_account(account) {
      let no_of_package = this.records.map(record => record.properties[account].number).reduce((cul, value) => cul + value);

      let incentive = 0;
      let tier = this.tiers.find(tier => no_of_package > tier.min);
      if (tier) {
        incentive = tier.incentive;
      }

      return {
        no_of_package, incentive
      }
    },
    total_of_this_month() {
      let array_of_total = ['T', 'K', 'CY', 'Beng', 'Hoon', 'Sim']
        .map(account => this.total_of_account(account));

      let no_of_package = array_of_total
        .map(total => total.no_of_package)
        .reduce((cul, value) => cul + value);

      let incentive = array_of_total
        .map(total => total.incentive)
        .reduce((cul, value) => cul + value);

      return {
        no_of_package, incentive
      }
    },
    // total_of_package_and_incentive() {
    //   let no_of_package = 0;
    //   let incentive = 0;

    //   return {
    //     no_of_package,
    //     incentive,
    //   };
    // },
    // no_of_package_and_incentive(record, key) {
    //   let no_of_package = record.properties[key].number || 0
    //   let incentive = record.properties[key].number || 0;
    //   return {
    //       no_of_package,
    //       incentive,
    //   };
    // },
    fetchRecords() {
      fetch("https://notion-api.imaginepen.com/v1/databases/d5a1624f88e54bf0a458dacde772b34f/query", {
        method: 'POST',
        body: JSON.stringify({
          filter: {
            and: [{
              "property": "Year Month",
              "text": {
                "equals": this.yearmonth,
              }
            }, {
              "property": "Type",
              "select": {
                "equals": this.Type,
              }
            }],
          },
          sorts: [
            {
              "property": "Date",
              "direction": "ascending"
            }
          ]
        })
      }).then(response => {
        response.json().then(data => {
          if (data.status > 300) {
            console.log('fail', data)
          } else {
            console.log('success', data)
            this.records = data.results;
          }
        });
      }).catch(err => console.log('Fail', err));
    },
    fetchIncentiveTiers() {
      fetch("https://notion-api.imaginepen.com/v1/databases/ee5f100af12b43789e16e58c2f5ecf91/query", {
        method: 'POST',
        body: JSON.stringify({
          sorts: [
            {
              "property": "Min",
              "direction": "descending"
            }
          ]
        })
      }).then(response => {
        response.json().then(data => {
          if (data.status > 300) {
            console.log('fail', data)
          } else {
            console.log('success', data)
            this.tiers = data.results
              .filter(tier => tier.properties.Type.select.name == this.Type)
              .map(tier => ({
                min: tier.properties['Min'].number,
                incentive: tier.properties['Incentive'].number,
              }));
          }
        });
      }).catch(err => console.log('Fail', err));
    },
    search: function () {
      if (['vitagen', 'vitagen-less-sugar'].indexOf(this.Type ?? 'vitagen') == -1) {
        this.Type = 'vitagen';
      }
      window.location.href = window.location.pathname + '?year-month=' + this.yearmonth + '&type=' + this.Type;
    }
  },
  data: function () {
    const now = new Date;
    const urlParams = new URLSearchParams(window.location.search);
    const yearmonth_fromurl = urlParams.get('year-month');
    const yearmonth = yearmonth_fromurl? yearmonth_fromurl: [now.getFullYear(), now.getMonth() + 1].join('-');

    const type_from_url = urlParams.get('type');
    if (['vitagen', 'vitagen-less-sugar'].indexOf(type_from_url ?? 'vitagen') == -1) {
      window.location.href = '/v-system/entry.html';
    }
    const type = type_from_url? type_from_url: 'vitagen';

    return {
      yearmonth,
      records: [],
      tiers: [],
      Type: type,
    }
  }
}
</script>

<style>
.flex-grow-1 {
  flex-grow: 1;
}
.flex-grow-2 {
  flex-grow: 2;
}
.-z-1 {
  z-index: -1;
}
</style>
