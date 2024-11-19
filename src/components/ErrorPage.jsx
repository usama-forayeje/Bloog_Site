
import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft, Rocket } from "lucide-react";
import { useSpring, animated } from "@react-spring/web";

function ErrorPage() {
  // Spring Animation for Icons
  const iconAnimation = useSpring({
    loop: { reverse: true },
    from: { transform: "translateY(0px)" },
    to: { transform: "translateY(-10px)" },
    config: { duration: 1000 },
  });

  const textAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 800 },
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-600 text-white p-6">
      {/* Animated Alert Icon */}
      <animated.div style={iconAnimation}>
        <AlertTriangle className="w-24 h-24 text-yellow-400" />
      </animated.div>

      {/* Main 404 Heading */}
      <animated.h1
        style={textAnimation}
        className="text-7xl font-extrabold mt-8"
      >
        404
      </animated.h1>

      {/* Description */}
      <animated.p
        style={textAnimation}
        className="text-xl mt-4 text-center max-w-lg"
      >
        Oops! We couldn't find the page you're looking for. It might have been
        moved, deleted, or simply doesn't exist.
      </animated.p>

      {/* Buttons */}
      <div className="flex space-x-4 mt-8">
        <Link
          to="/"
          className="flex items-center bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-100 transition duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Home
        </Link>
        <Link
          to="/contact"
          className="flex items-center bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition duration-300"
        >
          <Rocket className="w-5 h-5 mr-2" />
          Contact Support
        </Link>
      </div>

      {/* Decorative Animation */}
      <animated.div
        style={iconAnimation}
        className="absolute bottom-10 w-48 h-48 bg-yellow-300 rounded-full blur-3xl opacity-50"
      />
    </div>
  );
}

export default ErrorPage;
