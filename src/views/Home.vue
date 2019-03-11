<template>
  <div>
    <h1 class="home-title">Welcome to 2 less fishes in the sea!</h1>
    <h2 class="text">
      You are at the wedding site of Kari and Ryan McCrory. Please feel free to
      look through our photos from our wedding at the Blue Venado Beach Club in
      Playa Del Carmen, Mexico.
    </h2>
    <p class="text">
      Kari and I would like to thank everyone who sacrificed the time and money
      to come join us on this special occasion.<br />
      To those who couldn't come, your place was in our hearts. To those who
      didn't come and didn't<br />
      send gifts, who are you again?
    </p>
    <h3 class="text">
      Please use the image uploader on the Trip Photos page to upload personal
      pictures from the trip and they will be added to the trip photos webpage.
    </h3>
    <footer>&copy; 2019</footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Great+Vibes|Special+Elite');
.home-title {
  color: coral;
  text-shadow: 1px 1px black;
  font-size: 3em;
}
.home-title:hover {
  font-size: 3em;
  color: black;
  text-shadow: 1px 1px coral;
}
.text {
  font-family: 'Special Elite', cursive;
  text-shadow: 1px 1px black;
}
.text:hover {
  color: black;
  text-shadow: 1px 1px coral;
}
p {
  font-weight: bolder;
}
</style>
