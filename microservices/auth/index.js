const express = require('express')
const bodyParser = require('body-parser')

const service = require('./service')
const users = require('./user')
const refreshTokens = require('./refresh_token')

const app = express()

app.use(bodyParser.json())

const tokenWithPassword = service.tokenWithPassword(users, refreshTokens)

app.post('/token', (req, res) => {
  if (!req.body) {
    res.status(401).json({ error: 'invalid body' })
    return
  }

  switch (req.body.grant_type) {
    case 'password':
      const { email, password, scope } = req.body
      service.tokenWithPassword(email, password, scope)
        .then((result) => { res.json(result) })
        .catch((err) => { res.status(500).json({ error: err }) })
      break
    case 'refresh_token':
      service.tokenWithRefreshToken(req.body.refresh_token)
        .then((result) => { res.json(result) })
        .catch((err) => { res.status(500).json({ error: err }) })
      break
    default:
      res.status(401).json({ error: 'invalid grant_type' })
      break
  }
})

app.post('/revoke', (req, res) => {
  if (!req.body) {
    res.status(401).json({ error: 'invalid body' })
    return
  }
  service.revoke(req.body.refresh_token)
    .then(() => { res.json({ ok: 1 }) })
    .catch((err) => { res.status(500).json({ error: err }) })
})

app.listen(3000)
