<template>
  <div>
    <h1>The Reception, Party on Wayne!</h1>
    <div class="reception-container">
      <ul
        class="reception-list"
        v-for="reception in receptionData"
        v-bind:key="reception.id"
      >
        <li class="reception">
          <img class="reception-img" :src="reception.image_url" alt="" />
        </li>
      </ul>
    </div>
    <footer>&copy; 2019</footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TheReception',
  data() {
    return {
      receptionURL: 'https://two-less-fish-in-the-sea.herokuapp.com/reception',
      receptionData: []
    }
  },
  mounted() {
    axios
      .get(this.receptionURL)
      .then(console.log('getting data'))
      .then(response => {
        console.log(response.data.reception)
        this.receptionData = response.data.reception
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
.reception-img {
  height: 20vw;
  width: auto;
  border-radius: 5%;
  box-shadow: 0.2rem 0.2rem coral;
}
</style>
