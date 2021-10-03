<template>
  <App title="Report" :home="true">
    <div class="w-full sticky left-0">
      <MaterialInput name="year" placeholder="Year" v-model:value="year"/>
      <button @click="search" class="text-center my-2 mx-auto block w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
    </div>
    <div class="max-h-full border-gray-200 text-xl">
      <TableHeader />
      <MonthNoOfPackageAndIncentive v-for="month in 12" :key="month"
        :title="[current_year, month].join('-')"
        :records="recordsOfMonth(current_year, month)"
        :records_ls="recordsOfMonth(current_year, month, true)"
        :tiers="tiers['vitagen']"
        :tiers_ls="tiers['vitagen-less-sugar']"
      />
    <div class="flex">
      <div class="w-40 flex-grow-2 flex-shrink-0 text-right px-3 py-4 border-b border-r border-gray-200">
        {{ current_year }}
      </div>
      <NoOfPackageAndIncentive
        :data="total_of_account('T')"
        :data_ls="total_of_account('T', true)"
      />
      <NoOfPackageAndIncentive
        :data="total_of_account('K')"
        :data_ls="total_of_account('K', true)"
      />
      <NoOfPackageAndIncentive
        :data="total_of_account('CY')"
        :data_ls="total_of_account('CY', true)"
      />
      <NoOfPackageAndIncentive
        :data="total_of_account('Beng')"
        :data_ls="total_of_account('Beng', true)"
      />
      <NoOfPackageAndIncentive
        :data="total_of_account('Hoon')"
        :data_ls="total_of_account('Hoon', true)"
      />
      <NoOfPackageAndIncentive
        :data="total_of_account('Sim')"
        :data_ls="total_of_account('Sim', true)"
      />
      <NoOfPackageAndIncentive
        :data="total_of_year()"
        :data_ls="total_of_year(true)"
      />
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
    getRecords(less_sugar = false) {
      let key = less_sugar? 'vitagen-less-sugar': 'vitagen';
      return Object.values(this.records).map(record => record[key]);
    },
    getTiers(less_sugar = false) {
      let key = less_sugar? 'vitagen-less-sugar': 'vitagen';
      return this.tiers[key] || [];
    },
    total_of_account(account, less_sugar = false) {
      if (!this.getRecords(less_sugar).length) return { no_of_package: 0, incentive: 0 };
      const month_conclusion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        .map(month => this.recordsOfMonth(this.year, month, less_sugar))
        .map(month_records => {
          if (!month_records.length) return { no_of_package: 0, incentive: 0 };
          let no_of_package = month_records.map(record => record.properties[account].number).reduce((cul, value) => cul + value);
          let incentive = 0;
          let tier = this.getTiers(less_sugar).find(tier => no_of_package > tier.min);
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
    total_of_year(less_sugar = false) {
      let array_of_total = ['T', 'K', 'CY', 'Beng', 'Hoon', 'Sim']
        .map(account => this.total_of_account(account, less_sugar));

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
    recordsOfMonth(year, month, less_sugar = false) {
      return this.getRecords(less_sugar).filter(r => r).filter(record => record.properties['Year Month'].formula.string == [year, month].join('-'));
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
      window.location.href = window.location.pathname + '?year=' + this.year;
    }
  },
  data: function () {
    const now = new Date;
    const urlParams = new URLSearchParams(window.location.search);
    const year_fromurl = urlParams.get('year');
    const year = year_fromurl? year_fromurl: now.getFullYear().toFixed(0);

    return {
      year,
      current_year: year,
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
