import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db";
import Course from "../models/Courses";

const courses = [
  {
    "id": "1",
    "title": "Full-Stack Web Development Bootcamp",
    "description": "A complete, modern full-stack development bootcamp covering HTML, CSS, JavaScript, React, Node.js, MongoDB, authentication, deployment, and best practices.",
    "instructor": "James Collins",
    "price": 129.99,
    "category": "Web Development",
    "tags": ["full-stack", "javascript", "react", "node", "mongodb"],
    "syllabus": [
      { "title": "Introduction to Web Development", "videoUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { "title": "Frontend Development with React", "videoUrl": "https://www.youtube.com/embed/SqcY0GlETPk" },
      { "title": "Backend with Node & Express", "videoUrl": "https://www.youtube.com/embed/Oe421EPjeBE" },
      { "title": "MongoDB for Beginners", "videoUrl": "https://www.youtube.com/embed/c2M-rlkkT5o" }
    ]
  },
  {
    "id": "2",
    "title": "Data Science & Machine Learning with Python",
    "description": "Learn data analysis, visualization, machine learning algorithms, model training, and evaluation using Python, NumPy, Pandas, Matplotlib, and Scikit-Learn.",
    "instructor": "Dr. Sophia Martinez",
    "price": 149.99,
    "category": "Data Science",
    "tags": ["python", "ml", "data-science", "pandas", "numpy"],
    "syllabus": [
      { "title": "Python for Data Analysis", "videoUrl": "https://www.youtube.com/embed/rfscVS0vtbw" },
      { "title": "Data Cleaning & Visualization", "videoUrl": "https://www.youtube.com/embed/DAIeuox_2z8" },
      { "title": "Machine Learning Fundamentals", "videoUrl": "https://www.youtube.com/embed/GwIo3gDZCVQ" },
      { "title": "Model Building & Deployment", "videoUrl": "https://www.youtube.com/embed/aircAruvnKk" }
    ]
  },
  {
    "id": "3",
    "title": "UI/UX Design Masterclass 2025",
    "description": "Master UI/UX design fundamentals, wireframing, prototyping, user research, color psychology, typography, and Figma workflows to design modern digital products.",
    "instructor": "Aisha Khan",
    "price": 99.99,
    "category": "Design",
    "tags": ["ui", "ux", "figma", "design", "prototyping"],
    "syllabus": [
      { "title": "Understanding Users & Research", "videoUrl": "https://www.youtube.com/embed/WpkDN78P884" },
      { "title": "Wireframing & UI Principles", "videoUrl": "https://www.youtube.com/embed/c9Wg6Cb_YlU" },
      { "title": "Figma Crash Course", "videoUrl": "https://www.youtube.com/embed/jwC1Qd5F80M" },
      { "title": "Design Systems & Prototyping", "videoUrl": "https://www.youtube.com/embed/TXgQ1tT7lxA" }
    ]
  },
  {
    "id": "4",
    "title": "Cybersecurity & Ethical Hacking",
    "description": "Learn penetration testing, Linux essentials, network security, OWASP Top 10, Wireshark, Metasploit, and ethical hacking methodologies.",
    "instructor": "Daniel Wright",
    "price": 139.99,
    "category": "Cybersecurity",
    "tags": ["cybersecurity", "ethical-hacking", "linux", "pentesting"],
    "syllabus": [
      { "title": "Introduction to Cybersecurity", "videoUrl": "https://www.youtube.com/embed/feU3D7U9a4I" },
      { "title": "Linux for Hackers", "videoUrl": "https://www.youtube.com/embed/tQnXhNZ8U8Q" },
      { "title": "Network Attacks & Defense", "videoUrl": "https://www.youtube.com/embed/-fJ6bQ9yBiA" },
      { "title": "Practical Ethical Hacking", "videoUrl": "https://www.youtube.com/embed/SgJQ5S5jKDk" }
    ]
  },
  {
    "id": "5",
    "title": "Digital Marketing Strategy 2025",
    "description": "A complete course on SEO, social media marketing, paid advertising, email automation, analytics, and content strategy.",
    "instructor": "Emily Carter",
    "price": 79.99,
    "category": "Marketing",
    "tags": ["seo", "social-media", "google-ads", "email-marketing"],
    "syllabus": [
      { "title": "SEO Fundamentals", "videoUrl": "https://www.youtube.com/embed/YSnC4id8cwE" },
      { "title": "Social Media Strategy", "videoUrl": "https://www.youtube.com/embed/MN3BVIAi0eI" },
      { "title": "Paid Ads Campaigns", "videoUrl": "https://www.youtube.com/embed/L34OHQq04Oc" },
      { "title": "Analytics & Automation", "videoUrl": "https://www.youtube.com/embed/sB8zPNZbR2g" }
    ]
  }
]


const seedCourses = async () => {
  try {
    await connectDB();
    console.log("Connected to DB");

    await Course.deleteMany({});
    console.log("Cleared existing courses");

    await Course.insertMany(courses);
    console.log("Courses inserted successfully");

    const all = await Course.find();
    console.log("Inserted Courses:", all);

    process.exit(0);
  } catch (err) {
    console.error("Seeding failed:", err);
    process.exit(1);
  }
};
seedCourses();
