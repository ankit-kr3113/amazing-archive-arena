import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Github, Linkedin, Mail, Phone, MapPin, Send, Instagram, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission - replace with actual email service
      await new Promise(resolve => setTimeout(resolve, 2000));

      // For now, just show success message
      console.log('Form data:', data);
      setSubmitStatus('success');
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/yuvraj-mehta",
      description: "Check out my code"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      href: "https://www.linkedin.com/in/yuvraj-mehta-a0274528a/",
      description: "Let's connect professionally"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/yuvraj.mehta4261/",
      description: "Follow for updates"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:yuvraj.mehta532@gmail.com",
      description: "Send me a message"
    }
  ];

  const quickLinks = [
    { name: "Resume", href: "/Yuvraj_Resume_v2_1 (1).pdf", icon: "📄" },
    { name: "LeetCode", href: "https://leetcode.com/u/mythical-UV/", icon: "⚡" },
    { name: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/user/yuvrajmevbrx/", icon: "🟢" },
    { name: "CodeChef", href: "https://www.codechef.com/users/quick_unity_53", icon: "👨‍🍳" },
    { name: "Projects", href: "/projects", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ThemeSwitcher />
      
      <div className="relative pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        
        <div className="relative max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/10 rounded-full text-rose-600 text-sm font-medium mb-6">
              <span>💬</span>
              <span>Contact</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Let's discuss your next project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="portfolio-card slide-up hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Contact Information</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground text-sm">yuvraj.mehta532@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-muted-foreground text-sm">+91-9334083113</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground text-sm">Gaya, Bihar, India</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Links & Social Combined */}
              <Card className="portfolio-card slide-up">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-2xl">🔗</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Quick Links</h3>
                </div>

                <div className="space-y-4 mb-8">
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

                <hr className="border-border mb-8" />

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">Social Links</h3>
                </div>

                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-primary/10 transition-colors group text-sm"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <link.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-medium group-hover:text-primary transition-colors">{link.name}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="portfolio-card slide-up">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mr-4">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    Send Me a <span className="gradient-text">Message</span>
                  </h3>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        * Name
                      </Label>
                      <Input
                        id="name"
                        {...register("name")}
                        placeholder="Your name"
                        className={`bg-muted/50 border-border focus:border-primary ${
                          errors.name ? 'border-destructive focus:border-destructive' : ''
                        }`}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        * Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="your.email@example.com"
                        className={`bg-muted/50 border-border focus:border-primary ${
                          errors.email ? 'border-destructive focus:border-destructive' : ''
                        }`}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      * Subject
                    </Label>
                    <Input
                      id="subject"
                      {...register("subject")}
                      placeholder="What is this regarding?"
                      className={`bg-muted/50 border-border focus:border-primary ${
                        errors.subject ? 'border-destructive focus:border-destructive' : ''
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive mt-1">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      * Message
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="Your message here..."
                      rows={6}
                      className={`bg-muted/50 border-border focus:border-primary resize-none ${
                        errors.message ? 'border-destructive focus:border-destructive' : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hero w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {submitStatus === 'success' && (
                    <div className="flex items-center justify-center text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Message sent successfully!
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="flex items-center justify-center text-destructive text-sm">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Failed to send message. Please try again.
                    </div>
                  )}
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
