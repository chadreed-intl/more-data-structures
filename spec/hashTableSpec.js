describe("hashTable", function() {
  var hashTable;

  beforeEach(function() {
    hashTable = new HashTable();
  });

  it("should have methods named 'insert' and 'retrieve", function() {
    expect(hashTable.insert).toEqual(jasmine.any(Function));
    expect(hashTable.retrieve).toEqual(jasmine.any(Function));
  });

  it('should be able to add to and retrieve from the hash', function(){
  	hashTable.insert('word','definition');
  	expect(hashTable.retrieve('word')).toEqual('definition');
  });

  it('should be able to have items removed from it', function(){
  	expect(hashTable.retrieve('one')).toEqual(undefined);
  	hashTable.insert('one', '1');
  	expect(hashTable.remove('one')).toEqual('1');
  	expect(hashTable.retrieve('one')).toEqual(undefined);
  });

  it('should detect collisions and handle correctly when retrieving', function(){
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(5);
    hashTable.insert('foo', 'bar');
    hashTable.insert('baz', 'quid');
    expect(hashTable.retrieve('foo')).toEqual('bar');
  });

  it('should detect collisions and handle correctly when removing', function(){
    spyOn(window, 'getIndexBelowMaxForKey').andReturn(5);
    hashTable.insert('foo', 'bar');
    hashTable.insert('baz', 'quid');
    expect(hashTable.remove('foo')).toEqual('bar');
    expect(hashTable.retrieve('foo')).toEqual(undefined);
  });


  // add more tests here to test the functionality of hashTable
});