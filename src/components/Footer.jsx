import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-indigo-800 rounded text-white py-12  mt-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-500 opacity-50"></div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
        <p className="text-2xl font-semibold mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Designed & Developed by{" "}
          <span className="text-yellow-400">Usama Forayaje</span>
        </p>
        <p className="text-md mb-6 opacity-75 animate__animated animate__fadeIn animate__delay-2s">
          Empowering businesses with smart solutions for growth and innovation.
        </p>
        <div className="flex justify-center space-x-8 mt-6">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="text-white hover:text-indigo-300 transition-all duration-300 transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8" />
          </a>
          <a
            href="https://www.github.com"
            target="_blank"
            className="text-white hover:text-indigo-300 transition-all duration-300 transform hover:scale-125"
            aria-label="GitHub"
          >
            <Github className="w-8 h-8" />
          </a>
        </div>
        <p className="text-sm mt-6 opacity-50 animate__animated animate__fadeIn animate__delay-3s">
          &copy; 2024 Usama Forayaje. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
