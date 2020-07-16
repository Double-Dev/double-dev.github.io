<template>
  <div class="home">
    <header class="theme-1 banner">
      <span class="w3-center w3-padding-large w3-xlarge w3-wide theme">
        Logo Goes Here
      </span>
    </header>
    <div class="content-padding">
      <HelloWorld msg="This page is a work in progress."/>
      <p>
        We hope that this inconvenience isn't a lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Sed id nulla id tortor gravida commodo. Aenean et tempus mi. Fusce consequat mauris purus, sed laoreet orci tempus in.
        Fusce vehicula, nisi vel porta imperdiet, diam massa molestie leo, id bibendum ex eros ac diam.
        Nulla semper posuere massa, a tempus lacus convallis quis. Nunc sed risus sit amet orci luctus aliquet.
        Duis eros purus, facilisis vel velit in, eleifend tincidunt nulla. Sed imperdiet velit vitae orci fermentum rutrum.
        Aliquam sit amet blandit nisi.
        Duis quis erat ut tellus congue consequat.
      </p>
      <br>
      <p>
        Mauris congue suscipit augue ut ornare.
        Cras efficitur, sem suscipit porta aliquam, justo ante eleifend tellus, id venenatis mauris sapien vel nulla.
        Vestibulum nec felis a metus blandit posuere facilisis vel felis.
        Sed maximus libero erat, eu varius orci aliquet sit amet.
        ed lobortis imperdiet purus, in blandit metus sollicitudin non.
        Quisque in sem velit. Nam venenatis tristique mi, non iaculis ligula ornare quis.
        Nulla ac convallis enim, quis scelerisque ante. Praesent in scelerisque dui.
        Vivamus a iaculis lorem.
      </p>
      <br>
      <p>
        Vivamus lorem dui, varius ut dolor rhoncus, luctus accumsan nisl.
        Sed lacus erat, sollicitudin a fringilla ut, interdum eu mi.
        Sed pellentesque felis non purus consequat sodales.
        Phasellus luctus, arcu sit amet commodo fringilla, quam lectus pellentesque sapien, sit amet semper diam justo nec nibh.
        In venenatis imperdiet erat a auctor. Praesent suscipit scelerisque est, et tincidunt lectus fermentum vitae.
        Suspendisse viverra nibh quis purus venenatis dignissim.
        Proin vitae euismod ipsum, in rutrum neque. 
      </p>
    </div>
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
export default class Home extends Vue {
  public mounted() {
    document.addEventListener('scroll', this.styleNav);
    this.styleNav();
  }

  public styleNav() {
    const nav = document.getElementById('nav') as HTMLElement;
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      nav.classList.add('w3-card');
      nav.classList.add('w3-animate-top');
      nav.classList.add('theme');
    } else {
      nav.classList.remove('w3-card');
      nav.classList.remove('w3-animate-top');
      nav.classList.remove('theme');
    }
  }

  public destroyed() {
    document.removeEventListener('scroll', this.styleNav);
    const nav = document.getElementById('nav') as HTMLElement;
    nav.classList.add('w3-card');
    nav.classList.add('w3-animate-top');
    nav.classList.add('theme');
  }
}
</script>

<style scoped>
.banner {
  height: 50vh;
  min-height: 50vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-image: url('https://www.w3schools.com/w3images/nature.jpg'); /* Temporary image for testing. */
  background-repeat: no-repeat;
}
</style>
