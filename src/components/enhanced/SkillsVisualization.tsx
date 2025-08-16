import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  SiReact, SiTypescript, SiNodedotjs, SiMongodb, SiTailwindcss,
  SiJavascript, SiPython, SiGit, SiDocker, SiNextdotjs,
  SiExpress, SiRedux, SiVite, SiFirebase, SiVercel
} from "react-icons/si";
import { TbBrandVscode, TbDatabase, TbApi } from "react-icons/tb";

const iconMap: Record<string, React.ComponentType<any>> = {
  "React": SiReact,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Node.js": SiNodedotjs,
  "MongoDB": SiMongodb,
  "Tailwind CSS": SiTailwindcss,
  "Python": SiPython,
  "Git & GitHub": SiGit,
  "Docker": SiDocker,
  "Next.js": SiNextdotjs,
  "Express.js": SiExpress,
  "Redux": SiRedux,
  "Vite": SiVite,
  "Firebase": SiFirebase,
  "Vercel": SiVercel,
  "VS Code": TbBrandVscode,
  "Database Design": TbDatabase,
  "RESTful APIs": TbApi,
};

interface Skill {
  name: string;
  level: number;
  category: string;
  color?: string;
  description?: string;
}

interface SkillsVisualizationProps {
  skills: Record<string, Record<string, Skill[]>>;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const SkillsVisualization = ({ skills, activeCategory, onCategoryChange }: SkillsVisualizationProps) => {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // Animate skill levels when category changes
  useEffect(() => {
    const skillsInCategory = skills[activeCategory] || {};
    const allSkills = Object.values(skillsInCategory).flat();
    
    // Reset animations
    setAnimatedSkills({});
    
    // Animate each skill level
    allSkills.forEach((skill, index) => {
      setTimeout(() => {
        setAnimatedSkills(prev => ({
          ...prev,
          [skill.name]: skill.level
        }));
      }, index * 100);
    });
  }, [activeCategory, skills]);

  const categories = Object.keys(skills);
  const currentSkills = skills[activeCategory] || {};

  const getSkillColor = (level: number) => {
    if (level >= 90) return "text-emerald-500";
    if (level >= 75) return "text-blue-500";
    if (level >= 60) return "text-yellow-500";
    return "text-gray-500";
  };

  const getProgressBarColor = (level: number) => {
    if (level >= 90) return "from-emerald-500 to-emerald-600";
    if (level >= 75) return "from-blue-500 to-blue-600";
    if (level >= 60) return "from-yellow-500 to-yellow-600";
    return "from-gray-500 to-gray-600";
  };

  const getLevelLabel = (level: number) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Beginner";
  };

  return (
    <div className="space-y-8">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-lg shadow-primary/25 transform scale-105"
                : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-primary/5"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="space-y-8">
        {Object.entries(currentSkills).map(([sectionName, skillList]) => (
          <Card key={sectionName} className="p-6 space-y-6 bg-card/50 backdrop-blur-sm border border-border/50">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              {sectionName}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillList.map((skill, index) => {
                const IconComponent = iconMap[skill.name];
                const animatedLevel = animatedSkills[skill.name] || 0;
                const isHovered = hoveredSkill === skill.name;
                
                return (
                  <div
                    key={skill.name}
                    className="group relative p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {/* Skill Header */}
                    <div className="flex items-center gap-3 mb-3">
                      {IconComponent && (
                        <div className={`p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300`}>
                          <IconComponent className={`w-5 h-5 ${getSkillColor(skill.level)} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                          {skill.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${getSkillColor(skill.level)}`}
                          >
                            {getLevelLabel(skill.level)}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {animatedLevel}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="w-full bg-muted/60 rounded-full h-2 overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${getProgressBarColor(skill.level)} transition-all duration-1000 ease-out rounded-full relative`}
                          style={{ width: `${animatedLevel}%` }}
                        >
                          {/* Animated shine effect */}
                          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      
                      {/* Skill description on hover */}
                      {isHovered && skill.description && (
                        <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-popover border border-border rounded-lg shadow-lg text-xs text-popover-foreground z-10">
                          {skill.description}
                        </div>
                      )}
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                );
              })}
            </div>
          </Card>
        ))}
      </div>

      {/* Skills Summary */}
      <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary-glow/5 border border-primary/20">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-bold text-foreground">Skills Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => {
              const categorySkills = Object.values(skills[category] || {}).flat();
              const averageLevel = categorySkills.length > 0 
                ? Math.round(categorySkills.reduce((sum, skill) => sum + skill.level, 0) / categorySkills.length)
                : 0;
              
              return (
                <div key={category} className="text-center">
                  <div className="text-2xl font-bold text-primary">{averageLevel}%</div>
                  <div className="text-sm text-muted-foreground">{category}</div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SkillsVisualization;
