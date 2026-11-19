import { useState } from "react";
import "../components/CvDownload.css";
import "../components/Reference.css";
import "../components/ContactDetails.css";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  ClipboardList,
  FileText,
  Linkedin,
  Mail,
  Menu,
  Phone,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const capabilities = [
  { icon: CalendarDays, title: "Administration & Operations", text: "Managing priorities, schedules, records, and day-to-day workflows with care and consistency." },
  { icon: ClipboardList, title: "Digital Systems & Process Improvement", text: "Using digital tools and structured processes to keep information organised and work moving." },
  { icon: FileText, title: "Business Writing & Documents", text: "Preparing clear correspondence, reports, quotations, and business documents for clients and teams." },
  { icon: MessageCircle, title: "Marketing & Content", text: "Creating websites, social content, articles, and branded materials that support consistent communication." },
  { icon: Plane, title: "Organization & Coordination", text: "Coordinating people, appointments, projects, and moving parts from planning through follow-up." },
  { icon: ShieldCheck, title: "Technology & Problem-Solving", text: "Adapting to new platforms, researching practical solutions, and resolving issues thoughtfully." },
];

const examples = [
  { number: "01", slug: "service-business-support", title: "Keeping a US service business moving", tag: "Executive support · Everblue Pool Pros", text: "Coordinating customer communications, technician routes, appointments, quotations, work orders, and follow-up remotely from South Africa." },
  { number: "02", slug: "property-operations", title: "Turning complex property into clarity", tag: "Operations · NPPM Properties", text: "Supporting property operations through administration, transaction coordination, compliance documentation, contractor communication and marketing content." },
  { number: "03", slug: "brand-content", title: "Building brands with purpose", tag: "Digital marketing · Self-employed", text: "Creating websites, social content, branded materials, and written campaigns that help businesses communicate consistently and connect with their audiences." },
  { number: "04", slug: "property-brand-content", title: "Building a Property Brand Through Content & Design", tag: "Marketing & content · NPPM Properties", text: "Creating promotional artwork, educational property content and social media materials for NPPM Properties." },
  { number: "05", slug: "digital-systems", title: "Building practical digital systems", tag: "Digital systems · Workflow development", text: "Developing connected digital tools and workflows to organize information, streamline business processes, and make everyday operations easier to manage." },
  { number: "06", slug: "everblue-quick-quote", title: "EverBlue Quick Quote", tag: "Digital systems · Business tools", text: "A digital quoting solution designed to make quote creation more organized and efficient, with structured information, line items, pricing, calculations, and totals." },
  { number: "07", slug: "everblue-flow", title: "EverBlue Flow", tag: "Business systems · Workflow development", text: "A digital business-management system developed around real operational needs, connecting clients, properties, jobs, tasks, scheduling, quotations, follow-ups, and service reporting." },
  { number: "08", slug: "recruitment-platform", title: "Recruitment Platform", tag: "Digital product development · Recruitment", text: "A recruitment platform currently in development, designed to connect employers and talent through a structured hiring process." },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Poise home" onClick={closeMenu}>
          <span className="brand-mark">RG</span>
          <span className="brand-name">Rika<span> / </span>Gerber</span>
        </a>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#references" onClick={closeMenu}>References</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s connect <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy fade-in">
          <p className="eyebrow"><Sparkles size={14} /> Executive assistant · South Africa / Remote</p>
          <h1>The thoughtful force<br /><em>behind the scenes.</em></h1>
          <p className="hero-intro">I&apos;m Rika — an executive assistant who combines dependable administration and operations support with digital systems, process improvement, professional communication, and content creation.</p>
          <a className="button button-outline cv-home-link" href="/resume">View My Resume</a>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">Explore my work <ArrowDown size={17} /></a>
            <a href="#contact" className="text-link">Start a conversation <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="hero-visual fade-in delayed">
          <div className="portrait-frame">
            <img src="/rika-gerber-professional.png" alt="Professional portrait of Rika Gerber" />
          </div>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><div className="scroll-line" /></div>
      </section>

      <section className="intro-band" id="about">
        <div className="section-label">A little about me</div>
        <div className="intro-content">
          <h2>Good support is<br /><em>felt, not seen.</em></h2>
          <div className="intro-body">
            <p>I believe the best assistant is a steady presence: someone who notices what&apos;s needed before it&apos;s asked, holds the details with care, and creates the space for brilliant work to happen.</p>
              <p>With extensive experience in executive support, operations, property, and client relationships, I bring warmth to the practical and precision to the personal. Working remotely from Alberton, South Africa, I&apos;m here to make your day work better.</p>
              <a href="#contact" className="underlined-link">More about my approach <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-heading"><div className="section-label">What I bring</div><p>Practical support that brings structure, clarity, and better ways of working.</p></div>
        <div className="capabilities-grid">
          {capabilities.map(({ icon: Icon, title, text }) => <article className="capability-card" key={title}><Icon size={23} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="work-top"><div><div className="section-label">Selected work</div><h2>Making things<br /><em>happen beautifully.</em></h2></div><p className="work-note">A few ways I&apos;ve helped people and teams find more focus, flow, and forward motion.</p></div>
        <div className="examples-list">
          {examples.map((example) => <a className="example-row" href={`/work/${example.slug}`} key={example.number}><span className="example-number">{example.number}</span><div className="example-main"><p className="example-tag">{example.tag}</p><h3>{example.title}</h3><p>{example.text}</p></div><ArrowUpRight className="example-arrow" size={22} /></a>)}
        </div>
        <div className="workspace-card"><div className="workspace-copy"><p className="eyebrow">The details matter</p><h3>A well-run day<br /><em>makes room for more.</em></h3><p>Reliable systems, thoughtful planning, and a human touch — it all adds up.</p></div><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85" alt="Warm, organized modern workspace" /></div>
      </section>

      <section className="references-section" id="references">
        <div className="section-label">Kind words</div>
        <div className="quote-mark">“</div>
        <blockquote>Rika brings professionalism, discretion, and genuine care to everything she does. She has a remarkable ability to keep complex work moving while making every person feel supported.</blockquote>
        <div className="quote-attribution"><span className="avatar">HS</span><span><strong>Heidi S.</strong><small>Office Administrator, NPPM Properties</small></span></div>
        <div className="reference-secondary">
          <div className="quote-mark">“</div>
          <blockquote><p>Rika was not only reliable and dedicated but also exhibited a strong work ethic and commitment to achieving the organization’s goals.</p><p>I strongly endorse Rika without reservation and believe that she will exceed all expectations.</p></blockquote>
          <div className="quote-attribution"><span className="avatar">CE</span><span><strong>Candice Ede</strong><small>Director, Rhythms of Grace / Hopes Anchor</small></span></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-heading">
          <div className="section-label">Say hello</div>
          <h2>Let&apos;s make<br /><em>space for good work.</em></h2>
          <p>Hiring for executive support, operations, or client coordination? I&apos;d love to hear how I can bring immediate value to your team.</p>
          <div className="contact-details">
            <a className="contact-detail" href="mailto:gerber.rika@outlook.com"><Mail size={16} /> <span>gerber.rika@outlook.com</span></a>
            <a className="contact-detail" href="tel:+27716109591"><Phone size={16} /> <span>+27 71 610 9591</span></a>
            <a className="contact-detail" href="https://www.linkedin.com/in/rika-gerber-9bb095130/" target="_blank" rel="noreferrer"><Linkedin size={16} /> <span>LinkedIn Profile</span><ArrowUpRight size={14} /></a>
          </div>
          <a className="cv-contact-link" href="/resume">View My Resume</a>
        </div>
        <div className="contact-form-wrap">
          {sent ? <div className="success-message"><span className="success-icon"><Check size={20} /></span><h3>Thank you for reaching out.</h3><p>Your message is on its way. I&apos;ll be in touch soon.</p><button className="underlined-link" onClick={() => setSent(false)}>Send another message</button></div> : <form onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>Name<input required type="text" placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@company.com" /></label><label>How can I help?<textarea required placeholder="Tell me a little about what you have in mind..." rows={4} /></label><button type="submit" className="button button-dark">Send your note <ArrowUpRight size={17} /></button></form>}
        </div>
      </section>

      <footer className="site-footer"><a href="#top" className="brand"><span className="brand-mark">RG</span><span className="brand-name">Rika<span> / </span>Gerber</span></a><p>Thoughtful support for ambitious work.</p><div className="footer-links"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></div><span className="copyright">© 2026 Rika Gerber</span></footer>
    </main>
  );
};

export default Index;
