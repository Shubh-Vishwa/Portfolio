const text = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myArr = JSON.parse(text);
console.log(text);

const obj1 = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj1);

const text1 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text1);
obj2 = new Date(obj.birth);
console.log(obj);
console.log(obj2);

const obj3 = { name: "John", age: 30, city: "New York" };
console.log(JSON.stringify(obj3));

const arrz = ["John", "Peter", "Sally", "Jane"];
console.log(typeof arrz);

const myJSON = JSON.stringify(arrz);
console.log(myJSON);
console.log(typeof myJSON);

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

const txt = JSON.stringify(users, undefined, 4);
console.log(txt); // text means JSON- because json is a string form of an object.

// Promise
// Promise
const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.length > 0) {
      resolve(skills);
    } else {
      reject("Something wrong has happened");
    }
  }, 2000);
});

console.log(doPromise);
doPromise.then((result) => {
  // console.log(result);
});
doPromise.catch((error) => console.log(error));

// fetch API
const url = "https://restcountries.com/v2/all"; // countries api
fetch(url)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    // getting the data
    console.log(data);
  })
  .catch((error1) => console.error(error1)); // handling error if something wrong happens

const countriesAPI = "https://restcountries.com/v2/all";

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      console.log(`Country: ${country.name}`);
      console.log(`Capital: ${country.capital}`);
      console.log(
        `Languages: ${country.languages.map((lang) => lang.name).join(", ")}`
      );
      console.log(`Population: ${country.population}`);
      console.log(`Area: ${country.area}`);
      console.log("------------------------");
    });
  })
  .catch((error) => console.log(error));

console.clear();

function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}
const innerFunc = outerFunction();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());
