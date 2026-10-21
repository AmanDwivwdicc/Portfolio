// All portfolio content lives here so sections stay purely presentational.

export const profile = {
  name: "Aman Dwivedi",
  title: "B.Tech Information Technology Student",
  roles: [
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "OpenCV & Python Developer",
    "DSA Practitioner",
  ],
  phone: "+91 70674 33439",
  phoneHref: "tel:+917067433439",
  email: "dwivediaman104@gmail.com",
  resume: "/resume.pdf",
  heroImage: "/images/profile.webp",
  contactImage: "/images/profile2.webp",
};

export const socials = {
  github: "https://github.com/AmanDwivwdicc",
  linkedin: "https://www.linkedin.com/in/aman-kumar-dwivedi-765079343/",
  linkedinContact: "https://www.linkedin.com/in/aman-kumar-dwivedi-765079343/?skipRedirect=true",
  leetcode: "https://leetcode.com/u/Aman_Dwivedi_123/",
};

// Order matches the order sections appear on the page.
export const navItems = [
  { name: "About Me", id: "about" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Connect", id: "contact" },
] as const;

export const education = [
  {
    period: "Currently pursuing",
    title: "B.Tech in Information Technology",
    place: "Jabalpur Engineering College (JEC), Jabalpur",
  },
  {
    period: "Class 12",
    title: "Higher Secondary — 85%",
    place: "Scored 85% in Class 12",
  },
];

export const aboutParagraphs = [
  "I scored 85% in Class 12 and am currently pursuing B.Tech in Information Technology from Jabalpur Engineering College (JEC), Jabalpur.",
  "I have a keen interest in Software Development, Full Stack Web Development, Machine Learning, OpenCV and Python.",
  "I have solved 100+ DSA problems on LeetCode along with many more on various coding platforms.",
  "I love creating things and designing elegant animations using Python Turtle and Canvas.",
];

export const stats = [
  { value: "100+", label: "LeetCode problems solved" },
  { value: "85%", label: "Class 12 score" },
  { value: "5", label: "Live projects" },
];

export const certificates = [
  { image: "/images/cert1.jpg", title: "Certificate 1" },
  { image: "/images/cert2.jpg", title: "Certificate 2" },
  { image: "/images/cert3.jpg", title: "Certificate 3" },
];

export const skillGroups = [
  { label: "Languages", skills: ["C++", "Python", "JavaScript"] },
  { label: "Web & Backend", skills: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"] },
  { label: "AI & Vision", skills: ["OpenCV", "Machine Learning"] },
  { label: "Tools", skills: ["Git", "GitHub"] },
];

export const projects = [
  {
    title: "Turtle Animation Website",
    image: "/images/turtle_animation.jpg",
    description:
      "A collection of beautiful Python Turtle animations integrated into a web experience.",
    link: "https://college-library-website-opal.vercel.app/",
  },
  {
    title: "ShelfShare",
    image: "/images/shelfshare.jpg",
    description: "A platform for sharing books and study resources among students.",
    link: "https://shelf-share-taupe.vercel.app/login",
  },
  {
    title: "Love Proposal Website",
    image: "/images/fun_love.jpg",
    description:
      "An interactive and playful proposal website with animations and user interaction.",
    link: "https://aman-loves-you.vercel.app/",
  },
  {
    title: "Invisible Cloak",
    image: "/images/invisible_cloak.jpg",
    description: "A full-stack OpenCV project implementing a Harry Potter-style invisibility cloak.",
    link: "https://harry-potter-invisible-cloak.vercel.app/",
  },
  {
    title: "Face Expression Analyser",
    image: "/images/face_expression.jpg",
    description:
      "An AI-powered computer vision project that detects human facial expressions in real time using OpenCV and machine learning techniques.",
    link: "https://face-analyser-project.vercel.app/",
  },
];
