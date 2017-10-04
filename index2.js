const http = require('http')

http.createServer((req, res) => {
  res.json = (obj) => {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
    const resp = JSON.stringify(obj)
    res.end(resp)
  }

  jsonParser(logRequest(router))(req, res)
}).listen(3000)

function logRequest (next) {
  return (req, res) => {
    console.log('log')
    const start = Date.now()
    console.log(req.url)
    next(req, res)
    const end = Date.now()
    console.log('time: ' + (end - start))
  }
}

function jsonParser (next) {
  return (req, res) => {
    if (req.headers['content-type'] !== 'application/json') {
      next(req, res)
      return
    }
    console.log('json')
    let data = []
    req.on('data', (chunk) => {
      data = data.concat(chunk)
    })
    req.on('end', () => {
      req.body = JSON.parse(data)
      next(req, res)
    })
  }
}

function router (req, res) {
  if (req.url === '/login' && req.method === 'POST') {
    login(req, res)
    return
  }

  if (req.url === '/checkin' && req.method === 'POST') {
    checkin(req, res)
    return
  }

  if (req.url === '/checkout' && req.method === 'POST') {
    checkout(req, res)
    return
  }

  if (req.url === '/history' && req.method === 'GET') {
    history(req, res)
    return
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
  res.end('404 page not found')
}

function login (req, res) {
  console.log(req.body)
  res.json(`{"page": "login"}`)
}

function checkin (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
  res.end(`{"page": "checkin"}`)
}

function checkout (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
  res.end(`{"page": "checkout"}`)
}

function history (req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' })
  res.end(`{"page": "history"}`)
}
