import { api } from "../api/api";

async function categoryLoader () {
    const categoryRes = await api.get("/categories");
    return categoryRes.data
}
async function productsLoader () {
    const productsRes = await api.get("/products");
    return productsRes.data
}

export {categoryLoader ,productsLoader}