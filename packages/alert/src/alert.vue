<template>
  <div class="ouVueAlert">
    {{ content }}
  </div>
</template>

<script>
  export default {
    name: 'ouVueAlert',
    props: {
      content: {
        type: String,
        default: '内容1'
      }
    },
    data (){
      return {

      }
    },
  }
</script>

<style scoped>
  .ouVueAlert {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    color: blue;
    background-color: #eee;
    border-radius: 10px;
  }
</style>