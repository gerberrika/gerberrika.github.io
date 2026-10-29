import { useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  CalendarDays,
  Check,
  ClipboardList,
  FileText,
  Mail,
  Menu,
  MessageCircle,
  Plane,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const capabilities = [
  { icon: CalendarDays, title: "Executive support", text: "A calm, considered approach to complex calendars, priorities, and decision-making." },
  { icon: Plane, title: "Travel & logistics", text: "Thoughtful itineraries and seamless arrangements, from first booking to final detail." },
  { icon: MessageCircle, title: "Communication", text: "Clear, warm correspondence that keeps people informed and relationships strong." },
  { icon: ClipboardList, title: "Projects & events", text: "Turning moving parts into a clear plan, with ownership from idea through delivery." },
  { icon: FileText, title: "Documents & systems", text: "Smart, simple systems that make information easy to find and work easier to do." },
  { icon: ShieldCheck, title: "Discretion", text: "Trusted with sensitive information and the quiet confidence to handle what matters." },
];

const examples = [
  { number: "01", title: "The calm behind the busy", tag: "Executive support", text: "Creating the structure that lets a founder stay focused: a clear week, a protected diary, and the right information at the right moment." },
  { number: "02", title: "A better way to gather", tag: "Events & hospitality", text: "From guest lists to the final thank-you, coordinating considered gatherings that feel effortless for everyone involved." },
  { number: "03", title: "Making space for momentum", tag: "Systems & projects", text: "Bringing order to growing businesses with practical workflows, polished documents, and thoughtful follow-through." },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className="site-header">
        <a href="#top" className="brand" aria-label="Poise home" onClick={closeMenu}>
          <span className="brand-mark">PG</span>
          <span className="brand-name">Poise<span> / </span>Grace</span>
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
          <p className="eyebrow"><Sparkles size={14} /> Executive assistant · London / Remote</p>
          <h1>The thoughtful force<br /><em>behind the scenes.</em></h1>
          <p className="hero-intro">I&apos;m Grace — an executive assistant who brings clarity, care, and a little more breathing room to ambitious people and growing businesses.</p>
          <div className="hero-actions">
            <a href="#work" className="button button-primary">Explore my work <ArrowDown size={17} /></a>
            <a href="#contact" className="text-link">Start a conversation <ArrowUpRight size={16} /></a>
          </div>
        </div>
        <div className="hero-visual fade-in delayed">
          <div className="portrait-frame">
            <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=85" alt="Professional woman working at a desk in a bright office" />
            <div className="portrait-note"><span>Currently</span><strong>making work<br />feel lighter.</strong></div>
          </div>
          <div className="circle-stamp"><span>Organised</span><span>with care · 2024</span></div>
        </div>
        <div className="scroll-cue"><span>Scroll to explore</span><div className="scroll-line" /></div>
      </section>

      <section className="intro-band" id="about">
        <div className="section-label">A little about me</div>
        <div className="intro-content">
          <h2>Good support is<br /><em>felt, not seen.</em></h2>
          <div className="intro-body">
            <p>I believe the best assistant is a steady presence: someone who notices what&apos;s needed before it&apos;s asked, holds the details with care, and creates the space for brilliant work to happen.</p>
            <p>With a background in executive support, operations, and relationship management, I bring warmth to the practical and precision to the personal. I&apos;m here to make your day work better.</p>
            <a href="#contact" className="underlined-link">More about my approach <ArrowUpRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="capabilities-section">
        <div className="section-heading"><div className="section-label">What I bring</div><p>Quietly capable, naturally curious, and always three steps ahead.</p></div>
        <div className="capabilities-grid">
          {capabilities.map(({ icon: Icon, title, text }) => <article className="capability-card" key={title}><Icon size={23} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="work-top"><div><div className="section-label">Selected work</div><h2>Making things<br /><em>happen beautifully.</em></h2></div><p className="work-note">A few ways I&apos;ve helped people and teams find more focus, flow, and forward motion.</p></div>
        <div className="examples-list">
          {examples.map((example) => <article className="example-row" key={example.number}><span className="example-number">{example.number}</span><div className="example-main"><p className="example-tag">{example.tag}</p><h3>{example.title}</h3><p>{example.text}</p></div><ArrowUpRight className="example-arrow" size={22} /></article>)}
        </div>
        <div className="workspace-card"><div className="workspace-copy"><p className="eyebrow">The details matter</p><h3>A well-run day<br /><em>makes room for more.</em></h3><p>Reliable systems, thoughtful planning, and a human touch — it all adds up.</p></div><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85" alt="Warm, organized modern workspace" /></div>
      </section>

      <section className="references-section" id="references">
        <div className="section-label">Kind words</div>
        <div className="quote-mark">“</div>
        <blockquote>Grace has that rare combination of excellent judgement and genuine warmth. She made the complicated feel simple and gave me the confidence to focus on the work only I could do.</blockquote>
        <div className="quote-attribution"><span className="avatar">JM</span><span><strong>James M.</strong><small>Founder, independent consultancy</small></span></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-heading"><div className="section-label">Say hello</div><h2>Let&apos;s make<br /><em>space for good work.</em></h2><p>Have a role, a project, or simply a sense that we might work well together? I&apos;d love to hear from you.</p><a className="email-link" href="mailto:hello@poisegrace.co.uk"><Mail size={18} /> hello@poisegrace.co.uk</a></div>
        <div className="contact-form-wrap">
          {sent ? <div className="success-message"><span className="success-icon"><Check size={20} /></span><h3>Thank you for reaching out.</h3><p>Your message is on its way. I&apos;ll be in touch soon.</p><button className="underlined-link" onClick={() => setSent(false)}>Send another message</button></div> : <form onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label>Name<input required type="text" placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@company.com" /></label><label>How can I help?<textarea required placeholder="Tell me a little about what you have in mind..." rows={4} /></label><button type="submit" className="button button-dark">Send your note <ArrowUpRight size={17} /></button></form>}
        </div>
      </section>

      <footer className="site-footer"><a href="#top" className="brand"><span className="brand-mark">PG</span><span className="brand-name">Poise<span> / </span>Grace</span></a><p>Thoughtful support for ambitious work.</p><div className="footer-links"><a href="#about">About</a><a href="#work">Work</a><a href="#contact">Contact</a></div><span className="copyright">© 2024 Poise / Grace</span></footer>
    </main>
  );
};

export default Index;
