<template>
  <div id="app" class="w3-display-container app" style="max-width: 1600;">
    <!-- Navigation Bar -->
    <div class="w3-top">
      <nav id="nav" class="w3-bar nav-display theme w3-card w3-animate-top" style="z-index: 3;">
        <!-- Logo -->
        <router-link to="/" class="w3-bar-item logo">
          <img src="./assets/logo.png">
        </router-link>
        <!-- Navgation Links -->
        <div>
          <router-link to="/" class="w3-bar-item nav-item w3-hide-small">Home</router-link>
          <router-link to="/about" class="w3-bar-item nav-item w3-hide-small">About</router-link>
        </div>
        <!-- Mobile Navigation Button -->
        <a class="w3-bar-item w3-hide-large w3-hide-medium" v-on:click="toggleNav()">
          <i class="fa fa-bars"/>
        </a>
      </nav>
      <!-- Mobile Extension of Navigation Bar -->
      <nav id="mobile-nav" class="w3-bar-block theme-l1 w3-animate-top w3-hide w3-hide-large w3-hide-medium" style="z-index: 2;">
        <router-link to="/" class="w3-bar-item w3-button">Home</router-link>
        <router-link to="/about" class="w3-bar-item w3-button">About</router-link>
      </nav>
    </div>
    <!-- Content -->
    <router-view class="content theme-l5"/>
    <!-- Footer -->
    <footer class="theme-l1">
      <div class="theme"><br></div>
        <h3>Footer Content Goes Here</h3>
        <a href="https://github.com/Double-Dev"><i class="fa fa-github w3-hover-opacity"/></a>
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public toggleNav() {
    const mobileNav = document.getElementById('mobile-nav') as HTMLElement;
    if (!mobileNav.classList.contains('w3-show')) {
      mobileNav.classList.add('w3-show');
    } else {
      mobileNav.classList.remove('w3-show');
    }
  }
}
</script>

<style scoped>
.logo {
  margin-right: auto !important;
}

.logo img {
  width: 6vh;
  height: 6vh;
}

.nav-display {
  height: 9vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
}

.nav-item {
  margin-left: 10px;
  margin-right: 10px;
}
</style>

<style>
html, body, #app, .content {
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.content-padding {
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 5vh;
  padding-bottom: 5vh;
}

.no-padding {
  padding: 0 !important;
}

.no-margin {
  margin: 0 !important;
}
</style>
