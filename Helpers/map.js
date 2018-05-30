
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

