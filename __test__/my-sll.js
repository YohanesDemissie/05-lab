'use strict';

function LinkedList() {
  this.head = null; //head never has a value
}

LinkedList.prototype.push = function (val) {
  var node = { //create node with value and nested 'next' key value pairs
    value: val, //value 
    next: null //next == null if no following value
  }
  if (!this.head) {
    this.head = node; //since head is null, give it node content (value, next)
  }
  else {
    current = this.head;
    while (current.next) { //nests next: to the floowing listed objects
      current = current.next;
    }
    current.next = node; //nest the key value pairs within 'next'
  }
}







//create linked list based off constructor
let list = new LinkedList();
// add values to linked list
list.push(5);
list.push(10);
list.push(15);
list.push(20);
list.push(25);
console.log(list.head.next.next) //checking for values

let listIntercept = new LinkedList();
list.push(3)
list.push(5)
list.push(7)
list.push(9)
list.push(15)
console.log(listIntercept.head.next.next.next)