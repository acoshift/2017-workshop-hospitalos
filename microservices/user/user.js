const storage = [
  { id: 1, email: 'admin@example.com', password: '1234', role: 'admin' },
  { id: 2, email: 'user@example.com', password: '1234', role: 'user' }
]

module.exports = {
  find: (id) => new Promise((resolve, reject) => {
    const result = storage.find((x) => x.id === id)
    if (!result) {
      reject('user not found')
      return
    }
    resolve(result)
  }),
  findAll: () => Promise.resolve(storage)
}
