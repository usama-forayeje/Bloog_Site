import { api } from "../api/api";

async function categoryLoader () {
    const categoryRes = await api.get("/categories");
    return categoryRes.data
}
async function productsLoader () {
    const productsRes = await api.get("/products");
    return productsRes.data
}
async function filterLoader ({params}) {
    const productsRes = await api.get("/products");
    console.log(params.categoryName) 
    const filterData = await productsRes.data.filter(item => {
        return item.category === params.categoryName
    })
    return filterData
    
}

export {categoryLoader ,productsLoader,filterLoader}