<template>
  <div id="app" class="w3-display-container app" style="max-width: 1600;">
    <!-- Navigation Bar -->
    <div class="w3-top text-theme">
      <nav id="nav" class="w3-bar nav-display theme w3-card w3-animate-top" style="z-index: 3;">
        <!-- Logo -->
        <router-link to="/" class="w3-bar-item nav-logo">
          <img src="@/assets/logo.png">Double-Dev.github.io
        </router-link>
        <!-- Navgation Links -->
        <div>
          <router-link to="/" class="w3-bar-item nav-item w3-hide-small">Home</router-link>
          <router-link to="/projects" class="w3-bar-item nav-item w3-hide-small">Projects</router-link>
          <router-link to="/news" class="w3-bar-item nav-item w3-hide-small">News</router-link>
          <router-link to="/about" class="w3-bar-item nav-item w3-hide-small">About</router-link>
        </div>
        <!-- Mobile Navigation Button -->
        <a class="w3-bar-item w3-hide-large w3-hide-medium" v-on:click="toggleNav()">
          <i class="fa fa-bars"/>
        </a>
      </nav>
      <!-- Mobile Extension of Navigation Bar -->
      <nav id="mobile-nav" class="w3-bar-block accent-theme w3-animate-top w3-hide w3-hide-large w3-hide-medium" style="z-index: 2;">
        <router-link to="/" class="w3-bar-item w3-button">Home</router-link>
        <router-link to="/projects" class="w3-bar-item w3-button">Projects</router-link>
        <router-link to="/news" class="w3-bar-item w3-button">News</router-link>
        <router-link to="/about" class="w3-bar-item w3-button">About</router-link>
      </nav>
    </div>
    <!-- Content -->
    <router-view class="content content-theme"/>
    <!-- Footer -->
    <footer class="accent-theme">
      <div class="theme"><br></div>
      <div class="footer-display">
        <div>
          <a class="theme w3-button" v-on:click="scrollToTop()"><i class="fa fa-arrow-up"/> To the top</a>
          <br>
          <br>
          <span>
            <a href="https://github.com/Double-Dev"><i class="fa fa-github w3-xlarge w3-hover-opacity"/></a>
            <!-- <a href=""><i class="fa fa-youtube w3-xlarge w3-hover-opacity"/></a> -->
          </span>
          <br>
          <p class="text-subtle-theme">Developed by Deven Layton</p>
        </div>
        <div>
          <img src="@/assets/logo.png" class="footer-logo w3-right">
        </div>
      </div>
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

  public scrollToTop() {
    window.scrollTo(0, 0);
  }
}

export function solidNav() {
  const nav = document.getElementById('nav') as HTMLElement;
  nav.classList.add('w3-card');
  nav.classList.add('w3-animate-top');
  nav.classList.add('theme');
}

export function transparentNav() {
  const nav = document.getElementById('nav') as HTMLElement;
  nav.classList.remove('w3-card');
  nav.classList.remove('w3-animate-top');
  nav.classList.remove('theme');
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-display {
  height: 9vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}

.nav-item {
  
}

.nav-logo {
  margin-right: auto !important;
}

.nav-logo img {
  height: 6vh;
}

nav a {
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.footer-display {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
}

.footer-display p {
  white-space: nowrap;
}

.footer-display a {
  padding: 10px;
}

.footer-logo {
  height: 100px;
}
</style>

<style>
html, body, #app, .content, .screen-height {
  min-height: 100vh;
}

.no-padding {
  padding: 0 !important;
}

.content-padding {
  padding-left: 5vw;
  padding-right: 5vw;
  padding-top: 5vh;
  padding-bottom: 5vh;
}

.no-margin {
  margin: 0 !important;
}

.vertical-center-flex {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.flex-br {
  flex-basis: 100%;
  width: 0;
  height: 0;
}
</style>
