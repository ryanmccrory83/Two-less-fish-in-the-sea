<template>
  <div>
    <h1>Upload your trip photos here!</h1>
    <div>
      <input
        style="display: none"
        type="file"
        @change="onFileSelected"
        ref="fileInput"
      />
      <button @click="$refs.fileInput.click()">Choose Image to Upload</button>
      <button @click="onUpload">Upload</button>
    </div>
    <div>
      <main>
        <section>
          <ul></ul>
        </section>
      </main>
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
      selectedFile: null
    }
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

<style></style>
