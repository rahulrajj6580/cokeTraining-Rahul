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

export default Product;
