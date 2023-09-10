// const COLOR_RED = "#F00";
// const COLOR_GREEN = "#0F0";
// const COLOR_BLUE = "#00F";
// const COLOR_ORANGE = "#FF7F00";

// // ...when we need to pick a color
// let color = COLOR_ORANGE;
// alert(color); // #FF7F00
// window.alert("Hello world!");
// alert("Hello world!");
// let number = prompt("Enter number", "number goes here");
// console.log(number);
// const agree = confirm("Are you sure you like to delete? ");
// console.log(agree); // result will be true or false based on what you click on the dialog box
// let text;
// if (confirm("Press a button!") == true) {
//   text = "You pressed OK!";
// } else {
//   text = "You canceled!";
// }
// const now = new Date();
// console.log(now.getHours());
// const now = new Date();
// console.log(now); // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
// function showMessage() {
//   alert("Hello everyone!");
// }

// showMessage();
// function printFullName() {
//   let firstName = "Asabeneh";
//   let lastName = "Yetayeh";
//   let space = " ";
//   let fullName = firstName + space + lastName;
//   alert(fullName);
// }

// printFullName(); // calling a function
// function sumAllNums() {
//   alert(arguments);
// }

// sumAllNums(1, 2, 3, 4);
// Higher  order function
// const radius = [3, 1, 2, 4];
// const area = function (radius) {
//   return Math.PI * radius * radius;
// };
// const circumference = function (radius) {
//   return 2 * Math.PI * radius;
// };
// const diameter = function (radius) {
//   return 2 * radius;
// };

// const calculate = function (radius, logic) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(logic(radius[i]));
//   }
//   return output;
// };
// // calling block
// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));
//map(),filter(),reduce()//IN Higher order function

/*Map() function :=The map() method is used for creating a
new array from an existing one, applying a function to
each one of the elements of the first array.
*/
// const arr = [5, 1, 3, 2, 6];
// function double(x) {
//   return x * 2;
// }
// function triple(x) {
//   return x * 3;
// }
// function binary(x) {
//   return x.toString(2);
// }
// const arr1 = arr.map(double);
// const arr2 = arr.map(triple);
// console.log(arr1);
// console.log(arr2);
// // Converting to a binary of an array
// const arr3 = arr.map(binary);
// console.log(arr3);
// // Another form of this hof
// const arr4 = arr.map(function binary(x) {
//   return x.toString(2);
// });
// console.log(arr4);

// // dealing with a arrow function
// const number = [1, 2, 3, 4];
// const double1 = number.map((item) => item * 2);
// console.log(double1);

// // filter() method := The filter() method takes each
// // element in an array and it applies a conditional
// // statement against it. If this conditional returns
// // true, the element gets pushed to the output array.
// // If the condition returns false, the element does
// //  not get pushed to the output array.
// const arr5 = [1, 2, 3, 4, 5];
// const evens = arr5.filter((item) => item % 2 === 0);
// console.log(evens);
// // setInterval function
// // function sayHello() {
// //   console.log("Hello");
// // }
// // setInterval(sayHello, 1000); // it prints hello in every second, 1000ms is 1s
// // setTimeout function
// // function sayHello() {
// //   console.log("Hello");
// // }
// // setTimeout(sayHello, 1); // it prints hello in every second, 1000ms is 1s
// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((x) => (sum += x));
// console.log(sum);
// const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
// countries.forEach((x) => console.log(x.toUpperCase()));
// const numbers1 = [1, 2, 3, 4];
// const sum1 = numbers1.reduce(function (result, item) {
//   return result + item;
// }, 1);
// console.log(sum1); // 10
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const ages = [24, 22, 25, 32, 35, 18];

// const result = names.findIndex((name) => name.length > 17);
// console.log(result); // 0

// // const age = ages.findIndex((age) => age < 20);
// console.log(age); // 5

// /sets and map
// Sets  = it is a special type of collection of values
//  in which each value occur at once ie unique value .

let set = new Set();
const arr = [1, 2, 3, 4, 5, 7];
let s = new Set(arr);
console.log(s);
s.add(8);
console.log(s);
s.delete(8);
console.log(s);
obj1 = { name: "shubhu", sname: "vishwu" };
s.add(obj1);
console.log(s);
// s.clear();//to empty a set
// console.log(s);
// has() it is used to check whether an element is present
// in set
// console.log(s.has(obj1));
// for (let new1 of s) {
//   console.log(new1);
// }
// s.forEach((x) => console.log(x));
console.log(s.keys());
console.log(s.values());
console.log(s.entries());
// intersection of two sets .This could be done by using filter method
let a = [1, 2, 3, 4, 5, 6];
let b = [4, 5, 6, 7, 8, 9];
let s1 = new Set(a);
let s2 = new Set(b);
let a1 = a.filter((x) => s2.has(x));
console.log(new Set(a1));

// difference of two sets
let a3 = [1, 2, 3, 4, 5, 6];
let b3 = [4, 5, 6, 7, 8, 9];
let s3 = new Set(a);
let s4 = new Set(b);
let a7 = a3.filter((x) => !s4.has(x));
let c = new Set(a7);
console.log(c);
console.log(c.size);
//  map
let mymap = new Map();
console.log(mymap);
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits);
for (let [x, y] of fruits) {
  console.log(x, y);
}
fruits.forEach((x, y) => {
  console.log(x, y);
});
console.log(fruits.entries());
// Destructing and Spreading
// Destructive is some what unpacking arrays and object
// and assigning to distinct variable
// const arr4 = [1, 2, 3];
// let [x, y, z] = arr4;
// console.log(x, y, z);
// const objz = { name: "shubhu", age: 23, sex: "Male" };
// const { x1, y1, z1 } = objz;
// console.log(x1, y1, z1);
// console.log(objz.name, objz.age, objz.sex);

const objz1 = { a: 1, b: 2 };
const { al, bl } = objz1;
console.log(al, bl);
// We can use default value in case the value of array for that index is undefined:
// const names = [undefined, "Brook", "David"];
const names = ["sachin", "Brook", "David"];
let [
  firstPerson = "Asabeneh",
  secondPerson,
  thirdPerson,
  fourthPerson = "John",
] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);
console.log(names);

// use of ...rest (spread operator)
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, , num3, ...rest] = nums;
console.log(num1, num3);
console.log(rest);
// Destructuring Object
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};
let { width, height, area, perimeter = 56 } = rectangle;

console.log(width, height, area, perimeter);
console.log(rectangle);

// destructuring object parameter
// Let us create a function which give information about the person object with destructuring
// const getPersonInfo = ({
//   firstName,
//   lastName,
//   age,
//   country,
//   job,
//   skills,
//   languages,
// }) => {
//   const formattedSkills = skills.slice(0, -1).join(", ");
//   const formattedLanguages = languages.slice(0, -1).join(", ");

//   personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
//     skills[skills.length - 1]
//   }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`;

//   return personInfo;
// };
// console.log(getPersonInfo(person));

// destructing object during iteration
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
  {
    task: "Assess Test Result",
    time: "4/1/2020 1:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

// Modifying or changing the object
//  while copying
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser = { ...user, title: "instructor" };
console.log(copiedUser);
console.log(user);

// REGULAR EXPRESSION
const regex = /very/g;
const str1 = "i am very excited very very much excited.";
console.log(str1.replace(regex, "much"));
const s5 = "i am very excited very very much excited.";
// let pattern = "love";
// let regEx = new RegExp(pattern);
// console.log(regEx);

const str = "I love JavaScript love";
const pattern1 = /love/g;
const result = str.match(pattern1);
console.log(result);

const str3 = "I love JavaScript Love";
const pattern3 = /Love/g;
const result3 = pattern3.test(str3);
console.log(result3);

const str4 = "I love JavaScript love";
const pattern4 = /klblnhh/;
const result4 = str4.search(pattern4);
console.log(result4);

const txt =
  "Python is Python  the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language";
matchReplaced = txt.replace(/Python/, "JavaScript");
console.log(matchReplaced);

// const pattern = "[Aa]pple"; // this square bracket means either A or a
// const txt1 =
//   "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
// const matches = txt1.match(pattern);
// console.log(matches);

// const pattern5 = /[Aa]pple/; // this square bracket means either A or a
// const txt5 =
//   "Apple and banana are fruits. An old cliche says an apple a day keeps the  doctor way has been replaced by a banana a day keeps the doctor far far away. ";
// const matches5 = txt5.match(pattern5);

// console.log(matches5);

const pattern6 = /\d+/g; // d is a special character which means digits
const txt6 = "This regular expression example was made in January 12,  2020.";
const matches6 = txt6.match(pattern6);

console.log(matches6); // ["12", "2020"], this is not what we want

const pattern7 = /[a].+/g; // this square bracket means a and . means any character except new line
const txt7 = "Apple and banana are fruits";
const matches7 = txt7.match(pattern7);

console.log(matches7); // ["an", "an", "an", "a ", "ar"]

const txt8 = "This regular expression example was made in December 6,  2019.";
const pattern8 = /\\b\w{4}\b/g; //  exactly four character words
const matches8 = txt8.match(pattern8);
console.log(matches8); //['This', 'made', '2019']

console.log("%c30 Days Of JavaScript", "color:green"); // log output is green
console.log(
  "%c30 Days%c %cOf%c %cJavaScript%c",
  "color:green",
  "",
  "color:red",
  "",
  "color:yellow"
); // log output green red and yellow text

console.warn("This is a warning");
console.warn(
  "You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!"
);
console.warn("Warning is different from error");

console.error("This is an error message");
console.error("We all make mistakes");

const names1 = ["Asabeneh", "Brook", "David", "John"];
console.table(names1);

const users = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
console.table(user);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

const countries1 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop");
for (let i = 0; i < countries1.length; i++) {
  console.log(countries1[i][0], countries1[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries1) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries1.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");

console.info("30 Days Of JavaScript challenge is trending on Github");
console.info("30 Days Of fullStack challenge might be released");
console.info("30 Days Of HTML and CSS challenge might be released");

console.assert(4 > 3, "4 is greater than 3"); // no result
console.assert(3 > 4, "3 is not greater than 4"); // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`;
  console.log("the # is " + i);
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
}

// console.group();
const names0 = ["Asabeneh", "Brook", "David", "John"];
const countries0 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const user0 = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const users0 = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names");
console.log(names0);
console.groupEnd();

console.group("Countries");
console.log(countries0);
console.groupEnd();

console.group("Users");
console.log(user0);
console.log(users0);
console.groupEnd();

const func = () => {
  // console.log("Function has been called");
  console.count("Function has been called");
};
func();
func();
func();

console.clear(); //this method is basically used to cleamns the browser console

// classes in javascript
class my_class {
  constructor(fname, lname) {
    // class constructor
    console.log(this);
    this.fname = fname;
    this.lname = lname;
  }
}

// creating object
// const person = new my_class("shubham", "Vishwakarma");
// console.log(person);
// output:
//my_class {fname: 'shubham', lname: 'Vishwakarma'}

class Person1 {
  constructor(firstName, lastName) {
    console.log(this); // Check the output from here
    this.firstName = firstName;
    this.lastName = lastName;
    // console.log(firstName, lastName);
  }
}

const person2 = new Person1("shubhu", "vishwu");
console.log(person2);
console.log(person2.firstName, person2.lastName);

class Person2 {
  constructor(firstName, lastName) {
    // console.log(this); // Check the output from here
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person21 = new Person2("Asabeneh", "Yetayeh");
const person22 = new Person2("Lidiya", "Tekle");
const person23 = new Person2("Abraham", "Yetayeh");

console.log(person21);
console.log(person22);
console.log(person23);

class Personz {
  constructor(
    firstName = "Asabeneh",
    lastName = "Yetayeh",
    age = 250,
    country = "Finland",
    city = "Helsinki"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person1z = new Personz(); // it will take the default values
const person2z = new Personz("Lidiya", "Tekle", 28, "Finland");

console.log(person1z);
console.log(person2z);

class Personz3 {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const person13z = new Personz3(
  "Asabeneh",
  "Yetayeh",
  250,
  "Finland",
  "Helsinki"
);
const person23z = new Personz3("Lidiya", "Tekle", 28, "Finland", "Espoo");

console.log(person13z.getFullName());
console.log(person23z.getFullName());

class Animal {
  constructor(name) {
    this.name = name;
  }
  get name1() {
    return this.name;
  }
  set setter_name(name1) {
    this.name = name1;
  }
}
// creating Object
const objs1 = new Animal("Jimmy");
console.log(objs1.name1);
objs1.name = "bruno";
console.log(objs1.name);
console.log(objs1 instanceof Animal);

class Animals {
  constructor(name) {
    this.name = name;
  }
  walk() {
    // console.log("Animals are" + this.name + "Walking.");
    // console.log("Animals are" + Animals.capitalize(this.name + "Walking.");

    return (
      "Animals Like" + " " + Animals.capitalize(this.name) + " " + "is Walking."
    );
    // return ("Animals Like" + " " + Animals.capitalize(this.name) + " " + "is Walking.");
  }
  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.substr(1, name.length);
  }
}

// creating object
const objzg1 = new Animals("bruno");
objzg1.walk();
console.log(objzg1.walk());

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + " it is a " + this.model;
  }
}
let ob = new Car("Honda");
let myCar = new Model("Mustang");
// console.log(myCar);
console.log(myCar.show());

// JSON
console.clear();
