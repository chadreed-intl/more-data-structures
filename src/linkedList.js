var makeLinkedList = function(){
  var linkedList = {};
  linkedList.length = 0;
  linkedList.head = null;
  linkedList.tail = null;

  linkedList.addToTail = function(value){
    var node = makeNode(value);
    if (!linkedList.head) {
      linkedList.head = node;
      linkedList.tail = node;
    } else {
      linkedList.tail.next = node;
      node.previous = linkedList.tail;
      linkedList.tail = node;
    }
    linkedList.length++;
  };

  linkedList.removeHead = function(){
    if (linkedList.head){
      var temp = linkedList.head;
      linkedList.head = linkedList.head.next;
      linkedList.length--;
      return temp.value;
    } else {
      return null;
    }
  };

  linkedList.addToHead = function(value){
    var temp = linkedList.head;
    var node = makeNode(value);
    linkedList.head = node;
    node.next = temp;
    linkedList.length++;
  };

  linkedList.contains = function(value){
    return linkedList.head.contains(value);
  };

  return linkedList;

};

var makeNode = function (value){
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