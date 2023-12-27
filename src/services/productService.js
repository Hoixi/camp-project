import axios from "axios";

export default class ProductService{
    getProduct(){
        return axios.get("https://fakestoreapi.com/products");
    }

    getProductById(id){
        return axios.get("https://fakestoreapi.com/products/" + id);
    }
}