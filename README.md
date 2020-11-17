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
		    - [getSortedHeap](#pq-getSortedHeap)
		    - [getKth](#pq-getKth)
		    - [getHeight](#pq-getHeight)
		    - [isLeafNode](#pq-isLeafNode)
		    - [getLeafNodes](#pq-getLeafNodes)
		    - [print](#pq-print)
		    - [printSortedHeap](#pq-printSortedHeap)
    - [Stacks](#stacks) :soon:
    - [Queue](#queues) :soon:
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

```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 90);

priorityQ.dequeue(); //Removes the Highest Priority Element

```

####  getSize() <a name="pq-getSize"></a>

```javascript

import { PriorityQueue } from  'structures-wiz';

const  priorityQ  =  new  PriorityQueue();

priorityQ.enqueue(10, 100);
priorityQ.enqueue(20, 90);

priorityQ.getSize(); //2

```

####  getLeftIndex( index ) <a name="pq-getLeftIndex"></a>

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

####  getSortedHeap() <a name="pq-getSortedHeap"></a>

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

  

## Contribute

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

  

Please make sure to update tests as appropriate.

  

## License

[MIT](https://choosealicense.com/licenses/mit/)