<template>
  <div class="admin">
    <h1>{{ hello }}</h1>
    <h1>store num :{{ $store.state.admin.myNum }}</h1>
<!--    <h1>store getter num :{{ $store.getters.getNum }}</h1>-->
<!--    <h1>普通 num :{{num}}</h1>-->
    <button @click="addNum">+++</button>
    <button @click="delNum">---</button>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  data(){
    return {
      hello: 'This is Admin',
      num:0,
      inputNum:1
    }
  },
  methods:{
    delNum(){
      this.$store.commit('delNum')
      // this.num--
    },
    addNum(){
      this.$store.commit('addNum', {name:5})
      // this.num++
      // this.$store.dispatch('asyncAdd', {name:"allen"})
    }
  },
  created() {
    console.log(this.$store)
  }
}
</script>

<style scoped lang="less">

</style>