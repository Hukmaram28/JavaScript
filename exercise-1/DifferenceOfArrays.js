var array1=[1,2,3,6,2,5,8,9,18,19];
var array2=[1,2,3,6,2,5,8,9,11,18];
var result=[];
for(let i=0;i<array1.length;i++){
    if(array2.indexOf(array1[i])== -1){
        result.push(array1[i]);
    }
}
for(let i=0;i<array2.length;i++){
    if(array1.indexOf(array2[i])== -1){
        result.push(array2[i]);
    }
}
console.log(result);