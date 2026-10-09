"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Bug,
  CalendarDays,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Fingerprint,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Shield,
  ShieldCheck,
  Terminal,
  X
} from "lucide-react";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" }
];

const skillGroups = [
  {
    number: "01",
    title: "Cybersecurity tools",
    icon: Shield,
    skills: ["Wireshark", "Burp Suite", "Splunk", "Nmap", "Kali Linux"]
  },
  {
    number: "02",
    title: "Digital forensics",
    icon: Fingerprint,
    skills: ["FTK Imager", "Autopsy", "Bulk Extractor", "OSForensic"]
  },
  {
    number: "03",
    title: "VAPT expertise",
    icon: Bug,
    skills: [
      "Vulnerability assessment",
      "Penetration testing",
      "Web app security",
      "Network security testing"
    ]
  },
  {
    number: "04",
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Linux shell scripting"]
  },
  {
    number: "05",
    title: "Platforms & tools",
    icon: Terminal,
    skills: ["VS Code", "Canva", "BioRender", "OSForensic"]
  }
];

const experience = [
  {
    date: "MAY — JUL 2026",
    role: "VAPT Intern",
    company: "Professional Development",
    description:
      "Conducted comprehensive vulnerability assessments and penetration tests across web applications and networks.",
    tools: ["Burp Suite", "Nmap", "Metasploit", "Wireshark"],
    current: true
  },
  {
    date: "SEP — OCT 2025",
    role: "Cybersecurity Intern",
    company: "Redynox",
    description:
      "Worked with real-world cybersecurity practices across offensive and defensive security operations and vulnerability assessment.",
    tools: ["Security operations", "Vulnerability assessment", "Threat analysis"],
    current: false
  },
  {
    date: "JUNE 2023",
    role: "Cybersecurity Intern",
    company: "Forensicspedia",
    description:
      "Gained hands-on experience in crime scene documentation, forensic photography, and digital forensic investigation workflows.",
    tools: ["FTK Imager", "OSForensic", "Forensic photography"],
    current: false
  }
];

const research = [
  {
    type: "POSTER PRESENTATION",
    title: "Blockchain-Based Framework for Deepfake Identification & Criminal Attribution",
    event: "IC-FSCSDF 2026",
    icon: Network
  },
  {
    type: "POSTER PRESENTATION",
    title: "Exploring the branches of forensic science",
    event: "ICFSL",
    icon: Fingerprint
  },
  {
    type: "HANDS-ON WORKSHOPS",
    title: "Cyber forensics & digital investigation",
    event: "Mobile hacking · Device cloning · Forensic methodologies",
    icon: Terminal
  }
];

const certifications = [
  { name: "Certified Red Team Operations Management", short: "CRTOM" },
  { name: "Certified LLM Security Expert", short: "CLLMSE" },
  { name: "Ethical Hacking Essentials", short: "EC-Council" },
  { name: "Digital Forensics Essentials", short: "DFE" },
  { name: "Zero Trust Architecture", short: "Cybrary" }
];

function MatrixBackground() {
  const [columns, setColumns] = useState<number[]>([]);

  useEffect(() => {
    const updateColumns = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setColumns([]);
        return;
      }
      setColumns(
        Array.from(
          { length: Math.min(24, Math.ceil(window.innerWidth / 68)) },
          (_, index) => index
        )
      );
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <div aria-hidden="true" className="matrix-layer">
      {columns.map((column) => (
        <span
          className="matrix-column"
          key={column}
          style={
            {
              "--column": column,
              "--duration": `${14 + ((column * 7) % 17)}s`,
              "--delay": `${-((column * 11) % 28)}s`
            } as React.CSSProperties
          }
        >
          {Array.from({ length: 14 }, (_, character) => (
            <i key={character}>{(column * 13 + character * 7) % 2 ? "1" : "0"}</i>
          ))}
        </span>
      ))}
    </div>
  );
}

function SectionHeading({
  eyebrow,
  title,
  index
}: {
  eyebrow: string;
  title: string;
  index: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow"><span>{index}</span> / {eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <span className="heading-rule" aria-hidden="true" />
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [activeExperience, setActiveExperience] = useState(0);
  const terminalText = "I investigate. I secure. I safeguard.";

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTypedText(terminalText);
      return;
    }

    let position = 0;
    const timer = window.setInterval(() => {
      position += 1;
      setTypedText(terminalText.slice(0, position));
      if (position >= terminalText.length) window.clearInterval(timer);
    }, 55);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <MatrixBackground />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Sharan Krishna Vaka home">
          <span className="brand-mark"><ShieldCheck size={19} /></span>
          <span>SKV<span className="brand-period">.</span></span>
        </a>
        <nav className={menuOpen ? "navigation navigation-open" : "navigation"} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </nav>
        <button
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" /> OPEN TO OPPORTUNITIES</div>
          <p className="hero-kicker">Cybersecurity <span>&amp;</span> Digital Forensics</p>
          <h1>Sharan Krishna<br /><span>Vaka</span><span className="hero-cursor">_</span></h1>
          <p className="hero-description">
            Safeguarding digital infrastructure through ethical hacking,
            vulnerability assessment, and forensic investigations.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              Explore my work <ArrowRight size={16} />
            </a>
            <a className="button button-ghost" href="#contact">
              Get in touch <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="hero-socials" aria-label="Contact links">
            <a href="mailto:sharan.vaka15@gmail.com" aria-label="Email Sharan"><Mail size={17} /></a>
            <a href="tel:+919398298477" aria-label="Call Sharan"><Phone size={16} /></a>
            <a href="https://www.linkedin.com/in/sharan-krishna-a7115025a" target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin size={16} /></a>
            <span className="social-caption">CONNECT WITH ME</span>
          </div>
        </div>
        <div className="hero-visual" aria-label="Cybersecurity terminal illustration">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-grid" />
          <div className="visual-core"><ShieldCheck size={65} strokeWidth={1.1} /></div>
          <span className="orbit-label orbit-label-top">THREAT ANALYSIS <span>ACTIVE</span></span>
          <span className="orbit-label orbit-label-bottom">SYSTEM INTEGRITY <span>98.7%</span></span>
          <div className="terminal-card">
            <div className="terminal-top"><span /><span /><span /><p>security_console.sh</p><ChevronDown size={13} /></div>
            <div className="terminal-body">
              <p><span className="terminal-muted">~/sharan/</span> <b>$</b> whoami</p>
              <p className="terminal-output">cybersecurity professional</p>
              <p><span className="terminal-muted">~/sharan/</span> <b>$</b> mission</p>
              <p className="terminal-output">{typedText}<span className="typing-caret">▍</span></p>
              <p className="terminal-prompt"><span className="terminal-muted">~/sharan/</span> <b>$</b> <span className="typing-caret">▍</span></p>
            </div>
          </div>
          <span className="visual-coordinate">16°30&apos;N 80°38&apos;E</span>
          <span className="visual-crosshair crosshair-one">+</span>
          <span className="visual-crosshair crosshair-two">+</span>
        </div>
        <a className="scroll-indicator" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14} /></a>
        <div className="hero-index">01 — 06</div>
      </section>

      <section className="about-section section-shell section-pad" id="about">
        <SectionHeading eyebrow="THE PERSON BEHIND THE PACKET" title="Security with purpose." index="01" />
        <div className="about-grid">
          <div className="about-intro">
            <span className="about-icon"><Fingerprint size={27} /></span>
            <p>Curiosity is my first line of defense.</p>
          </div>
          <div className="about-copy">
            <p>
              Motivated and detail-oriented cybersecurity and digital forensics
              professional with a strong foundation in forensic science, ethical
              hacking, and incident response. Committed to safeguarding digital
              infrastructure and contributing to a safer cyber environment.
            </p>
            <div className="about-facts">
              <span><MapPin size={14} /> India</span>
              <span><GraduationCap size={15} /> Cybersecurity &amp; Digital Forensics</span>
              <span><Shield size={14} /> Ethical by design</span>
            </div>
          </div>
        </div>
      </section>

      <section className="expertise-section section-shell section-pad" id="expertise">
        <SectionHeading eyebrow="WHAT I BRING TO THE TABLE" title="Technical expertise." index="02" />
        <div className="skills-grid">
          {skillGroups.map(({ number, title, icon: Icon, skills }) => (
            <article className="skill-card" key={title}>
              <div className="skill-card-top"><span>{number} / 05</span><Icon size={19} /></div>
              <h3>{title}</h3>
              <div className="skill-tags">
                {skills.map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience-section section-shell section-pad" id="experience">
        <SectionHeading eyebrow="FIELD EXPERIENCE" title="Learning by doing." index="03" />
        <div className="experience-layout">
          <div className="timeline-nav" role="tablist" aria-label="Professional experience">
            {experience.map((job, index) => (
              <button
                aria-selected={activeExperience === index}
                className={activeExperience === index ? "timeline-tab timeline-tab-active" : "timeline-tab"}
                id={`experience-tab-${index}`}
                key={job.company}
                onClick={() => setActiveExperience(index)}
                role="tab"
                tabIndex={activeExperience === index ? 0 : -1}
              >
                <span className="timeline-dot" />
                <span className="timeline-tab-copy">
                  <small>{job.date}</small>
                  <strong>{job.company}</strong>
                </span>
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
          <article
            aria-labelledby={`experience-tab-${activeExperience}`}
            className="experience-detail"
            key={activeExperience}
            role="tabpanel"
          >
            <div className="experience-detail-top">
              <span className="detail-label"><BriefcaseBusiness size={14} /> INTERNSHIP</span>
              <span className="detail-date"><CalendarDays size={14} /> {experience[activeExperience].date}</span>
            </div>
            <h3>{experience[activeExperience].role}</h3>
            <p className="experience-company">@ {experience[activeExperience].company}</p>
            <p className="experience-description">{experience[activeExperience].description}</p>
            <div className="experience-tools">
              {experience[activeExperience].tools.map((tool) => <span key={tool}>{tool}</span>)}
            </div>
            <div className="detail-footer"><span><Check size={14} /> HANDS-ON EXPERIENCE</span><span>0{activeExperience + 1} / 03</span></div>
          </article>
        </div>
      </section>

      <section className="education-section section-shell section-pad" id="education">
        <SectionHeading eyebrow="BUILDING THE FOUNDATION" title="Education." index="04" />
        <div className="education-grid">
          <article className="education-card education-current">
            <div className="education-card-top"><span className="education-icon"><GraduationCap size={20} /></span><span className="education-date">AUG 2025 — PRESENT</span></div>
            <p className="education-degree">Master of Science</p>
            <h3>Cyber Security &amp;<br />Digital Forensics</h3>
            <div className="education-school"><span>Aditya University</span><ArrowUpRight size={15} /></div>
            <span className="education-status"><span className="status-dot" /> CURRENTLY ENROLLED</span>
          </article>
          <article className="education-card">
            <div className="education-card-top"><span className="education-icon"><BookOpen size={20} /></span><span className="education-date">AUG 2022 — JUN 2025</span></div>
            <p className="education-degree">Bachelor of Science</p>
            <h3>Forensic Science</h3>
            <div className="education-school"><span>Lovely Professional University</span><ArrowUpRight size={15} /></div>
            <span className="education-status"><BadgeCheck size={13} /> COMPLETED</span>
          </article>
        </div>
      </section>

      <section className="research-section section-shell section-pad" id="research">
        <SectionHeading eyebrow="RESEARCH & KNOWLEDGE SHARING" title="Beyond the keyboard." index="05" />
        <div className="research-grid">
          {research.map(({ type, title, event, icon: Icon }, index) => (
            <article className="research-card" key={title}>
              <div className="research-card-top"><span>{type}</span><span>0{index + 1}</span></div>
              <span className="research-icon"><Icon size={21} /></span>
              <h3>{title}</h3>
              <p>{event}</p>
              <span className="research-arrow"><ArrowUpRight size={16} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="certifications-section section-shell section-pad" id="certifications">
        <SectionHeading eyebrow="ALWAYS LEARNING" title="Certifications." index="06" />
        <div className="certification-grid">
          {certifications.map((certification, index) => (
            <article className="certification-card" key={certification.name}>
              <span className="certification-icon"><Award size={20} /></span>
              <div><h3>{certification.name}</h3><p>{certification.short}</p></div>
              <span className="certification-number">0{index + 1}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section section-shell" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <p className="eyebrow"><span>07</span> / HAVE A CHALLENGE IN MIND?</p>
        <h2>Let&apos;s make the<br /><span>digital world safer.</span></h2>
        <p className="contact-description">Have a project, opportunity, or just want to talk security? My inbox is open.</p>
        <a className="button button-primary contact-button" href="mailto:sharan.vaka15@gmail.com">Start a conversation <ArrowUpRight size={16} /></a>
        <div className="contact-links">
          <a href="mailto:sharan.vaka15@gmail.com"><Mail size={16} /> sharan.vaka15@gmail.com <ExternalLink size={13} /></a>
          <a href="tel:+919398298477"><Phone size={15} /> +91 93982 98477</a>
          <a href="https://www.linkedin.com/in/sharan-krishna-a7115025a" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn <ExternalLink size={13} /></a>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><ShieldCheck size={17} /></span><span>SKV<span className="brand-period">.</span></span></a>
        <p>© {new Date().getFullYear()} Sharan Krishna Vaka. Built with purpose.</p>
        <div className="footer-links">
          <a href="mailto:sharan.vaka15@gmail.com">Email <ArrowUpRight size={12} /></a>
          <a href="https://www.linkedin.com/in/sharan-krishna-a7115025a" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} /></a>
          <a href="#home" aria-label="Back to top"><ArrowDown size={14} className="back-to-top" /></a>
        </div>
      </footer>
    </main>
  );
}
