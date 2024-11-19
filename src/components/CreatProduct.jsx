import { useState } from "react";
import { api } from "../api/api";
import useInput from "../hooks/useInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CreateProduct() {
  const titleProps = useInput("");
  const imageProps = useInput("");
  const descriptionProps = useInput("");
  const priceProps = useInput("");
  const ratingProps = useInput("");
  const categoryProps = useInput("");

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();


    const formData = {
      id: crypto.randomUUID(),
      title: titleProps.value,
      image: imageProps.value,
      description: descriptionProps.value,
      price: priceProps.value,
      rating: ratingProps.value,
      category: categoryProps.value,
    };

    try {
        await api.post("/products", formData);
        toast.success("Product added successfully!");

      // Reset inputs
      titleProps.reset();
      imageProps.reset();
      descriptionProps.reset();
      priceProps.reset();
      ratingProps.reset();
      categoryProps.reset();

      // Add animation
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 1000);
    } catch (error) {
      toast.error("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-blue-500 py-12 px-6">
      <div
        className={`w-full max-w-2xl bg-gradient-to-br from-gray-800 to-gray-900 text-white shadow-2xl rounded-xl p-10 ${
          isSubmitted ? "fade-out" : ""
        }`}
      >
        <h2 className="text-4xl font-extrabold text-center mb-8 text-indigo-400">
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
              className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-4 focus:ring-indigo-500 focus:outline-none shadow-md"
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
              className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-4 focus:ring-indigo-500 focus:outline-none shadow-md"
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
              className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-4 focus:ring-indigo-500 focus:outline-none shadow-md"
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
                className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-4 focus:ring-indigo-500 focus:outline-none shadow-md"
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
                Rating (1-5)
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                {...ratingProps}
                className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-4 focus:ring-indigo-500 focus:outline-none shadow-md"
                placeholder="3.5"
                min="1"
                max="5"
                step="0.1"
                required
              />
            </div>
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
              className="mt-2 w-full px-4 py-3 rounded-lg bg-gray-700 text-white focus:ring-4 focus:ring-indigo-500 focus:outline-none shadow-md"
              required
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="bed">Bed</option>
              <option value="light">Light</option>
              <option value="wall clock">Wall Clock</option>
              <option value="mirror">Mirror</option>
              <option value="dining table">Dining Table</option>
            </select>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg shadow-md transform hover:scale-105 hover:bg-indigo-500 transition duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-500"
          >
            Add Product
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
