import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  MapPin,
  Code2,
  Brain,
  Terminal,
  Zap,
  Heart,
  Calendar,
  Edit,
  FileText
} from "lucide-react";
import { FaStar, FaMagic, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1b3e] text-white mt-12 sm:mt-16 lg:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">

          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Yuvraj Mehta</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-4 leading-relaxed max-w-sm">
              Full Stack Developer specializing in modern web technologies and algorithms, currently exploring the exciting world of Generative AI.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a
                href="https://github.com/yuvraj-mehta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#2a2b5e] hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/yuvraj-mehta-a0274528a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#2a2b5e] hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#2a2b5e] hover:bg-sky-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#2a2b5e] hover:bg-pink-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Edit className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:yuvraj.mehta532@gmail.com"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#2a2b5e] hover:bg-red-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <div className="flex items-start text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="break-words">New Delhi, India</span>
              </div>
              <div className="flex items-start text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span className="break-all">yuvrajmehta2003@...</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Quick Links</h4>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <a
                href="/Yuvraj_Resume_v2_1 (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors hover:translate-x-1 duration-200"
              >
                <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                Resume
              </a>
              <a
                href="https://leetcode.com/u/mythical-UV/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors hover:translate-x-1 duration-200"
              >
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                LeetCode
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/yuvrajmevbrx/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors hover:translate-x-1 duration-200"
              >
                <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                GeeksforGeeks
              </a>
              <a
                href="https://www.codechef.com/users/quick_unity_53"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors hover:translate-x-1 duration-200"
              >
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                CodeChef
              </a>
              <Link
                to="/projects"
                className="flex items-center text-gray-400 hover:text-white transition-colors hover:translate-x-1 duration-200"
              >
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                Projects
              </Link>
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-base sm:text-lg">Navigation</h4>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
              <Link to="/" className="block text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1">
                About
              </Link>
              <Link to="/skills" className="block text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1">
                Skills
              </Link>
              <Link to="/projects" className="block text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1">
                Projects
              </Link>
              <Link to="/experience" className="block text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1">
                Experience
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-all duration-200 hover:translate-x-1">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-4 sm:py-6 border-t border-gray-600 border-b border-gray-600">
          <div className="text-center py-2">
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <FaStar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2" />
              <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-medium">Total Visitors</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-white">12,860</div>
          </div>

          <div className="text-center py-2">
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <FaMagic className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400 mr-2" />
              <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-medium">Last Updated</span>
            </div>
            <div className="text-lg sm:text-2xl font-bold text-white break-words">August 15, 2025</div>
          </div>

          <div className="text-center py-2">
            <div className="flex items-center justify-center mb-2 sm:mb-3">
              <FaLaptopCode className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2" />
              <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-wider font-medium">DSA Skills</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-4 sm:pt-6 text-center">
          <p className="text-gray-400 text-sm sm:text-base mb-2 sm:mb-1">
            © {currentYear} Yuvraj Mehta. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center space-x-1 flex-wrap">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-400 mx-1" />
            <span>using React & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
