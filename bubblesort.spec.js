describe('Bubble Sort', function(){
  let bubbleSort;
  it('is a function', function(){
    expect(typeof bubbleSort).toBe('function')
  });

  it('handles an empty array', function(){
    expect(bubbleSort([]) ).toEqual( [] );
  });
});

describe('Swap', function(){
  let swap;
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

