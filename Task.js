const arr3 = [1, 2, 3, 6, 3, 6, 1];
const arr4 = [1,2,3,4,3]
const findDuplicates= (arr)=> {
    const arr1 = {};
    const arr2 = [];


    for (let i =0; i<arr.length; i++) {
     const num = arr[i]
     if(arr1[num] == 1){
        arr2.push(num);
        
     }
     arr1[num] = (arr1[num]|| 0) + 1;
}
// to make right order of output use sort function sorts the duplicate value based on the order they first appeared in the original array
 return arr2.sort();
}

console.log(findDuplicates(arr3));
console.log(findDuplicates(arr4));