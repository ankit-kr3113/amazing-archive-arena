import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Phone, MapPin, Send } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
      description: "Check out my code"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      href: "https://linkedin.com",
      description: "Let's connect professionally"
    },
    {
      name: "Twitter",
      icon: () => <span className="text-lg">𝕏</span>,
      href: "https://twitter.com",
      description: "Follow for tech updates"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:john@example.com",
      description: "Send me a message"
    }
  ];

  const quickLinks = [
    { name: "Resume", href: "#", icon: "📄" },
    { name: "LeetCode", href: "https://leetcode.com", icon: "⚡" },
    { name: "GeeksforGeeks", href: "https://geeksforgeeks.org", icon: "🟢" },
    { name: "CodeChef", href: "https://codechef.com", icon: "👨‍🍳" },
    { name: "Projects", href: "/projects", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              💬 Let's Connect
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind or want to discuss potential opportunities? I'd love to
              hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="portfolio-card slide-up">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Contact Information</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground text-sm">john@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground text-sm">+1-555-123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground text-sm">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Connect With Me */}
              <Card className="portfolio-card slide-up">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold">Connect With Me</h3>
                </div>

                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-3 rounded-lg bg-muted/50 hover:bg-primary/10 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <link.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{link.name}</h4>
                        <p className="text-muted-foreground text-sm">{link.description}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Quick Links */}
              <Card className="portfolio-card slide-up">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-xl">🔗</span>
                  </div>
                  <h3 className="text-xl font-bold">Quick Links</h3>
                </div>

                <div className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/10 transition-colors group text-sm"
                    >
                      <span className="text-lg">{link.icon}</span>
                      <span className="group-hover:text-primary transition-colors">{link.name}</span>
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="portfolio-card slide-up">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    Send Me a <span className="gradient-text">Message</span>
                  </h3>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        * Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        * Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-muted/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      * Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      className="bg-muted/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      * Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      rows={6}
                      className="bg-muted/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button className="btn-hero w-full">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Note:</strong> I typically respond within 24 hours. For urgent matters, 
                    feel free to reach out via email or LinkedIn direct message.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;