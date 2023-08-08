<template>
<div class="h-full overflow-y-auto flex flex-col mb-2">
  <div class="p-2.5 text-xl" v-for="i in arr" :key="i">{{i}}</div>
</div>
</template>

<script>
export default {
  name: "OrderList",
  data(){
    return{
      arr: [1,2,3,4,5]
    }
  }
}
</script>

<style scoped>

</style>