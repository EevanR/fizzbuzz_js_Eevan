## Question 1
### Explain
```
global.browser = new BrowserHelpers()
global.expect = chai.expect;
```

allowing BrowseHelpers and chai.expect to be run in the global scope throughout all files of the root folder

## Question 2
### Explain why we are placing the let fizzBuzz = new FizzBuzz outside the it block?
- We want it to be accessable to all tests, not just the 1st it block

## Question 3
### Explain the difference between using === and == in JS?
- '==' checks that values are equal regardles of type, while '===' will also check that the both value types used are the same ei. 2 === "2" will return false.

## Question 4
## Explain why we are moving (number % 5 === 0) to the top?
- A logical order of operations. 3 and 5 both divide into many numbers. If it were the other way around the code would stop running on Fizz for many numbers before checking if they were divisible by 5.
