// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order, and each of their nodes contains a single digit. 
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

// Example 1:


// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

//solution

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
l1 = [2, 4, 3], l2 = [5, 6, 4]
addTwoNumbers(l1, l2);
function addTwoNumbers(l1, l2) {
    console.log(l1, l2)
    let num1 = getNumbersFromList(l1)
    let num2 = getNumbersFromList(l2)
    let sum = num1 + num2
    let result = []
    sum = sum.toString()
    for (let i = 0; i < sum.length; i++) {
        result.unshift(parseInt(sum[i]));
    }
    console.log(result)
    return result;
};
function getNumbersFromList(list) {
    let num = 0
    for (let i = list.length - 1; i >= 0; i--) {
        num = num + (list[i] * (10 ** i));
    }
    return num
}