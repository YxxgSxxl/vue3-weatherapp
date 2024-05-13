<template>
  <div class="container">
  <p>
    <span>
      This is a test !!
    </span>
  </p>
</div>
</template>

<script>
export default {
    name: 'TestComp',
}
</script>

<style lang="scss">
p {
    font-size: larger;
    background-color: black;
    color: yellowgreen;
    width: fit-content;
    display: flex;
    justify-content: center;
    border-radius: 10px;

span {
    padding: 10px;
    height: 30px;
}
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}
</style>