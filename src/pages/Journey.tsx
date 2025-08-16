import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LearningTimeline from "@/components/LearningTimeline";

const Journey = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <title>Learning Journey - Yuvraj Mehta | Full Stack Developer</title>
      <meta name="description" content="My complete learning journey in software development - from programming fundamentals to advanced full-stack technologies." />
      <meta name="keywords" content="Learning Journey, Programming Timeline, Web Development, React, Node.js, Full Stack, NIT Patna" />

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
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2"></div>
              <span>Learning Journey</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold animate-fade-in-up animation-delay-200 leading-tight mb-6">
              <span className="bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent animate-gradient">
                My Learning Journey
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
              A complete timeline of my growth in software development - from writing my first "Hello World" 
              to building full-stack applications and solving 500+ coding problems.
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-600">
              <div className="text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                <div className="text-2xl font-bold text-green-500">10+</div>
                <div className="text-sm text-muted-foreground">Major Milestones</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                <div className="text-2xl font-bold text-blue-500">15+</div>
                <div className="text-sm text-muted-foreground">Skills Acquired</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                <div className="text-2xl font-bold text-purple-500">500+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Timeline Section */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LearningTimeline />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Journey;
