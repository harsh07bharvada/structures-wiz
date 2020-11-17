const SinglyLL = require('../SinglyLinkedList');

var list = new SinglyLL();
list.addFirst(10); 
list.addFirst(20);
list.addLast(30);
list.addLast(70);
list.addFirst(40);

list.print();
//	40->20->10->30->70

console.log("size: " + list.getSize());
//	size: 5