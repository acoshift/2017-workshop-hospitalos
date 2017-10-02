const express = require('express')

const app = express()

app.get('/', (req, resp) => {
  resp.send('Hello')
})

app.all('/health', (req, resp) => {
  // ping database
  resp.send('ok')
})

app.listen(8080)
