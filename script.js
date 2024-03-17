let array = [1, 2, 3, 4, 5, 6, 7];
function removeElement(array, item){
if(item <= 7){
    return array.filter(function(num){
        return num !== item;
    })
};
return array;
};

array = removeElement(array,2);
console.log(array);