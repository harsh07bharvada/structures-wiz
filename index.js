class PriorityQueue {

  /**
   *  @Params - Comparator (If not passed then create Max Heap)
   *  @What - Instantiate max or min heap 
   */
  constructor(comparator = (a, b) => a >= b) {
    this.heap = [];
    this.height = -1;
    this.comparator = comparator;
  }

  /**
   * @What - Gets Priority Queue size
   */
  getSize() {
    return this.heap.length;
  }

  /**
   * @Param - Index for which parent is to be found
   * @What - Gets Parent Index 
   */
  getParentIndex(index) {
    return index >>> 1;
  }

  /**
   * @Param - Index for which Left Child Node Index is to be found
   * @What - Gets Left Child Index 
   */
  getLeftIndex(index) {
    return (2 * index + 1) < this.getSize() ? (2 * index + 1) : false;
  }

  /**
   * @Param - Index for which Right Child Node Index is to be found
   * @What - Gets Right Child Index 
   */
  getRightIndex(index) {
    return (2 * index + 2) < this.getSize() ? (2 * index + 2) : false;
  }

  /**
   * @Param - Index of two nodes
   * @What - returns the result from the comparision 
   */
  isGreater(i, j) {
    return this.comparator(this.heap[i][1], this.heap[j][1]);
  }

  /**
   * @Param - Index of two nodes to be swapped
   * @What - Swap two nodes
   */
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  /**
   * @Param - ( Value to be inserted , Priority of the Value )
   * @What - Inserts the new Value based on Priority (If Priority not 
   * received then Priority = Value ) 
   */
  enqueue(value, priority) {
    if (!priority) {
      priority = value;
    }
    this.heap.push([value, priority]);
    this.bubbleUp(this.getSize() - 1);
    this.setHeight();
  }

  /**
   * @What - Removes & returns the root
   */
  dequeue() {
    if (this.getSize() > 0) {
      this.swap(0, this.getSize() - 1);
      const popped = this.heap.pop();
      this.bubbleDown(0);
      this.setHeight;
      return popped;
    }
  }

  /**
   * @Param - Index of the node to start bubbling up
   * @What - Bubble up the index to balance the Heap 
   */
  bubbleUp(pos) {
    while (pos) {
      if (pos) {
        const parentIndex = this.getParentIndex(pos);
        if (parentIndex !== pos && this.isGreater(pos, parentIndex)) {
          this.swap(pos, parentIndex);
          pos = parentIndex;
        } else {
          break;
        }
      } else {
        break;
      }
    }
  }

  /**
   * @Param - Index of the node to start bubbling down
   * @What - Bubble down the index to balance the Heap 
   */
  bubbleDown(pos) {
    const leftIndex = this.getLeftIndex(pos);
    const rightIndex = this.getRightIndex(pos);
    let maxIndex = pos;
    if (leftIndex && rightIndex) {
      if (this.isGreater(leftIndex, pos) && this.isGreater(leftIndex, rightIndex)) {
        maxIndex = leftIndex;
      } else if (this.isGreater(rightIndex, pos) && this.isGreater(rightIndex, leftIndex)) {
        maxIndex = rightIndex;
      }
    } else if (leftIndex && this.isGreater(leftIndex, pos)) {
      maxIndex = leftIndex;
    } else if (rightIndex && this.isGreater(rightIndex, pos)) {
      maxIndex = rightIndex;
    }
    if (maxIndex !== pos) {
      this.swap(pos, maxIndex);
      this.bubbleDown(maxIndex);
    }
  }

  /**
   * @What - Returns the root of the Heap 
   */
  peek() {
    if (this.getSize()) {
      return this.heap[0];
    }
  }

  /**
   * @What - Returns Queue in a sorted order
   */
  getSortedHeap() {
    let resHeap = [];
    const copyHeap = Array.from(this.heap);
    while (this.getSize() > 0) {
      resHeap.push(this.dequeue());
    }
    this.heap = copyHeap;
    return resHeap;
  }

  /**
   * @Param - kth Max or Min element in the Sorted Heap
   * @What - Returns kth Min or Max element in the Sorted Heap based on MaxHeap or Min Heap 
   */
  getKth(k) {
    if (k - 1 < this.getSize()) {
      const copyHeap = Array.from(this.heap);
      while (k > 1) {
        this.dequeue();
        k--;
      }
      const kth = this.heap[0];
      this.heap = copyHeap;
      return kth;
    }

  }

  /**
   * @What - Print the current Heap 
   */
  print() {
    console.log(this.heap)
  }

  /**
   * @What - Print the Heap in Sorted Order 
   */
  printSortedHeap() {
    const heap = this.getSortedHeap();
    console.log(heap)
  }

  /**
   * @What - Update the Height of the Heap 
   */
  setHeight() {
    this.height = Math.ceil(Math.log2(this.getSize() + 1)) - 1;
  }

  /**
   * @What - Returns the Height of the Heap 
   */
  getHeight() {
    return this.height;
  }

  /**
   * @Param - Index
   * @What - Checks if this index is a Leaf Node or not 
   */
  isLeafNode(index) {
    if (!this.heap[2 * index] && !this.heap[2 * index + 1])
      return true;
    return false;
  }

  /**
   * @What - Returns the list of Leaf Nodes of the Heap
   */
  getLeafNodes() {
    let pointer = this.getSize() - 1;
    while (pointer > 0) {
      if (!this.isLeafNode(pointer)) {
        return this.heap.slice(pointer);
      }
      pointer--;
    }
  }
}

class Stack {

  /**
   *  @Params - Starting Stack Values, isUnique (true if one needs unique elements in the stack) 
   *  @What - Instantiate the stack
   */
  constructor(receivedList = [], isUnique = false) {

    this.isUnique = isUnique;
    this.list = isUnique ? [...new Set(receivedList)] : receivedList;
  }

  /**
   *  @Params - New Value to be inserted
   *  @What - Inserts the new value in the stack
   */
  push(value) {
    if (value) {
      this.list[this.list.length] = value;
      if (this.isUnique) {
        this.removeDuplicates();
      }
    }
  }

  /**
   *  @Params - List of values of to pushed at once
   *  @What - Pushes the list of values at once
   */
  pushAll(...values) {
    if (values) {
      this.list = Array.isArray(values) ? this.list.concat(...values) : this.list.concat(values);
      if (this.isUnique) {
        this.removeDuplicates();
      }
    }
  }

  /**
   *  @What - Pops the last value out of the stack
   */
  pop() {

    if (this.list.length) {
      return this.list.pop();
    }
  }

  /**
   *  @What - Returns the Top element of the stack
   */
  peek() {
    return this.list[this.list.length - 1];
  }

  /**
   *  @What - Removes Duplicates from the current stack
   */
  removeDuplicates() {
    this.list = [...new Set(this.list)];

  }

  /**
   *  @What - Clears the stack
   */
  clear() {
    this.list = [];
  }

  /**
   *  @What - Returns the size of the stack
   */
  getSize() {
    return this.list.length;
  }

  /**
   *  @What - Prints the current state of stack
   */
  print() {
    console.log(this.list);
  }
}

class SinglyLinkedList {

	/**
	 * @what instantiates the list.
	 */
	constructor() {
		this.size = 0;
		this.head = null;
    this.tail = null;
  }
  
  /**
   * This method is specific to the class.
   * @what creates a newNode for the list. Sets the next as null.
   * @param {js object or a primitive datatype} data 
   */
  newListNode(data) {
    let node = {
      'data': data,
      'next': null
    }
    return node;
  }

	/**
	 * @what Gets singly LL size
	 */
	getSize() {
		return this.size;
	}

	/**
	 * @What Adds a node to the beginning of the list.
	 * @Params {value of the node} val 
	 */
	addFirst(val) {
		var node = this.newListNode(val);
		if (this.head === null) {
			this.head = node;
			this.tail = this.head;
		} else {
			node.next = this.head;
			this.head = node;
		}

		this.size += 1;
	}

	/**
	 * @What Adds a node to the end of the list.
	 * @Param {value of the node} val 
	 */
	addLast(val) {
		var node = this.newListNode(val);
		if (this.tail === null) {
			this.tail = node;
			this.head = this.tail;
		} else {
			this.tail.next = node;
			this.tail = this.tail.next;
		}

		this.size += 1;
	}

	/**
	 * @what Prints list on console
	 */
	print() {
		var listStr = "[ ";
		var runner = this.head;
		while (true) {
			listStr += runner.data;
			if(runner == this.tail)
				break;
			else {
				listStr += "->";
			}
			runner = runner.next;
    }
    listStr += " ]";

		console.log(listStr);
	}
}


module.exports.PriorityQueue = PriorityQueue;
module.exports.Stack = Stack;
module.exports.SinglyLinkedList = SinglyLinkedList;