<template>
  <div class="cnt">
<h3>这里是Create</h3>
<input v-model="SendMsg">
</div>
</template>
<script>

export default{
  data: function () {
    return {
      SendMsg: ''
    }
  }
}
</script>
