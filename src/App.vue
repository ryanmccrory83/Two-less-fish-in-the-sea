<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/gettingreadyforthebigday"
        >Getting Ready For The Big Day</router-link
      >
      | <router-link to="/beforetheceremony">Before The Ceremony</router-link> |
      <router-link to="/theceremony">The Ceremony</router-link> |
      <router-link to="/mrandmrs">Mr And Mrs McCrory</router-link> |
      <router-link to="/thereception">The Reception</router-link> |
      <router-link to="/tripphotos">Trip Photos</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Great+Vibes|Special+Elite');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  border: 1em 1em solid black;
  background-color: blueviolet;
  color: coral;
}
#nav {
  padding: 30px;
  border: 2px solid black;
  background-color: darksalmon;
}

#nav a {
  font-family: 'Special Elite', cursive;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: azure;
  text-decoration: none;
}
#nav a:hover {
  color: azure;
  text-decoration: none;
}
</style>
