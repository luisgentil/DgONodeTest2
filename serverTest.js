const express = require('express')
const app = express()
const port = 3005

app.get('/', (req, res) => {
  res.send('Hello World! <br> <hr> Esto es un Test desde DO.')
})

app.listen(port, () => {
  console.log(`App ejemplo. Activa en puerto ${port}`)
})
