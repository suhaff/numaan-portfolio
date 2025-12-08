"use client";

import React, { useEffect } from "react";
import ThreeBackground from "../components/ThreeBackground";

const HomePage: React.FC = () => {
  // Scroll reveal logic
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // FIXED: Typed form handler + ESLint compliance
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      <ThreeBackground />

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-brand">NUMAAN SUHAFF</div>
        <div className="navbar-links">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="page" id="hero">
        <div className="hero-copy reveal">
          <div className="hero-intro-eyebrow">PORTFOLIO · {currentYear}</div>

          <h1 className="hero-title">
            I build <span className="accent">thoughtful, technical</span> experiences
            <br />
            across AI, backend, and the web.
          </h1>

          <p className="hero-subtitle">
            I&apos;m Numaan Suhaff — a computer science student and aspiring software engineer.
            I enjoy turning messy ideas into clear, working systems: from anomaly detection with
            ViT + DNE to resume scanners and interactive tools.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View my projects</a>
            <a href="#contact" className="btn btn-ghost">Let&apos;s work together</a>
          </div>

          <div className="hero-tagline">
            Currently exploring: continual learning · real-time APIs · clean, artful interfaces.
          </div>
        </div>

        {/* ORBIT UI */}
        <div className="hero-orbit reveal">
          <div className="hero-orbit-ring"></div>

          <div className="hero-pill"
            style={{ top: "8%", left: "8%", transform: "translateZ(40px) rotateY(-10deg)" }}>
            <strong>AI / ML</strong> · <span>ViT · DNE · Anomaly Detection</span>
          </div>

          <div className="hero-pill"
            style={{ top: "22%", right: "4%", transform: "translateZ(20px) rotateY(14deg)" }}>
            <strong>Backend</strong> · <span>Python · APIs · Fast work</span>
          </div>

          <div className="hero-pill"
            style={{ bottom: "18%", left: "12%", transform: "translateZ(30px) rotateY(-6deg)" }}>
            <strong>Student</strong> · <span>CS · Malaysia</span>
          </div>

          <div className="hero-orbit-core">
            <div className="hero-core-title">numaansuhaff.xyz</div>
            <div className="hero-core-caption">
              A living, scroll-down story of what I&apos;m learning, building, and shipping.
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="page" id="about">
        <div className="section-header reveal">
          <div className="section-kicker">About</div>
          <h2 className="section-title">Who I am beyond the code</h2>

          <p className="section-description">
            I&apos;m a developer who learns by building. My work often starts from curiosity —
            &quot;Can I actually do this?&quot; — and ends as something real I can deploy.
          </p>
        </div>

        <div className="content">
          <div className="card-3d reveal about-text">
            <p>
              I am currently studying Computer Science and actively exploring fields like anomaly
              detection, real-time APIs, and interactive web experiences.
            </p>
            <p>
              I enjoy breaking big problems into smaller, buildable steps and documenting the journey
              along the way.
            </p>
            <p>
              My portfolio blends technical depth with smooth, minimal, and artistic UI.
            </p>

            <div className="about-grid">
              <div className="about-tag">Based in Malaysia</div>
              <div className="about-tag">CS Student</div>
              <div className="about-tag">AI &amp; Backend</div>
              <div className="about-tag">Always Learning</div>
            </div>
          </div>

          <div className="card-3d reveal">
            <h3 style={{ fontSize: "0.95rem" }}>Quick snapshot</h3>

            <ul
              style={{
                listStyle: "none",
                fontSize: "0.85rem",
                color: "#e5e7eb",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
              }}
            >
              <li>• AI, anomaly detection, real-time systems.</li>
              <li>• ViT + DNE, MVTec dataset, research work.</li>
              <li>• Python, JS/TS, Git, VS Code, APIs.</li>
              <li>• Loves writing and documenting complex setups.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="page" id="skills">
        <div className="section-header reveal">
          <div className="section-kicker">Skills</div>
          <h2 className="section-title">What I work with</h2>

          <p className="section-description">
            A quick overview of my tools, stack, and learning journey.
          </p>
        </div>

        <div className="skill-cloud">
          <div className="skill-item reveal">
            <div className="skill-label">Programming</div>
            <div className="skill-tags">Python, Java, JavaScript</div>
          </div>

          <div className="skill-item reveal">
            <div className="skill-label">AI / ML</div>
            <div className="skill-tags">PyTorch, ViT, Anomaly Detection</div>
          </div>

          <div className="skill-item reveal">
            <div className="skill-label">Web &amp; Backend</div>
            <div className="skill-tags">APIs, Node/Express, JSON</div>
          </div>

          <div className="skill-item reveal">
            <div className="skill-label">Tools</div>
            <div className="skill-tags">GitHub, Colab, VS Code</div>
          </div>

          <div className="skill-item reveal">
            <div className="skill-label">Soft Skills</div>
            <div className="skill-tags">Writing, presentation, teamwork</div>
          </div>

          <div className="skill-item reveal">
            <div className="skill-label">Currently Learning</div>
            <div className="skill-tags">UI/UX, better backend architecture</div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="page" id="projects">
        <div className="section-header reveal">
          <div className="section-kicker">Projects</div>
          <h2 className="section-title">Things I&apos;ve built</h2>

          <p className="section-description">
            A mix of personal experiments, academic research, and real shipped work.
          </p>
        </div>

        <div className="projects-grid">
          <article className="project-card reveal">
            <div className="project-pill">AI / Anomaly Detection</div>
            <div className="project-title">Continual Anomaly Detection with ViT + DNE</div>
            <p className="project-description">
              Research project using Vision Transformers and DNE on MVTec to analyze
              task-wise anomaly behavior.
            </p>
            <div className="project-meta">PyTorch · MVTec</div>
          </article>

          <article className="project-card reveal">
            <div className="project-pill">APIs</div>
            <div className="project-title">Real-Time Sentiment Analysis API</div>
            <p className="project-description">
              A live sentiment API originally built for Reddit, with fallback sources
              for reliability.
            </p>
            <div className="project-meta">Python · NLP</div>
          </article>

          <article className="project-card reveal">
            <div className="project-pill">Desktop App</div>
            <div className="project-title">Smart Tasks</div>
            <p className="project-description">
              A JavaFX task manager with custom UI, export functions, and persistent
              data handling.
            </p>
            <div className="project-meta">JavaFX</div>
          </article>

          <article className="project-card reveal">
            <div className="project-pill">Web</div>
            <div className="project-title">2nd of August Website</div>
            <p className="project-description">
              A sentimental website with galleries, chapters, and protected pages.
            </p>
            <div className="project-meta">HTML · CSS</div>
          </article>
        </div>
      </section>

      {/* CONTACT */}
      <section className="page" id="contact">
        <div className="section-header reveal">
          <div className="section-kicker">Contact</div>
          <h2 className="section-title">Let&apos;s talk</h2>

          <p className="section-description">
            Whether it&apos;s collaboration, internship, or feedback — message me.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="card-3d contact-meta reveal">
            <p>The best way to reach me is email.</p>

            <div className="contact-list">
              <div className="contact-item">Email: <span>your@email.com</span></div>
              <div className="contact-item">GitHub: <span>github.com/suhaff</span></div>
              <div className="contact-item">LinkedIn: <span>linkedin.com/in/yourprofile</span></div>
            </div>
          </div>

          <div className="card-3d reveal">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div>
                <div className="field-label">Name</div>
                <input type="text" name="name" className="input-field" required />
              </div>

              <div>
                <div className="field-label">Email</div>
                <input type="email" name="email" className="input-field" required />
              </div>

              <div>
                <div className="field-label">Message</div>
                <textarea name="message" className="textarea-field" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: "flex-start" }}>
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        © {currentYear} Owned by Suhaffinity · all rights reserved.
      </footer>
    </>
  );
};

export default HomePage;
