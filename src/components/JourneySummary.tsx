import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  ArrowRight, 
  Star, 
  Code, 
  Trophy, 
  GraduationCap,
  ChevronRight
} from 'lucide-react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs } from 'react-icons/si';
import { Link } from 'react-router-dom';

interface JourneySummaryProps {
  className?: string;
}

const JourneySummary = ({ className = '' }: JourneySummaryProps) => {
  // Key milestones from the journey
  const keyMilestones = [
    {
      year: '2021',
      title: 'Started Programming',
      description: 'Began with C++ and programming fundamentals',
      icon: GraduationCap,
      color: 'text-blue-500'
    },
    {
      year: '2022',
      title: 'Web Development',
      description: 'Mastered HTML, CSS, JavaScript & Python',
      icon: Code,
      color: 'text-green-500'
    },
    {
      year: '2023',
      title: 'Full-Stack Journey',
      description: 'React, Node.js, MERN stack development',
      icon: FaReact,
      color: 'text-cyan-500'
    },
    {
      year: '2024',
      title: 'Advanced Skills',
      description: 'TypeScript, Next.js, 500+ LeetCode problems',
      icon: Trophy,
      color: 'text-purple-500'
    }
  ];

  const techStack = [
    { icon: FaReact, name: 'React', color: 'text-cyan-500' },
    { icon: SiTypescript, name: 'TypeScript', color: 'text-blue-500' },
    { icon: FaNodeJs, name: 'Node.js', color: 'text-green-500' },
    { icon: FaPython, name: 'Python', color: 'text-yellow-500' },
    { icon: SiNextdotjs, name: 'Next.js', color: 'text-gray-800 dark:text-white' }
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Learning Journey</h2>
            <p className="text-sm text-muted-foreground">My growth in software development</p>
          </div>
        </div>
        <Button variant="outline" asChild className="group">
          <Link to="/journey">
            View Full Timeline
            <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <Card className="p-6 border-primary/20 hover:shadow-lg transition-all duration-300">
        {/* Journey Milestones */}
        <div className="mb-6">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-primary" />
            Key Milestones
          </h3>
          
          <div className="space-y-4">
            {keyMilestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-4 group">
                {/* Timeline dot */}
                <div className="relative">
                  <div className={`w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/20`}>
                    <milestone.icon className={`w-5 h-5 ${milestone.color}`} />
                  </div>
                  {index < keyMilestones.length - 1 && (
                    <div className="absolute top-10 left-1/2 w-px h-8 bg-gradient-to-b from-primary/30 to-transparent"></div>
                  )}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge variant="secondary" className="text-xs font-medium">
                      {milestone.year}
                    </Badge>
                    <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                      {milestone.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current Tech Stack */}
        <div className="border-t pt-6">
          <h3 className="font-semibold text-sm mb-3 text-muted-foreground">Current Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors group cursor-pointer"
              >
                <tech.icon className={`w-4 h-4 ${tech.color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Stats */}
        <div className="border-t pt-6 mt-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3+</div>
              <div className="text-xs text-muted-foreground">Years</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">10+</div>
              <div className="text-xs text-muted-foreground">Milestones</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500">15+</div>
              <div className="text-xs text-muted-foreground">Skills</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6 pt-6 border-t">
          <Button asChild className="w-full group">
            <Link to="/journey">
              <BookOpen className="w-4 h-4 mr-2" />
              Explore Full Learning Journey
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default JourneySummary;
