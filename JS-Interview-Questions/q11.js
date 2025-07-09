/* The Array Filterer:
    You are building a search feature for your e-commerce site. 
    Write a function named filterProducts that takes an array of product objects and a filter criterion. 
    The function should return a new array containing only the products that match the filter criterion. */

/* creating a Smartphone constructor to create smartphone objects */

function SmartPhone(brandName, modelName, price) {
    this.brandName = brandName;
    this.modelName = modelName;
    this.price = price;

    this.displaySpecs = function () {
        console.log(`${brandName} ${modelName}, INR ${price}`);
    }
}

/* creating smartphone objects */
const galaxyM31 = new SmartPhone("Samsung", "Galaxy M31", 15_000);
const galaxyA51 = new SmartPhone("Samsung", "Galaxy A51", 30_000);
const galaxyS21FE = new SmartPhone("Samsung", "Galaxy S21FE", 55_000);

const iPhone13 = new SmartPhone("Apple", "iPhone 13", 72_000);
const iPhone13Mini = new SmartPhone("Apple", "iPhone 13 Mini", 48_000);

const products = [galaxyA51, galaxyM31, galaxyS21FE, iPhone13, iPhone13Mini];

/* filetring products based on price */
const filteredProducts = products.filter(
    (product) => {
        if(product.price <= 50_000) {
            return product;
        }
    }
);

console.log(filteredProducts);

