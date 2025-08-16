import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, Calendar, Users, Code } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
  tags: string[];
  demo?: string;
  github: string;
  status: string;
  metrics?: {
    stars?: number;
    forks?: number;
    commits?: number;
  };
  timeline?: string;
  teamSize?: number;
}

interface InteractiveProjectCardProps {
  project: Project;
  index: number;
}

const InteractiveProjectCard = ({ project, index }: InteractiveProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden bg-gradient-to-br from-card/90 via-card to-card/80 border border-border/50 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Container with Overlay */}
      <div className="relative overflow-hidden rounded-t-2xl h-48">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Status Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {project.featured && (
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
              ⭐ Featured
            </Badge>
          )}
          <Badge className={`shadow-lg ${
            project.status === "Live" 
              ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
              : "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
          }`}>
            {project.status === "Live" && <div className="w-2 h-2 bg-white rounded-full mr-1 animate-pulse" />}
            {project.status}
          </Badge>
        </div>

        {/* Quick Action Overlay */}
        <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${
          isHovered ? 'opacity-100 backdrop-blur-sm' : 'opacity-0'
        }`}>
          {project.demo && (
            <Button
              size="sm"
              className="bg-primary/90 hover:bg-primary text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4 mr-1" />
                Demo
              </a>
            </Button>
          )}
          <Button
            size="sm"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 shadow-lg transform hover:scale-105 transition-all duration-200"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-1" />
              Code
            </a>
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {project.category}
            </Badge>
          </div>
          
          <p className="text-muted-foreground leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
            {project.description}
          </p>
        </div>

        {/* Metrics Row (if available) */}
        {project.metrics && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            {project.metrics.stars && (
              <div className="flex items-center gap-1">
                <Code className="w-3 h-3" />
                {project.metrics.stars}
              </div>
            )}
            {project.timeline && (
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {project.timeline}
              </div>
            )}
            {project.teamSize && (
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {project.teamSize} members
              </div>
            )}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 6).map((tag, tagIndex) => (
            <Badge 
              key={tagIndex} 
              variant="secondary" 
              className="text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
            >
              {tag}
            </Badge>
          ))}
          {project.tags.length > 6 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 6}
            </Badge>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          <Button
            size="sm"
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all duration-200"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Source
            </a>
          </Button>
          
          {project.demo && (
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-200"
              asChild
            >
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default InteractiveProjectCard;
