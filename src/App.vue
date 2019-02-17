<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/gettingreadyforthebigday"
        >Getting Ready For The Big Day</router-link
      >
      | <router-link to="/theceremony">The Ceremony</router-link> |
      <router-link to="/mrandmrs">Mr And Mrs McCrory</router-link> |
      <router-link to="/thereception">The Reception</router-link> |
      <router-link to="/tripphotos">Trip Photos</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  border: 2px solid black;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
