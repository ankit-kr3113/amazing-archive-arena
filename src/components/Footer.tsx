import { 
  Github, 
  Linkedin, 
  Mail, 
  Twitter, 
  Star, 
  Calendar, 
  Users, 
  MapPin, 
  Download,
  Code2,
  Trophy,
  Brain,
  Terminal,
  FileText,
  ExternalLink,
  TrendingUp,
  Zap,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { 
      icon: Github, 
      href: "https://github.com/yuvraj-mehta", 
      label: "GitHub",
      color: "hover:text-gray-300",
      bgColor: "hover:bg-gray-800"
    },
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/yuvraj-mehta-a0274528a/", 
      label: "LinkedIn",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-900/30"
    },
    { 
      icon: Twitter, 
      href: "https://twitter.com/", 
      label: "Twitter",
      color: "hover:text-sky-400",
      bgColor: "hover:bg-sky-900/30"
    },
    { 
      icon: Mail, 
      href: "mailto:yuvraj.mehta532@gmail.com", 
      label: "Email",
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-900/30"
    },
  ];

  const quickLinks = [
    { 
      name: "Resume", 
      href: "/Yuvraj_Resume_v2_1 (1).pdf", 
      isExternal: true,
      icon: FileText,
      color: "text-blue-400"
    },
    { 
      name: "LeetCode", 
      href: "https://leetcode.com/u/mythical-UV/", 
      isExternal: true,
      icon: Code2,
      color: "text-orange-400"
    },
    { 
      name: "GeeksforGeeks", 
      href: "https://www.geeksforgeeks.org/user/yuvrajmevbrx/", 
      isExternal: true,
      icon: Brain,
      color: "text-green-400"
    },
    { 
      name: "CodeChef", 
      href: "https://www.codechef.com/users/quick_unity_53", 
      isExternal: true,
      icon: Terminal,
      color: "text-purple-400"
    },
    { 
      name: "Projects", 
      href: "/projects",
      icon: Zap,
      color: "text-yellow-400"
    },
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
    <footer className="bg-[#1a1b3e] text-white mt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 blur-xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center mr-3 shadow-lg">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Yuvraj Mehta</h3>
            </div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Full Stack Developer specializing in modern web technologies and algorithms, currently exploring the exciting world of Generative AI.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(({ icon: Icon, href, label, color, bgColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-[#2a2b5e] hover:bg-[#3a3b7e] flex items-center justify-center text-gray-300 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Mail className="w-5 h-5 text-purple-400 mr-2" />
              Contact
            </h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-center space-x-3 hover:text-white transition-colors duration-200 group">
                <MapPin className="w-4 h-4 text-purple-400 group-hover:animate-bounce" />
                <span>New Delhi, India</span>
              </div>
              <div className="flex items-center space-x-3 hover:text-white transition-colors duration-200 group">
                <Mail className="w-4 h-4 text-purple-400 group-hover:animate-bounce" />
                <span className="break-all">yuvrajmehta2003@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <ExternalLink className="w-5 h-5 text-purple-400 mr-2" />
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                link.isExternal ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-200 text-sm group p-2 rounded-lg hover:bg-[#2a2b5e]"
                  >
                    <link.icon className={`w-4 h-4 ${link.color} group-hover:animate-pulse`} />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-200 text-sm group p-2 rounded-lg hover:bg-[#2a2b5e]"
                  >
                    <link.icon className={`w-4 h-4 ${link.color} group-hover:animate-pulse`} />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 text-purple-400 mr-2" />
              Navigation
            </h4>
            <div className="space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-gray-300 hover:text-white transition-all duration-200 text-sm p-2 rounded-lg hover:bg-[#2a2b5e] hover:translate-x-1"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-600">
          <div className="bg-gradient-to-br from-[#2a2b5e] to-[#3a3b7e] rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">12,667</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Total Visitors</div>
          </div>
          
          <div className="bg-gradient-to-br from-[#2a2b5e] to-[#3a3b7e] rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">August 13, 2025</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider">Last Updated</div>
          </div>

          <div className="bg-gradient-to-br from-[#2a2b5e] to-[#3a3b7e] rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-current group-hover:animate-pulse" />
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
            <Heart className="w-3 h-3 text-red-400 animate-pulse" />
            <span>using React & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
