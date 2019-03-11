<template>
  <div>
    <h1>Upload Your Trip Photos Here!</h1>
    <div>
      <input
        style="display: none"
        type="file"
        @change="onFileSelected"
        ref="fileInput"
      />
      <button class="choose-img" @click="$refs.fileInput.click()">
        Choose Image to Upload
      </button>
      <button class="submit-img" @click="onUpload">Upload</button>
    </div>
    <div class="tripphotos-container">
      <ul
        class="tripphotos-list"
        v-for="tripphotos in tripphotosData"
        v-bind:key="tripphotos.id"
      >
        <li class="mrandmrs">
          <img class="mrandmrs-img" :src="tripphotos.image_url" alt="" />
        </li>
      </ul>
    </div>
    <footer>&copy; 2019</footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TripPhotos',
  data() {
    return {
      selectedFile: null,
      tripphotosURL:
        'https://two-less-fish-in-the-sea.herokuapp.com/tripphotos',
      tripphotosData: []
    }
  },
  mounted() {
    axios
      .get(this.tripphotosURL)
      .then(console.log('getting data'))
      .then(response => {
        console.log(response.data.tripphotos)
        this.tripphotosData = response.data.tripphotos
      })
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    onUpload() {
      const fd = new FormData()
      fd.append('image', this.selectedFile, this.selectedFile.name)
      axios
        .post('insert url for post here', fd, {
          onUploadProgress: uploadEvent => {
            console.log(
              'Upload Progress: ' +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                '%'
            )
          }
        })
        .then(res => {
          console.log(res)
        })
      //http request to send file to image api//
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Great+Vibes');
h1 {
  font-family: 'Great Vibes', cursive;
  text-shadow: 0.2rem 0.1rem black;
}
.choose-img:hover {
  color: coral;
  background-color: black;
}
.submit-img:hover {
  color: coral;
  background-color: black;
}
ul {
  list-style-type: none;
  display: inline-block;
}
.tripphotos-img {
  height: 20vw;
  width: auto;
  border-radius: 5%;
  box-shadow: 0.2rem 0.2rem coral;
}
</style>
