<template>
  <button class="ouVueButton" :style="{ color }" @click="handlerClick"><slot>按钮</slot></button>
</template>

<script>
  import { isString } from '@/utils/helper.js'

  export default {
    name: 'ouVueButton',
    props: {
      color: {
        type: String,
        default: 'red'
      },
    },
    data (){
      return {
      }
    },
    methods: {
      handlerClick (){
        this.$ouVueAlert({ content: '456thty' })
      }
    }
  }
</script>

<style scoped>
  .ouVueButton {
    font-size: 13px;
  }
</style>