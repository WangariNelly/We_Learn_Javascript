// Array as iterable
let numbers = [1, 2, 3, 4, 5];
for (let num of numbers) {
  console.log(num);
}

// String as iterable (iterates over characters)
let message = "Hello World!";
for (let char of message) {
  console.log(char);
}

// Custom iterable (number range)
class NumberRange {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.current = start - 1; // Initialize before first value
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    this.current++;
    if (this.current <= this.end) {
      return { value: this.current, done: false };
    } else {
      return { done: true };
    }
  }
}

// Using custom iterable
let range = new NumberRange(10, 15);
for (let num of range) {
  console.log(num);
}
