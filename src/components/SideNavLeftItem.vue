<template>
  <div class="flex flex-col w-3/4 cursor-pointer py-2 mx-2 my-3 text-2xl text-center align-middle p-2.5 font-bold hover:border-indigo-700 border-2 border-transparent transition-all ease-in delay-300 rounded-2xl" :class="{ 'left-item-selected': selected }"
  @click="store.changeSelectedItem(currentItem)">
    <i class='bx text-5xl'  :class="[item.icon, {'text-gray-500': !selected}]"></i>
    <h3 class="text-sm" :class="{'text-indigo-700 ': !selected}">{{item.title}}</h3>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, PropType, ref} from "vue";
import LeftItem from "@/types/LeftItem";
import {useLeftItemStore} from "@/store/LeftItemStore"
import {storeToRefs} from "pinia/dist/pinia";

export default defineComponent({
  name: "SideNavLeftItem",
  props: {
    item:{
      type: Object as PropType<LeftItem>,
      required: true
    },
    selected:{
      type: Boolean,
      required: true
    }
  },
  setup(props){
    const store = useLeftItemStore()
    const currentItem = ref<string>(props.item.title)
    return {currentItem,store}
  }
})
</script>

<style scoped>

</style>