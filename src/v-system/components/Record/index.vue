<template>
  <App :title="'Record for ' + OriginalType" :home="true">
    <div class="w-full sticky left-0">
      <MaterialInput name="yearmonth" placeholder="Year-Month" v-model:value="yearmonth"/>
      <div @click="toggleType" class="group relative mx-auto max-w-[300px] my-8 w-1/2 flex justify-between border-b-2 focus-within:border-blue-500">
        <input placeholder=" "
          class="focus:outline-none mt-2 mb-1 px-1 bg-transparent"
          id="type"
          name="type"
          :value="Type"
        />
        <label class="placeholder:text-transparent origin-top-left group-focus-within:-translate-y-5 group-focus-within:scale-75 group-focus-within:text-blue-500 absolute top-0 left-0 mt-2 mb-1 px-1 -z-1 duration-200 transition-transform" for="type">Type</label>
      </div>
      <button @click="search" class="text-center my-2 mx-auto block w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
    </div>
    <div class="max-h-full border-gray-200 text-xl">
      <TableHeader />
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
        <MonthNoOfPackageAndIncentive title="Month total" :records="records" :tiers="tiers"/>
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
      return ['T', 'K', 'CY', 'Beng', 'Hoon', 'Sim'].map(account => record.properties[account].number || 0).reduce((cul, value) => cul + value);
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
    toggleType: function () {
      this.Type = this.Type == 'vitagen'? 'vitagen-less-sugar': 'vitagen';
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
      window.location.href = window.location.pathname;
    }
    const type = type_from_url? type_from_url: 'vitagen';

    return {
      yearmonth,
      records: [],
      tiers: [],
      Type: type,
      OriginalType: type,
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
