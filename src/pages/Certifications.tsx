import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Certifications from "@/components/Certifications";

const CertificationsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <title>Certifications - Yuvraj Mehta | Full Stack Developer</title>
      <meta name="description" content="Professional certifications and achievements in web development, programming, and computer science." />
      <meta name="keywords" content="Certifications, Web Development, Python, Programming, Udemy, Verified Skills" />

      <Navigation />
      <ThemeSwitcher />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-primary/5"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/[0.08] via-primary-glow/[0.04] to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span>Verified Credentials</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up animation-delay-200 leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-gradient">
                Certifications & Achievements
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
              Professional certifications and verified achievements that validate my skills in 
              software development, programming, and modern web technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Certifications />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CertificationsPage;
