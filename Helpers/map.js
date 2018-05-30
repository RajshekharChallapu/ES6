
//map is used whenever we want to modify some list of array data.....
var cars = [
    { model: 'Buick', price:'CHEAP' },
    {model:'Camaro', price:'expensive'}
];

var prices= cars.map(function(){
return cars.price;
});


prices;