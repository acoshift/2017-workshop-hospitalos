const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const errors = require('./errors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req, res) => {
  const { username, password } = req.body
  login(username, password)
    .then((resp) => {
      res.json(resp)
    })
    .catch((err) => {
      res.status(401).json({ error: err })
    })
})

// X-Token: test_token
// Authorization: Bearer test_token

function getUser (id) {
  return Promise.resolve({ id })
}

function checkToken (token) {
  return token === 'test_token' ? Promise.resolve(1) : Promise.reject(errors.invalidToken)
}

app.use((req, res, next) => {
  const token = req.header('X-Token')
  checkToken(token)
    .then((userId) => {
      return getUser(userId)
    })
    .then((user) => {
      req.user = user
      next()
    })
    .catch((err) => { errors.handle(res, err) })
})

app.post('/checkin', (req, res) => {
  checkin(req.user.id)
    .then(() => {
      res.json({ ok: 1 })
    })
    .catch((err) => {
      res.status(500).json({ error: err })
    })
})

app.post('/checkout', checkout)
app.get('/history', history)

app.use((req, res) => {
  res.status(404)
  res.send('404 page not found')
})

app.listen(3000)

function login (username, password) {
  return new Promise((resolve, reject) => {
    if (!username || !password) {
      reject('username or password wrong')
      return
    }
    if (username !== 'admin' || password !== '1234') {
      reject('username or password wrong')
      return
    }
    resolve({
      userId: 1,
      token: 'test_token'
    })
  })
}

const checkin = (userId) => Promise.resolve({})

function checkout (req, res) {
  res.json({ page: 'checkout' })
}

function history (req, res) {
  res.json({ page: 'history' })
}
