<template>
  <div id="app" class="w3-display-container app" style="max-width: 1600;">
    <!-- Navigation Bar -->
    <nav id="nav" class="w3-bar nav-display theme">
      <!-- Logo -->
      <router-link to="/" class="w3-bar-item logo">
        <img src="./assets/logo.png">
      </router-link>
      <!-- Navgation Links -->
      <div>
        <router-link to="/" class="w3-bar-item nav-item w3-hide-small">Home</router-link>
        <router-link to="/about" class="w3-bar-item nav-item w3-hide-small">About</router-link>
        <div class="w3-dropdown-hover nav-item nav-end w3-hide-small">
          <button class="w3-button">Dropdown</button>
          <div class="w3-dropdown-content w3-bar-block">
            <router-link to="/about" class="w3-bar-item w3-button">About Link 1</router-link>
            <router-link to="/about" class="w3-bar-item w3-button">About Link 2</router-link>
          </div>
        </div>
      </div>
      <!-- Mobile Navigation Button -->
      <a class="w3-bar-item w3-button w3-hide-large w3-hide-medium" v-on:click="toggleNav()">
        <i class="fa fa-bars"/>
      </a>
    </nav>
    <!-- Mobile Extension of Navigation Bar -->
    <nav id="mobile-nav" class="w3-bar-block theme w3-hide w3-hide-large w3-hide-medium">
      <router-link to="/" class="w3-bar-item w3-button">Home</router-link>
      <router-link to="/about" class="w3-bar-item w3-button">About</router-link>
      <div class="w3-dropdown-hover">
          <button class="w3-button">Dropdown</button>
          <div class="w3-dropdown-content w3-bar-block theme-l1">
            <router-link to="/about" class="w3-bar-item w3-button">About Link 1</router-link>
            <router-link to="/about" class="w3-bar-item w3-button">About Link 2</router-link>
          </div>
        </div>
    </nav>
    <!-- Content -->
    <router-view class="content"/>
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
  width: 35px;
  height: 35px;
}

.nav-display {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.nav-item {
  margin-left: 10px;
  margin-right: 10px;
}

.nav-end {
  margin-right: 20px;
}

.content {
  min-height: 100%;
}
</style>

<style>
html, body, #app {
  height: 100%;
  min-height: 100%;
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

.no-padding {
  padding: 0% !important;
}

.no-margin {
  margin: 0% !important;
}
</style>
