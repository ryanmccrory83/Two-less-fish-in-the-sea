<template>
  <div>
    <h1>The Ceremony, Hooray!</h1>
    <div class="ceremony-container">
      <ul
        class="ceremony-list"
        v-for="ceremony in ceremonyData"
        v-bind:key="ceremony.id"
      >
        <li class="ceremony">
          <img class="ceremony-img" :src="ceremony.image_url" alt="" />
        </li>
      </ul>
    </div>
    <footer>&copy; 2019</footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TheCeremony',
  data() {
    return {
      ceremonyURL: 'https://two-less-fish-in-the-sea.herokuapp.com/ceremony',
      ceremonyData: []
    }
  },
  mounted() {
    axios
      .get(this.ceremonyURL)
      .then(console.log('getting data'))
      .then(response => {
        console.log(response.data.ceremony)
        this.ceremonyData = response.data.ceremony
      })
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Great+Vibes');
h1 {
  font-family: 'Great Vibes', cursive;
  text-shadow: 0.2rem 0.1rem black;
}
ul {
  list-style-type: none;
  display: inline-block;
}
.ceremony-img {
  height: 20vw;
  width: auto;
  border-radius: 5%;
  box-shadow: 0.2rem 0.2rem coral;
}
</style>
