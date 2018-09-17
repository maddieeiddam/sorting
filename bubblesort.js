function bubbleSort(array) {
  if (array.length === 1 || array.length === 0) return array;
  for (let indx1 = 0; indx1 < array.length - 1; indx1++) {
    let indx2 = indx1 + 1;
    let swapped = swap(array[indx1], array[indx2]);
    array[indx1] = swapped[0];
    array[indx2] = swapped[1];
  }
  let maxVal = array[array.length - 1];
  let unsortedArray = array.slice(0, array.length - 1);
  return bubbleSort(unsortedArray).concat(maxVal);
}
console.log(bubbleSort([5, 3, 2, 1, 4]));

function swap(a, b) {
  console.log('ran swap');
  if (arguments.length === 1) {
    return arguments[0];
  }
  else if (a > b) {
    return [b, a];
  } else {
    return [a, b];
  }
}
