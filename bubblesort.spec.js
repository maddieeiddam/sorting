describe('Bubble Sort', function(){
  it('is a function', function(){
    expect(typeof bubbleSort).toBe('function')
  });

  it('handles an empty array', function(){
    expect(bubbleSort([]) ).toEqual( [] )
  });

  it('sorts the array correctly', function () {
    expect(bubbleSort([5, 2, 3, 4, 1])).toEqual([1,2,3,4,5]);
  });

  // it('calls swap the right number of times', function () {
  //   spyOn(window, 'swap').and.callThrough()
  //   expect(bubbleSort([5, 2, 3, 4, 1])).toEqual([1,2,3,4,5]);
  //   expect(swap.calls.count()).toEqual(15);
  // });
});

describe('Swap', function(){
  it('is a function', function(){
    expect(typeof swap).toBe('function')
  });

  it('swaps 2 numbers correctly', function(){
    expect(swap(5, 3)).toEqual([3, 5]);
  })

  it('does not swap if sorted', function(){
    expect(swap(1, 2)).toEqual([1, 2]);
  })

  it('returns a single number', function(){
    expect(swap(1)).toEqual(1);
  })
})

