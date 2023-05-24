function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const midIndex = Math.floor(array.length / 2);
  const leftHalf = mergeSort(array.slice(0, midIndex));
  const rightHalf = mergeSort(array.slice(midIndex));
  const myArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftHalf.length && rightIndex < rightHalf.length) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      myArray.push(leftHalf[leftIndex++]);
    } else {
      myArray.push(rightHalf[rightIndex++]);
    }
  }
  for (leftIndex; leftIndex < leftHalf.length; leftIndex++) {
    myArray.push(leftHalf[leftIndex]);
  }
  for (rightIndex; rightIndex < rightHalf.length; rightIndex++) {
    myArray.push(rightHalf[rightIndex]);
  }
  return myArray;
}

console.log(mergeSort([2, 3, 5, 4, 7, 6, 1, 500]));
