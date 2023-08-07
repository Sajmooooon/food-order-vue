<template>
  <div class="h-screen w-full flex flex-row" >
    <SideNavLeft></SideNavLeft>
    <div class="pl-[120px]">

    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import SideNavLeft from "@/components/SideNavLeft.vue";

@Options({
  components: {
    SideNavLeft
  },
})
export default class HomeView extends Vue {}
</script>
