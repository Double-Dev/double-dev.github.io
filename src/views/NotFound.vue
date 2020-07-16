<template>
  <div class="notfound content-padding">
    <h1>404 - Not Found</h1>
    <p>We're sorry, but the page that you requested doesn't seem to exist.</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {
}
</script>
