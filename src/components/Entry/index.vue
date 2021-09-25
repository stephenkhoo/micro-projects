<template>
  <App :title="'Entry: ' + Type" :home="true">
    <a :href="'/v-system/entry.html?type=' + OppositeType" class="text-center my-2 mx-auto block w-64 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Change to {{ OppositeType }}</a>
    <div id="date" class="text-xl">
      <MaterialInput name="year" placeholder="Year" v-model:value="year"/>
      <MaterialInput name="month" placeholder="Month" v-model:value="month"/>
      <MaterialInput name="date" placeholder="Date" v-model:value="date"/>
    </div>
    <div id="entry-body" class="text-xl">
      <Input name="t" placeholder="T" v-model:value="T" />
      <Input name="k" placeholder="K" v-model:value="K" />
      <Input name="cy" placeholder="CY" v-model:value="CY" />
      <Input name="beng" placeholder="Beng" v-model:value="Beng" />
      <Input name="hoon" placeholder="Hoon" v-model:value="Hoon" />
      <Input name="sim" placeholder="Sim" v-model:value="Sim" />
    </div>
    <button @click="submit" class="text-center my-2 mx-auto block w-32 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
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
      let { T, K, CY, Beng, Hoon, Sim, year, month, date, Type } = this;
      let datestring = `${year}-${('00' + month).substr(-2)}-${('00' + date).substr(-2)}`;
      let fulldate = Date.parse(datestring);

      fetch("https://notion-api.imaginepen.com/v1/pages", {
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
            Type: { "name": Type },
          }
        })
      }).then(response => {
        response.json().then(data => {
          if (data.status > 300) {
            alert('Fail');
            console.log('data', data)
          } else {
            alert('Success');
            console.log('data', data)
          }
        });
      }).catch(err => console.log('Fail', err));
    },
  },
  data: function () {
    const urlParams = new URLSearchParams(window.location.search);
    const type_from_url = urlParams.get('type');
    if (['vitagen', 'vitagen-less-sugar'].indexOf(type_from_url ?? 'vitagen') == -1) {
      window.location.href = '/v-system/entry.html';
    }
    const type = type_from_url? type_from_url: 'vitagen';

    return {
      year: (new Date).getFullYear(),
      month: (new Date).getMonth() + 1,
      date: (new Date).getDate(),
      T: 0,
      K: 0,
      CY: 0,
      Beng: 0,
      Hoon: 0,
      Sim: 0,
      Type: type,
      OppositeType: type == 'vitagen'? 'vitagen-less-sugar': 'vitagen',
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
