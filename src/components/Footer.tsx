import { Github, Linkedin, Mail, Twitter, Star, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/yuvraj-mehta", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yuvraj-mehta-a0274528a/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: "🌟", href: "https://www.geeksforgeeks.org/user/yuvrajmevbrx/", label: "GeeksforGeeks", isEmoji: true },
    { icon: Mail, href: "mailto:yuvraj.mehta532@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Resume", href: "/Yuvraj_Resume_v2_1 (1).pdf", isExternal: true },
    { name: "LeetCode", href: "https://leetcode.com/u/mythical-UV/", isExternal: true },
    { name: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/user/yuvrajmevbrx/", isExternal: true },
    { name: "CodeChef", href: "https://www.codechef.com/users/quick_unity_53", isExternal: true },
    { name: "Projects", href: "/projects" },
  ];

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-[#1a1b3e] text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Yuvraj Mehta</h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Full Stack Developer specializing in modern web technologies and algorithms, currently exploring the exciting world of Generative AI.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label, isEmoji }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded bg-[#2a2b5e] hover:bg-[#3a3b7e] flex items-center justify-center text-gray-300 hover:text-white transition-all duration-200"
                  aria-label={label}
                >
                  {isEmoji ? (
                    <span className="text-sm">{Icon}</span>
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">📍</span>
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-purple-400">✉️</span>
                <span>yuvrajmehta2003@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                link.isExternal ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <span className="text-purple-400">📄</span>
                    <span>{link.name}</span>
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    <span className="text-purple-400">🧩</span>
                    <span>{link.name}</span>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
            <div className="space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-600">
          <div className="bg-[#2a2b5e] rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-2xl font-bold text-white mb-1">12,667</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Total Visitors</div>
          </div>
          
          <div className="bg-[#2a2b5e] rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Calendar className="w-6 h-6 text-purple-400" />
            </div>
            <div className="text-lg font-bold text-white mb-1">August 13, 2025</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Last Updated</div>
          </div>

          <div className="bg-[#2a2b5e] rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2 space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">DSA Skills</div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-gray-600 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © {currentYear} Yuvraj Mehta. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs flex items-center justify-center space-x-2">
            <span>Crafted with</span>
            <span className="text-red-400">❤️</span>
            <span>using React & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
