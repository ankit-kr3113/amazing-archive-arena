import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  BookOpen, 
  Code, 
  Trophy, 
  Lightbulb, 
  Target, 
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Users,
  Award,
  Briefcase,
  GraduationCap,
  Heart
} from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiExpress, SiNextdotjs } from 'react-icons/si';
import { useState } from 'react';

export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  date: string;
  category: 'education' | 'project' | 'skill' | 'certification' | 'achievement' | 'experience';
  status: 'completed' | 'in-progress' | 'planned';
  skills: string[];
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  importance: 'low' | 'medium' | 'high' | 'milestone';
  relatedLinks?: Array<{ label: string; url: string }>;
  metrics?: Array<{ label: string; value: string }>;
}

interface LearningTimelineProps {
  className?: string;
}

const LearningTimeline = ({ className = '' }: LearningTimelineProps) => {
  // Learning journey data
  const timelineEvents: TimelineEvent[] = [
    {
      id: '1',
      title: 'Started Programming Journey',
      description: 'Began learning programming fundamentals with C++ and problem-solving basics during first year of college.',
      date: '2021-09-01',
      category: 'education',
      status: 'completed',
      skills: ['C++', 'Algorithms', 'Data Structures'],
      icon: GraduationCap,
      color: 'blue',
      importance: 'milestone',
      metrics: [
        { label: 'Duration', value: '6 months' },
        { label: 'Projects', value: '5' }
      ]
    },
    {
      id: '2',
      title: 'Web Development Foundations',
      description: 'Mastered HTML, CSS, and JavaScript fundamentals. Built first responsive websites and learned DOM manipulation.',
      date: '2022-02-15',
      category: 'skill',
      status: 'completed',
      skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      icon: Code,
      color: 'green',
      importance: 'high',
      relatedLinks: [
        { label: 'First Portfolio', url: 'https://github.com/yuvraj-mehta/portfolio-v1' }
      ],
      metrics: [
        { label: 'Projects Built', value: '8' },
        { label: 'Skills Learned', value: '12' }
      ]
    },
    {
      id: '3',
      title: 'Python Programming Mastery',
      description: 'Completed comprehensive Python bootcamp covering OOP, data structures, web scraping, and automation.',
      date: '2022-08-20',
      category: 'certification',
      status: 'completed',
      skills: ['Python', 'OOP', 'Web Scraping', 'Automation'],
      icon: FaPython,
      color: 'yellow',
      importance: 'high',
      relatedLinks: [
        { label: 'Certificate', url: 'https://udemy.com/certificate/UC-a1b2c3d4' }
      ],
      metrics: [
        { label: 'Course Hours', value: '100+' },
        { label: 'Projects', value: '15' }
      ]
    },
    {
      id: '4',
      title: 'React.js Deep Dive',
      description: 'Learned modern React development including hooks, context, state management, and component architecture.',
      date: '2023-01-10',
      category: 'skill',
      status: 'completed',
      skills: ['React', 'Hooks', 'State Management', 'Component Design'],
      icon: FaReact,
      color: 'cyan',
      importance: 'milestone',
      relatedLinks: [
        { label: 'React Projects', url: 'https://github.com/yuvraj-mehta?tab=repositories' }
      ],
      metrics: [
        { label: 'Components Built', value: '50+' },
        { label: 'Projects', value: '6' }
      ]
    },
    {
      id: '5',
      title: 'Full-Stack Development',
      description: 'Expanded to backend development with Node.js, Express, and MongoDB. Built complete MERN stack applications.',
      date: '2023-06-15',
      category: 'skill',
      status: 'completed',
      skills: ['Node.js', 'Express', 'MongoDB', 'REST APIs'],
      icon: FaNodeJs,
      color: 'green',
      importance: 'milestone',
      relatedLinks: [
        { label: 'E-commerce App', url: 'https://github.com/yuvraj-mehta/mern-ecommerce' }
      ],
      metrics: [
        { label: 'APIs Built', value: '25+' },
        { label: 'Full-stack Apps', value: '4' }
      ]
    },
    {
      id: '6',
      title: 'TypeScript & Modern Tools',
      description: 'Adopted TypeScript for better code quality and learned modern development tools like Vite, Tailwind CSS.',
      date: '2023-10-01',
      category: 'skill',
      status: 'completed',
      skills: ['TypeScript', 'Tailwind CSS', 'Vite', 'Modern Tooling'],
      icon: SiTypescript,
      color: 'blue',
      importance: 'high',
      metrics: [
        { label: 'TS Projects', value: '8' },
        { label: 'Type Safety', value: '95%' }
      ]
    },
    {
      id: '7',
      title: 'LeetCode Problem Solving',
      description: 'Focused on competitive programming and problem-solving. Solved 500+ problems across different difficulty levels.',
      date: '2024-01-01',
      category: 'achievement',
      status: 'completed',
      skills: ['Algorithms', 'Data Structures', 'Problem Solving'],
      icon: Trophy,
      color: 'orange',
      importance: 'milestone',
      relatedLinks: [
        { label: 'LeetCode Profile', url: 'https://leetcode.com/u/mythical-UV' }
      ],
      metrics: [
        { label: 'Problems Solved', value: '500+' },
        { label: 'Global Ranking', value: 'Top 27.7%' }
      ]
    },
    {
      id: '8',
      title: 'Next.js & Advanced React',
      description: 'Currently mastering Next.js 14 with App Router, Server Components, and advanced React patterns.',
      date: '2024-08-01',
      category: 'skill',
      status: 'in-progress',
      skills: ['Next.js', 'Server Components', 'App Router', 'SSR/SSG'],
      icon: SiNextdotjs,
      color: 'black',
      importance: 'high',
      metrics: [
        { label: 'Progress', value: '75%' },
        { label: 'Projects', value: '3' }
      ]
    },
    {
      id: '9',
      title: 'System Design & Architecture',
      description: 'Learning scalable system design patterns, microservices architecture, and cloud deployment strategies.',
      date: '2024-11-01',
      category: 'skill',
      status: 'in-progress',
      skills: ['System Design', 'Microservices', 'Cloud Architecture', 'Scalability'],
      icon: Target,
      color: 'purple',
      importance: 'milestone',
      metrics: [
        { label: 'Progress', value: '40%' },
        { label: 'Case Studies', value: '8' }
      ]
    },
    {
      id: '10',
      title: 'DevOps & Deployment',
      description: 'Planning to learn Docker, Kubernetes, CI/CD pipelines, and cloud platforms for complete full-stack expertise.',
      date: '2025-02-01',
      category: 'skill',
      status: 'planned',
      skills: ['Docker', 'Kubernetes', 'CI/CD', 'Cloud Platforms'],
      icon: Zap,
      color: 'indigo',
      importance: 'high'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Events', icon: BookOpen },
    { value: 'education', label: 'Education', icon: GraduationCap },
    { value: 'skill', label: 'Skills', icon: Code },
    { value: 'project', label: 'Projects', icon: Briefcase },
    { value: 'certification', label: 'Certifications', icon: Award },
    { value: 'achievement', label: 'Achievements', icon: Trophy }
  ];

  const statuses = [
    { value: 'all', label: 'All Status' },
    { value: 'completed', label: 'Completed' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'planned', label: 'Planned' }
  ];

  const filteredEvents = timelineEvents.filter(event => {
    const categoryMatch = selectedCategory === 'all' || event.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || event.status === selectedStatus;
    return categoryMatch && statusMatch;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'planned': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'milestone': return 'border-purple-500 bg-purple-50 dark:bg-purple-950';
      case 'high': return 'border-orange-500 bg-orange-50 dark:bg-orange-950';
      case 'medium': return 'border-blue-500 bg-blue-50 dark:bg-blue-950';
      case 'low': return 'border-gray-500 bg-gray-50 dark:bg-gray-950';
      default: return 'border-gray-300';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  const getYearFromDate = (dateString: string) => {
    return new Date(dateString).getFullYear();
  };

  // Group events by year
  const eventsByYear = filteredEvents.reduce((acc, event) => {
    const year = getYearFromDate(event.date);
    if (!acc[year]) acc[year] = [];
    acc[year].push(event);
    return acc;
  }, {} as Record<number, TimelineEvent[]>);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Learning Journey Timeline</h2>
            <p className="text-sm text-muted-foreground">My growth and milestones in tech</p>
          </div>
        </div>
        <Badge className="bg-primary/10 text-primary">
          {filteredEvents.length} Events
        </Badge>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.value}
                size="sm"
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="h-8"
              >
                <category.icon className="w-3 h-3 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Status</label>
          <div className="flex flex-wrap gap-2">
            {statuses.map((status) => (
              <Button
                key={status.value}
                size="sm"
                variant={selectedStatus === status.value ? "default" : "outline"}
                onClick={() => setSelectedStatus(status.value)}
                className="h-8"
              >
                {status.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-8">
        {Object.keys(eventsByYear)
          .map(Number)
          .sort((a, b) => b - a)
          .map((year) => (
          <div key={year} className="space-y-4">
            {/* Year Header */}
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-primary">{year}</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
              <Badge variant="outline" className="text-xs">
                {eventsByYear[year].length} events
              </Badge>
            </div>

            {/* Events for this year */}
            <div className="space-y-4 pl-4">
              {eventsByYear[year].map((event, index) => (
                <div key={event.id} className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-8 bottom-0 w-px bg-gradient-to-b from-primary/50 to-primary/20"></div>
                  
                  {/* Timeline dot */}
                  <div className={`absolute left-0 top-8 w-3 h-3 rounded-full transform -translate-x-1/2 ${
                    event.importance === 'milestone' ? 'bg-purple-500 ring-4 ring-purple-200 dark:ring-purple-800' :
                    event.importance === 'high' ? 'bg-orange-500 ring-2 ring-orange-200 dark:ring-orange-800' :
                    'bg-primary ring-2 ring-primary/20'
                  }`}></div>

                  {/* Event Card */}
                  <Card className={`ml-8 p-6 hover:shadow-lg transition-all duration-300 group ${getImportanceColor(event.importance)}`}>
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        event.status === 'completed' ? 'bg-green-100 dark:bg-green-900' :
                        event.status === 'in-progress' ? 'bg-blue-100 dark:bg-blue-900' :
                        'bg-gray-100 dark:bg-gray-900'
                      }`}>
                        <event.icon className={`w-6 h-6 ${
                          event.status === 'completed' ? 'text-green-600 dark:text-green-400' :
                          event.status === 'in-progress' ? 'text-blue-600 dark:text-blue-400' :
                          'text-gray-600 dark:text-gray-400'
                        }`} />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                              {event.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-sm text-muted-foreground flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(event.date)}
                              </span>
                              <Badge className={getStatusColor(event.status)} variant="secondary">
                                {event.status}
                              </Badge>
                              {event.importance === 'milestone' && (
                                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200" variant="secondary">
                                  <Star className="w-3 h-3 mr-1" />
                                  Milestone
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {event.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {event.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        {/* Metrics */}
                        {event.metrics && (
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                            {event.metrics.map((metric, metricIndex) => (
                              <div key={metricIndex} className="text-center p-2 rounded-lg bg-muted/50">
                                <div className="font-semibold text-sm text-primary">{metric.value}</div>
                                <div className="text-xs text-muted-foreground">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Related Links */}
                        {event.relatedLinks && (
                          <div className="flex flex-wrap gap-2">
                            {event.relatedLinks.map((link, linkIndex) => (
                              <Button
                                key={linkIndex}
                                size="sm"
                                variant="outline"
                                className="h-8 text-xs"
                                asChild
                              >
                                <a href={link.url} target="_blank" rel="noopener noreferrer">
                                  <ArrowRight className="w-3 h-3 mr-1" />
                                  {link.label}
                                </a>
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
        <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-primary" />
          Journey Summary
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500 mb-1">
              {timelineEvents.filter(e => e.status === 'completed').length}
            </div>
            <div className="text-sm text-muted-foreground">Completed</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500 mb-1">
              {timelineEvents.filter(e => e.importance === 'milestone').length}
            </div>
            <div className="text-sm text-muted-foreground">Milestones</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500 mb-1">
              {[...new Set(timelineEvents.flatMap(e => e.skills))].length}
            </div>
            <div className="text-sm text-muted-foreground">Skills Learned</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-500 mb-1">
              {Object.keys(eventsByYear).length}
            </div>
            <div className="text-sm text-muted-foreground">Years Active</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LearningTimeline;
