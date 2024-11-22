import { useEffect, useState } from "react";
import { api } from "../api/api";
import useInput from "../hooks/useInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateProduct() {
  const titleProps = useInput("");
  const imageProps = useInput("");
  const descriptionProps = useInput("");
  const priceProps = useInput("");
  const rattingProps = useInput("");
  const categoryProps = useInput("");
  const labelProps = useInput("");


  const [categories , setCategories] = useState([])
  const [labels , setLaval] = useState([])
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit =  (e) => {
    e.preventDefault();

    const formData = {
      id: crypto.randomUUID(),
      title: titleProps.value,
      image: imageProps.value,
      description: descriptionProps.value,
      price: priceProps.value,
      rating: rattingProps.value,
      laval: labelProps.value,
      category: categoryProps.value,
    };

    
       api.post("/products", formData);
      toast.success("Product added successfully!");

      // Reset inputs
      titleProps.reset();
      imageProps.reset();
      descriptionProps.reset();
      priceProps.reset();
      rattingProps.reset();
      categoryProps.reset();
      labelProps.reset();

      // Add animation
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 1000);
    
  };

  useEffect(() => {
   async function getCategory() {
    try {
        const conn = await api.get('categories');
        const lvl = await api.get('laval');
        setCategories(conn.data)
        setLaval(lvl.data)
    } catch (error) {
        console.log(error);
        
    }
   }
   getCategory()
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-r from-indigo-600 to-blue-500">
      <div
        className={`w-full max-w-2xl bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-2xl rounded-xl p-10 ${
          isSubmitted ? "fade-out" : ""
        }`}
      >
        <h2 className="mb-8 text-4xl font-extrabold text-center text-indigo-400">
          Add New Product
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block text-lg font-medium text-indigo-300"
            >
              Product Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              {...titleProps}
              className="w-full px-4 py-3 mt-2 text-white bg-gray-700 rounded-lg shadow-md focus:ring-4 focus:ring-indigo-500 focus:outline-none"
              placeholder="Elegant Queen Bed"
              required
            />
          </div>
          {/* Image */}
          <div>
            <label
              htmlFor="image"
              className="block text-lg font-medium text-indigo-300"
            >
              Product Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              {...imageProps}
              className="w-full px-4 py-3 mt-2 text-white bg-gray-700 rounded-lg shadow-md focus:ring-4 focus:ring-indigo-500 focus:outline-none"
              placeholder="b-1.jpg"
              required
            />
          </div>
          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-medium text-indigo-300"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              {...descriptionProps}
              className="w-full px-4 py-3 mt-2 text-white bg-gray-700 rounded-lg shadow-md focus:ring-4 focus:ring-indigo-500 focus:outline-none"
              placeholder="Write a brief product description..."
              rows="4"
              required
            ></textarea>
          </div>
          {/* Price */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="price"
                className="block text-lg font-medium text-indigo-300"
              >
                Price ($)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                {...priceProps}
                className="w-full px-4 py-3 mt-2 text-white bg-gray-700 rounded-lg shadow-md focus:ring-4 focus:ring-indigo-500 focus:outline-none"
                placeholder="52.5"
                required
              />
            </div>
            {/* Rating */}
            <div>
              <label
                htmlFor="rating"
                className="block text-lg font-medium text-indigo-300"
              >
                Ratting (1-5)
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                {...rattingProps}
                className="w-full px-4 py-3 mt-2 text-white bg-gray-700 rounded-lg shadow-md focus:ring-4 focus:ring-indigo-500 focus:outline-none"
                placeholder="3.5"
                min="1"
                max="5"
                step="0.1"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">

          {/* Laval */}
          <div>
            <label
              htmlFor="category"
              className="block text-lg font-medium text-indigo-300"
            >
              Label
            </label>
            <select
              id="laval"
              name="laval"
              {...labelProps}
              className="w-full px-4 py-3 mt-2 text-white bg-gray-700 rounded-lg shadow-md focus:ring-4 focus:ring-indigo-500 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select a Laval
              </option>
              {labels.map(label => <option  key={label.id}>{label.title}</option>)}
              
              
            </select>
          </div>
          {/* Category */}
          <div>
            <label
              htmlFor="category"
              className="block text-lg font-medium text-indigo-300"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              {...categoryProps}
              className="w-full px-4 py-3 mt-2 text-white bg-gray-700 rounded-lg shadow-md focus:ring-4 focus:ring-indigo-500 focus:outline-none"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.map(category => <option  key={category.id}>{category.title}</option>)}
              
              
            </select>
          </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 text-white transition duration-300 transform bg-indigo-600 rounded-lg shadow-md hover:scale-105 hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
