<template>
  <div class="home">
    <header class="theme-1 banner vertical-center-flex">
      <span class="w3-center w3-padding-large w3-xlarge w3-wide theme">
        Logo Goes Here
      </span>
    </header>
    <div class="content-padding">
      <HelloWorld msg="This page is a work in progress."/>
      <!-- Content goes here. -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { solidNav, transparentNav } from '@/App.vue';

@Component
export default class ContentBanner extends Vue {
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

<style scoped>
.banner {
  height: 50vh;
  min-height: 50vh;

  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-image: url('https://www.w3schools.com/w3images/nature.jpg'); /* Temporary image for testing. */
  background-repeat: no-repeat;
}
</style>
