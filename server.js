import app from './src/main.js'

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log('listen http://localhost:'+port)
})