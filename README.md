<p align="center">
<img width="100" alt='Structures-wiz' src='https://www.flaticon.com/svg/static/icons/svg/1572/1572252.svg'>

# Structures-Wiz

</p>

  [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity) [![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/Naereen/ama) [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)

### [](https://github.com/Naereen/badges#demandez-moi-nimporte-quoi-in-french)

Structures-Wiz is a JavaScript based npm package for using awesome data structures like Stacks, Queue, LinkedList, PriorityQueues etc.

# Table of contents

- [Installation](#installation)
- [Usage](#usage)
    - [Priority Queues](#priority-queue)
	    - [Instantiation](#pq-instantiation)
	    - [Methods](#pq-methods)
		    - [getSize](#pq-getSize)
		    - [getParentIndex](#pq-getParentIndex)
		    - [getLeftIndex](#pq-getLeftIndex)
		    - [getRightIndex](#pq-getRightIndex)
		    - [enqueue](#pq-enqueue)
		    - [dequeue](#pq-dequeue)
		    - [peek](#pq-peek)
        - [getHeap](#pq-getHeap)
		    - [getSortedHeap](#pq-getSortedHeap)
		    - [getKth](#pq-getKth)
		    - [getHeight](#pq-getHeight)
		    - [isLeafNode](#pq-isLeafNode)
		    - [getLeafNodes](#pq-getLeafNodes)
		    - [print](#pq-print)
		    - [printSortedHeap](#pq-printSortedHeap)
        - [clear](#pq-clear)
    - [Stacks](#stacks)
	    - [Instantiation](#st-instantiation)
	    - [Methods](#st-methods)
		    - [getSize](#st-getSize)
		    - [push](#st-push)
		    - [pushAll](#st-pushAll)
		    - [peek](#st-peek)
		    - [pop](#st-pop)
		    - [removeDuplicates](#st-removeDuplicates)
		    - [clear](#st-clear)
		    - [print](#st-print)
    - [Queue](#queues) :soon:
    - [LinkedList](#ll)
        - [Instantiation](#ll-instantiation)
        - [Methods](#ll-methods)
            - [getSize](#ll-getSize)
            - [addAtHead](#ll-addAtHead)
            - [addAtTail](#ll-addAtTail)
            - [removeAtHead](#ll-removeAtHead)
            - [removeAtTail](#ll-removeAtTail)
            - [print](#ll-print)
            - [sort](#ll-sort)
            - [getHead](#ll-getHead)
            - [getTail](#ll-getTail)
            - [getArray](#ll-getArray)
            - [clear](#ll-clear)
	
- [Contribute](#contribute)
- [License](#license)

  

## Installation

  

Use the [npm](https://www.npmjs.com/) package manager to install Structures-Wiz.

  

```bash

npm install structures-wiz

```

  

## Usage

### Priority Queue
Priority Queues are an extension to queues. Each entry into a Priority Queue is based on its Priority.
The advantage of using Priority Queues is that insertion of elements takes O(log n) time because they are implementation is based on Max Heap or Min Heap.

#### Instantiation <a name="pq-instantiation"></a>

```javascript

import { PriorityQueue } from  'structures-wiz';

//Default contructor will create a Max-Heap 
const  priorityQ  =  new  PriorityQueue();

//Passing custom comparator for Min Heap
const  priorityQ  =  new  PriorityQueue((a,b) => a <= b);

```

#### Methods  <a name="pq-methods"></a>

Following are the methods exposed for usage:

####  enqueue(value, priority) <a name="pq-enqueue"></a>

Adds new value to the Queue based on its priority and if Priority is not passed then Priority is equal to Value.
```javascript

import { PriorityQueue } from  'structures-wiz';

//Default contructor will create a Max-Heap 
const  priorityQ  =  new  PriorityQueue();


//Way 1 -  Without specifying Priority (Priority = Value in this case by default)
priorityQ.enqueue(10);

//Way 2 -  Passing Value & Priority
priorityQ.enqueue(10, 100);

```

####  dequeue() <a name="pq-dequeue"></a>

Removes the Maximum element (In case of Max-Heap config) or Minimum Element (In case of Min-Heap config).
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 90);

priorityQ.dequeue(); //Removes the Highest Priority Element

```

####  getSize() <a name="pq-getSize"></a>

Returns the size of the queue.
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 90);

priorityQ.getSize(); //2

```

####  getLeftIndex( index ) <a name="pq-getLeftIndex"></a>

Returns the left child index of the passed index.
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 80);
priorityQ.enqueue(60, 90);
priorityQ.enqueue(40, 20);
priorityQ.enqueue(70, 200);
priorityQ.enqueue(50, 40);

const leftIndex = priorityQ.getLeftIndex(0);
console.log("LeftIndex of 0th index is :",leftIndex); //1

```
####  getRightIndex( index ) <a name="pq-getRightIndex"></a>

Returns the right child index of the passed index.
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 80);
priorityQ.enqueue(60, 90);
priorityQ.enqueue(40, 20);
priorityQ.enqueue(70, 200);
priorityQ.enqueue(50, 40);

const rightIndex = priorityQ.getRightIndex(0);
console.log("RightIndex of 0th index is :",rightIndex); //2

```

####  getParentIndex( index ) <a name="pq-getParentIndex"></a>

Returns the parent node index of the passed index.
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 80);
priorityQ.enqueue(60, 90);
priorityQ.enqueue(40, 20);
priorityQ.enqueue(70, 200);
priorityQ.enqueue(50, 40);

const parentIndex = priorityQ.getParentIndex(1);
console.log("ParentIndex of 1st index is :",parentIndex);//0

```

####  peek() <a name="pq-peek"></a>

Returns the Maximum element (In case of Max-Heap config) or Minimum Element (In case of Min-Heap config).
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 80);
priorityQ.enqueue(60, 90);
priorityQ.enqueue(40, 20);
priorityQ.enqueue(70, 200);
priorityQ.enqueue(50, 40);

const peekValue = priorityQ.peek();
console.log("Peak Value is :",peekValue); //[ 70 , 200 ]

```

####  getHeap() <a name="pq-getHeap"></a>

Returns the current heap 
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 80);
priorityQ.enqueue(60, 90);
priorityQ.enqueue(40, 20);
priorityQ.enqueue(70, 200);
priorityQ.enqueue(50, 40);

const Heap = priorityQ.getHeap();
console.log("Heap is :",Heap);
/*[
  [ 70, 200 ],
  [ 10, 100 ],
  [ 60, 90 ],
  [ 40, 20 ],
  [ 20, 80 ],
  [ 50, 40 ]
]*/

```

####  getSortedHeap() <a name="pq-getSortedHeap"></a>

Returns the current heap in the sorted order ( Descending if config is set as Max-Heap else Ascending in case of Min-Heap)
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 80);
priorityQ.enqueue(60, 90);
priorityQ.enqueue(40, 20);
priorityQ.enqueue(70, 200);
priorityQ.enqueue(50, 40);

const sortedHeap = priorityQ.getSortedHeap();
console.log("Sorted Heap is :",sortedHeap);
/*[
  [ 70, 200 ],
  [ 10, 100 ],
  [ 60, 90 ],
  [ 20, 80 ],
  [ 50, 40 ],
  [ 40, 20 ]
]*/

```

####  getKth(k) <a name="pq-getKth"></a>

If the Priority Queue is a Max Heap( by default ) then this method returns 'kth' Max Element in the Sorted Max Heap otherwise in case of Min Heap it returns 'kth' Min Element in the Sorted Min Heap .
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 80);
priorityQ.enqueue(60, 90);
priorityQ.enqueue(40, 20);
priorityQ.enqueue(70, 200);
priorityQ.enqueue(50, 40);

// kthMax element ( As Max Heap )
const k = 2;
const kthElement = priorityQ.getKth(2);
console.log("kth - ",k," is :",kthElement); //[ 10 , 100 ]

```

####  getHeight() <a name="pq-getHeight"></a>

Returns the height of the heap.
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 80);
priorityQ.enqueue(60, 90);
priorityQ.enqueue(40, 20);
priorityQ.enqueue(70, 200);
priorityQ.enqueue(50, 40);

const height = priorityQ.getHeight();
console.log("Height of Heap is :",height); // 2

```

####  isLeafNode(index) <a name="pq-isLeafNode"></a>

Returns true if the node at the index is a leaf node else returns false.
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 80);
priorityQ.enqueue(60, 90);
priorityQ.enqueue(40, 20);
priorityQ.enqueue(70, 200);
priorityQ.enqueue(50, 40);

const index = 4;
const isIndexLeafNode = priorityQ.isLeafNode(index);
console.log("Is ",index,"Th a leaf node ?",isIndexLeafNode); // true

```

####  getLeafNodes() <a name="pq-getLeafNodes"></a>

Returns the list of leaf nodes.
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 80);
priorityQ.enqueue(60, 90);
priorityQ.enqueue(40, 20);
priorityQ.enqueue(70, 200);
priorityQ.enqueue(50, 40);

const leafNodes = priorityQ.getLeafNodes();
console.log("Leaf Nodes are",leafNodes); // [ [ 60, 90 ], [ 40, 20 ], [ 20, 80 ], [ 50, 40 ] ]

```

####  print() <a name="pq-print"></a>

Prints the current state of the queue.
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 80);
priorityQ.enqueue(60, 90);
priorityQ.enqueue(40, 20);
priorityQ.enqueue(70, 200);
priorityQ.enqueue(50, 40);

priorityQ.print();
/*
[
  [ 70, 200 ],
  [ 10, 100 ],
  [ 60, 90 ],
  [ 40, 20 ],
  [ 20, 80 ],
  [ 50, 40 ]
]
*/
```

####  printSortedHeap() <a name="pq-printSortedHeap"></a>

Prints the current heap in the sorted order ( Descending if config is set as Max-Heap else Ascending in case of Min-Heap)
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 80);
priorityQ.enqueue(60, 90);
priorityQ.enqueue(40, 20);
priorityQ.enqueue(70, 200);
priorityQ.enqueue(50, 40);

priorityQ.printSortedHeap();
/*
[
  [ 70, 200 ],
  [ 10, 100 ],
  [ 60, 90 ],
  [ 20, 80 ],
  [ 50, 40 ],
  [ 40, 20 ]
]
*/
```
####  clear() <a name="pq-clear"></a>

Clears the queue.
```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 80);
priorityQ.enqueue(60, 90);
priorityQ.enqueue(40, 20);
priorityQ.enqueue(70, 200);
priorityQ.enqueue(50, 40);

priorityQ.print();
/*
[
  [ 70, 200 ],
  [ 10, 100 ],
  [ 60, 90 ],
  [ 40, 20 ],
  [ 20, 80 ],
  [ 50, 40 ]
]
*/

priorityQ.clear();

priorityQ.print(); // []
```

<hr>

### Stack
Implementation of stack is pretty straightforward with a few additional features like creating a stack with unique elements and removing duplicates in a stack.

#### Instantiation <a name="st-instantiation"></a>

```javascript

import { Stack } from  'structures-wiz';

//Default contructor will create a Stack with empty elements and "isUnique" flag false  
const stack = new Stack();

//Passing custom values and setting the second parameter makes the Stack only accept unique Elements
const uniqueStack = new Stack([20, 90],true);

```

#### Methods  <a name="st-methods"></a>

Following are the methods exposed for usage:

####  getSize() <a name="st-getSize"></a>

```javascript

import { Stack } from  'structures-wiz';
 
const stack = new Stack([20, 80, 10, 90]);

const size = stack.getSize();
console.log("Size of the stack is:",size); // 4
```

####  push(value) <a name="st-push"></a>

Pushes the received value at the end of the stack.
```javascript

import { Stack } from  'structures-wiz';
 
const stack = new Stack();
stack.push(100);
stack.push(100);
stack.push(400);
stack.push(600);
stack.push(100);
stack.push(800);
stack.print() // [ 100, 100, 400, 600, 100, 800 ]
```

####  pushAll(values) <a name="st-pushAll"></a>

Pushes all the received values at the end of the stack.
```javascript

import { Stack } from  'structures-wiz';
 
 //Config 1 - Pass set of values
const stack = new Stack();
stack.pushAll( 100, 100, 400, 600, 100, 800 );
stack.print() // [ 100, 100, 400, 600, 100, 800 ]

 //Config 2 - Pass Array of values
const stack = new Stack();
stack.pushAll([100, 100, 400, 600, 100, 800]);
stack.print() // [ 100, 100, 400, 600, 100, 800 ]
```

####  peek() <a name="st-peek"></a>

Returns the top most value.
```javascript

import { Stack } from  'structures-wiz';
 
const stack = new Stack();
stack.pushAll( 100, 100, 400, 600, 100, 800 );

const peekValue = stack.peek();
console.log("Peek Value is :",peekValue);//800
```

####  pop() <a name="st-pop"></a>

Removes and returns the top most element of the stack.
```javascript

import { Stack } from  'structures-wiz';
 
const stack = new Stack();

stack.pushAll( 100, 100, 400, 600, 100, 800 );

stack.print(); //[ 100, 100, 400, 600, 100, 800 ]

const poppedValue = stack.pop(); 

console.log("Popped Value is :",poppedValue);//800

stack.print();//[ 100, 100, 400, 600, 100 ]
```

####  removeDuplicates() <a name="st-removeDuplicates"></a>

Removes the duplicates elements of the stack.
```javascript

import { Stack } from  'structures-wiz';
 
const stack = new Stack();
stack.pushAll( 100, 100, 400, 600, 100, 800 );

stack.print(); //[ 100, 100, 400, 600, 100, 800 ]

stack.removeDuplicates();

stack.print();//[ 100, 400, 600, 800 ]
```

####  clear() <a name="st-clear"></a>

Removes all the elements of the stack.
```javascript

import { Stack } from  'structures-wiz';
 
const stack = new Stack();
stack.pushAll( 100, 100, 400, 600, 100, 800 );

stack.print(); //[ 100, 100, 400, 600, 100, 800 ]

stack.clear();

stack.print();//[ ]
```

####  print() <a name="st-print"></a>

Prints the current stack state.
```javascript

import { Stack } from  'structures-wiz';
 
const stack = new Stack();
stack.pushAll( 100, 100, 400, 600, 100, 800 );

stack.print(); //[ 100, 100, 400, 600, 100, 800 ]
```

### LinkedList <a name="ll"></a>


#### Instantiation <a name="ll-instantiation"></a>

```javascript

import { LinkedList } from 'structures-wiz';

//Instantiates the LinkedList with no nodes
const linkedList = new LinkedList();

linkedList.print(); //Linked List is empty

```

#### Methods <a name="ll-methods"></a>

Following are the methods exposed for usage.

#### getSize() <a name="sll-getSize"></a>

```javascript
import { LinkedList } from 'structures-wiz';


const linkedList = new LinkedList();

linkedList.addAtHead(2);

linkedList.addAtHead(5);

linkedList.addAtTail(15);

linkedList.addAtHead(9);

const size = linkedList.getSize();
console.log("Size of the LinkedList is:",size);//4
```

#### addAtHead(value) <a name="ll-addAtHead"></a>

Method to add a value at the start of the LinkedList.
```javascript
import { LinkedList } from 'structures-wiz';

const linkedList = new LinkedList();

linkedList.addAtHead(2);

linkedList.addAtHead(5);

linkedList.print(); // 5 -> 2 -> NULL
```

#### addAtTail(value) <a name="ll-addAtTail"></a>
Method to add a value at the end of the LinkedList.

```javascript
import { LinkedList } from 'structures-wiz';

const linkedList = new LinkedList();

linkedList.addAtHead(2);

linkedList.addAtHead(5);

linkedList.addAtTail(15);

linkedList.print(); // 5 -> 2 -> 15 -> NULL
```

#### removeAtHead(value) <a name="ll-removeAtHead"></a>

Method to remove the value at the start of the LinkedList.
```javascript
import { LinkedList } from 'structures-wiz';

const linkedList = new LinkedList();

linkedList.addAtHead(2);

linkedList.addAtHead(5);

linkedList.print(); // 5 -> 2 -> NULL

linkedList.removeAtHead(5);

linkedList.print(); // 2 -> NULL

```

#### removeAtTail(value) <a name="ll-removeAtTail"></a>
Method to remove the value at the end of the LinkedList.

```javascript
import { LinkedList } from 'structures-wiz';

const linkedList = new LinkedList();

linkedList.addAtHead(2);

linkedList.addAtHead(5);

linkedList.addAtTail(15);

linkedList.print(); // 5 -> 2 -> 15 -> NULL

linkedList.removeAtTail(5);

linkedList.print(); // 5 -> 2 -> NULL

```

#### print() <a name="ll-print"></a>
Prints the LinkedList.

```javascript
import { LinkedList } from 'structures-wiz';

const linkedList = new LinkedList();

linkedList.print(); // Linked List is empty

linkedList.addAtHead(2);
linkedList.print(); // 2 -> NULL

linkedList.addAtHead(5);
linkedList.print(); //5 -> 2 -> NULL

linkedList.addAtTail(15);
linkedList.print(); // 5 -> 2 -> 15 -> NULL

linkedList.addAtHead(9);
linkedList.print(); //9 -> 5 -> 2 -> 15 -> NULL
```

#### sort() <a name="ll-sort"></a>
Sorts the LinkedList.

```javascript
import { LinkedList } from 'structures-wiz';

const linkedList = new LinkedList();

linkedList.addAtHead(22);

linkedList.addAtHead(5);

linkedList.addAtTail(15);

linkedList.print(); //5 -> 22 -> 15 -> NULL

linkedList.sort();

linkedList.print(); //5 -> 15 -> 22 -> NULL
```

#### getHead() <a name="ll-getHead"></a>
Returns the head node of the LinkedList

```javascript
import { LinkedList } from 'structures-wiz';

const linkedList = new LinkedList();

linkedList.addAtHead(22);

linkedList.addAtHead(5);

linkedList.addAtTail(15);

linkedList.print(); //5 -> 22 -> 15 -> NULL

const currentHead = linkedList.getHead();
console.log("Head Value:",currentHead.val);//Head Value: 5 
```

#### getTail() <a name="ll-getTail"></a>
Returns the head node of the LinkedList

```javascript
import { LinkedList } from 'structures-wiz';

const linkedList = new LinkedList();

linkedList.addAtHead(22);

linkedList.addAtHead(5);

linkedList.addAtTail(15);

linkedList.print(); //5 -> 22 -> 15 -> NULL

const currentTail = linkedList.getTail();
console.log("Tail Value:",currentHead.val);//Head Value: 15
```


#### getArray() <a name="ll-getArray"></a>
Returns the Linked list in array format

```javascript
import { LinkedList } from 'structures-wiz';

const linkedList = new LinkedList();

linkedList.addAtHead(22);

linkedList.addAtHead(5);

linkedList.addAtTail(15);

linkedList.print(); //5 -> 22 -> 15 -> NULL

const array = linkedList.getArray();
console.log("List converted to Array:",array);//[5, 22, 15]
```


#### clear() <a name="ll-clear"></a>
Clears the LinkedList

```javascript
import { LinkedList } from 'structures-wiz';

const linkedList = new LinkedList();

linkedList.addAtHead(22);

linkedList.addAtHead(5);

linkedList.addAtTail(15);

linkedList.print(); //5 -> 22 -> 15 -> NULL

linkedList.clear();
linkedList.print()//Linked List is empty
```

## Contribute

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

  

Please make sure to update tests as appropriate.

  

## License

[MIT](https://choosealicense.com/licenses/mit/)