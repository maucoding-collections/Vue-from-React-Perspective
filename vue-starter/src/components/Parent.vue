<template>
  <div>
    <h1>This Is Vue App</h1>
    <child />
  </div>
</template>
<script>
import Vue from "vue"
import Child from "./Child.vue"

Vue.component("child", Child)

export default {
  name: "home-box" 
}
</script>