
import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  Code2,
  Layers3,
  Smartphone,
  Sparkles,
  ExternalLink
} from "lucide-react";
import "./styles.css";

const skills = [
  "React.js",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Git",
  "GitHub",
  "REST APIs"
];

const projects = [
  {
    number: "01",
    type: "IBM / FRONTEND UI DEVELOPMENT",
    title: "Genius Hub",
    description:
      "Frontend UI development using React.js, with a focus on user interfaces and reusable components.",
    tags: ["React.js", "JavaScript", "UI Development"],
    mark: "GH",
    tone: "violet"
  },
  {
    number: "02",
    type: "IBM / FRONTEND UI DEVELOPMENT",
    title: "CaaS Console",
    description:
      "Frontend UI development using React.js, with a focus on clear, consistent and user-friendly interfaces.",
    tags: ["React.js", "JavaScript", "Frontend"],
    mark: "CaaS",
    tone: "blue"
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
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">H.</span>
          <span>HAREESH<span className="brand-dot">/</span>GOUNIPALLI</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={21} />
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Let's talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              SOFTWARE DEVELOPER · IBM
            </div>

            <h1>
              Hareesh<br />
              <span className="gradient-text">Gounipalli</span>
            </h1>

            <p className="hero-lede">
              I'm a <strong>Software Developer at IBM</strong>,
              specializing in frontend UI development with React.js,
              JavaScript, HTML and CSS.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowUpRight size={17} />
              </a>
              <a className="button button-quiet" href="#contact">
                Get in touch <ArrowDownRight size={17} />
              </a>
            </div>

            <div className="hero-meta">
              <span>SOFTWARE DEVELOPER</span>
              <i />
              <span>REACT.JS</span>
              <i />
              <span>FRONTEND UI DEVELOPMENT</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract code illustration">
            <div className="visual-grid" />
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />

            <div className="code-card">
              <div className="code-top">
                <span /><span /><span />
                <small>hello-world.jsx</small>
              </div>

              <div className="code-body">
                <div><em>01</em><span className="pink">const</span> <span className="cyan">developer</span> = {"{"}</div>
                <div><em>02</em>&nbsp;&nbsp;name: <span className="green">'Hareesh'</span>,</div>
                <div><em>03</em>&nbsp;&nbsp;focus: <span className="green">'React.js'</span>,</div>
                <div><em>04</em>&nbsp;&nbsp;mindset: <span className="green">'Build & learn'</span></div>
                <div><em>05</em>{"};"}</div>
                <div className="code-gap"><em>06</em></div>
                <div><em>07</em><span className="pink">export default</span> <span className="cyan">developer</span>;</div>
              </div>

              <div className="code-footer">
                <span className="status-dot" />
                Compiling ideas into interfaces
              </div>
            </div>

            <div className="floating-chip chip-one">
              <Code2 size={15} /> React components
            </div>
            <div className="floating-chip chip-two">
              <Sparkles size={15} /> Thoughtful UI
            </div>
            <div className="visual-caption">
              CRAFTED WITH CURIOSITY <span>✳</span>
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line" />
          </a>
        </section>

        {/* ABOUT */}
        <section className="intro section-wrap" id="about">
          <div className="section-label">
            <span>01 / ABOUT</span>
            <span className="label-line" />
          </div>

          <div className="intro-grid">
            <h2>
              Good interfaces<br />
              make complex things<br />
              <span className="muted">feel simple.</span>
            </h2>

            <div className="intro-copy">
              <p className="large-copy">
                I am a Software Developer at IBM, specializing in
                frontend development using React.js, JavaScript,
                HTML and CSS.
              </p>

              <p>
                I focus on building responsive, reusable and
                user-friendly interfaces, integrating frontend
                applications with REST APIs, and writing maintainable
                UI code. I enjoy turning requirements into functional
                web experiences and continuously improving my
                development skills.
              </p>

              <p>
                <strong>Education:</strong> B.Tech in Electronics and
                Communication Engineering (ECE), G. Pulla Reddy
                Engineering College, Kurnool.
              </p>

              <a className="text-link" href="#contact">
                Have a project in mind? <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="skills-section section-wrap" id="experience">
          <div className="section-label">
            <span>02 / EXPERIENCE</span>
            <span className="label-line" />
          </div>

          <div className="section-heading">
            <h2>Where I've <span className="muted">worked.</span></h2>
            <p>Professional experience in frontend UI development.</p>
          </div>

          <div className="skill-feature">
            <div className="feature-icon"><Code2 size={24} /></div>
            <h3>Software Developer · IBM</h3>
            <p className="large-copy">January 2024 – Present</p>

            <p>
              Frontend UI development using React.js across projects
              including Genius Hub and CaaS Console.
            </p>

            <ul>
              <li>Develop frontend user interfaces using React.js.</li>
              <li>Build reusable and maintainable UI components.</li>
              <li>Create responsive layouts using HTML and CSS.</li>
              <li>Work with JavaScript and integrate frontend components with REST APIs.</li>
              <li>Use Git and GitHub for version control and collaboration.</li>
            </ul>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section section-wrap" id="skills">
          <div className="section-label">
            <span>03 / WHAT I DO</span>
            <span className="label-line" />
          </div>

          <div className="section-heading">
            <h2>Tools of the <span className="muted">trade.</span></h2>
            <p>A focused toolkit for building modern frontend experiences.</p>
          </div>

          <div className="skill-layout">
            <div className="skill-feature">
              <div className="feature-icon"><Layers3 size={24} /></div>
              <h3>Frontend<br />development</h3>
              <p>
                From reusable components to responsive layouts,
                I build interfaces with clarity and care.
              </p>
              <span className="feature-index">01 — CORE FOCUS</span>
            </div>

            <div className="skill-list">
              {skills.map((skill, index) => (
                <div className="skill-item" key={skill}>
                  <span className="skill-index">0{index + 1}</span>
                  <span>{skill}</span>
                  <ArrowUpRight size={15} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects-section section-wrap" id="projects">
          <div className="section-label">
            <span>04 / SELECTED WORK</span>
            <span className="label-line" />
          </div>

          <div className="section-heading project-heading">
            <h2>Selected <span className="muted">projects.</span></h2>
            <p>Frontend UI development work using React.js.</p>
          </div>

          <div className="project-grid">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <div className={`project-art ${project.tone}`}>
                  <span className="art-number">{project.number}</span>
                  <div className="art-window">
                    <div className="art-window-top">
                      <i /><i /><i />
                    </div>
                    <div className="art-mark">{project.mark}</div>
                    <div className="art-bars"><b /><b /><b /></div>
                  </div>
                  <span className="art-orbit" />
                </div>

                <div className="project-info">
                  <div className="project-type">{project.type}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>

        </section>

        {/* CONTACT */}
        <section className="contact-section section-wrap" id="contact">
          <div className="section-label">
            <span>05 / CONTACT</span>
            <span className="label-line" />
          </div>

          <div className="contact-panel">
            <div>
              <div className="eyebrow">HAVE A PROJECT IN MIND?</div>
              <h2>
                Let's build<br />
                <span className="gradient-text">something useful.</span>
              </h2>
              <p>
                I'm open to discussing frontend projects,
                collaborations and new opportunities.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:gounipallihareesh4464@gmail.com">
                <Mail size={18} /> Email me <ArrowUpRight size={16} />
              </a>

              <a href="tel:+918309790880">
                <Smartphone size={18} /> 8309790880 <ArrowUpRight size={16} />
              </a>

              <a href="https://github.com/HareeshGounipalli" target="_blank" rel="noreferrer">
                <Github size={18} /> GitHub <ExternalLink size={15} />
              </a>

              <a href="https://www.linkedin.com/in/hareesh-gounipalli-a04071237/" target="_blank" rel="noreferrer">
                <Linkedin size={18} /> LinkedIn <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">
          <span className="brand-mark">H.</span>
          <span>HAREESH<span className="brand-dot">/</span>DEV</span>
        </a>
        <span>Designed & built with React.js</span>
        <span>© {new Date().getFullYear()} Hareesh</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
