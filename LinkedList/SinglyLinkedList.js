const ListNode = require('./ListNode');

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
	 * @what Gets singly LL size
	 */
	getSize() {
		return this.size;
	}

	/**
	 * Adds a node to the beginning of the list.
	 * @param {value of the node} val 
	 */
	addFirst(val) {
		var node = new ListNode(val);
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
	 * @what Adds a node to the end of the list.
	 * @param {value of the node} val 
	 */
	addLast(val) {
		var node = new ListNode(val);
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
		var listStr = "";
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

		console.log(listStr);
	}
}

module.exports = SinglyLinkedList;