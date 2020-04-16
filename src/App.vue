<template>
  <div id="app" class="w3-display-container" style="max-width: 1600;">
    <!-- Sidebar -->
    <nav id="nav" class="w3-display-left w3-display-container w3-sidebar w3-collapse w3-theme-l3 w3-animate-left" style="z-index: 3;width: 200px;">
      <a class="w3-display-topright text-button w3-hide-large w3-xlarge w3-theme" style="background-color: inherit!important" v-on:click="closeNav()">
        <i class="fa fa-remove"/>
      </a>
      <br>
      <div class="w3-container">
        
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </nav>
    <div id="nav-overlay" class="w3-overlay w3-hide-large w3-animate-opacity" v-on:click="closeNav()"/>
    <span class="w3-display-topleft w3-button w3-hide-large w3-xlarge w3-theme" v-on:click="openNav()"><i class="fa fa-bars"/></span>
    <!-- Header -->
    <div class="w3-display-top w3-padding w3-theme">
      <h3 class="no-margin">Placeholder</h3>
    </div>
    <!-- Content -->
    <br>
    <router-view class="w3-main" style="margin-left: 200px;"/>
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
      this.nav = <HTMLElement>document.getElementById('nav');
    }
    this.nav.style.display = 'block';
    if (this.overlay == null) {
      this.overlay = <HTMLElement>document.getElementById('nav-overlay');
    }
    this.overlay.style.display = 'block';
  }

  public closeNav() {
    if (this.nav == null) {
      this.nav = <HTMLElement>document.getElementById('nav');
    }
    this.nav.style.display = 'none';
    if (this.overlay == null) {
      this.overlay = <HTMLElement>document.getElementById('nav-overlay');
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #000;
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
