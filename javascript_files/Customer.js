class Customer {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // Getter for customer ID
    getCustomerId() {
        return this.id;
    }
    getCustomerName() {
        return this.name;
    }
    getCustomerEmail() {
        return this.email;
    }
    // Setters
    setCustomerEmail(email) {
        this.email = email;
    }
    setCustomerName(name) {
        this.name = name;
    }
    setCustomerId(id) {
        this.id = id;
    }
    // toString
    toString() {
        return `Customer [ID: ${this.id}, Name: ${this.name}, Email: ${this.email}]`;
    }


}

class Product {
    //constructor
    constructor(product_id, product_name, product_price) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_price = product_price;
    }
    //getters
    get_product_id() {
        return this.product_id;
    }
    get_product_name() {
        return this.product_name;
    }
    get_product_price() {
        return this.product_price;
    }
    //setters
    set_product_id(id) {
        this.product_id = id;
    }
    set_product_name(name) {
        this.product_name = name;
    }
    set_product_price(price) {
        this.product_price = price;
    }
    //toString
    toString() {
        return `Product ID: ${this.product_id}, Name: ${this.product_name}, Price: ${this.product_price}`;
    }
    //function 1
    calculate_total_cost(quantity) {
        return this.product_price * quantity;
    }
}

class Order {
    constructor(products, idproduct, idCustomer) {
        this.products = products;
        this.idproduct = idproduct;
        this.idCustomer = idCustomer;
    }

    // Getters
    getProducts() {
        return this.products;
    }

    getIdProduct() {
        return this.idproduct;
    }

    getIdCustomer() {
        return this.idCustomer;
    }

    // Setters
    setProducts(products) {
        this.products = products;
    }

    setIdProduct(idproduct) {
        this.idproduct = idproduct;
    }

    setIdCustomer(idCustomer) {
        this.idCustomer = idCustomer;
    }
    //toString
    toString() {
        return `Order with products: ${this.products.map(p => p.name).join(', ')}`;
    }
}
