class Product{
    constructor(name, price,quantity){
        Object.defineProperty(this, 'name',{
            value : name,
            writable: false,
            configurable: false,
            enumarable: true
        });
        this.price = price;
        this.quantity = quantity;
    }
    
    
}

export default Product;
