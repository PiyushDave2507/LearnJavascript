const arr = [1,-2,1,0,5];
const target = 0;


function equalsum(arr, target){
    for (let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === target){
             return true;
            }
        }
    }
    return false;
}
console.log(equalsum(arr, target));

