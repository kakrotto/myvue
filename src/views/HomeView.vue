<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <nav>
      <router-link to="/home">Home</router-link> |
      <router-link to="/home/about">About</router-link> |
      <router-link to="/home/admin">Admin</router-link>
    </nav>

    <ul>
<!--      <li v-for="(item, key) in 5" :key="key">-->
<!--        url传参 -->
<!--        <router-link :to="'/home/user/'+(key+1)">{{key+1+"User"}}</router-link>-->

<!--        query 传参-->
<!--        <router-link :to="{name:'user',query:{id:key+1}}">{{key+1+"User"}}</router-link>-->

<!--        params 传参-->
<!--        <router-link :to="{name:'user',params:{id:key+1}}">{{key+1+"User"}}</router-link>-->
<!--      </li>-->

<!--      编程式传参-->
      <li @click="ToLink(key+1)" v-for="(item, key) in 5" :key="key">
        User {{key+1}}
      </li>
    </ul>

    <p>------------home router-view --------</p>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods:{
    ToLink(id){
      this.$router.push({name:"user", params:{id:id}})
    }
  }
}
</script>
