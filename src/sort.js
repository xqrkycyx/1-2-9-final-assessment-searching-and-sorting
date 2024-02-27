/**
 * A sort algorithm that implements a stable sort
 * @param {function} compare The comparator function used in sorting
 * @param {array} elements The array to be sorted
 */
function sort(compare, elements) {
  if (elements.length <= 1) {
    return elements;
  }

  const mid = Math.floor(elements.length / 2);
  const left = elements.slice(0, mid);
  const right = elements.slice(mid);

  return merge(sort(compare, left), sort(compare, right), compare);
}

function merge(left, right, compare) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (compare(left[leftIndex], right[rightIndex]) <= 0) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

module.exports = sort;
