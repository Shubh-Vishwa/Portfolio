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

function makeFunc() {
  const name = "Shubhu";
  function displayName() {
    return name;
  }
  return displayName();
}
const obj = makeFunc();
console.log(obj);

// const myFunc = makeFunc();
// myFunc();

// function divide(num1, num2) {
//   console.log("Result of dividing " + num1 + " by " + num2 + " is:" + num1/num2);
// }

// try{
//     divide(200,100);
//     //the folllowing line will cause the run time exception, as by mistake method name is wrong
//     divid(200,50);
//     console.log("The code from here does not execute")
//  }
//  catch(e){
//    console.log(e.message)
//    console.log(e.description)
//    console.log(e.stack)
//  }
//  console.log("This program is expected to be executed")

function divide(num1, num2) {
  console.log(
    "Result of dividing " + num1 + " by " + num2 + " is:" + num1 / num2
  );
}

try {
  divide(200, 100);
  //the folllowing line will cause the run time exception, as by mistake method name is wrong
  divid(200, 50);
  console.log("The code from here does not execute");
} catch (e) {
  console.log(e.message);
  console.log(e.description);
  console.log(e.stack);
} finally {
  console.log("Finally Block: This will be executed always");
}
console.log("This program is expected to be executed");

function divide(a, b) {
  if (b == 0) {
    throw {
      error: "Divide by zero",
      message: "Denominator cannot be zero",
      description: "User sent the denominator as zero",
    };
  }
}
try {
  divide(10, 0);
} catch (e) {
  console.log(e.error);
  console.log(e.message);
  console.log(e.description);
}
