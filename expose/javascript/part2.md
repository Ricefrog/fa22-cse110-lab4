# Part 2 Answers

1. What will happen at line 12 and why? If the code causes an error, explain why.

`3`, the value of `i`, is printed. The reason for this is because the variable `i` in the for loop
was declared using `var`, so it is still within scope past the end of the loop. `i` is `3`
because `prices.length` is `3` so `i` had to be `3` when the loop condition `i < prices.length`
was violated.

2. What will happen at line 13 and why? If the code causes an error, explain why. 

`150`, the value of `discountedPrice`, is printed. This is because `discountedPrice` was 
declared with the `var` keyword so it is still visible past the end of the loop body. 
The last value assigned to `discountedPrice` is `150` because 
the variables declaration expression is `prices[i] * (1 - discount)` 
and `prices[2] = 300` and `discount = 0.5`.

3. What will happen at line 14 and why? If the code causes an error, explain why. 

`150`, the value of `finalPrice`, is printed. The last value assigned to `finalPrice` is `150` 
because that is the result of the expression to which it was assigned, 
`Math.round(discountedPrice * 100) / 100` where `discountedPrice` is `150` as explained in the
previous question.

4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.

The function will return an array populated with the values `[50, 100, 150]` because the 
function creates an empty array and pushes each element of `prices` to it after the `discount`
has been applied.

5. What will happen at line 12 and why?  If the code causes an error, explain why.

```
/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part2-question5.js:12
        console.log(i);
                    ^

ReferenceError: i is not defined
    at discountPrices (/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part2-question5.js:12:14)
    at Object.<anonymous> (/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part2-question5.js:19:1)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:82:12)
    at node:internal/main/run_main_module:23:47
```

### Explanation: `i` was declared with the `let` keyword in a loop header, so the variable goes out of scope once the loop ends. Therefore, it is no longer available on line 12.

6. What will happen at line 13 and why? If the code causes an error, explain why.

```
/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part2-question6.js:13
        console.log(discountedPrice);
                    ^

ReferenceError: discountedPrice is not defined
    at discountPrices (/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part2-question6.js:13:14)
    at Object.<anonymous> (/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part2-question6.js:19:1)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:82:12)
    at node:internal/main/run_main_module:23:47
```
### Explanation: `discountedPrice` was declared with the `let` keyword in a loop body, so the variable's scope is only within the loop body. Therefore, it is no longer available outside of the loop on line 13.

7. What will happen at line 14 and why? If the code causes an error, explain why.

`150`, the value of `finalPrice`, is printed. The last value assigned to `finalPrice` is `150` 
because that is the result of the expression to which it was assigned, 
`Math.round(discountedPrice * 100) / 100` where `discountedPrice` is `150` as explained in a
previous question.

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.

The function will return an array populated with the values `[50, 100, 150]` because the 
function creates an empty array and pushes each element of `prices` to it after the `discount`
has been applied.

9. What will happen at line 11 and why? If the code causes an error, explain why.

```
/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part2-question9.js:11
        console.log(i);
                    ^

ReferenceError: i is not defined
    at discountPrices (/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part2-question9.js:11:14)
    at Object.<anonymous> (/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part2-question9.js:17:13)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:82:12)
    at node:internal/main/run_main_module:23:47
```

### Explanation: `i` was declared with the `let` keyword in a loop header, so the variable goes out of scope once the loop ends. Therefore, it is no longer available on line 11.

10. What will happen at line 12 and why? If the code causes an error, explain why.

`3`, the value of `length`, is printed because `length` is assigned to `prices.length` with
a `const` declaration and never altered.

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.

The function will return an array populated with the values `[50, 100, 150]` because the 
function creates an empty array and pushes each element of `prices` to it after the `discount`
has been applied. The reason an error isn't thrown even though `discount` is declared as
`const` is because `discount` just stores a reference to an array and that value is never
altered despite the array's contents change.

12. 
    Given the above Object, write the notation for:

        A. Accessing the value of the name property in the student object
            `student.name`
        B. Accessing the value of the Grad Year property in the student object
            `student['Grad Year]`
        C. Calling the function for the greeting property in the student object
            `student.greeting()`
        D. Accessing the name property of the object in the Favorite Teacher property in student
            `student['Favorite Teacher'].name`
        E. Access index zero in the array of the courseLoad property of the student object
            `student.courseLoad[0]`

13. 
    Arithmetic

        A. ‘3’ + 2  = '32' 
            Explanation: 2 is mapped to its string representation '2'.
        B. ‘3’ - 2 = 1
            Explanation: '3' is mapped to its number represenation 3. The reason '3' is converted to an int rather than 2 being converted to a string is because subtraction is not a valid operation for strings.
        C. 3 + null = 3
            Explanation: null is converted to its number value of 0.
        D. ‘3’ + null = '3null'
            Explanation: null is converted to its string representation 'null'.
        E. true + 3 = 4
            Explanation: true is converted to its number value of 1.
        F. false + null = 0
            Explanation: false is converted to its number value of 0. null is converted to its number value of 0. 0 + 0 = 0.
        G. '3' + undefined = '3undefined'
            Explanation: undefined is converted to its string representation of 'undefined'.
        H. '3' - undefined = NaN
            Explanation: First  '3' is converted to its number represenation of 3. The operation 3 - undefined returns NaN (not a number) because undefined is converted to NaN and any operation with NaN will return NaN.

14. Comparison

        A. ‘2’ > 1 = true
            Explanation: '2' gets converted to number representation of 2. 2 > 1 is true.
        B. ‘2’ < ‘12’ = false
            Explanation: Both operands are left as strings and a string comparison is done one character at a time. Because '2' < '1' is not true, the expression evaluates to false.
        C. 2 == ‘2’ = true
            Explanation: The non-strict equality operator is used so '2' is converted to numeric 2 and the expression evaluates to true.
        D. 2 === ‘2’ = false
            Explanation: The strict equality operator is used so no type conversion is done. Since the operands are different types the expression evaluates to false.
        E. true == 2 = false
            Explanation: true is converted to its numeric representation of 1. 1 == 2 is false.
        F. true === Boolean(2) = true
            Explanation: Boolean(2) evaluates to true. true === true evaluates to true.

15. Explain the difference between the == and === operators.

== is a non-strict equality operator and will perform type conversion when applicable. 

=== is a strict equality operator and will automatically evaluate to false if the operands have different types.

17. 

```
function modifyArray(array, callback) {
	const newArr = [];
	for (let i = 0; i < array.length; i++) {
		newArr.push(callback(array[i]));
	}
	return newArr;
}

function doSomething(num) {
	return num*2;
}

modifyArray([1, 2, 3], doSomething);
```

If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. 

The result will be the array `[1, 2, 3]` but with each element multiplied by 2; `[2, 4, 6]`.

The function `modifyArray` takes two arguments, `array` and `callback`. 
`modifyArray` will create a new array, take each element of `array` and run `callback` on it, push the result into the new array, then return the new array.
In this example, the `callback` argument passed to the function is a function that returns the argument passed to it multiplied by 2.

19.

```
function  printNums() {
	console.log(1);
	setTimeout(function() { console.log(2); }, 1000);
	setTimeout(function() { console.log(3); }, 0);
	console.log(4);
}

printNums();
```

What is the output of the above code?

```
Output:
1
4
3
2
```

Explanation: `1` is printed immediately. Timeouts are set for `2` to print after 1 second and for `3` to print after 0 seconds. Because of the overhead of using the `setTimeout` function `4` is printed next, followed by `3`, and finally `2` after the 1 second delay is over.