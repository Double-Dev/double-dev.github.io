<template>
  <div class="about content-padding">
    <h1>This is an about page</h1>
    <HelloWorld msg="This page is a work in progress."/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class About extends Vue {
}
</script>
