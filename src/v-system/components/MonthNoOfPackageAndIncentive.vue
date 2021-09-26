<template>
  <div class="flex">
    <div class="w-40 flex-grow-2 flex-shrink-0 text-right px-3 py-4 border-b border-r border-gray-200">
      {{ title }}
    </div>
    <NoOfPackageAndIncentive :data="total_of_account('T')" />
    <NoOfPackageAndIncentive :data="total_of_account('K')" />
    <NoOfPackageAndIncentive :data="total_of_account('CY')" />
    <NoOfPackageAndIncentive :data="total_of_account('Beng')" />
    <NoOfPackageAndIncentive :data="total_of_account('Hoon')" />
    <NoOfPackageAndIncentive :data="total_of_account('Sim')" />
    <NoOfPackageAndIncentive :data="total_of_this_month()" />
  </div>
</template>

<script>
import NoOfPackageAndIncentive from './NoOfPackageAndIncentive.vue';

export default {
  name: 'MonthNoOfPackageAndIncentive',
  components: {
    NoOfPackageAndIncentive
  },
  props: {
    title: String,
    records: Array,
    tiers: Array,
  },
  methods: {
    total_of_account(account) {
      if (!this.records.length) return { no_of_package: 0, incentive: 0 };
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
      if (!this.records.length) return { no_of_package: 0, incentive: 0 };
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
  }
}
</script>
