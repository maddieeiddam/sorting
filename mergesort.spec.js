describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([1,2,3,4,5])).toEqual([[1,2,3],[4,5]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge([1, 3, 7], [2, 4, 10])).toEqual([1, 2, 3, 4, 7, 10]);
  });
});
