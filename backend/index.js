const app = require('./app')
const port = parseInt(process.env.PORT || 8080)

app
  .listen(port)
  .on('error', () => console.error() => {
    console.log('Error, error, we have and error')
  })
  .on('listening', () => {
    console.log('We are listening on ${port}')
  })