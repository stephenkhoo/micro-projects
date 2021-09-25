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
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b">
            {{ record.properties['T'].number || 0 }}
          </div>
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b border-r border-gray-200">
            {{ record.properties['T'].number || 0 }}
          </div>
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b">
            {{ record.properties['K'].number || 0 }}
          </div>
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b border-r border-gray-200">
            {{ record.properties['K'].number || 0 }}
          </div>
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b">
            {{ record.properties['CY'].number || 0 }}
          </div>
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b border-r border-gray-200">
            {{ record.properties['CY'].number || 0 }}
          </div>
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b">
            {{ record.properties['Beng'].number || 0 }}
          </div>
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b border-r border-gray-200">
            {{ record.properties['Beng'].number || 0 }}
          </div>
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b">
            {{ record.properties['Hoon'].number || 0 }}
          </div>
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b border-r border-gray-200">
            {{ record.properties['Hoon'].number || 0 }}
          </div>
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b">
            {{ record.properties['Sim'].number || 0 }}
          </div>
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b border-r border-gray-200">
            {{ record.properties['Sim'].number || 0 }}
          </div>
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b">
            TP
          </div>
          <div class="w-16 flex-grow-1 flex-shrink-0 text-right px-4 py-4 border-b">
            TI
          </div>
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

export default {
  name: 'Report',
  components: {
    App, MaterialInput
  },
  mounted () {
    this.fetchRecords();
    this.fetchIncentiveTiers();
  },
  methods: {
    incentiveLs(no_of_package) {
      return no_of_package;
    },
    incentiveNormal(no_of_package) {
      return no_of_package;
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
            this.v_tiers = data.results.filter(row => row.properties.Type.select.name == 'vitagen');
            this.vls_tiers = data.results.filter(row => row.properties.Type.select.name == 'vitagen-less-sugar');
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
      v_tiers: [],
      vls_tiers: [],
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
