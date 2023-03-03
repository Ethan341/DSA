let arr =  [1,2,   3,4,     5,6,    7,8    ,9];
// output =[2,1   4,3,    6,5,     8,7,    9] 
swapElementsOfArray(arr);
 function swapElementsOfArray(array){
    for(let i=0; i<array.length; ){
        if( array[i+1]){
           let a = array[i];
           array[i] = array[i+1];
           array[i+1] = a
        }
        if( i == 0){
           i = 2;
        }else {
           i = i + 2 
        } 
    }
    return array
 }