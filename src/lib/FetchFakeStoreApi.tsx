// FETCHING ALL PRODUCTS
export async function fetchAllProducts() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    return data;
}

export async function fetchMenClothingProducts() {
    const res = await fetch("https://fakestoreapi.com/products/category/men's%20clothing");
    const data = await res.json();

    return data;
}

export async function fetchWomenClothingProducts() {
    const res = await fetch("https://fakestoreapi.com/products/category/women's%20clothing");
    const data = await res.json();

    return data;
}

export async function fetchElectronicsProducts() {
    const res = await fetch("https://fakestoreapi.com/products/category/electronics");
    const data = await res.json();

    return data;
}

export async function fetchJeweleryProducts() {
    const res = await fetch("https://fakestoreapi.com/products/category/jewelery");
    const data = await res.json();

    return data;
}

// FETCHING CART
export async function fetchCartProducts(id: number) {
    const res = await fetch(`https://fakestoreapi.com/carts/user/${id}`);
    const data = await res.json();

    return data;
}

// FETCHING ALL USERS
export async function fetchAllUsers() {
    const res = await fetch("https://fakestoreapi.com/users");
    const data = await res.json();

    return data;
}

// FETCHING ALL THE INDIVIDUAL USER
export async function getUser(id: number) {
    const res = await fetch(`https://fakestoreapi.com/users/${id}`);
    const user = await res.json();

    return user;
}
