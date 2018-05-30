
//map is used whenever we want to modify some list of array data.....
//.map() when you want to transform elements in an array.
var cars = [
    { model: 'Buick', price:'CHEAP' },
    {model:'Camaro', price:'expensive'}
];

var prices= cars.map(function(){
return cars.price;
});


prices;

//example
//Uising map,create a new array that contains the 'height' property of each object.Assign this new array to the variable 'heights'.Don't forget to use the 'return' keyword in the funciton\.
var images=[
    {heights:'40px', width:'40'},
    {heights:'70px', width:'50'},
    {heights:'80px', width:'60'}
];

var heights = images.map(function(){
    return images.height;
});
heights;