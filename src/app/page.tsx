"use client";
import { useEffect, useState, type FormEvent } from "react";
import ThreeBackground from "../components/ThreeBackground";

const projects = [
  { n:"01", type:"RESEARCH · COMPUTER VISION", title:"Continual Anomaly Detection", desc:"Task-incremental industrial anomaly detection using Vision Transformers and Deep Nearest Embedding on MVTec AD.", tags:"PyTorch · ViT · DNE · MVTec", href:"https://github.com/suhaff/Continual_Anomaly_Detection" },
  { n:"02", type:"BACKEND · NLP", title:"Real-Time Sentiment API", desc:"A sentiment analysis service for live discussion data, with fallback sources for a more resilient experience.", tags:"Python · NLP · REST APIs", href:"https://github.com/suhaff" },
  { n:"03", type:"DESKTOP · PRODUCTIVITY", title:"SmartTodo", desc:"A JavaFX task manager with categories, priorities, filters, themes, and practical import and export workflows.", tags:"Java · JavaFX · Maven", href:"https://github.com/suhaff" },
  { n:"04", type:"GAME DEVELOPMENT · 2D", title:"Arena", desc:"A 2D tactical shooter prototype exploring responsive gameplay, player movement, and combat mechanics.", tags:"Unity · C# · Game Design", href:"https://github.com/suhaff" },
];
const skills = [
  ["LANGUAGES","Python","Java","C / C++","JavaScript","TypeScript","SQL"],
  ["WEB & BACKEND","React","Next.js","Node.js","FastAPI","PostgreSQL","MongoDB"],
  ["AI & DATA","PyTorch","Computer Vision","NLP","OpenCV","Pandas"],
  ["TOOLS","Git","Docker","GCP","Unity","VS Code"],
];

export default function HomePage() {
  const [menu,setMenu] = useState(false);
  const [status,setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if(e.isIntersecting){ e.target.classList.add("visible"); io.unobserve(e.target); }
    }),{threshold:.12});
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  },[]);
  async function submit(e:FormEvent<HTMLFormElement>){
    e.preventDefault(); setStatus("sending");
    const form=e.currentTarget, data=new FormData(form);
    try {
      const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:data.get("name"),email:data.get("email"),message:data.get("message")})});
      const json=await res.json(); if(!res.ok||!json.success) throw new Error();
      form.reset(); setStatus("sent");
    } catch { setStatus("error"); }
  }
  return <>
    <ThreeBackground/>
    <header className="header">
      <a className="brand" href="#home"><span className="brand-mark">N</span> NUMAAN <b>SUHAFF</b></a>
      <button className="menu" aria-label="Toggle navigation" aria-expanded={menu} onClick={()=>setMenu(!menu)}><i/><i/></button>
      <nav className={menu?"nav open":"nav"}>{["About","Work","Skills","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()} onClick={()=>setMenu(false)}>{x}</a>)}<a className="nav-github" href="https://github.com/suhaff" target="_blank" rel="noreferrer">GitHub ↗</a></nav>
    </header>
    <main>
      <section className="hero shell" id="home">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span className="pulse"/> SOFTWARE ENGINEERING · MALAYSIA</p>
          <h1>Curious by nature.<br/><em>Builder</em> by choice.</h1>
          <p className="lead">I’m Numaan Suhaff — a software engineering student who enjoys turning complex ideas into useful, thoughtful digital experiences.</p>
          <div className="actions"><a className="button" href="#work">Explore my work <span>↗</span></a><a className="quiet-link" href="#contact">Let’s talk ↗</a></div>
          <p className="availability">BASED IN MALAYSIA <i/> OPEN TO OPPORTUNITIES</p>
        </div>
        <div className="hero-visual reveal" aria-label="Abstract orbital monogram illustration">
          <div className="ring ring-a"/><div className="ring ring-b"/><div className="ring ring-c"/>
          <div className="orb"><strong>NS</strong><small>BUILD · LEARN · REPEAT</small></div>
          <span className="orbit-tag tag-a">AI & MACHINE LEARNING</span><span className="orbit-tag tag-b">FULL-STACK DEVELOPMENT</span><span className="spark">✳</span>
        </div>
        <a className="scroll" href="#about">— SCROLL TO EXPLORE</a>
      </section>
      <section className="section shell" id="about">
        <div className="index"><span>01 / ABOUT</span><i/></div>
        <div className="about-grid">
          <h2 className="reveal">I like making<br/>the <em>complicated</em><br/>feel simple.</h2>
          <div className="about-copy reveal">
            <p>I’m pursuing a Bachelor of Computer Science in Software Engineering at Universiti Sains Malaysia. I’m drawn to the space where engineering, research, and design meet.</p>
            <p>From experimenting with continual anomaly detection to building full-stack applications, I learn best by getting hands-on, asking better questions, and shipping things that work.</p>
            <div className="detail"><span>EDUCATION</span><b>Universiti Sains Malaysia · 2024—2027</b></div>
            <div className="detail"><span>FOCUS</span><b>AI / ML · Backend · Product Engineering</b></div>
          </div>
        </div>
      </section>
      <section className="section shell" id="work">
        <div className="index"><span>02 / SELECTED WORK</span><i/></div>
        <div className="section-heading reveal"><h2>Things I’ve <em>made.</em></h2><p>Research, experiments, and products<br/>that reflect what I’m curious about.</p></div>
        <div className="projects">{projects.map(p=><a className="project reveal" key={p.n} href={p.href} target="_blank" rel="noreferrer"><span className="project-no">{p.n}</span><div><small>{p.type}</small><h3>{p.title}</h3><p>{p.desc}</p><label>{p.tags}</label></div><b className="arrow">↗</b></a>)}</div>
        <a className="more" href="https://github.com/suhaff" target="_blank" rel="noreferrer">MORE ON GITHUB ↗</a>
      </section>
      <section className="section shell skills-section" id="skills">
        <div className="index"><span>03 / TOOLKIT</span><i/></div>
        <div className="section-heading reveal"><h2>Tools of the <em>trade.</em></h2><p>A growing toolkit for solving<br/>problems across the stack.</p></div>
        <div className="skills">{skills.map(([group,...items])=><div className="skill reveal" key={group}><small>{group}</small><div>{items.map(item=><b key={item}>{item}</b>)}</div></div>)}</div>
      </section>
      <section className="section shell contact-section" id="contact">
        <div className="index"><span>04 / GET IN TOUCH</span><i/></div>
        <div className="contact-grid">
          <div className="reveal"><p className="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Let’s make<br/><em>something</em><br/>meaningful.</h2><p className="contact-note">Open to conversations about internships, collaborations, interesting problems, and good ideas.</p><a className="email" href="mailto:numaansuhaff02@email.com">numaansuhaff02@email.com ↗</a><div className="social"><a href="https://github.com/suhaff" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></div>
          <form className="form reveal" onSubmit={submit}>
            <label>Your name<input name="name" placeholder="How should I call you?" required maxLength={100}/></label>
            <label>Email address<input name="email" type="email" placeholder="you@example.com" required maxLength={254}/></label>
            <label>Your message<textarea name="message" rows={5} placeholder="Tell me a little about it..." required maxLength={5000}/></label>
            <button className="button" disabled={status==="sending"}>{status==="sending"?"Sending…":"Send message ↗"}</button>
            {status==="sent"&&<p className="feedback good" role="status">Thanks — your message has been sent.</p>}
            {status==="error"&&<p className="feedback" role="alert">Couldn’t send your message. Please email me directly.</p>}
          </form>
        </div>
      </section>
    </main>
    <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">N</span> NUMAAN <b>SUHAFF</b></a><span>DESIGNED WITH INTENTION · © {new Date().getFullYear()}</span><a href="#home">BACK TO TOP ↑</a></footer>
  </>;
}
