export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];

  for (const [idx, value] of array.entries()) {
    // var value = array[idx];
    newArr[idx] = appendString + value;
  }

  return newArr;
}
