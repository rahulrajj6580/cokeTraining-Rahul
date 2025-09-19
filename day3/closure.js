function outer(){
    let count = 0;
    function inner(){
        count++;
        return count
    } 
    return inner;
}

const c= outer();
c();
c();
console.log(c());

function multiplyNum(num){
    return function(x){
        return x* num
    };
}

const double = multiplyNum(2);
console.log(double(5));