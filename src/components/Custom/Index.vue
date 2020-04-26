<template>
  <div class="cnt">
    <h3>这里是组件Index</h3>
    <p v-text="info"></p>
    <label v-text="parentMsg"></label>
    <br />
    <button @click="addDate">add</button>
    <input v-model="ck" />
    <ul>
      <li v-for="a in list" :key="a" :item="a">{{ a }}</li>
    </ul>
    <slot></slot>
    {{ d | formateD }}
    <template id="children">
      <span>子路由</span>
    </template>
  </div>
</template>

<script>

// import axios from 'axios'
export default {
  name: 'Index',
  props: ['parentMsg'], // 全部是只读
  data: function () {
    return {
      info: '组件的data必须是个function通过return返回数据',
      ck: 'sss',
      d: new Date(),
      list: []
    }
  },
  filters: {
    formateD: function (value) {
      return '当前时间：' + new Date(value)
    }
  },
  beforeCreate: function () {},
  created: function () {
    this.init()
  },
  beforeMount: function () {},
  mounted: function () {},
  methods: {
    init: function () {
      // axios.post('http://localhost:8080/sss', {b: 'kdfj'}).then(res => {})
      // var ss = this
      // window.setInterval(function () {
      //   ss.list.push(new Date())
      // }, 100)
      this.$emit('pfn', 'this msg come from child compnent')
    },
    addDate: function () {
      this.list.push(this.ck)
    },
    showIndexFun () {
      alert('父组件调用了子组件的方法')
    }
  }
}
</script>

<style scoped>
</style>
