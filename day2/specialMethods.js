const obj = {
    match : "EPL"
};

Object.freeze(obj);

obj.match = "Ucl";
console.log(obj.match);

console.log(Object.isFrozen(obj))