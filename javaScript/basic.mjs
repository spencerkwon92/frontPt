import {name, age} from "module"

console.log(name, age);

// var counts = ["one", "two", "three", "four", "five"];
// var reversed = counts.reverse();

// console.log(counts);
// console.log(reversed);

let numbers = [5, 20, 10, 75, 50, 100];

numbers.sort((a,b)=>{return a-b});

// console.log(numbers);

let person = {
  name: "Peter",
  age: 28,
  gender: "Male"
};

person.country = "South Korea";
person["email"] = "spencer.kwon@familysearch.org";

console.log(person)

let w = screen.width;
let h = screen.height;

console.log(w, h);