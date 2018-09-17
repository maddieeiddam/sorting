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

describe('Mergesort', function(){
  it('is able to merge and sort an array', function() {
    expect(mergeSort([38, 27, 43, 3, 9, 82, 10])).toEqual([3, 9, 10, 27, 38, 43, 82]);

    expect(mergeSort([56, 29, 35, 42, 15, 41, 75, 21])).toEqual([15, 21, 29, 35, 41, 42, 56, 75]);
  })
})
