// 1. Declare and initialise a variable with a string value.
var name = "Frikk";

// 2. Create an object variable called person and give it two properties (a key and a value) of your choice.
var person = {
          name: "Frikk",
          age: 28
};

// 3. Create a variable called outOfStock and assign it a boolean value. Create an if else statement that checks the value of outOfStock. If it is true, console log "Out of stock". Otherwise log "In stock".
var outOfStock = true;

if(outOfStock === true){
          console.log("The item is out of stock");
}
else {
          console.log("The item is in stock");
}

// 4. Create an array of five numbers. Loop through the array and console log each value.
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++){
          console.log(numbers[i]);
}

// 5. Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop
for(var i = 15; i <= 25; i++) {
          console.log(i);
}

// 6. Using the same loop from the above question, only log the value of the counter variable if it is equal to 20.
for(var i = 15; i <= 25; i++) {
          if(i === 20){
          console.log(i);
}
}

// 7. Create an array of two objects. Each object must have the same three properties (with different values):
// one property with a string value
// one property with a number value
// one property with a boolean value
// Loop through the array and console log the number value and the boolean value.

var familyMembers = [
          {
                    name: "Kurt",
                    age: 54,
                    alive: true
          },
          {
                    name: "Oscar",
                    age: 210,
                    alive: false
          }
];

for(var i = 0; i < familyMembers.length; i++){
          console.log(familyMembers[i].age);
          console.log(familyMembers[i].alive);
}

// 8. Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.
function whatIDontLike (notLikeable){

// Inside the function, log the string "I don't like " together with the argument.          
console.log("I don't like " + notLikeable);
}

// Inside the function, subtract the second argument from the first and console log the result.
whatIDontLike("spiders");

// 9. Create a function that accepts two arguments. Inside the function, subtract the second argument from the first and console log the result.
function ageDifference(age1, age2){
          var sum = age1 - age2;
          console.log("The age difference is " + sum);
}

ageDifference(58, 27);

// 10. 
//Create an empty array.
var favoriteSport = [];

// Create a function that accepts one argument.
function sport (type){
          favoriteSport.push(type);
          console.log("My favorite sport is " + type);
}

sport("golf");



