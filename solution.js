'use strict'

const Nd = require('./nd')
// import Nd from './nd'

class SLL {
  constructor() {
    this.head = null
  }

  insertHead(val) {
    let nd = new Nd(val)

    nd.next = this.head
    this.head = nd
    return this
  }

  insertEnd(val) {
    let nd = new Nd(val)

    if (!this.head) {
      this.head = nd
      return this
    }

    for (var itr = this.head; itr.next; itr = itr.next);
    itr.next = nd
    return this
  }

  remove() {
    if (head === null) return;
    if (head.data == data) {
      head = head.next;
      return;
    }
  }

  findNthNode() {

  }
}

module.exports = SLL
