#!/usr/bin/node

function fibs(num) {
  const myArray = [0, 1];
  for (let i = 2; i < num; i += 1) {
    const nextNum = myArray[i - 1] + myArray[i - 2];
    myArray.push(nextNum);
  }
  return myArray;
}

function fibsRec(num) {
  if (num === 0) {
    return [0];
  }
  if (num === 1) {
    return [0, 1];
  }
  const myArray = fibsRec(num - 1);
  return [...myArray, myArray[num - 2] + myArray[num - 1]];
}

console.log(fibsRec(8));
