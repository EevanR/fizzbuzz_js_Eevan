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
### Explain why we are moving (number % 5 === 0) to the top?
- A logical order of operations. 3 and 5 both divide into many numbers. If it were the other way around the code would stop running on Fizz for many numbers before checking if they were divisible by 5.

## Question 5
### Explain the difference between feature and unit test.
- feature tests test how page it self functions, ei. clicking a button, or the controlling aspects of the browser
- unit tests test things like functions and the operation of classes and their methods by passing in the required values

## Question 6
### Explain what this following code does
```
describe('User can input a value and get FizzBuzz results', () => {
    before(async () => {
        await  browser.init()
        await  browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await  browser.page.reload();
    })

    after(async ()=> {
        await  browser.close();
    })
})
```
- 1st we wait for browser to initialize
- Then we wait for localhost to be opened
- before each test, we wait for browser to reload
- after tests, we wait for browser to close.

## Question 7
### Explain what expectations in the context of testing are.
- what is expected to happen when the code in the test runs.

## Question 8
### Write a line to line explanation of what is happening in this code
```
<script src="js/fizzbuzz.js"></script>

1    <script> 
2        document.addEventListener('DOMContentLoaded', () => {  
3           let button = document.getElementById('button')
4            let displayDiv = document.getElementById('display_answer')
5            button.addEventListener('click', () =>{
6                let value = document.getElementById('value').value
7                let fizzBuzz = new FizzBuzz
8                let result = fizzBuzz.check(value)
9                displayDiv.innerHTML = result;
           })
        })
    </script>
```
1. Allows js code to be used in html file
2. "listens" for "the event", DOMContentLoaded(HTML document has been completely loaded), called on document (target) 
3. returns button element and saves it to button variable
4. returns div element and saves it to displayDiv variable
5. "listens" for the event 'click', on button input through the button variable, sets up function to be called when 'click'
6. takes value of  id 'value', the text input, calls .value on it, specifies value of text, saves it to variable value
7. saves new instance of FizzBuzz function to fizzBuzz variable
8. calls .check function on new fizzBuzz instance, passes in value of text saved to let value, saves output to result variable
9. innerHTML called to set result in display_answer div