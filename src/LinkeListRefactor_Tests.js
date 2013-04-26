describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(Object.keys(linkedList)).toContain("head");
    expect(Object.keys(linkedList)).toContain("tail");
  });

  it("should have methods named 'addToTail', and 'removeHead'", function() {
    expect(linkedList.addToTail).toEqual(jasmine.any(Function));
    expect(linkedList.removeHead).toEqual(jasmine.any(Function));
    expect(linkedList.contains).toEqual(jasmine.any(Function));
  });

  it("should be able to add nodes to the tail and identify the last node", function(){
    linkedList.addToTail('cat');
    linkedList.addToTail('dog');
    linkedList.addToTail('mouse');
    expect(linkedList.tail['value']).toEqual('mouse');
  });

  it('should assign the lead value of the list to the head', function(){
    linkedList.addToTail('cat');
    linkedList.addToTail('dog');
    linkedList.addToTail('horse');
    linkedList.addToTail('mouse');
    expect(linkedList.head['value']).toEqual('cat');
  });

  it('should assign the tail of a single value list to the head', function(){
    linkedList.addToTail('cat');
    linkedList.addToTail('dog');
    expect(linkedList.head['value']).toEqual('cat');
  });

  describe('removeHead', function(){
    it('should remove the current head, return the removed value and assign a new head', function(){
      linkedList.addToTail('cat');
      linkedList.addToTail('horse');
      linkedList.addToTail('dog');
      expect(linkedList.removeHead()).toEqual('cat');
      expect(linkedList.head['value']).toEqual('horse');
    });

    it('should thrown an error if you try to remove a head from an empty linked list', function(){
      expect(linkedList.removeHead()).toEqual(null);
    })

    it('should decrement the size of the linked list.', function(){
      linkedList.addToTail('cat');
      linkedList.addToTail('horse');
      linkedList.addToTail('dog');
      linkedList.removeHead();
      expect(linkedList.length).toEqual(2);
    })

  })



  it('should find the first value in the linked list and return true if found', function(){
    linkedList.addToTail('cat');
    linkedList.addToTail('horse');
    linkedList.addToTail('dog');
    expect(linkedList.contains('cat')).toEqual(true);
  });

  it('should find any value in the linked list and return true if found', function(){
    linkedList.addToTail('cat');
    linkedList.addToTail('horse');
    linkedList.addToTail('dog');
    expect(linkedList.contains('dog')).toEqual(true);
  });

  it('A new node should get added to the tail and point to the previous tail.', function(){
    linkedList.addToTail('cat');
    linkedList.addToTail('horse');
    linkedList.addToTail('dog');
    expect(linkedList.tail.previous['value']).toEqual('horse');
  });

  it('should allow a new node to be added to the head', function(){
    linkedList.addToTail('cat');
    linkedList.addToHead('horse');
    expect(linkedList.head.value).toEqual('horse');
    expect(linkedList.head.next.value).toEqual('cat');
  });


  // add more tests here to test the functionality of linkedList
});