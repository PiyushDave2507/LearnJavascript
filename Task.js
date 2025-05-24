const arr3 = [1, 2, 3, 6, 3, 6, 1];
const arr4 = [1,2,3,4,3]
function findDuplicates(arr) {
    const arr1 = {};
    const arr2 = [];


    for (const num of arr) {
      
     if(arr1[num] == 1){
        arr2.push(num);
        arr1[num]++;
     }else{
        arr1[num]=1;
     }
}
return arr2;
}

console.log(findDuplicates(arr3));
console.log(findDuplicates(arr4));