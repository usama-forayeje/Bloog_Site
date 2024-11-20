import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ErrorPage from './components/ErrorPage'
import CreateProduct from './components/CreatProduct'
import ProductsList from './components/ProductsList'
import { categoryLoader, filterLoader, productsBlogLoader, productsLoader } from './loader/blogLoader'
import FilterCategory from './components/FilterCategory'
import BlogItem from './components/BlogItem'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: categoryLoader,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <ProductsList/>,
        loader: productsLoader,
        index: true
      },
      {
        path: "/create",
        element: <CreateProduct/>
      },
      {
        path: "/category/:categoryName",
        element: <FilterCategory/>,
        loader: filterLoader
      },
      {
        path: "/blog/:title",
        element: <BlogItem/>,
        loader: productsBlogLoader
      }

    ]
  },
  { path: "*", element: <ErrorPage /> },
])

createRoot(document.getElementById('root')).render(<RouterProvider  router={router}/>)
