import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Menu,
  Code2, Layers3, Smartphone, Braces, Sparkles, ExternalLink
} from "lucide-react";
import "./styles.css";

const skills = ["React JS", "JavaScript", "HTML5", "CSS3", "Responsive UI", "REST API integration", "Git", "Frontend development"];

const projects = [
  {
    number: "01",
    type: "FRONTEND / E-COMMERCE",
    title: "Commerce UI",
    description: "A responsive storefront concept with product discovery, category filters and a clean shopping experience.",
    tags: ["React", "JavaScript", "CSS"],
    mark: "SHOP",
    tone: "violet"
  },
  {
    number: "02",
    type: "DASHBOARD / ANALYTICS",
    title: "Insight Dashboard",
    description: "A dashboard concept for presenting key metrics, activity summaries and data in a clear interface.",
    tags: ["React", "Components", "CSS"],
    mark: "DATA",
    tone: "blue"
  },
  {
    number: "03",
    type: "PRODUCTIVITY / WEB APP",
    title: "TaskFlow",
    description: "A task management interface concept focused on organizing work, tracking progress and staying productive.",
    tags: ["React", "Hooks", "Responsive"],
    mark: "FLOW",
    tone: "orange"
  }
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">H.</span><span>HAREESH<span className="brand-dot">/</span>DEV</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}><Menu size={21} /></button>
        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR SELECT FREELANCE PROJECTS</div>
            <h1>Building digital<br/><span className="gradient-text">experiences</span><br/>that feel right.</h1>
            <p className="hero-lede">I'm <strong>Hareesh</strong>, a React JS Developer focused on creating clean, responsive and user-friendly web interfaces.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowDownRight size={17}/></a>
            </div>
            <div className="hero-meta"><span>REACT JS DEVELOPER</span><i /> <span>FRONTEND DEVELOPMENT</span><i /> <span>3–5 YEARS' EXPERIENCE</span></div>
          </div>
          <div className="hero-visual" aria-label="Abstract code illustration">
            <div className="visual-grid" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            <div className="code-card">
              <div className="code-top"><span/><span/><span/><small>hello-world.jsx</small></div>
              <div className="code-body">
                <div><em>01</em><span className="pink">const</span> <span className="cyan">developer</span> = {"{"}</div>
                <div><em>02</em>&nbsp;&nbsp;name: <span className="green">'Hareesh'</span>,</div>
                <div><em>03</em>&nbsp;&nbsp;focus: <span className="green">'React JS'</span>,</div>
                <div><em>04</em>&nbsp;&nbsp;mindset: <span className="green">'Build & learn'</span></div>
                <div><em>05</em>{"};"}</div>
                <div className="code-gap"><em>06</em></div>
                <div><em>07</em><span className="pink">export default</span> <span className="cyan">developer</span>;</div>
              </div>
              <div className="code-footer"><span className="status-dot"/> Compiling ideas into interfaces</div>
            </div>
            <div className="floating-chip chip-one"><Code2 size={15}/> React components</div>
            <div className="floating-chip chip-two"><Sparkles size={15}/> Thoughtful UI</div>
            <div className="visual-caption">CRAFTED WITH CURIOSITY <span>✳</span></div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><div className="scroll-line"/></a>
        </section>

        <section className="intro section-wrap" id="about">
          <div className="section-label"><span>01 / ABOUT</span><span className="label-line"/></div>
          <div className="intro-grid">
            <h2>Good interfaces<br/>make complex things<br/><span className="muted">feel simple.</span></h2>
            <div className="intro-copy">
              <p className="large-copy">I enjoy turning ideas into intuitive web experiences. My focus is frontend development with React JS, JavaScript, HTML and CSS.</p>
              <p>I care about readable code, thoughtful details, responsive layouts and interfaces that work smoothly across devices. I'm always learning, improving and looking for meaningful problems to solve.</p>
              <a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-label"><span>02 / WHAT I DO</span><span className="label-line"/></div>
          <div className="section-heading"><h2>Tools of the <span className="muted">trade.</span></h2><p>A focused toolkit for building modern frontend experiences.</p></div>
          <div className="skill-layout">
            <div className="skill-feature">
              <div className="feature-icon"><Layers3 size={24}/></div>
              <h3>Frontend<br/>development</h3>
              <p>From reusable components to responsive layouts, I build interfaces with clarity and care.</p>
              <span className="feature-index">01 — CORE FOCUS</span>
            </div>
            <div className="skill-list">
              {skills.map((skill, index) => <div className="skill-item" key={skill}><span className="skill-index">0{index + 1}</span><span>{skill}</span><ArrowUpRight size={15}/></div>)}
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-label"><span>03 / SELECTED WORK</span><span className="label-line"/></div>
          <div className="section-heading project-heading"><h2>Ideas made <span className="muted">visible.</span></h2><p>Some sample project concepts that demonstrate the kind of work I enjoy building.</p></div>
          <div className="project-grid">
            {projects.map(project => <article className="project-card" key={project.number}>
              <div className={`project-art ${project.tone}`}><span className="art-number">{project.number}</span><div className="art-window"><div className="art-window-top"><i/><i/><i/></div><div className="art-mark">{project.mark}</div><div className="art-bars"><b/><b/><b/></div></div><span className="art-orbit"/></div>
              <div className="project-info"><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            </article>)}
          </div>
          <p className="project-note"><Sparkles size={15}/> These are portfolio concepts/placeholders. Replace them with your own completed projects before presenting them as client work.</p>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="section-label"><span>04 / CONTACT</span><span className="label-line"/></div>
          <div className="contact-panel">
            <div><div className="eyebrow">HAVE A PROJECT IN MIND?</div><h2>Let's build<br/><span className="gradient-text">something useful.</span></h2><p>I'm open to discussing frontend projects, collaborations and new opportunities.</p></div>
            <div className="contact-links">
                <a href="mailto:gounipallihareesh4464@gmail.com">
                  <Mail size={18}/>
                  Email me
                  <ArrowUpRight size={16}/>
                </a>

                <a
                  href="https://github.com/HareeshGounipalli"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={18}/> GitHub <ExternalLink size={15}/>
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18}/> LinkedIn <ExternalLink size={15}/>
                </a>
              </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">H.</span><span>HAREESH<span className="brand-dot">/</span>DEV</span></a><span>Designed & built with React JS</span><span>© {new Date().getFullYear()} Hareesh</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);