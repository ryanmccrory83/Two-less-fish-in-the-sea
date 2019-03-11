<template>
  <div>
    <h1>Before the Ceremony</h1>
    <div class="mrandmrs-container">
      <ul
        class="mrandmrs-list"
        v-for="beforetheceremony in beforetheceremonyData"
        v-bind:key="beforetheceremony.id"
      >
        <li class="beforetheceremony">
          <img
            class="beforetheceremony-img"
            :src="beforetheceremony.image_url"
            alt=""
          />
        </li>
      </ul>
    </div>
    <footer>&copy; 2019</footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BeforeTheCeremony',
  data() {
    return {
      beforetheceremonyURL:
        'https://two-less-fish-in-the-sea.herokuapp.com/beforetheceremony',
      beforetheceremonyData: []
    }
  },
  mounted() {
    axios
      .get(this.beforetheceremonyURL)
      .then(console.log('getting data'))
      .then(response => {
        console.log(response.data.beforetheceremony)
        this.beforetheceremonyData = response.data.beforetheceremony
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
.beforetheceremony-img {
  height: 20vw;
  width: auto;
  border-radius: 5%;
  box-shadow: 0.2rem 0.2rem coral;
}
</style>
