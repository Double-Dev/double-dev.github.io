<template>
  <div class="limitengine">
    <div class="banner vertical-center-flex">
      <span class="w3-center w3-padding-large w3-xlarge w3-wide theme">
        Logo Goes Here
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class LimitEngineBanner extends Vue {
}
</script>

<style scoped>
.banner {
  background-image: url('../../../assets/logo.png') !important;
}
</style>
