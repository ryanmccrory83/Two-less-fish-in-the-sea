<template>
  <div>
    <h1>Mr and Mrs McCrory</h1>
    <div class="mrandmrs-container">
      <ul
        class="mrandmrs-list"
        v-for="mrandmrs in mrandmrsData"
        v-bind:key="mrandmrs.id"
      >
        <li class="mrandmrs">
          <img class="mrandmrs-img" :src="mrandmrs.image_url" alt="" />
        </li>
      </ul>
    </div>
    <footer>&copy; 2019</footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'MrAndMrs',
  data() {
    return {
      mrandmrsURL: 'https://two-less-fish-in-the-sea.herokuapp.com/mrandmrs',
      mrandmrsData: []
    }
  },
  mounted() {
    axios
      .get(this.mrandmrsURL)
      .then(console.log('getting data'))
      .then(response => {
        console.log(response.data.mrandmrs)
        this.mrandmrsData = response.data.mrandmrs
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
.mrandmrs-img {
  height: 20vw;
  width: auto;
  border-radius: 5%;
  box-shadow: 0.2rem 0.2rem coral;
}
</style>
