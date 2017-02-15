'use strict';

 
function bubbleSort(array){
  var done= false;
  while(!done){
  done=true;
  for(var i=1; i< array.length; i++){
  if (array[i-1] > array[i]){
    done=false;
    [array[i-1], array[i]]= [array[i], array[i-1]];
  }
}
}
return array;
}
console.log(bubbleSort([6, 5, 3, 1, 8, 7, 2, 4]));
