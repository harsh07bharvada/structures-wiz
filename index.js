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

  /**
   * @What - Clears the PQ
   */
  clear(){
    this.heap = [];
    this.height = -1;
  }

  /**
   * @What - Returns heap
   */
  getHeap(){
    return this.heap;
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

class LinkedList {

  /**
   * @What Instantiates the list.
   */
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  /**
   * @What Creates a new node
   * @Params {value of the node} val 
   */
  createNewNode(val = '') {
    return {
      val,
      next: null,
      prev: null
    };
  }

  /**
   * @What Returns the size of the LinkedList
   */
  getSize() {
    return this.size;
  }

  /**
   * @What Adds a node to the beginning of the list.
   * @Params {value of the node} val 
   */
  addAtHead(val = '') {

    const newNode = this.createNewNode(val);
    if (this.head) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * @What Adds a node to the end of the list.
   * @Params {value of the node} val 
   */
  addAtTail(val = '') {
    const newNode = this.createNewNode(val);
    if (this.tail) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * @What Removes a node from the beginning of the list. 
   */
  removeAtHead() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size = this.size ? this.size - 1 : 0;
  }

  /**
   * @What Removes a node from the end of the list. 
   */
  removeAtTail() {
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size = this.size ? this.size - 1 : 0;
  }
  /**
   * @What Sorts the LinkedList using Merge Sort
   */
  sort() {
    let runnerHead = this.head;
    this.head = this.sortUtil(runnerHead);
  }

  /**
   * @What Utility for sorting the LinkedList using Merge Sort
   */
  sortUtil(runnerHead) {
    if (!runnerHead || !runnerHead.next) {
      return runnerHead;
    }

    const [left, right] = this.split(runnerHead);
    const root = this.createNewNode(null);

    return this.merge(root, this.sortUtil(left), this.sortUtil(right));
  }

  /**
   * @What Splits the list into 2 halves to sort individually
   */
  split(node) {
    let slow = node,
      fast = node,
      left = node,
      right = null;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    right = slow.next;
    right.prev = null;
    slow.next = null;
    return [left, right];
  }

  /**
   * @What Merges the two sorted linkedlists in a sorted manner
   */
  merge(root, left, right) {
    let pointer = root;
    while (left || right) {
      if (!left) {
        pointer.next = right;
        right.prev = pointer;
        right = right.next;
      } else if (!right) {
        pointer.next = left;
        left.prev = pointer;
        left = left.next;
      } else {
        if (left.val < right.val) {
          pointer.next = left;
          left.prev = pointer;
          left = left.next;
        } else {
          pointer.next = right;
          right.prev = pointer;
          right = right.next;
        }
      }

      pointer = pointer.next;
      this.tail = pointer;
    }
    return root.next;
  }

  /**
   * @What Prints the LinkedList
   */
  print() {
    let list = [];
    let runner = this.head;
    while (runner) {
      list.push(runner.val);
      runner = runner.next;
    }
    if (this.size)
      console.log(`${list.join(" -> ")} -> NULL`);
    else
      console.log("Linked List is empty")
  }

  /**
   * @What Returns the head
   */
  getHead(){
    return this.head;
  }

  /**
   * @What Returns the tail
   */
  getTail(){
    return this.tail;
  }

  /**
   * @What Returns the list in array format
   */
  getArray(){
    let runner = this.head;
    let resultArray = [];
    while(runner){
      resultArray.push(runner.val);
      runner = runner.next;
    }
    return resultArray;
  }

  /**
   * @What Clears the LL
   */
  clear(){
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
}

module.exports.PriorityQueue = PriorityQueue;
module.exports.Stack = Stack;
module.exports.LinkedList = LinkedList;