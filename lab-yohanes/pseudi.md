#IMPORTAN TEST AND FUNCTIONALITY CHECK!!!
If you don't know exactly what the outcome of a test case maybe throw in something like this...


const SLL = require('../lib/single-linked-list.js')

describe('Sll Module', function () {
  describe('#Sll', function () {
    let list = new SLL
    it('should make sure this.head is null if no nodes in list', function () {
      expect(list.insertHead()).toEqual({ "head": { "next": null, "value": undefined }, "listLength": NaN })
    })
    expect(list.insertHead(4)).toEqual({ "head": { "next": null, "value": 4 }, "listLength": NaN })
  })
})

#POINTER
as you can see, the 2nd expect has no 'it should'...
so running the function in the expect() and throwing in a value, you can not only see the call back but get a deeper mneaningful learning experience of how these linked list functions work!

#EXPECT VS RECIEVED
the recieved clarifies exactly how the function is running and expected is how I  THOUGHT it was runnung. works like auto corrector in a sense