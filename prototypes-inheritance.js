// example one to define a class
// function Animal(name){
//     this.name = name;
// }

// Animal.prototype.speak = function() {
//     return `${this.name} makes a noise.`
// };

// const animal1 = new Animal("dog");
// console.log(animal1.speak());

// function Dog(name,breed){
//     Animal.call(this, name);
//     this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Dog.prototype.speak = function(){
//     return `${this.name} barks`;
// };

// const d = new Dog('Golden', 'retreiver');
// console.log(d.speak());

// example 2 of creating a class

class Shape {
    // #color;
    static #description = "this is a shape"
    constructor(color) {
        this.color= color;
    }
    describle(){
        return `A ${this.color} shape.`;
    }
}

console.log(Shape.description);

class Circle extends Shape {
    constructor(color, radius){
        super(color);
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius * this.radius;
    }
}

class Square extends Shape{
    constructor(color, side){
        super(color);
        this.side = side;
    }
    area(){
        return this.side * this.side;
    }
}

const circle = new Circle('red', 5);
console.log(circle.describle());
console.log(circle.area());
 
const square = new Square('yellow', 22);
console.log(square.describle());
console.log(square.area());