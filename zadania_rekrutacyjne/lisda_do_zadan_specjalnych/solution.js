const LinkedList = {
  init: function () {
    this.head = null;
    this.tail = null;
  },
  createNode: function (data) {
    return { data: data, next: null, previous: null };
  },
  add: function (data) {
    const node = this.createNode(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.previous = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  },
  insertAt: function (data, index) {
    const node = this.createNode(data);
    let current = this.head;
    let i = 0;

    if (index === 0) {
      node.next = this.head;
      this.head.previous = node;
      this.head = node;
    } else {
      while (i < index) {
        current = current.next;
        i++;
      }

      node.next = current;
      node.previous = current.previous;
      current.previous.next = node;
      current.previous = node;
    }
  },
  elementAt: function (index) {
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    return current.data;
  },
  isEmpty: function () {
    return this.head === null;
  },
  clear: function () {
    this.head = null;
    this.tail = null;
  },
  print: function () {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.data + ", ";
      current = current.next;
    }

    return result.slice(0, -2);
  },
};

// Initialize the list
LinkedList.init();

console.log(LinkedList.isEmpty()); // check if is true =>true

LinkedList.add("element1");
LinkedList.add("element2");
LinkedList.add("element3"); // Add 3 elements to the list =>element1, element2, element3
console.log(LinkedList.isEmpty()); // =>false
console.log(LinkedList.print()); // =>'element1, element2, element3'

LinkedList.insertAt("element4", 1); //=>element1, element4, element2,element3

console.log(LinkedList.print()); // 'element1, element4, element2, element3'

console.log(LinkedList.elementAt(2)); //=> 'element2'

LinkedList.clear();
console.log(LinkedList.isEmpty()); //=> true
