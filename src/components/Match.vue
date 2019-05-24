<template>
  <div>
    <p>{{users}}</p>
    <p>{{status}}</p>
  </div>
</template>

<script>
export default {
  name: "Match",
  props: {
    users: Object,
    status: Number
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
