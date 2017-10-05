const express = require('express')
const gracefulShutdown = require('express-graceful-shutdown')
const http = require('http')

const app = express()
const server = http.createServer(app)

app.use(gracefulShutdown(server, { forceTimeout: 7000 }))

app.get('/', (req, res) => {
  setTimeout(() => {
    res.json({ ok: 1 })
  }, 5000)
})

server.listen(3000)
