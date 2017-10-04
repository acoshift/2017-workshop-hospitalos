const invalidToken = new Error('invalid token')

const errorMapper = {
  invalidToken: {
    status: 401,
    body: { error: 'Unauthorized' }
  }
}

const handle = (res, err) => {
  const errData = errorMapper[err]
  if (!errData) {
    res.status(500).json({ error: err })
    return
  }
  res.status(errData.status).json(errData.body)
}

module.exports = {
  invalidToken,
  handle
}
