# Structures-Wiz

Structures-Wiz is a JavaScript based npm package for using awesome data structures like Stacks, Queue, LinkedList, PriorityQueues.

## Installation

Use the [npm](https://www.npmjs.com/) package manager to install Structures-Wiz.

```bash
npm install structures-wiz
```

## Usage

```javascript
import { PriorityQueue } from 'structures-wiz';

  const priorityQ =  new PriorityQueue();
  priorityQ.enqueue(10, 100);
  priorityQ.enqueue(20, 80);
  priorityQ.enqueue(10, 90);
  priorityQ.enqueue(40, 20);
  priorityQ.enqueue(70, 200);
  const heap = priorityQ.getHeap();
  console.log("Heap:",heap);

  priorityQ.dequeue();
  priorityQ.enqueue(50, 40);
  const heap = priorityQ.getHeap();
  console.log("Heap:",heap);
  
  console.log("kth - 2",priorityQ.getKth(2));
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)