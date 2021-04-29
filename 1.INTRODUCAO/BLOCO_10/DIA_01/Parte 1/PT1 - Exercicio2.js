function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    item !== arr[index] ? newArr.push(arr[index]) : 0;
  }
  return newArr;
}

module.exports = myRemove;
