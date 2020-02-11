<template>
  <div><input v-model="ck" />
    <ul>
      <li v-for="(item,index) in list" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'ccii',
  props: {
    msg: {
      type: String,
      default: 'test msg'
    }
  },
  data: function () {
    return {
      ck: 'sss',
      list: []
    }
  },
  beforeCreate: function () {},
  created: function () {
    this.init()
  },
  beforeMount: function () {

  },
  mounted: function () {

  },
  methods: {
    init: function () {
      var ss = this
      window.setInterval(function () {
        ss.list.push(new Date())
      }, 100)
    }
  }
}

</script>
