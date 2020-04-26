<template>
  <div id="dd">
    <!-- 这尼玛是一个路由,去看src\router\index.js -->
    <!-- <router-view></router-view> -->
    <button @click="changeComponent" v-text="showComponentName"></button>
    <button @click="showCLD">调用子组件的方法</button>
    <!-- 这才是组件-->
    <!-- 组件显示方式一 -->
    <!-- <Index :parentMsg="info" @pfn="parentFn"></Index> -->
    <component :is="componentName" ref='commm'>
        <h5>这是父组件的插槽</h5>
    </component>
  </div>
</template>

<script>
import Index from './components/Custom/Index.vue'
import Create from './components/Custom/Create'
var t = 'TTT'
// var bus = new Vue()
export default {
  data: function () {
    return {
      info: `this msg come from perent component!${t}`, // ES6写法
      componentName: 'Index'
    }
  },
  computed: {
    showComponentName: function () {
      return `切换到${this.componentName === 'Index' ? 'Create' : 'Index'}`
    }
  },
  components: {
    Index,
    Create
  },
  created () {
    console.log(this.$route.query)// ?风格的参数
    // console.log(this.$route.params)// /id/name风格的参数，注意路由中path需标定/:id/:name格式来获取
  },
  methods: {
    parentFn (data) {
      this.mtitle = data
    },
    changeComponent () {
      this.componentName = this.componentName === 'Index' ? 'Create' : 'Index'
    },
    showCLD () {
      console.log(this.$refs)
      // this.$refs.commm.showIndexFun()// 访问子组件的函数
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cnt{
  border:1px solid black
}
</style>
