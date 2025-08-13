import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Github, href: "https://github.com/yuvraj-mehta", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/yuvraj-mehta-a0274528a/", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/", label: "Twitter" },
    { icon: Mail, href: "mailto:yuvraj.mehta532@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Skills", href: "/skills" },
    { name: "Projects", href: "/projects" },
    { name: "Experience", href: "/experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Enhanced About Section */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold gradient-text mb-4">Yuvraj Mehta</h3>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed">
              Full Stack Developer specializing in modern web technologies and algorithms,
              currently exploring the exciting world of Generative AI.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-2 hover:text-primary transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm sm:text-base">Gaya, Bihar, India</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-primary transition-colors duration-200">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm sm:text-base break-all">yuvraj.mehta532@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Quick Links</h4>
            <div className="space-y-1 sm:space-y-2">
              <a href="/Yuvraj_Resume_v2_1 (1).pdf" className="block text-sm sm:text-base text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200">📄 Resume</a>
              <a href="https://leetcode.com/u/mythical-UV/" className="block text-sm sm:text-base text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200">🧩 LeetCode</a>
              <a href="https://www.geeksforgeeks.org/user/yuvrajmevbrx/" className="block text-sm sm:text-base text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200">💻 GeeksforGeeks</a>
              <a href="https://www.codechef.com/users/quick_unity_53" className="block text-sm sm:text-base text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200">👨‍💻 CodeChef</a>
              <Link to="/projects" className="block text-sm sm:text-base text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200">🚀 Projects</Link>
            </div>
          </div>

          {/* Enhanced Navigation */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-foreground">Navigation</h4>
            <div className="space-y-1 sm:space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm sm:text-base text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border/50">
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors duration-300">
              <span className="text-xl sm:text-2xl animate-pulse">⭐</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">17,090</div>
            <div className="text-xs sm:text-sm text-muted-foreground">TOTAL VISITORS</div>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors duration-300">
              <span className="text-xl sm:text-2xl animate-pulse">⚡</span>
            </div>
            <div className="text-lg sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Aug 2024</div>
            <div className="text-xs sm:text-sm text-muted-foreground">LAST UPDATED</div>
          </div>

          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 transition-colors duration-300">
              <span className="text-xl sm:text-2xl animate-pulse">💻</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">⭐⭐⭐⭐⭐</div>
            <div className="text-xs sm:text-sm text-muted-foreground">DSA SKILLS</div>
          </div>
        </div>

        {/* Enhanced Copyright */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p className="text-sm sm:text-base">&copy; {currentYear} Yuvraj Mehta. All rights reserved.</p>
          <p className="mt-2 text-xs sm:text-sm flex items-center justify-center gap-2">
            <span className="animate-bounce">🚀</span>
            <span>Crafted with</span>
            <span className="text-red-500 animate-pulse">❤️</span>
            <span>using React & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
