//number array
var numbers = [1,2,3];
var doubleNumbers=[];
//Takes number 1 and pass it to iterator function and 1 multiplies by 2 and returns the result...and do it for following 2,3 and so on.....
for(var i=0;i<numbers.length;i++){
    doubleNumbers.push(numbers[i]*2);
}
doubleNumbers;