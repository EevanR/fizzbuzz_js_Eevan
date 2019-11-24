function FizzBuzz() {
    this.check = (number) => {
        if (number % 15 === 0) {
            return "FizzBuzz... you'll never get these 2 mins of your life back.";
        } else if (number % 5 === 0) {
            return "Buzz... nothing else really to see here";
        } else if (number % 3 === 0) {
            return "Fizz - ... yup, that's it";
        } else {
            return number
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = FizzBuzz;
}
