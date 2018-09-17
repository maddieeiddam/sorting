function split(wholeArray) {
  /* your code here to define the firstHalf and secondHalf arrays */
  let length = wholeArray.length;
  let firstLength = Math.ceil(length / 2);
  let secondLength = length - firstLength; // ?
  let firstHalf = wholeArray.slice(0, firstLength);
  let secondHalf = wholeArray.slice(firstLength);

  return [firstHalf, secondHalf];
}

function merge(firstArr, secondArr) {
  let firstArrVal;
  let secondArrVal;
  let mergedArr = [];
  while (firstArr.length > 0 && secondArr.length > 0) {
    firstArrVal = firstArr.shift();
    secondArrVal = secondArr.shift();
    if (firstArrVal < secondArrVal) {
      mergedArr.push(firstArrVal);
      secondArr.unshift(secondArrVal);
    } else {
      mergedArr.push(secondArrVal);
      firstArr.unshift(firstArrVal);
    }
  }

  if (firstArr.length > 0) {
    mergedArr = mergedArr.concat(firstArr);
  } else {
    mergedArr = mergedArr.concat(secondArr);
  }
  return mergedArr;
}
