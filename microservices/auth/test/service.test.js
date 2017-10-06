const chai = require('chai')
const chaiAsPromised = require("chai-as-promised")
const assert = require('chai').assert
const service = require('../service')

chai.use(chaiAsPromised)

describe('service', function () {
  describe('#generateRefreshToken', function () {
    it('should not return empty value', function () {
      assert.isNotEmpty(service.generateRefreshToken())
    })

    it('should have high entropy', function () {
      assert.isAtLeast(service.generateRefreshToken().length, 16)
    })

    it('should return difference value when call multiple times', function () {
      assert.notEqual(service.generateRefreshToken(), service.generateRefreshToken())
    })
  })

  describe('#tokenWithPassword', function () {
    it('should fail when username not found', function () {
      const users = {
        findByEmail () {
          return Promise.reject('user not found')
        }
      }
      return assert.isRejected(service.tokenWithPassword(users, null)('not-found', '123', 'admin'))
    })

    it('should success', function () {
      const users = {
        findByEmail (email) {
          assert.equal(email, 'test')
          return Promise.resolve({ id: 100, email: 'test', password: '1234', role: 'admin' })
        }
      }
      const refreshTokens = {
        create ({ userId, refreshToken, scope }) {
          assert.equal(userId, 100)
          assert.isNotEmpty(refreshToken)
          assert.equal(scope, 'admin')
          return Promise.resolve()
        }
      }
      return assert.isFulfilled(service.tokenWithPassword(users, refreshTokens)('test', '1234', 'admin'))
    })
  })
})