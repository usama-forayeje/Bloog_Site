import { api } from "../api/api";

async function categoryLoader() {
  try {
    const categoryRes = await api.get("/categories");
    return categoryRes.data;
  } catch (error) {
    console.error("Error loading categories:", error);
    throw error;  // Error handling
  }
}

async function productsLoader() {
  try {
    const productsRes = await api.get("/products");
    return productsRes.data;
  } catch (error) {
    console.error("Error loading products:", error);
    throw error;  // Error handling
  }
}
async function productsBlogLoader() {
  try {
    const productsRes = await api.get("/products");
    return productsRes.data;
  } catch (error) {
    console.error("Error loading products:", error);
    throw error;  // Error handling
  }
}

async function filterLoader({ params }) {
  try {
    const productsRes = await api.get("/products");
    // Ensure productsRes.data is an array before filtering
    if (!Array.isArray(productsRes.data)) {
      throw new Error("Products data is not an array");
    }

    const filterData = productsRes.data.filter(item => item.category === params.categoryName);
    return filterData;
  } catch (error) {
    console.error("Error filtering products:", error);
    throw error;  // Error handling
  }
}

export { categoryLoader, productsLoader, filterLoader,productsBlogLoader };
