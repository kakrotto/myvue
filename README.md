# myvue

vue study demo
vue3

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### note
vue 思想 数据优先 围绕数据来做

v-model
v-if   :  不渲染标签
v-else-if
v-else
v-show :  渲染标签 通过样式display:none
v-for="(item, key) in list"
v-bind:
v-on:click  ==  @click

v-text
v-html
v-pre   不渲染
v-once  只会渲染一次
v-cloak

父、子组件互相传参数，props

Vue.set  更新引用类型的数据

methods  : 方法集合
computed : 数据预处理 get\set
watch    : 侦听器，侦听字符串和侦听复杂数据类型，（侦听地址）
filters  : 过滤器 差值表达式中使用 {{}}

vuecli
vue-router
子路由模式

传参:
* url 传参
* name - params
* name - query 
* path - query
* js 传参
传参过程中，path 不可以和 params 配对使用

vuex 

储存数据状态 状态管理
* state ：数据
* mutations : 方法
* actions : 异步，actions触发commit
* getters : 对 state 的数据做预处理
* modules : 把 store 里的数据分模块访问

modules 命名空间 namespaced = true
mapState
mapGetters
mapActions
mapMutations
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
