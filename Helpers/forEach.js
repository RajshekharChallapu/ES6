//created array of strings and assigned it to colors..colors is now array
var colors = ['red', 'blue', 'green'];

//old way //for loop
for (var i= 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//works sameway as for loop
//forEach helper method..passed annonymous function
colors.forEach(function(color){//iterator function takes each element from array colors
    console.log(color);
});