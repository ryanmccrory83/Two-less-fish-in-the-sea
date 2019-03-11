<template>
  <div>
    <h1>Getting Ready for the Big Day</h1>
    <div class="getting-ready-container">
      <ul
        class="ready-list"
        v-for="gettingready in readyData"
        v-bind:key="gettingready.id"
      >
        <li class="gettingready">
          <img class="gettingready-img" :src="gettingready.image_url" alt="" />
        </li>
      </ul>
    </div>
    <footer>&copy; 2019</footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'GettingReadyForTheBigDay',
  data() {
    return {
      gettingReadyURL:
        'https://two-less-fish-in-the-sea.herokuapp.com/gettingready',
      readyData: []
    }
  },
  mounted() {
    axios
      .get(this.gettingReadyURL)
      .then(console.log('getting data'))
      .then(response => {
        console.log(response.data.gettingready)
        this.readyData = response.data.gettingready
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
.gettingready-img {
  height: 200px;
  width: auto;
  border-radius: 5%;
  box-shadow: 0.2rem 0.2rem coral;
}
</style>
