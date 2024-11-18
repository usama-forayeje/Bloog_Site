import ProductItem from "./ProductItem";

function ProductsList({ products }) {
  console.log("Received product:", products);

  if (!products || products.length === 0) {
    return <div className="text-center text-lg mt-10 text-gray-500">No products available</div>;
  }

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 bg-white p-6 rounded-lg shadow-lg">
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default ProductsList;
