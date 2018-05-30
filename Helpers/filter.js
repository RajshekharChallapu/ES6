
//.filter() when you want to select a subset of multiple elements from an array.
//The filter() method creates a new array with all elements that pass the test implemented by the provided function.
var products = [
  { name: "cucumber", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "celery", type: "vegetable" },
  { name: "orange", type: "fruit" }
];

var filteredProducts = [];
//takes out of element from source array, pass it into our iterator function …this iterator functiuon has to return either the truthy or falsey values….if it is true it will included in new result array..if it is false it won’t..
for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    filteredProducts.push(products[i]);
  }
}
filteredProducts;
products.filter(function(product){
/* if(product.type === 'vegetable'){
    return true;} */

    return product.type === 'fruit';
    

});
