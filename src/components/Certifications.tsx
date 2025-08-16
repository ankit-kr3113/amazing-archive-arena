import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Calendar, 
  ExternalLink, 
  Shield, 
  CheckCircle,
  Star,
  Clock,
  GraduationCap
} from 'lucide-react';
import { useState } from 'react';

export interface Certification {
  id: string;
  title: string;
  provider: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  verificationUrl: string;
  badgeImage: string;
  skills: string[];
  description: string;
  status: 'active' | 'expired' | 'pending';
  category: 'development' | 'cloud' | 'data' | 'design' | 'other';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

interface CertificationsProps {
  className?: string;
}

const Certifications = ({ className = '' }: CertificationsProps) => {
  // Mock certification data - you'll replace with real data
  const certifications: Certification[] = [
    {
      id: '1',
      title: 'Complete Python Bootcamp',
      provider: 'Udemy',
      issueDate: '2023-08-15',
      credentialId: 'UC-a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
      verificationUrl: 'https://udemy.com/certificate/UC-a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
      badgeImage: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop&auto=format&q=80',
      skills: ['Python', 'Data Structures', 'Object-Oriented Programming', 'Web Scraping'],
      description: 'Comprehensive Python programming course covering fundamentals to advanced concepts including OOP, data structures, and practical applications.',
      status: 'active',
      category: 'development',
      level: 'intermediate'
    },
    {
      id: '2',
      title: 'Web Developer Bootcamp',
      provider: 'Udemy',
      issueDate: '2023-06-20',
      credentialId: 'UC-b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7',
      verificationUrl: 'https://udemy.com/certificate/UC-b2c3d4e5-f6g7-8h9i-0j1k-l2m3n4o5p6q7',
      badgeImage: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=100&h=100&fit=crop&auto=format&q=80',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      description: 'Full-stack web development bootcamp covering frontend and backend technologies, databases, and modern development practices.',
      status: 'active',
      category: 'development',
      level: 'advanced'
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Categories', icon: Award },
    { value: 'development', label: 'Development', icon: GraduationCap },
    { value: 'cloud', label: 'Cloud', icon: Shield },
    { value: 'data', label: 'Data Science', icon: Star },
    { value: 'design', label: 'Design', icon: Award }
  ];

  const levels = [
    { value: 'all', label: 'All Levels' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'expert', label: 'Expert' }
  ];

  const filteredCertifications = certifications.filter(cert => {
    const categoryMatch = selectedCategory === 'all' || cert.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || cert.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'expired': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'pending': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'intermediate': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'advanced': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'expert': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const isExpiringSoon = (cert: Certification) => {
    if (!cert.expiryDate) return false;
    const expiryDate = new Date(cert.expiryDate);
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30);
    return expiryDate <= thirtyDaysFromNow;
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Award className="w-4 h-4 text-primary" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Certifications & Achievements</h2>
            <p className="text-sm text-muted-foreground">Verified professional credentials</p>
          </div>
        </div>
        <Badge className="bg-primary/10 text-primary">
          {filteredCertifications.length} Active
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
          <label className="text-sm font-medium">Level</label>
          <div className="flex flex-wrap gap-2">
            {levels.map((level) => (
              <Button
                key={level.value}
                size="sm"
                variant={selectedLevel === level.value ? "default" : "outline"}
                onClick={() => setSelectedLevel(level.value)}
                className="h-8"
              >
                {level.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCertifications.map((cert) => (
          <Card 
            key={cert.id} 
            className="group p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-primary/20"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="relative">
                <img
                  src={cert.badgeImage}
                  alt={`${cert.title} badge`}
                  className="w-16 h-16 rounded-lg object-cover border-2 border-primary/20"
                />
                {cert.status === 'active' && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                )}
                {isExpiringSoon(cert) && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Clock className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-primary">{cert.provider}</span>
                  <Badge className={getStatusColor(cert.status)} variant="secondary">
                    {cert.status}
                  </Badge>
                  <Badge className={getLevelColor(cert.level)} variant="secondary">
                    {cert.level}
                  </Badge>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {cert.description}
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-1">
                {cert.skills.slice(0, 4).map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {cert.skills.length > 4 && (
                  <Badge variant="outline" className="text-xs">
                    +{cert.skills.length - 4} more
                  </Badge>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <span>Issued: {formatDate(cert.issueDate)}</span>
              </div>
              
              {cert.expiryDate && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>
                    Expires: {formatDate(cert.expiryDate)}
                    {isExpiringSoon(cert) && (
                      <span className="text-yellow-600 font-medium ml-1">(Soon)</span>
                    )}
                  </span>
                </div>
              )}
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="w-3 h-3" />
                <span className="text-xs font-mono">{cert.credentialId}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button
                size="sm"
                className="flex-1 group-hover:scale-105 transition-transform"
                asChild
              >
                <a 
                  href={cert.verificationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-3 h-3 mr-2" />
                  Verify Certificate
                </a>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredCertifications.length === 0 && (
        <Card className="p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
            <Award className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="font-semibold mb-2">No certifications found</h3>
          <p className="text-muted-foreground mb-4">
            Try adjusting your filters or check back later for new certifications.
          </p>
          <Button variant="outline" onClick={() => {
            setSelectedCategory('all');
            setSelectedLevel('all');
          }}>
            Clear Filters
          </Button>
        </Card>
      )}

      {/* Summary Stats */}
      {certifications.length > 0 && (
        <Card className="p-6 bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-1">
                {certifications.filter(c => c.status === 'active').length}
              </div>
              <div className="text-sm text-muted-foreground">Active Certs</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500 mb-1">
                {certifications.filter(c => c.level === 'advanced' || c.level === 'expert').length}
              </div>
              <div className="text-sm text-muted-foreground">Advanced+</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-500 mb-1">
                {[...new Set(certifications.flatMap(c => c.skills))].length}
              </div>
              <div className="text-sm text-muted-foreground">Skill Areas</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-500 mb-1">
                {[...new Set(certifications.map(c => c.provider))].length}
              </div>
              <div className="text-sm text-muted-foreground">Providers</div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Certifications;
