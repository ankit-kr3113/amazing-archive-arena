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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">

        {/* Mobile-First: Single Brand & Contact Section */}
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Yuvraj Mehta</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md mx-auto">
            Full Stack Developer specializing in modern web technologies and algorithms
          </p>

          {/* Social Links - Centered for mobile */}
          <div className="flex justify-center gap-3 mb-6">
            <a
              href="https://github.com/yuvraj-mehta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#2a2b5e] hover:bg-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/yuvraj-mehta-a0274528a/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#2a2b5e] hover:bg-blue-600 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:yuvraj.mehta532@gmail.com"
              className="w-10 h-10 rounded-lg bg-[#2a2b5e] hover:bg-red-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-[#2a2b5e] hover:bg-sky-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Contact Info - Mobile Optimized */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              <span>New Delhi, India</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>yuvrajmehta2003@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Links Grid - Better for larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 pt-6 border-t border-gray-600">

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Overview
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors text-sm">
                About
              </Link>
              <Link to="/experience" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Experience
              </Link>
              <Link to="/projects" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Projects
              </Link>
            </div>
          </div>

          {/* More Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">More</h4>
            <div className="space-y-2">
              <Link to="/skills" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Skills
              </Link>
              <Link to="/education" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Education
              </Link>
              <Link to="/coding" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Coding
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Coding Profiles */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Profiles</h4>
            <div className="space-y-2">
              <a
                href="https://leetcode.com/u/mythical-UV/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                LeetCode
              </a>
              <a
                href="https://www.geeksforgeeks.org/user/yuvrajmevbrx/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                GeeksforGeeks
              </a>
              <a
                href="https://www.codechef.com/users/quick_unity_53"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                CodeChef
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <div className="space-y-2">
              <a
                href="/Yuvraj_Resume_v2_1 (1).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Resume
              </a>
              <a
                href="https://github.com/yuvraj-mehta"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Simple Stats - Mobile Optimized */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 py-6 border-t border-gray-600 border-b border-gray-600">
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-white">500+</div>
            <div className="text-xs text-gray-400">Problems Solved</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-white">15+</div>
            <div className="text-xs text-gray-400">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-white">2+</div>
            <div className="text-xs text-gray-400">Years Experience</div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 text-center">
          <p className="text-gray-400 text-sm mb-1">
            © {currentYear} Yuvraj Mehta. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs flex items-center justify-center gap-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-red-400" />
            <span>using React & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
