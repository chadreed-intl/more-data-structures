LinkedList = function(){
  //this = Object.creat(LinkedList.prototype);
  this.length = 0;
  this.head = null;
  this.tail = null;
};

LinkedList.prototype = {

  addToTail: function(value){
    var node = this.makeNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.previous = this.tail;
      this.tail = node;
    }
    this.length++;
  },

  removeHead: function(){
    if (this.head){
      var temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp.value;
    } else {
      return null;
    }
  },

  addToHead: function(value){
    var temp = this.head;
    var node = makeNode(value);
    this.head = node;
    node.next = temp;
    this.length++;
  },

  contains: function(value){
    return this.head.contains(value);
  },

  makeNode: function (value){
    var node = {};
    node.value = value;
    node.next = null;
    node.previous = null;
    node.contains = function(value){
      return node.value === value || node.next && node.next.contains(value);
    }
    node.removeNextNode = function(){

    }
    return node;
  }
};



