<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/ifelse">If-Else</router-link> |
      <router-link to="/show">Show</router-link> |
      <router-link to="/vfor">VFor</router-link> |
      <router-link to="/vtext">VText</router-link> |
      <router-link to="/vbind">VBind</router-link> |
      <router-link to="/von">VOn</router-link> |
      <router-link to="/vform">VForm</router-link> |
    </div>
    <router-view/>
  </div>
</template>

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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
