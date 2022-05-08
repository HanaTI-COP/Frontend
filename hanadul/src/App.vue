<template>
  <v-app>
    <v-tabs>
      <v-tab><router-link to="/signin">Sign In</router-link></v-tab>
      <v-tab><router-link to="/signup">Sign Up</router-link></v-tab>
      <v-tab><router-link to="/mypage">My Page</router-link></v-tab>
      <v-tab><router-link to="/createpjt">Create Project</router-link></v-tab>
      <v-tab><router-link to="/matching">Matching</router-link></v-tab>
    </v-tabs>
  </v-app>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
