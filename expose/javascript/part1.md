# Part 1 Answers

1. What is printed by line 9? If the code returns an error, explain why.

`Answer: 20`

2. What is printed by line 13? If the code returns an error, explain why. 

`Answer: 20`

3. What is printed by line 9? If the code returns an error, explain why.

`Answer: 20`

4. What is printed by line 13? If the code returns an error, explain why. 

```
/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part1-question3.js:7
        console.log("final result: ", result);
                                      ^

ReferenceError: result is not defined
    at sumValues (/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part1-question3.js:7:32)
    at Object.<anonymous> (/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part1-question3.js:10:1)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:82:12)
    at node:internal/main/run_main_module:23:47
```

### Explanation: The variable stored in result went out of scope due to assigning in a block with the `let` keyword.

5. What is printed by line 9? If the code returns an error, explain why.

```
/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part1-question5.js:4
                result = num1 + num2;
                       ^

TypeError: Assignment to constant variable.
    at sumValues (/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part1-question5.js:4:10)
    at Object.<anonymous> (/home/severian/fall_2022/cse_110/fa22-cse110-lab4/expose/javascript/part1-question5.js:10:1)
    at Module._compile (node:internal/modules/cjs/loader:1159:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1213:10)
    at Module.load (node:internal/modules/cjs/loader:1037:32)
    at Module._load (node:internal/modules/cjs/loader:878:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:82:12)
    at node:internal/main/run_main_module:23:47
```

### Explanation: The program throws an error before reaching line 9. This is because the variable `result` was declared as const but its value was reassigned.

6. What is printed by line 13? If the code returns an error, explain why. 

### Same as previous answer.
