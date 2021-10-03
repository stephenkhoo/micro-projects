<template>
  <div class="w-40 flex-grow-1 flex-shrink-0 text-right px-3 py-4 border-b">
    {{ data.no_of_package || "-" }}
    /
    {{ data_ls.no_of_package || "-" }}
  </div>
  <div class="w-40 flex-grow-1 flex-shrink-0 text-right px-3 py-4 border-b border-r border-gray-200">
    {{ data.incentive || "-" }}
    /
    {{ data_ls.incentive || "-" }}
  </div>
</template>

<script>
export default {
  name: 'NoOfPackageAndIncentive',
  props: {
    data: {
      no_of_package: Number,
      incentive: Number,
    },
    data_ls: {
      no_of_package: Number,
      incentive: Number,
    },
  }
}
</script>
