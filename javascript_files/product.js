// Product class definition
class Product {
    constructor(product_id, product_name, product_price) {
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_price = product_price;
    }

    toString() {
        return `${this.product_name}, Price: ${this.product_price}₪`;
    }

    calculate_total_cost(quantity) {
        return this.product_price * quantity;
    }
}

// Function to create Product instances from the HTML elements
function createProducts() {
    const items = document.querySelectorAll('.item img');
    const products = [];

    items.forEach(item => {
        const id = item.getAttribute('data-id');
        const name = item.getAttribute('data-name');
        const price = parseFloat(item.getAttribute('data-price'));
        
        const product = new Product(id, name, price);
        products.push(product);

        // Update the tooltip content with name and price
        const tooltip = item.nextElementSibling; // select the .tooltip div
        if (tooltip) {
            tooltip.textContent = `${name}, Price: ${price}₪`;
        }
    });

    return products;
}

document.addEventListener("DOMContentLoaded", () => {
    const products = createProducts();
    console.log(products);

    // Example usage: calculate total cost for 3 units of the first product
    if (products.length > 0) {
        const totalCost = products[0].calculate_total_cost(3);
        console.log(`Total cost for 3 units of ${products[0].product_name}: ${totalCost}₪`);
    }
});
