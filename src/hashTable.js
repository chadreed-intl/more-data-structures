var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value){
	var index = getIndexBelowMaxForKey(key, this._limit);
	var storage = this._storage.get(index) || [];
    storage.push([key,value]);
    this._storage.set(index, storage);
};

HashTable.prototype.retrieve = function(key){
    var index = getIndexBelowMaxForKey(key, this._limit);
	var entries = this._storage.get(index) || [];
	var temp;
	_.each(entries, function(entry){
	  if(entry[0] === key){
        temp = entry[1];
	  }
	});
	return temp;
};

HashTable.prototype.remove = function(key){
    var index = getIndexBelowMaxForKey(key, this._limit);
    var entries = this._storage.get(index) || [];
    var temp;
	_.each(entries, function(entry, i, collection){
	  if(entry[0] === key){
        temp = entry[1];
        entry[1] = undefined
	  }
	});
	return temp;
};

// NOTE: For this code to work, you will NEED the code from hashTableHelpers.js
// Start by loading those files up and playing with the functions it provides.
// You don't need to understand how they work, only their interface is important to you