const object1 = {
    a: 1,
    getA(){
        return this;
    }
}

console.log(object1.getA.call({test : 123}));
console.log(object1.getA());

const getARef = object1.getA;
const newGetA = getARef.bind({bindTest :123});
console.log(newGetA());