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
  Edit
} from "lucide-react";
import { FaStar, FaMagic, FaLaptopCode } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1b3e] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

          {/* Brand Section */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Yuvraj Mehta</h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Full Stack Developer specializing in modern web technologies and algorithms, currently exploring the exciting world of Generative AI.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://github.com/yuvraj-mehta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#2a2b5e] hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/yuvraj-mehta-a0274528a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#2a2b5e] hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#2a2b5e] hover:bg-sky-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://dribbble.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-[#2a2b5e] hover:bg-pink-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Edit className="w-4 h-4" />
              </a>
              <a
                href="mailto:yuvraj.mehta532@gmail.com"
                className="w-8 h-8 rounded-lg bg-[#2a2b5e] hover:bg-red-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                <MapPin className="w-4 h-4 mr-2" />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                <span>yuvrajmehta2003@...</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a
                href="/Yuvraj_Resume_v2_1 (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </a>
              <a
                href="https://leetcode.com/u/mythical-UV/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Code2 className="w-4 h-4 mr-2" />
                LeetCode
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/yuvrajmevbrx/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Brain className="w-4 h-4 mr-2" />
                GeeksforGeeks
              </a>
              <a
                href="https://www.codechef.com/users/quick_unity_53"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Terminal className="w-4 h-4 mr-2" />
                CodeChef
              </a>
              <Link
                to="/projects"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Zap className="w-4 h-4 mr-2" />
                Projects
              </Link>
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-white font-semibold mb-3">Navigation</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/skills" className="block text-gray-400 hover:text-white transition-colors">
                Skills
              </Link>
              <Link to="/projects" className="block text-gray-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link to="/experience" className="block text-gray-400 hover:text-white transition-colors">
                Experience
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-t border-gray-600 border-b border-gray-600">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-xs text-gray-400 uppercase tracking-wider">Total Visitors</span>
            </div>
            <div className="text-xl font-bold text-white">12,860</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Edit className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-xs text-gray-400 uppercase tracking-wider">Last Updated</span>
            </div>
            <div className="text-xl font-bold text-white">August 15, 2025</div>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <FileText className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-xs text-gray-400 uppercase tracking-wider">DSA Skills</span>
            </div>
            <div className="flex items-center justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="pt-6 text-center">
          <p className="text-gray-400 text-sm mb-1">
            © {currentYear} Yuvraj Mehta. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs flex items-center justify-center space-x-1">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-red-400" />
            <span>using React & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
