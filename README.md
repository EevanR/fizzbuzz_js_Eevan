global.browser = new BrowserHelpers()
global.expect = chai.expect;

allowing BrowseHelpers and chai.expect to be run in the global scope throughout all files of the root folder

## Question 2
- We want it to be accessable to all tests, not just the 1st it block