<template>
  <App title="Entry" :home="true">
    <div id="date" class="text-xl">
      <MaterialInput name="year" placeholder="Year" v-model:value="year"/>
      <MaterialInput name="month" placeholder="Month" v-model:value="month"/>
      <MaterialInput name="date" placeholder="Date" v-model:value="date"/>
    </div>
    <div id="entry-body" class="text-xl">
      <Input name="t" placeholder="T" v-model:value="T" />
      <Input name="t" placeholder="T L/S" v-model:value="T_LS" />
      <Input name="k" placeholder="K" v-model:value="K" />
      <Input name="k" placeholder="K L/S" v-model:value="K_LS" />
      <Input name="cy" placeholder="CY" v-model:value="CY" />
      <Input name="cy" placeholder="CY L/S" v-model:value="CY_LS" />
      <Input name="beng" placeholder="Beng" v-model:value="Beng" />
      <Input name="beng" placeholder="Beng L/S" v-model:value="Beng_LS" />
      <Input name="hoon" placeholder="Hoon" v-model:value="Hoon" />
      <Input name="hoon" placeholder="Hoon L/S" v-model:value="Hoon_LS" />
      <Input name="sim" placeholder="Sim" v-model:value="Sim" />
      <Input name="sim" placeholder="Sim L/S" v-model:value="Sim_LS" />
    </div>
    <div v-if="!loading">
      <button @click="submit" class="text-center my-2 mx-auto block w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </div>
    <div v-else>
      <button class="pointer-events-none opacity-50 text-center my-2 mx-auto block w-32 bg-blue-500 text-white font-bold py-2 px-4 rounded">Submit</button>
    </div>
  </App>
</template>

<script>
import App from '../App.vue';
import Input from '../Input.vue';
import MaterialInput from '../MaterialInput.vue';

export default {
  name: 'Entry',
  components: {
    App, MaterialInput, Input
  },
  methods: {
    submit: async function () {
      let { T, K, CY, Beng, Hoon, Sim, T_LS, K_LS, CY_LS, Beng_LS, Hoon_LS, Sim_LS, year, month, date } = this;
      let datestring = `${year}-${('00' + month).substr(-2)}-${('00' + date).substr(-2)}`;
      let fulldate = Date.parse(datestring);
      try {
        this.loading = true;
        let response1 = await fetch("https://notion-api.imaginepen.com/v1/pages", {
          method: 'POST',
          body: JSON.stringify({
            parent: { database_id: "d5a1624f88e54bf0a458dacde772b34f" },
            properties: {
              ...(isNaN(fulldate)? {}: { Date: { start: datestring } }),
              version: 1,
              T: parseInt(T),
              K: parseInt(K),
              CY: parseInt(CY),
              Beng: parseInt(Beng),
              Hoon: parseInt(Hoon),
              Sim: parseInt(Sim),
              Type: { "name": "vitagen" },
            }
          })
        })
        let response2 = await fetch("https://notion-api.imaginepen.com/v1/pages", {
          method: 'POST',
          body: JSON.stringify({
            parent: { database_id: "d5a1624f88e54bf0a458dacde772b34f" },
            properties: {
              ...(isNaN(fulldate)? {}: { Date: { start: datestring } }),
              version: 1,
              T: parseInt(T_LS),
              K: parseInt(K_LS),
              CY: parseInt(CY_LS),
              Beng: parseInt(Beng_LS),
              Hoon: parseInt(Hoon_LS),
              Sim: parseInt(Sim_LS),
              Type: { "name": "vitagen-less-sugar" },
            }
          })
        })

        let data1 = await response1.json();
        let data2 = await response2.json();
        if (data1.status > 300 || data2.status > 300) {
          alert('Fail');
          console.log('data', data1, data2)
        } else {
          alert('Success');
          console.log('data', data1, data2)

          // Reset
          this.loading = false;
          ['T', 'K', 'CY', 'Beng', 'Hoon', 'Sim', 'T_LS', 'K_LS', 'CY_LS', 'Beng_LS', 'Hoon_LS', 'Sim_LS'].forEach(key => this[key] = '');
        }
      } catch(err) {
        console.log(err);
      }
    },
  },
  data: function () {
    return {
      year: (new Date).getFullYear(),
      month: (new Date).getMonth() + 1,
      date: (new Date).getDate(),
      T: "",
      K: "",
      CY: "",
      Beng: "",
      Hoon: "",
      Sim: "",
      T_LS: "",
      K_LS: "",
      CY_LS: "",
      Beng_LS: "",
      Hoon_LS: "",
      Sim_LS: "",
      publicPath: process.env.BASE_URL,
      loading: false,
    }
  }
}
</script>

<style scoped>
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
