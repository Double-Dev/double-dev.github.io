<template>
  <div class="project">
    <header class="banner">
      <router-view name="banner"></router-view>
    </header>
    <div class="content-padding">
      <!-- Content goes here. -->
      <router-view name="content"></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { solidNav, transparentNav } from '@/App.vue';

@Component
export default class Project extends Vue {
  public mounted() {
    document.addEventListener('scroll', this.styleNav);
    this.styleNav();
  }

  public styleNav() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      solidNav();
    } else {
      transparentNav();
    }
  }

  public destroyed() {
    document.removeEventListener('scroll', this.styleNav);
    solidNav();
  }
}
</script>

<style>
.banner {
  height: 50vh;
  min-height: 50vh;
  
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
