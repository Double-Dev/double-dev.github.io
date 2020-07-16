<template>
  <div class="notfound">
    <div class="screen-height vertical-center-flex">
      <h1>404 - Not Found</h1>
      <p>We're sorry, but the page that you requested doesn't seem to exist.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {
}
</script>
