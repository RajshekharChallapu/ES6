//regular for loop you have three steps:

//1.Define an iterator value: var i = 0;
//2.Define an end point: i < array.length;
//3.Tell how the loop how should iterate: i++;
//for loop 
var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  console.log(i);
}

//with .forEach() you simply pass a function that is executed on each element in the array

//   .forEach()   
var array =[1, 2, 3];
array.forEach(function(i) {
  console.log(i);
});

//When using the .forEach() you pass an individual function with it’s own scope. In a for loop you’re polluting whatever scope you place the loop in. Most, if not all, of the time, this is a bad thing.


//When to use
//.forEach() is great you need to execute a function for each individual element in an array. Good practice is that you should use .forEach() when you can’t use other array methods to accomplish your goal. I know this may sound vague, but .forEach() is a generic tool… only use it when you can’t use a more specialized tool.