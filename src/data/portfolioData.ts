// Centralized Portfolio Data Configuration
// This file contains all portfolio data to eliminate duplication and enable easy updates

import {
  FaRobot,
  FaRunning,
  FaPuzzlePiece,
  FaUsers
} from "react-icons/fa";

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
  profileImage: "https://images.pexels.com/photos/32326782/pexels-photo-32326782.jpeg",
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
  codechef: {
    rating: "1270",
    problemsSolved: "25+",
    stars: "2★"
  },
  codeforces: {
    rating: "900",
    problemsSolved: "10+",
    rank: "Newbie"
  },
  geeksforgeeks: {
    problemsSolved: "70+",
    rank: "1455"
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
  { icon: FaRobot, name: "Robotics", description: "Building combat & soccer bots" },
  { icon: FaRunning, name: "Athletics", description: "Bronze in 50m Hurdles" },
  { icon: FaPuzzlePiece, name: "Problem Solving", description: "Competitive programming" },
  { icon: FaUsers, name: "Mentoring", description: "Leading workshops" }
];

export const projects = [
  {
    title: "BookHive",
    name: "BookHive",
    description: "A collaborative book reading and review platform with real-time chat, personalized recommendations, and social features.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F911edf0abfc44540bba885225b62aa26%2F6aff8a4cc2a44603904ec06dfbd17734?format=webp&width=2880&height=1560",
    category: "Full Stack",
    featured: true,
    tags: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "Tailwind CSS"],
    demo: "https://bookhive.live",
    live: "https://bookhive.live",
    github: "https://github.com/yuvraj-mehta/bookhive",
    status: "Live",
    features: [
      "Real-time group chat for book clubs",
      "Personalized book recommendations",
      "User reviews and ratings",
      "Social sharing and friend system"
    ]
  },
  {
    title: "EcoGuardian",
    name: "EcoGuardian",
    description: "A gamified platform to track, reduce, and compete on carbon footprint, with educational resources and community challenges.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F911edf0abfc44540bba885225b62aa26%2F2fbbcced95b94a128c0a7b5e14c085a0?format=webp&width=2880&height=1560",
    category: "Full Stack",
    featured: true,
    tags: ["Next.js", "TypeScript", "Firebase", "Framer Motion", "Tailwind CSS"],
    techStack: ["Next.js", "TypeScript", "Firebase", "Framer Motion", "Tailwind CSS"],
    demo: "https://ecoguardian.app",
    live: "https://ecoguardian.app",
    github: "https://github.com/yuvraj-mehta/ecoguardian",
    status: "Live",
    features: [
      "Carbon footprint calculator",
      "Gamified challenges and leaderboards",
      "Educational content on sustainability",
      "Progress tracking dashboard"
    ]
  },
  {
    title: "Stickify",
    name: "Stickify",
    description: "A full-stack sticker marketplace with custom design tools, order management, and secure payments.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F911edf0abfc44540bba885225b62aa26%2F66d04f4d2b8f4683a586836a1645fcd0?format=webp&width=800",
    category: "Full Stack",
    featured: true,
    tags: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API", "Tailwind CSS"],
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Stripe API", "Tailwind CSS"],
    demo: "https://stickify.shop",
    live: "https://stickify.shop",
    github: "https://github.com/yuvraj-mehta/stickify",
    status: "Live",
    features: [
      "Custom sticker design editor",
      "Order and inventory management",
      "Secure Stripe payments",
      "User reviews and wishlists"
    ]
  },
  {
    title: "Portfolio",
    name: "Portfolio",
    description: "Modern, animated portfolio to showcase full stack, DSA, and GenAI skills. Features project gallery, coding stats, and interactive UI.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F911edf0abfc44540bba885225b62aa26%2F564561b9219a409f8cd1139440589eac?format=webp&width=800",
    category: "Frontend",
    featured: false,
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "Express"],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "Express"],
    demo: "https://yuvrajmehta.dev",
    live: "https://yuvrajmehta.dev",
    github: "https://github.com/yuvraj-mehta/portfolio",
    status: "Live",
    features: [
      "Animated hero and section transitions",
      "Coding stats integration (LeetCode, Codeforces, etc.)",
      "Responsive, accessible, and SEO-optimized",
      "Dark/light mode with theme persistence"
    ]
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
