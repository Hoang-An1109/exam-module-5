import axios from "axios";


const URL_PRODUCTS = "http://localhost:8080/products";

export const getAllStudents = async (searchName, searchCategory) => {
    try {
        let params = {};
        if (searchName) {
            params.name = `*${searchName}*`;
        }

        let res = await axios.get(URL_PRODUCTS, {params});

        if (searchCategory) {
            res.data = res.data.filter(product => product.category.id === searchCategory);
        }

        return res.data;
    } catch (error) {
        console.error("Error fetching product:", error);
        return [];
    }
}

export const saveProduct = async (product) => {
    try {
        await axios.post(URL_PRODUCTS, product)
        return true
    } catch (e) {
        console.log(e)
        return false
    }
}