<template>
  <div>
    <h2>CardDetails.vue</h2>
  </div>
</template>

<script>
export default {
    name: "CardDetails",
    
    props: {
    data_fullweather: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style>

</style>