<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>-->
  <div>
    <h1 class="home-title">Welcome to 2 less fishes in the sea!</h1>
    <h2>
      Feel free to peruse through our site to see the pictures from our wedding.
    </h2>
    <h3>
      Please use the image uploader to upload personal pictures from the trip
      and they will be added to the trip photos webpage.
    </h3>
    <footer>&copy; 2019</footer>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    //HelloWorld
  }
}
</script>

<style>
.home-title {
  color: red;
  text-shadow: 1px 1px black;
}
</style>
