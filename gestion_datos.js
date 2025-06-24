//Program startup message
console.log("Data Management with Objects, Sets, and Maps in JavaScript");

//Creating an object with products
const products = {

    1: {id: 1, name: "Tv", price: 2000},
    2: {id: 2, name: "Phone", price: 600},
    3: {id: 3, name: "Hearing aid", price: 25},

}

console.log("Products object: ", products);

//Creating a Set of product names to eliminate duplicates
const setProducts = new Set(

    Object.values(products).map(product => product.name)

);
console.log("Set of unique products: ", setProducts);

//Creating a Map to add a category to products
const mapProducts = new Map([

    ["Electronics", "Tv"],
    ["Electronics", "Phone"],
    ["Accessories", "Hearing aid"],

]);

console.log("Product and category Map.: ", mapProducts);

//Loop through the products Object using for...in
console.log("Product List (Object): ");

for (const id in products) {

    const product = products[id];
    console.log(`Product ID: ${id}, Details:`, products[id]);

}

//Browse the Set of product using for...of
console.log("Unique product (Set): ");

for (const product of setProducts) {

    console.log("Unique products: ", product);

}

//Browse the Map of products using forEach
console.log("Categories and products (Map): ");

mapProducts.forEach((product, category) => {

    console.log(`Category: ${category}, Product: ${product}`);

});

//Validation of final tests
console.log("Complete data management testing: ");
console.log("Product List(Object): ", products);
console.log("List of unique products (Set): ", setProducts);
console.log("Categories and products (Map): ", mapProducts);