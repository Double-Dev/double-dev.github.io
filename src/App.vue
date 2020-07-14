<template>
  <div id="app" class="w3-display-container" style="max-width: 1600;">
    <!-- Navigation Bar -->
    <nav id="nav" class="w3-bar theme">
        <router-link to="/" class="w3-bar-item w3-button logo">
          <img src="./assets/logo.png">
        </router-link>
        <router-link to="/" class="w3-bar-item w3-button">Home</router-link>
        <router-link to="/about" class="w3-bar-item w3-button">About</router-link>
        <a class="w3-bar-item w3-button w3-right text-button w3-hide-large w3-hide-medium" v-on:click="openNav()">
          <i class="fa fa-bars"/>
        </a>
    </nav>
    <!-- Content -->
    <br>
    <router-view class="w3-main"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  private nav: HTMLElement | null = null;
  private overlay: HTMLElement | null = null;

  public openNav() {
    if (this.nav == null) {
      this.nav = document.getElementById('nav') as HTMLElement;
    }
    this.nav.style.display = 'block';
    if (this.overlay == null) {
      this.overlay = document.getElementById('nav-overlay') as HTMLElement;
    }
    this.overlay.style.display = 'block';
  }

  public closeNav() {
    if (this.nav == null) {
      this.nav = document.getElementById('nav') as HTMLElement;
    }
    this.nav.style.display = 'none';
    if (this.overlay == null) {
      this.overlay = document.getElementById('nav-overlay') as HTMLElement;
    }
    this.overlay.style.display = 'none';
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.no-padding {
  padding: 0% !important;
}

.no-margin {
  margin: 0% !important;
}

.text-button {
  border: none;
  display: inline-block;
  padding: 8px 16px;
  vertical-align: middle;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
}

.text-button:hover {
  color: #000 !important;
}
</style>
