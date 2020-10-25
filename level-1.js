// 1. 
var name = "Frikk";

// 2. 
var person = {
          name: "Frikk",
          age: 28
};

// 3. 
var outOfStock = true;

if(outOfStock === true){
          console.log("The item is out of stock");
}
else {
          console.log("The item is in stock");
}

// 4. 
var numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++){
          console.log(numbers[i]);
}

// 5. 
for(var i = 15; i <= 25; i++) {
          console.log(i);
}

// 6. 
for(var i = 15; i <= 25; i++) {
          if(i === 20){
          console.log(i);
}
}

// 7. 
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

// 8. 
function whatIDontLike (notLikeable){

console.log("I don't like " + notLikeable);
}

whatIDontLike("spiders");

// 9. 
function ageDifference(age1, age2){
          var sum = age1 - age2;
          console.log("The age difference is " + sum);
}

ageDifference(58, 27);

// 10. 
var favoriteSport = [];

function sport (type){
          favoriteSport.push(type);
          console.log("My favorite sport is " + type);
}

sport("golf");



