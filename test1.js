class Product{
    constructor(name, price){
        Object.defineProperty(this, 'name',{
            Value : name,
            writable: false,
            configurable: false,
            enumarable: true
        });
        this.price = price;
    }


}

class ShoppingCart {
    constructor(products){
        this.products = [];
    }


    addProduct(product){
        this.products.push(product);
    }

    removeProduct(productName){
        this.products = this.products.filter( p => p.name !== productName);
    }

    calculateTotal(){
        return this.products.reduce((total, p) => total + p.price,0)
    }
}

const product1 = new Product('Water bottle',20);
const product2 = new Product('watch',2000);
const product3 = new Product('rice',60);

const cart = new ShoppingCart()

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

console.log('Total price:', cart.calculateTotal());

cart.removeProduct('rice');
console.log(cart.products)
