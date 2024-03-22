const express = require('express')
const app = express()
const port = 8000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World! 6')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})