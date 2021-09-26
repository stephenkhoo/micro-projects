<template>
  <App :title="'Report for ' + Type" :home="true">
    <div class="w-full sticky left-0">
      <MaterialInput name="year" placeholder="Year" v-model:value="year"/>
      <MaterialInput name="type" placeholder="Type" v-model:value="Type"/>
      <button @click="search" class="text-center my-2 mx-auto block w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </div>
    <div class="max-h-full border-gray-200 text-xl">
      <TableHeader />
      <MonthNoOfPackageAndIncentive v-for="month in 12" :key="month" :title="[current_year, month].join('-')" :records="recordsOfMonth(current_year, month)" :tiers="tiers"/>
    <div class="flex">
      <div class="w-40 flex-grow-2 flex-shrink-0 text-right px-3 py-4 border-b border-r border-gray-200">
        {{ current_year }}
      </div>
      <NoOfPackageAndIncentive :data="total_of_account('T')" />
      <NoOfPackageAndIncentive :data="total_of_account('K')" />
      <NoOfPackageAndIncentive :data="total_of_account('CY')" />
      <NoOfPackageAndIncentive :data="total_of_account('Beng')" />
      <NoOfPackageAndIncentive :data="total_of_account('Hoon')" />
      <NoOfPackageAndIncentive :data="total_of_account('Sim')" />
      <NoOfPackageAndIncentive :data="total_of_year()" />
    </div>
    </div>
  </App>
</template>

<script>
import App from '../App.vue';
import MaterialInput from '../MaterialInput.vue';
import TableHeader from '../TableHeader.vue';
import NoOfPackageAndIncentive from '../NoOfPackageAndIncentive.vue';
import MonthNoOfPackageAndIncentive from '../MonthNoOfPackageAndIncentive.vue';

export default {
  name: 'Report',
  components: {
    App, MaterialInput, TableHeader, NoOfPackageAndIncentive, MonthNoOfPackageAndIncentive
  },
  mounted () {
    this.fetchRecords();
    this.fetchIncentiveTiers();
  },
  methods: {
    total_of_account(account) {
      if (!this.records.length) return { no_of_package: 0, incentive: 0 };
      const month_conclusion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        .map(month => this.recordsOfMonth(this.year, month))
        .map(month_records => {
          if (!month_records.length) return { no_of_package: 0, incentive: 0 };
          let no_of_package = month_records.map(record => record.properties[account].number).reduce((cul, value) => cul + value);
          let incentive = 0;
          let tier = this.tiers.find(tier => no_of_package > tier.min);
          if (tier) {
            incentive = tier.incentive;
          }
          return {
            no_of_package, incentive
          }
        });

      return {
        no_of_package: month_conclusion.map(record => record.no_of_package).reduce((cul, no_of_package) => cul + no_of_package),
        incentive: month_conclusion.map(record => record.incentive).reduce((cul, incentive) => cul + incentive)
      }
    },
    total_of_year() {
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
    recordsOfMonth(year, month) {
      return this.records.filter(record => record.properties['Year Month'].formula.string == [year, month].join('-'));
    },
    total_of_package(record) {
      return ['T', 'K', 'CY', 'Beng', 'Hoon', 'Sim'].map(account => record.properties[account].number || 0).reduce((cul, value) => cul + value);
    },
    fetchRecords() {
      fetch("https://notion-api.imaginepen.com/v1/databases/d5a1624f88e54bf0a458dacde772b34f/query", {
        method: 'POST',
        body: JSON.stringify({
          filter: {
            and: [{
              "property": "Year",
              "text": {
                "equals": this.year,
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
      window.location.href = window.location.pathname + '?year=' + this.year + '&type=' + this.Type;
    }
  },
  data: function () {
    const now = new Date;
    const urlParams = new URLSearchParams(window.location.search);
    const year_fromurl = urlParams.get('year');
    const year = year_fromurl? year_fromurl: now.getFullYear().toFixed(0);

    const type_from_url = urlParams.get('type');
    if (['vitagen', 'vitagen-less-sugar'].indexOf(type_from_url ?? 'vitagen') == -1) {
      window.location.href = '/v-system/entry.html';
    }
    const type = type_from_url? type_from_url: 'vitagen';

    return {
      year,
      current_year: year,
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
