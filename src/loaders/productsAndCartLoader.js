import { getShoppingCart } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    const productsData = await fetch('products.json');
    const products = await productsData.json();
    const savedCart = getShoppingCart();
    const previousCart = [];

    for (const id in savedCart) {

        // console.log(quantity);
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            previousCart.push(addedProduct);
        }
    }



    return { products, previousCart };

}