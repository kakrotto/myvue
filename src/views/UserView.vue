<template>
  <div>
    <p>用户页面</p>
<!--    <p>URl 传参数：{{ this.$route.params.id }}</p>-->
    <p>声明 params 传参：{{ this.$route.params.id }}</p>
    <p>声明 query 传参：{{ this.$route.query.id }}</p>
  </div>
</template>

<script>
export default {
  name: "UserView"
}
</script>

<style scoped>

</style>