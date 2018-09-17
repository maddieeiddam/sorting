
function bubbleSort(array) {
  if (array.length === 0) return array;
  for (let firstIdx = 0; firstIdx < array.length -2; firstIdx++ ) {
    let firstVal = array[firstIdx];
    for (let secondIdx = firstIdx + 1; secondIdx < array.length -1; secondIdx++) {
      let secondVal = array[secondIdx];
      let sortedNums = swap(firstVal, secondVal);
      array[firstIdx] = sortedNums[0];
      array[secondIdx] = sortedNums[1];
    }
  }
}

const swap(a, b) {
  if (arguments.length === 1) {
    throw('only one argument');
  }

  if (a > b) {
    return [b, a];
  } else {
    return [a, b];
  }
}
