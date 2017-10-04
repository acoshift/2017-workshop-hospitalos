function createIdGenerator (name) {
  let id = 0
  return () => `${name}_${++id}`
}

bookindIdGenerator = createIdGenerator('book')
userIdGenerator = createIdGenerator('user')

console.log(bookindIdGenerator())
console.log(bookindIdGenerator())
console.log(userIdGenerator())
console.log(userIdGenerator())
console.log(bookindIdGenerator())
console.log(bookindIdGenerator())
console.log(bookindIdGenerator())
console.log(userIdGenerator())
console.log(bookindIdGenerator())
console.log(bookindIdGenerator())
