function insertionSortReverse(array) {
  // Iterating through the array from the second-to-last element down to the first.
  for (var i = array.length - 2; i >= 0; i--) {
    var val = array[i];
    var j;
    // Start comparing backwards, looking for where to insert val.
    for (j = i; j < array.length - 1 && array[j + 1] < val; j++) {
      array[j] = array[j + 1];
    }
    // Ensure value is inserted at the correct position.
    array[j] = val;
  }
  return array;
}
