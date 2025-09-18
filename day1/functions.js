obj1 = {}

function sum(a,b){
    return a+b+1;
}
obj1.sum = sum

var sum= (a,b)=>{
    return a+b;
}

var r1 = sum(9,8,7,6);
console.log(r1)

var r2 = obj1.sum(9,8,7);
console.log(r2)

