'use strict';

const SLL = require('../lib/single-linked-list.js')

describe('Sll Module', function () {
  describe('#Sll', function () {
    let list = new SLL
    it('should return an undefined value when calling back empty params', function () {
      expect(list.insertHead()).toEqual({ "head": { "next": null, "value": undefined } })
    })
    it('should return the input value in the linked list', function () {
      expect(list.insertHead(4)).toEqual({ "head": { "next": { "next": null, "value": undefined }, "value": 4 } })
    })
    it('should come back broken if param is stringified', function () {
      expect(list.insertNode(9)).toEqual({ "head": { "next": { "next": { "next": null, "value": 9 }, "value": undefined }, "value": 4 } })
    })
    it('should return with a new next: value: , with the given params', function () {
      expect(list.insertNode(55)).toEqual({ "head": { "next": { "next": { "next": { "next": null, "value": 55 }, "value": 9 }, "value": undefined }, "value": 4 } })
    })
  })
})
