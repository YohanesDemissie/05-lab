'use strict';

const Sll = require('../lib/single-linked-list.js')

describe('Sll Module', function () {
  describe('#Sll', function () {
    let list = new Sll
    it('should make sure this.head is null if no nodes in list', function () {
      expect(list.head).toBe(null)
    })
  })
})
