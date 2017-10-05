import axios from 'axios'

console.log(process.env.API_URL)

const http = axios.create({
  baseURL: process.env.API_URL
})

let token = window.localStorage.getItem('token') || ''

const mapData = (resp) => resp.data

export const login = (username, password) => http
  .post('/login', {
    username,
    password
  })
  .then(mapData)
  .then((data) => {
    token = data.token
    window.localStorage.setItem('token', token)
  })

const post = (url, data, config) => http
  .post(url, data, {
    headers: {
      'X-Token': token
    },
    ...config
  })
  .then(mapData)

export const checkin = () => post('/checkin')

export const checkout = () => post('/checkout')
