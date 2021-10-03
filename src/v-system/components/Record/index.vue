<template>
  <App title="Records" :home="true">
    <div class="w-full sticky left-0">
      <MaterialInput name="yearmonth" placeholder="Year-Month" v-model:value="yearmonth"/>
      <button @click="search" class="text-center my-2 mx-auto block w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
    </div>
    <div class="max-h-full border-gray-200 text-xl">
      <TableHeader />
      <div v-if="Object.keys(records).length">
        <div class="flex" v-for="(record, date) in records" :key="record.id">
          <div class="w-40 flex-grow-2 flex-shrink-0 text-right px-4 py-4 border-b border-r border-gray-200">
            {{ date }}
          </div>
          <NoOfPackage
           :no_of_package="record['vitagen']?.properties['T'].number"
           :no_of_package_ls="record['vitagen-less-sugar']?.properties['T'].number"
          />
          <NoOfPackage
           :no_of_package="record['vitagen']?.properties['K'].number"
           :no_of_package_ls="record['vitagen-less-sugar']?.properties['K'].number"
          />
          <NoOfPackage
           :no_of_package="record['vitagen']?.properties['CY'].number"
           :no_of_package_ls="record['vitagen-less-sugar']?.properties['CY'].number"
          />
          <NoOfPackage
           :no_of_package="record['vitagen']?.properties['Beng'].number"
           :no_of_package_ls="record['vitagen-less-sugar']?.properties['Beng'].number"
          />
          <NoOfPackage
           :no_of_package="record['vitagen']?.properties['Hoon'].number"
           :no_of_package_ls="record['vitagen-less-sugar']?.properties['Hoon'].number"
          />
          <NoOfPackage
           :no_of_package="record['vitagen']?.properties['Sim'].number"
           :no_of_package_ls="record['vitagen-less-sugar']?.properties['Sim'].number"
          />
          <NoOfPackage
            :no_of_package="total_of_package(record['vitagen'])"
            :no_of_package_ls="total_of_package(record['vitagen-less-sugar'])"
          />
        </div>
        <MonthNoOfPackageAndIncentive title="Month total"
          :records="Object.values(records).map(record => record['vitagen']).filter(r => r)"
          :records_ls="Object.values(records).map(record => record['vitagen-less-sugar']).filter(r => r)"
          :tiers="tiers['vitagen']"
          :tiers_ls="tiers['vitagen-less-sugar']"
        />
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
import TableHeader from '../TableHeader.vue';
import NoOfPackage from '../NoOfPackage.vue';
import MonthNoOfPackageAndIncentive from '../MonthNoOfPackageAndIncentive.vue';

export default {
  name: 'Record',
  components: {
    App, MaterialInput, TableHeader, NoOfPackage, MonthNoOfPackageAndIncentive
  },
  mounted () {
    this.fetchRecords();
    this.fetchIncentiveTiers();
  },
  methods: {
    total_of_package(record) {
      return ['T', 'K', 'CY', 'Beng', 'Hoon', 'Sim'].map(account => record?.properties[account].number || 0).reduce((cul, value) => cul + value);
    },
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
            console.log('success', data);
            data.results.forEach(result => {
              if (!this.records[result.properties['Date'].date.start]) {
                this.records[result.properties['Date'].date.start] = {}
              }
              this.records[result.properties['Date'].date.start][result.properties['Type'].select.name] = result
            });
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
            console.log('success', data);
            ['vitagen', 'vitagen-less-sugar'].forEach(type => {
              this.tiers[type] = data.results.filter(tier =>
                tier.properties.Type.select.name == type
              ).map(tier => ({
                min: tier.properties['Min'].number,
                incentive: tier.properties['Incentive'].number,
              }));
            });
          }
        });
      }).catch(err => console.log('Fail', err));
    },
    search: function () {
      window.location.href = window.location.pathname + '?year-month=' + this.yearmonth;
    }
  },
  data: function () {
    const now = new Date;
    const urlParams = new URLSearchParams(window.location.search);
    const yearmonth_fromurl = urlParams.get('year-month');
    const yearmonth = yearmonth_fromurl? yearmonth_fromurl: [now.getFullYear(), now.getMonth() + 1].join('-');

    return {
      yearmonth,
      records: {},
      tiers: {
        "vitagen": [],
        "vitagen-less-sugar": [],
      },
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
input:not(:placeholder-shown) ~ label {
  --tw-scale-x: 0.75;
  --tw-scale-y: 0.75;
  --tw-translate-y: -1.25rem;
  transform: var(--tw-transform);
}
</style>
