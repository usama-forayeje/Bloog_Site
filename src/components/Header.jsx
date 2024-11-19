
function Header() {
  return (
    <header className="text-center  mb-8">
          <h1 className="text-4xl font-bold text-indigo-800">
            Empowering Businesses with Smart Solutions
          </h1>
          <p className="text-xl mt-4">
            Tailored tools and services to enhance your business growth.
          </p>
          <div className="mt-6">
            <a
              href="#services"
              className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-md shadow-md transform hover:scale-105 hover:bg-indigo-700 transition duration-300"
            >
              Explore Services
            </a>
          </div>
        </header>
  )
}

export default Header