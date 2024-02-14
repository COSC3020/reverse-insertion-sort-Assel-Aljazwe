[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/Bi-S25fM)
# Reverse Insertion Sort

Consider the code for insertion sort we covered in class:

```javascript
function insertionSort(arr) {
  for(var i = 1; i < arr.length; i++) {
    var val = arr[i];
    var j;
    for(j = i; j > 0 && arr[j-1] > val; j--) {
      arr[j] = arr[j-1];
    }
    arr[j] = val;
  }
  return arr;
}
```

Change this function such that it works from the end of the array rather than
the beginning, `insertionSortReverse()` -- only the direction of
iterating over the elements is reversed, the array is still sorted the same way
(ascending). Add your code in `code.js`. Test your new function; I've provided
some basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Average-Case Time Complexity of Insertion Sort

In the lectures, we covered that insertion sort has best-case time complexity of
$\Theta(n)$ and worst-case time complexity of $\Theta(n^2)$. What is the
average-case time complexity ($\Theta$)?

Hint: Think about what happens in each iteration of the loop, and how often the
loop is executed. Keep in mind that for asymptotic analysis we don't care about
constant factors.

Describe your reasoning and the conclusion you've come to. Your reasoning is
most important -- you can easily find the answer, but you need to demonstrate
that you've understood the concept. Add your answer to this markdown file.

## Reasoning and Conclusion

Insertion sort has an average-case complexity of $\Theta(n^2)$. This average case is reliant on the number of comparisons needed to place every element into its correct sorted position. As the sorting progresses, each element is compared to those that were previously sorted to find where the element fits. So in general, an element might need to be compared to about half of the elements that were already sorted on average because the unsorted element could belong at the start, end or maybe even the middle of the sorted section.

If we take an example, when sorting the third element, it usually gets compared to one or two of the previously sorted elements. As more elements are added to be sorted, the number of comparisons needed for each new element increases, since the sorted portion of the array grows.

Adding up all these comparisons needed across the entire array, the total number of operations required rises sharply with the array's size. Thus resulting in the average sorting time growing in proportion to the square of the number of elements (n<sup>2</sup>). Therefore, the average-case complexity for the Insertion Sort algorithm is $\Theta(n^2)$, showing that the time it takes to sort the array grows much faster than the size of the array. So as you add more elements to sort, the amount of work required to do this goes up a lot, making it take much longer to sort bigger arrays
