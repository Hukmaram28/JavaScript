var array=[1,2,3,6,2,5,8,9];
var result=[];
for(let i=0;i<array.length;i++){
    if(result.indexOf(array[i])== -1){
        result.push(array[i]);
    }
}
console.log(result);