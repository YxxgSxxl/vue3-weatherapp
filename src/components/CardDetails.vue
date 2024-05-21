<template>
  <div>
    <h2>CardDetails.vue</h2>
  </div>
</template>

<script>
export default {
    name: "CardDetails",
    
    props: {
    dataFullWeather: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style>

</style>