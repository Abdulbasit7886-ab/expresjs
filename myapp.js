const express = require('express')
const app = express()
const port = 7000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/index', (req, res) => {
    res.send('How are you guyz!')
  })
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})