<template>
  <App>
    <div class="overflow-x-auto text-xl h-full">
      <div class="overflow-y-auto max-h-full min-w-full border border-gray-200">
        <div class="sticky top-0">
          <div class="flex">
            <div class="bold border-b w-40 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">Date</div>
            <div class="bold border-b w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">T</div>
            <div class="bold border-b w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">K</div>
            <div class="bold border-b w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">CY</div>
            <div class="bold border-b w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">Beng</div>
            <div class="bold border-b w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">Hoon</div>
            <div class="bold border-b w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">Sim</div>
            <div class="bold border-b w-32 flex-grow-1 flex-shrink-0 px-4 py-2 text-center font-medium text-gray-500 uppercase tracking-wider">Total</div>
          </div>
        </div>
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
    </div>
  </App>
</template>

<script>
import App from '../App.vue';

export default {
  name: 'Report',
  components: {
    App
  },
  mounted () {
    this.fetchRecords();
  },
  methods: {
    fetchRecords() {
      const now = new Date;
      const urlParams = new URLSearchParams(window.location.search);
      const yearmonth_fromurl = urlParams.get('year-month');
      const yearmonth = yearmonth_fromurl? yearmonth_fromurl: [now.getFullYear(), now.getMonth() + 1].join('-');

      fetch("https://notion-api.imaginepen.com/v1/databases/d5a1624f88e54bf0a458dacde772b34f/query", {
        method: 'POST',
        body: JSON.stringify({
          filter: {
            and: [{
              "property": "Year Month",
              "text": {
                "equals": yearmonth,
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
      this.records;
    }
  },
  data: function () {
    return {
      records: [],
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
