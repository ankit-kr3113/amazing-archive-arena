// Centralized Portfolio Data Configuration
// This file contains all portfolio data to eliminate duplication and enable easy updates

export const personalInfo = {
  name: "Yuvraj Mehta",
  title: "Full Stack Developer",
  subtitle: "B.Tech CS Student • NIT Patna",
  tagline: "Full Stack Developer • B.Tech CS Student • NIT Patna • Passionate about creating impactful digital solutions",
  email: "yuvraj.mehta532@gmail.com",
  phone: "+91-9334083113",
  location: "Gaya, Bihar, India",
  university: "NIT Patna",
  course: "Computer Science",
  bio: {
    intro: "I'm a Computer Science student at NIT Patna with a passion for building full-stack applications that solve real-world problems. My journey in tech started with curiosity about how things work and evolved into a deep love for creating digital solutions.",
    robotics: "As a Robotics Club member, I've organized workshops and led teams building combat and soccer bots. I believe in learning by doing and enjoy sharing knowledge with others through mentoring and technical discussions.",
    interests: "When I'm not coding, you can find me solving algorithmic challenges on competitive programming platforms, participating in hackathons, or running track. I won Bronze in 50m Hurdles at NIT Patna Intramurals!"
  },
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
  resume: "/Yuvraj_Resume_v2_1 (1).pdf",
  status: {
    availability: "Available",
    workMode: "Remote"
  }
};

export const socialLinks = {
  github: {
    url: "https://github.com/yuvraj-mehta",
    username: "yuvraj-mehta"
  },
  linkedin: {
    url: "https://www.linkedin.com/in/yuvraj-mehta-a0274528a/",
    username: "yuvraj-mehta-a0274528a"
  },
  leetcode: {
    url: "https://leetcode.com/u/mythical-UV/",
    username: "mythical-UV"
  },
  geeksforgeeks: {
    url: "https://www.geeksforgeeks.org/user/yuvrajmevbrx/",
    username: "yuvrajmevbrx"
  },
  codechef: {
    url: "https://www.codechef.com/users/quick_unity_53",
    username: "quick_unity_53"
  },
  instagram: {
    url: "https://www.instagram.com/yuvraj.mehta4261/",
    username: "yuvraj.mehta4261"
  },
  twitter: {
    url: "https://twitter.com/",
    username: ""
  },
  email: {
    url: "mailto:yuvraj.mehta532@gmail.com",
    address: "yuvraj.mehta532@gmail.com"
  }
};

export const achievements = {
  leetcode: {
    rating: "1570+",
    problemsSolved: "333+",
    globalRanking: "Top 27.7%"
  },
  stats: {
    yearsExperience: "2+",
    totalProjects: "15+",
    commits: "500+"
  },
  awards: [
    {
      title: "Best Delegate - Model United Nations",
      category: "competition",
      year: "2023",
      description: "Represented Poland at NIT Patna's MUN, earned Best Delegate award for exceptional debate skills."
    },
    {
      title: "Bronze Medal - 50m Hurdles",
      category: "sports", 
      year: "2023",
      description: "Won Bronze in 50m Hurdles at NIT Patna Intramurals sports competition."
    },
    {
      title: "LeetCode Top 27.7%",
      category: "technical",
      year: "2024", 
      description: "Achieved global ranking in top 27.7% with 1570+ rating and 333+ problems solved."
    },
    {
      title: "Tech Fest Participant",
      category: "competition",
      year: "2023-2024",
      description: "Regular participant in technical competitions and robotics challenges at university level."
    }
  ]
};

export const experiences = [
  {
    title: "Technical Member",
    company: "Robotics Club, NIT Patna",
    location: "NIT Patna",
    period: "December 2023 - Present",
    type: "Technical",
    status: "Currently Active",
    description: "Organized and facilitated 3+ workshops on designing and building robotic bots. Led a team of 4 to build a combat-ready battle bot, achieving 4th place among 15+ teams at NIT Patna's tech fest. Directed a team of 3 in designing and developing a soccer bot for the annual tech fest.",
    highlights: [
      "4th place in tech fest",
      "3+ workshops organized",
      "Team of 4-7 members"
    ],
    skills: ["Arduino", "C++", "Mechanical Design", "Team Leadership"]
  },
  {
    title: "Team Leader",
    company: "Hackathons (including Smart India Hackathon)",
    location: "NIT Patna & Remote",
    period: "2023",
    type: "Leadership",
    description: "Led teams in 3 major hackathons, including the prestigious Smart India Hackathon. Guided my team to qualify at the internal NIT Patna hackathon and advance to the national level. Oversaw all phases from ideation to development and presentation.",
    highlights: [
      "National level qualification",
      "3 major hackathons",
      "End-to-end project management"
    ],
    skills: ["Problem Solving", "Team Management", "Presentation", "Innovation"]
  },
  {
    title: "Class Representative",
    company: "Computer Science Department, NIT Patna",
    location: "NIT Patna",
    period: "2023 - 2024",
    type: "Leadership",
    description: "Coordinated between faculty and students, organized department events, and facilitated communication for academic activities. Represented student interests in department meetings and helped resolve academic concerns.",
    highlights: [
      "Student-faculty liaison",
      "Department event coordination",
      "Academic advocacy"
    ],
    skills: ["Communication", "Event Management", "Leadership", "Coordination"]
  }
];

export const skills = {
  "Web Development": {
    Frontend: [
      { name: "React", level: "Advanced", color: "text-blue-400" },
      { name: "JavaScript", level: "Advanced", color: "text-yellow-400" },
      { name: "TypeScript", level: "Intermediate", color: "text-blue-500" },
      { name: "HTML5", level: "Advanced", color: "text-orange-400" },
      { name: "CSS3", level: "Advanced", color: "text-blue-400" },
      { name: "Tailwind CSS", level: "Advanced", color: "text-cyan-400" },
      { name: "Next.js", level: "Intermediate", color: "text-gray-300" },
      { name: "Redux", level: "Intermediate", color: "text-purple-400" },
      { name: "Vue", level: "Beginner", color: "text-green-400" }
    ],
    Backend: [
      { name: "Node.js", level: "Intermediate", color: "text-green-400" },
      { name: "RESTful APIs", level: "Intermediate", color: "text-cyan-400" },
      { name: "Express.js", level: "Intermediate", color: "text-gray-400" }
    ]
  },
  "Database": {
    Database: [
      { name: "MongoDB", level: "Intermediate", color: "text-green-400" },
      { name: "SQL", level: "Intermediate", color: "text-blue-400" },
      { name: "Database Design", level: "Intermediate", color: "text-purple-400" }
    ]
  },
  "Languages": {
    Languages: [
      { name: "JavaScript", level: "Advanced", color: "text-yellow-400" },
      { name: "TypeScript", level: "Intermediate", color: "text-blue-500" },
      { name: "C++", level: "Advanced", color: "text-blue-400" },
      { name: "Java", level: "Intermediate", color: "text-orange-400" },
      { name: "Python", level: "Beginner", color: "text-yellow-400" }
    ]
  },
  "Tools": {
    Tools: [
      { name: "Git & GitHub", level: "Advanced", color: "text-orange-400" },
      { name: "VS Code", level: "Advanced", color: "text-blue-400" },
      { name: "Webpack", level: "Intermediate", color: "text-blue-400" },
      { name: "Docker", level: "Beginner", color: "text-blue-400" }
    ]
  }
};

export const interests = [
  { icon: "🤖", name: "Robotics", description: "Building combat & soccer bots" },
  { icon: "🏃‍♂️", name: "Athletics", description: "Bronze in 50m Hurdles" },
  { icon: "🧩", name: "Problem Solving", description: "Competitive programming" },
  { icon: "🎯", name: "Mentoring", description: "Leading workshops" }
];

export const projects = [
  {
    title: "BookHive",
    description: "BookNest is a full-stack library management system with distinct user and admin roles. It features book and PYQ management, a borrowing system, OTP-verified authentication, and separate dashboards. Built with React, Node.js, Express.js, and MongoDB.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    category: "Full Stack",
    featured: true,
    tags: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB", "JWT"],
    demo: "https://bookhive-manager.vercel.app",
    github: "https://github.com/yuvraj-mehta/Byteverse_NandiNinjas",
    status: "Live"
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio showcasing projects and skills. Designed and built a responsive single-page portfolio with smooth animations and dynamic navigation. Integrated a contact form using EmailJS and added a downloadable resume feature.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    category: "Frontend",
    featured: true,
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    demo: "https://yuvrajmehta.codes",
    github: "https://github.com/yuvraj-mehta/My-Portfolio",
    status: "Live"
  },
  {
    title: "EcoGuardian",
    description: "An online community platform empowering individuals to collaborate on environmental projects, report cleanliness issues, access educational resources, and drive positive change for a cleaner, greener future. 🌍",
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    category: "Full Stack",
    featured: true,
    tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "MongoDB"],
    demo: "https://yuvraj-mehta.github.io/EcoGuardian_prototype/",
    github: "https://github.com/yuvraj-mehta/EcoGuardian_prototype",
    status: "Live"
  },
  {
    title: "Stickify",
    description: "This is a simple notes application built with React and Vite. It allows users to create, update, delete, and manage notes with different colors. The application uses Appwrite as the backend service for managing notes.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=300&fit=crop&crop=center&auto=format&q=80",
    category: "Frontend",
    featured: false,
    tags: ["React", "Vite", "Tailwind CSS", "Appwrite"],
    demo: "https://stickify-git-master-yuvraj-mehtas-projects.vercel.app/",
    github: "https://github.com/yuvraj-mehta/Stickify",
    status: "Live"
  }
];

export const siteMetadata = {
  title: "Yuvraj Mehta - Full Stack Developer",
  description: "Full Stack Developer • B.Tech CS Student • NIT Patna • Passionate about creating impactful digital solutions",
  ogImage: "https://lovable.dev/opengraph-image-p98pqg.png",
  keywords: ["Full Stack Developer", "React", "Node.js", "TypeScript", "Web Development", "NIT Patna"],
  author: "Yuvraj Mehta"
};

export const quickLinks = [
  { name: "Resume", href: "/Yuvraj_Resume_v2_1 (1).pdf", icon: "📄", external: true },
  { name: "LeetCode", href: "https://leetcode.com/u/mythical-UV/", icon: "⚡", external: true },
  { name: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/user/yuvrajmevbrx/", icon: "🟢", external: true },
  { name: "CodeChef", href: "https://www.codechef.com/users/quick_unity_53", icon: "👨‍🍳", external: true },
  { name: "Projects", href: "/projects", icon: "🚀", external: false }
];

export const techStack = [
  { name: "React", icon: "R", color: "from-blue-500 to-cyan-500", textColor: "text-blue-400" },
  { name: "Node.js", icon: "N", color: "from-green-500 to-emerald-500", textColor: "text-green-400" },
  { name: "MongoDB", icon: "M", color: "from-yellow-500 to-orange-500", textColor: "text-yellow-400" },
  { name: "TypeScript", icon: "TS", color: "from-purple-500 to-pink-500", textColor: "text-purple-400" },
  { name: "Tailwind", icon: "TW", color: "from-indigo-500 to-blue-600", textColor: "text-indigo-400" }
];

export const footerStats = {
  totalVisitors: "12,860",
  lastUpdated: "August 15, 2025",
  dsaRating: 5
};
