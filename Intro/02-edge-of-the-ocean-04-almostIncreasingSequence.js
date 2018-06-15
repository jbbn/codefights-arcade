/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
*/

const almostIncreasingSequence = sequence => {
  let i = 0
  for (; i < sequence.length; i++) {
    let curr = sequence[i]
    let next = sequence[i + 1]
    let prev = sequence[i - 1]

    if (curr >= next) {
      if (curr > prev) {
        if (next > prev) {
          sequence.splice(i, 1)
        } else {
          sequence.splice(i + 1, 1)
        }
      } else {
        sequence.splice(i, 1)
      }

      break
    }
  }

  for (; i < sequence.length; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      return false
    }
  }

  return true
}
