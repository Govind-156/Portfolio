"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, ExternalLink, Users, Brain, Lightbulb, ChevronRight, Phone, Briefcase, Calendar } from "lucide-react";

const projects = [
  {
    title: "CESA - Emergency Service App",
    description:
      "Comprehensive Emergency Service App with background keyword detection, ML-based distress classification, sensor-driven accident detection, and automated emergency workflows including 112 calls and GPS tracking.",
    image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&q=80",
    tags: ["Python", "Kivy", "ML", "OpenCV", "SQLite"],
    link: "https://cesa-because-every-second-matters2help.vercel.app/",
    githubUrl: "https://github.com/Govind-156/cesa-because-every-second-matters.git",
    liveUrl: "https://cesa-because-every-second-matters2help.vercel.app/",
    highlight: true,
  },
  {
    title: "RG Bowl",
    description:
      "Food delivery MVP for late-night comfort bowls with secure Razorpay checkout, admin dashboard, and full-stack workflow built for a real business use case.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=800&q=80",
    tags: ["Next.js", "TypeScript", "Prisma", "MySQL", "Razorpay"],
    link: "https://www.rgbowl.in/",
    githubUrl: "https://github.com/Govind-156/RG_Bowl.git",
    liveUrl: "https://www.rgbowl.in/",
    highlight: true,
  },
  {
    title: "Career Platform",
    description:
      "Placement-readiness web platform focused on improving career preparation with structured workflows and modern full-stack architecture.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    tags: ["Next.js", "JavaScript", "TypeScript", "CSS"],
    link: "https://career-platform-eta.vercel.app/",
    githubUrl: "https://github.com/Govind-156/career-platform.git",
    liveUrl: "https://career-platform-eta.vercel.app/",
    highlight: true,
  },
  {
    title: "AI Learning Platform",
    description:
      "Modern learning platform with structured courses, profile-driven experience, and an AI tutor-focused workflow for scalable skill development.",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80",
    tags: ["TypeScript", "React", "Node.js", "AI", "CSS"],
    link: "https://lms-platform-eta-peach.vercel.app/",
    githubUrl: "https://github.com/Govind-156/LMS_Platform.git",
    liveUrl: "https://lms-platform-eta-peach.vercel.app/",
    highlight: true,
  },
  {
    title: "ReDbank",
    description:
      "Full-stack AI-powered banking platform with secure JWT authentication, PostgreSQL-backed transactions, and an intelligent chatbot assistant.",
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&q=80",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "AI"],
    link: "#",
    githubUrl: "https://github.com/Govind-156/ReDbank.git",
    liveUrl: "#",
    highlight: true,
  },
  {
    title: "AI Decision Dashboard",
    description:
      "Production-grade decision intelligence platform for CSV-based analytics with EDA, anomaly detection, SHAP feature importance, and AI-powered business insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Next.js", "TypeScript", "FastAPI", "Python", "AI", "MySQL"],
    link: "#",
    githubUrl: "https://github.com/Govind-156/AI-Decision-Dashboard.git",
    liveUrl: "#",
    highlight: true,
  },
  {
    title: "RAG AI",
    description:
      "ChatGPT-style local AI chat app powered by Ollama with streaming responses, conversation history, markdown rendering, and model switching.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    tags: ["React", "Node.js", "Express", "Ollama", "SQLite", "AI"],
    link: "#",
    githubUrl: "https://github.com/Govind-156/RAG-AI.git",
    liveUrl: "#",
    highlight: true,
  },
  {
    title: "Movie-app",
    description:
      "Netflix-style full-stack movie web app with JWT authentication, TMDB-powered discovery, and a polished responsive UI.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "JWT", "TMDB"],
    link: "#",
    githubUrl: "https://github.com/Govind-156/movie-app.git",
    liveUrl: "#",
    highlight: true,
  },
];

const skills = [
  { name: "Python", level: 70 },
  { name: "JavaScript / React", level: 75 },
  { name: "TypeScript", level: 65 },
  { name: "Flask / REST APIs", level: 65 },
  { name: "Machine Learning", level: 50 },
  { name: "SQL / SQLite", level: 80 },
  { name: "Data Analytics", level: 65 },
];

const internships = [
  {
    company: "Ayud Software",
    role: "Python Fullstack Development Intern",
    duration: "Jun 2024 - Aug 2024",
    description: "Worked on full-stack development projects, building REST APIs with Flask and implementing frontend features using React. Gained hands-on experience in agile methodologies and collaborative development.",
    tags: ["Python", "Flask", "React", "REST APIs"],
  },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen noise-bg">
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 94, 58, 0.06), transparent 40%)`,
        }}
      />

      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="mx-auto max-w-6xl flex items-center justify-between">
          <motion.a
            href="#hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold gradient-text"
          >
            V Govind
          </motion.a>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.toLowerCase()
                    ? "text-[#ff5e3a]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </a>
            ))}
          </motion.div>
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff5e3a]/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#ff8c3a]/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#ff5e3a] font-mono text-sm mb-4 tracking-wider">HELLO, I&apos;M</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight">
              V Govind
              <span className="gradient-text block text-3xl md:text-4xl lg:text-5xl mt-2">Enthusiastic Engineer</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Computer Science Engineering student with hands-on experience in Python, Full Stack Web Technologies, and Data Analytics. Building impactful projects and turning ideas into reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-[#ff5e3a] text-black px-6 py-3 rounded-full font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#ff5e3a]/25"
            >
              View My Work
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-border px-6 py-3 rounded-full font-semibold transition-all hover:bg-secondary"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-xs font-mono">SCROLL</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </motion.div>
        </div>
      </section>

      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div>
              <p className="text-[#ff5e3a] font-mono text-sm mb-4 tracking-wider">ABOUT ME</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Passionate About Creating <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                B.E Computer Science Engineering student at HKES SMVCE, Raichur (Expected 2026). Certified by Infosys, Deloitte, and NPTEL with hands-on internship experience at Ayud Software.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Strong problem solver with proven results in college-level hackathons including 2nd Prize at Projectathon and Top 5 finalist at Parvam Consultancy hackathon.
              </p>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#14b8a6]/40 bg-[#14b8a6]/10 px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#14b8a6]" />
                <span className="text-sm font-medium text-[#14b8a6]">
                  Built multiple AI-powered applications across real-world domains
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                {[
                  { icon: Users, label: "Leader" },
                  { icon: Brain, label: "Quick Learner" },
                  { icon: Lightbulb, label: "Problem Solver" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="glass-card rounded-xl p-4 text-center">
                    <Icon className="w-6 h-6 mx-auto mb-2 text-[#ff5e3a]" />
                    <p className="text-sm font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-8">Tech Stack</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground font-mono text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-[#ff5e3a] to-[#ff8c3a] rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="experience" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#ff5e3a] font-mono text-sm mb-4 tracking-wider">EXPERIENCE</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Professional <span className="gradient-text">Internships</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {internships.map((internship, index) => (
              <motion.div
                key={internship.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group glass-card rounded-2xl p-8 hover:border-[#ff5e3a]/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#ff5e3a]/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-[#ff5e3a]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-[#ff5e3a] transition-colors">
                        {internship.role}
                      </h3>
                      <p className="text-muted-foreground font-medium">{internship.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono">
                    <Calendar className="w-4 h-4" />
                    {internship.duration}
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 pl-0 md:pl-16">
                  {internship.description}
                </p>
                <div className="flex flex-wrap gap-2 pl-0 md:pl-16">
                  {internship.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#ff5e3a] font-mono text-sm mb-4 tracking-wider">MY WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={project.title}
                href={project.link}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group glass-card rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-xl font-bold group-hover:text-[#ff5e3a] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      {project.highlight && (
                        <span className="inline-flex items-center rounded-full border border-[#ff5e3a]/40 bg-[#ff5e3a]/10 px-2 py-0.5 text-xs font-medium text-[#ff5e3a]">
                          Featured
                        </span>
                      )}
                      <div className="flex items-center gap-2 text-[#8888a0]">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View on GitHub"
                            className="hover:text-[#14b8a6] transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View live website"
                            className="hover:text-[#14b8a6] transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-3 py-1 bg-secondary rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#ff5e3a] font-mono text-sm mb-4 tracking-wider">GET IN TOUCH</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let&apos;s Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Have a project in mind or just want to say hello? I&apos;d love to hear from you. Based in Raichur, Karnataka.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 mb-16">
              <a
                href="mailto:vcreddy5454k@gmail.com"
                className="group flex items-center gap-3 glass-card px-6 py-4 rounded-xl hover:border-[#ff5e3a]/50 transition-all"
              >
                <Mail className="w-5 h-5 text-[#ff5e3a]" />
                <span className="font-medium">vcreddy5454k@gmail.com</span>
              </a>
              <a
                href="tel:+919966833517"
                className="group flex items-center gap-3 glass-card px-6 py-4 rounded-xl hover:border-[#ff5e3a]/50 transition-all"
              >
                <Phone className="w-5 h-5 text-[#ff5e3a]" />
                <span className="font-medium">+91 9966833517</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-6">
              {[
                { icon: Github, href: "https://github.com/Rakgovind", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/rg1516", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-14 h-14 rounded-full border border-border flex items-center justify-center hover:border-[#ff5e3a] hover:bg-[#ff5e3a]/10 transition-all"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-[#ff5e3a] transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 V Govind. All rights reserved.
          </p>
          
        </div>
      </footer>
    </div>
  );
}