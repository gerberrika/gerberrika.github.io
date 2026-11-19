import { useState } from "react";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import { Link, useParams } from "react-router-dom";

type CaseStudy = {
  image: { src: string; alt: string; caption: string };
  overview: string;
  challenge: string;
  approach: string;
  keyFeatures: string[];
  contribution: string[];
  skills: string[];
};

type GalleryProject = {
  screenshots: { src: string; alt: string; caption: string }[];
  overview: string;
  contribution: string[];
  skills: string[];
  closing: string;
};

type Project = {
  category: string;
  title: string;
  description: string;
  focus: string[];
  image?: { src: string; alt: string; caption: string };
  sections?: { title: string; content: string | string[] }[];
  caseStudy?: CaseStudy;
  galleryProject?: GalleryProject;
};

const projects: Record<string, Project> = {
  "service-business-support": {
    category: "Executive support · Everblue Pool Pros",
    title: "Keeping a US service business moving",
    description: "Coordinating customer communications, technician routes, appointments, quotations, work orders, and follow-up remotely from South Africa.",
    image: { src: "/projects/skimmer-dashboard.png", alt: "Skimmer scheduling dashboard", caption: "Skimmer schedule view for coordinating technician routes and service work." },
    focus: ["Customer communication via phone, email, and text", "Technician routes, service appointments, repairs, and pool openings and closings", "Quotations, invoices, estimates, service documentation, and customer records", "Recruitment administration, marketing content, and internal business processes"],
    sections: [
      { title: "My Role & Responsibilities", content: ["Customer communication and client relationship management", "Technician scheduling and appointment coordination", "Quotations, invoices, estimates, and service documentation", "Customer records and follow-ups", "Recruitment administration", "Marketing and social media content", "Internal business processes and operational support"] },
      { title: "Systems & Digital Tools", content: "Skimmer, spreadsheets, and the internal digital systems I developed to organize information and support everyday business operations." },
    ],
  },
  "property-operations": {
    category: "Operations · NPPM Properties",
    title: "Turning complex property into clarity",
    description: "Supporting the Principal while coordinating transactions, contractors, compliance records, maintenance, and sensitive client relationships.",
    focus: ["Executive support, complex schedules, and confidential correspondence", "Property transactions, mandates, lease agreements, and legal documentation", "Tenant lifecycle administration, inspections, maintenance, and contractor coordination", "Audit-ready records, compliance certifications, and stakeholder communication"],
    sections: [
      { title: "My Role & Responsibilities", content: ["Administrative and operational support to the Principal", "Property transaction coordination and documentation", "Lease agreements, mandates, and property records", "Client, tenant, contractor, and stakeholder communication", "Property maintenance coordination"] },
      { title: "Property Marketing & Content", content: ["Property marketing and promotional material", "Educational property content and information graphics"] },
    ],
  },
  "property-brand-content": {
    category: "Marketing & content · NPPM Properties",
    title: "Building a Property Brand Through Content & Design",
    description: "Creating promotional artwork, educational property content and social media materials to help communicate services, inform buyers and sellers, and strengthen the business's visual presence.",
    focus: [],
    galleryProject: {
      screenshots: [
        { src: "/projects/nppm-1.jpeg", alt: "NPPM Properties buying or selling promotional artwork", caption: "Promotional artwork helping buyers and sellers connect with NPPM Properties." },
        { src: "/projects/nppm-2.jpeg", alt: "NPPM Properties offer to purchase educational content", caption: "Educational property content explaining the offer to purchase process." },
        { src: "/projects/nppm-3.jpeg", alt: "NPPM Properties chocolate cake recipe social graphic", caption: "Branded social media content created for audience engagement." },
        { src: "/projects/nppm-4.jpeg", alt: "NPPM Properties pre-approval benefits educational graphic", caption: "Buyer education content explaining the benefits of pre-approval." },
        { src: "/projects/nppm-5.jpeg", alt: "NPPM Properties spring floral promotional artwork", caption: "Seasonal promotional artwork with NPPM Properties branding." },
        { src: "/projects/nppm-6.jpeg", alt: "NPPM Properties where dreams meet reality graphic", caption: "Visual storytelling graphic supporting the property brand." },
        { src: "/projects/nppm-7.jpeg", alt: "NPPM Properties home and space promotional graphic", caption: "Promotional content encouraging property conversations." },
        { src: "/projects/nppm-8.jpeg", alt: "NPPM Properties property practitioner recruitment graphic", caption: "Recruitment artwork supporting the growth of the property team." },
      ],
      overview: "During my time at NPPM Properties, I contributed to the company's marketing and communication through the creation of visual content and promotional materials. My work included designing property-related advertisements, developing educational content for potential buyers and sellers, and creating branded graphics for social media. The aim was to present information in a clear, accessible and visually engaging way while maintaining a consistent business identity.",
      contribution: ["Promotional marketing artwork and property advertisements", "Educational property content for buyers and sellers", "Social media graphics and written content", "Branded visual communication", "Presenting property information in a clear and accessible format"],
      skills: ["Marketing & Content Creation", "Graphic Design", "Social Media Communication", "Written Content", "Visual Storytelling", "Brand Consistency", "Client Education"],
      closing: "This work reflects my ability to combine creativity with practical business communication, presenting information in a way that is clear, engaging and useful to its intended audience.",
    },
  },
  "brand-content": {
    category: "Digital marketing · Self-employed",
    title: "Building brands with purpose",
    description: "Creating websites, social content, branded materials, and written campaigns that help businesses communicate consistently and connect with their audiences.",
    focus: ["Professional websites and social media platforms", "Logos, brochures, invitations, and branded assets", "Industry research and tailored communication strategies", "Articles, blogs, and audience engagement content"],
  },
  "digital-systems": {
    category: "Digital systems · Workflow development",
    title: "Building practical digital systems",
    description: "Developing connected digital tools and workflows to organize information, streamline business processes, and make everyday operations easier to manage.",
    focus: ["Structured digital records and business information", "Connected tools for communication, planning, and collaboration", "Practical workflows that support everyday administration", "Thoughtful problem-solving across new platforms and processes"],
  },
  "everblue-quick-quote": {
    category: "Digital systems · Business tools",
    title: "EverBlue Quick Quote",
    description: "A digital quoting solution designed to make quote creation more organized and efficient. It supports structured quote information, line items, pricing, calculations, and totals.",
    focus: [],
    caseStudy: {
      image: { src: "/projects/quick-quote-dashboard.png", alt: "EverBlue Quick Quote dashboard", caption: "Dashboard view for organizing quote activity." },
      overview: "EverBlue Quick Quote is a digital quoting solution focused on bringing quote information, line items, pricing, calculations, and totals into a more organized process.",
      challenge: "Quote creation involves multiple pieces of information that need to stay clear and consistent. This project focused on creating a more structured way to manage that work.",
      approach: "I contributed to shaping a practical business tool around the information needed to create and manage quotes, keeping the process organized from quote details through to totals.",
      keyFeatures: ["Structured quote information", "Line items", "Pricing and calculations", "Quote totals"],
      contribution: ["Contributed to the development of the digital quoting solution", "Helped organize the information and workflow needed for quote creation", "Worked with the structure of line items, pricing, calculations, and totals"],
      skills: ["Digital systems", "Business tools", "Information organization", "Workflow development"],
    },
  },
  "everblue-flow": {
    category: "Business systems · Workflow development",
    title: "EverBlue Flow",
    description: "A digital business-management system developed around real operational needs. It connects client management, properties, jobs, tasks, scheduling, quotations, follow-ups, and service reporting in one organized workflow.",
    focus: [],
    caseStudy: {
      image: { src: "/projects/flow-dashboard.png", alt: "EverBlue Flow dashboard", caption: "Dashboard view of operational work needing attention." },
      overview: "EverBlue Flow is a digital business-management system designed around the connected operational needs of a service business, bringing related information and activities into one organized workflow.",
      challenge: "Client management, properties, jobs, tasks, scheduling, quotations, follow-ups, and service reporting are connected parts of everyday operations. The challenge was to organize those parts so they could be managed together.",
      approach: "I contributed to developing a workflow that connects the operational areas described above, with a focus on making information easier to organize and everyday business activity easier to manage.",
      keyFeatures: ["Client management", "Properties and jobs", "Tasks and scheduling", "Quotations and follow-ups", "Service reporting"],
      contribution: ["Contributed to the development of the business-management system", "Helped connect operational information into one workflow", "Worked with the organization of clients, jobs, scheduling, quotations, follow-ups, and service reporting"],
      skills: ["Business systems", "Workflow development", "Operations coordination", "Process organization"],
    },
  },
  "recruitment-platform": {
    category: "Digital product development · Recruitment",
    title: "Recruitment Platform",
    description: "A recruitment platform currently in development, designed to connect employers and talent through a structured hiring process. It includes job opportunities, applications, candidate pipelines, interview scheduling, notifications, and company staff management.",
    focus: [],
    caseStudy: {
      image: { src: "/projects/recruitment-dashboard.jpg", alt: "Recruitment Platform dashboard", caption: "Dashboard overview of the recruitment product in development." },
      overview: "The Recruitment Platform is a digital product currently in development to connect employers and talent through a structured hiring process.",
      challenge: "A hiring process involves opportunities, applications, candidate progress, interviews, notifications, and company users. This project focuses on bringing those parts into a structured recruitment experience.",
      approach: "I contributed to the development of the product around the hiring journey, from job opportunities and applications through candidate pipelines, interview scheduling, notifications, and company staff management.",
      keyFeatures: ["Job opportunities", "Applications", "Candidate pipelines", "Interview scheduling", "Notifications", "Company staff management"],
      contribution: ["Contributed to the ongoing development of the recruitment product", "Worked with the structure of the hiring process", "Helped shape the connected areas for employers, candidates, interviews, notifications, and company staff"],
      skills: ["Digital product development", "Recruitment workflows", "Process design", "Structured information management"],
    },
  },
};

const Project = () => {
  const { slug } = useParams();
  const project = slug ? projects[slug] : undefined;

  if (!project) {
    return (
      <main className="project-page">
        <Link className="underlined-link" to="/">Back to selected work <ArrowLeft size={15} /></Link>
        <h1>Project not found</h1>
      </main>
    );
  }

  return (
    <main className="project-page">
      <div className="project-page-top">
        <Link className="underlined-link" to="/">Back to selected work <ArrowLeft size={15} /></Link>
        <Link className="project-contact-link" to="/#contact">Let&apos;s connect <ArrowUpRight size={15} /></Link>
      </div>
      <div className="project-page-content">
        <p className="section-label">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="project-lead">{project.description}</p>
        {project.caseStudy ? <CaseStudyContent caseStudy={project.caseStudy} /> : project.galleryProject ? <GalleryProjectContent project={project.galleryProject} /> : <LegacyProjectContent image={project.image} focus={project.focus} sections={project.sections} />}
      </div>
    </main>
  );
};

const GalleryProjectContent = ({ project }: { project: GalleryProject }) => {
  const [preview, setPreview] = useState<GalleryProject["screenshots"][number] | null>(null);

  return (
    <div className="case-study-content">
      <section className="gallery-project-section"><h2>Project Overview</h2><p>{project.overview}</p></section>
      <section className="gallery-project-section"><h2>My Contribution</h2><ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <div className="project-gallery">
        {project.screenshots.map((screenshot) => <figure className="project-gallery-card" key={screenshot.src}><button type="button" className="project-gallery-button" onClick={() => setPreview(screenshot)} aria-label={`Open larger preview: ${screenshot.alt}`}><img src={screenshot.src} alt={screenshot.alt} /><span className="project-gallery-expand">View larger</span></button><figcaption>{screenshot.caption}</figcaption></figure>)}
      </div>
      <section className="gallery-project-section"><h2>Skills Demonstrated</h2><p>{project.skills.join(" · ")}</p></section>
      <p className="project-note">{project.closing}</p>
      {preview && <div className="screenshot-lightbox" role="dialog" aria-modal="true" aria-label={preview.alt} onClick={() => setPreview(null)}><button className="lightbox-close" aria-label="Close screenshot preview" onClick={() => setPreview(null)}><X size={20} /></button><figure onClick={(event) => event.stopPropagation()}><img src={preview.src} alt={preview.alt} /><figcaption>{preview.caption}</figcaption></figure></div>}
    </div>
  );
};

const LegacyProjectContent = ({ image, focus, sections = [] }: { image?: Project["image"]; focus: string[]; sections?: Project["sections"] }) => (
  <>
    {image && <figure className="case-study-image"><img src={image.src} alt={image.alt} /><figcaption>{image.caption}</figcaption></figure>}
    <div className="project-detail-line" />
    <h2>Project focus</h2>
    <ul>{focus.map((item) => <li key={item}>{item}</li>)}</ul>
    {sections.map((section) => <section className="case-study-section" key={section.title}><h2>{section.title}</h2>{Array.isArray(section.content) ? <ul>{section.content.map((item) => <li key={item}>{item}</li>)}</ul> : <p>{section.content}</p>}</section>)}
    <p className="project-note">This overview reflects the scope of work represented in my portfolio. Further details can be discussed confidentially.</p>
  </>
);

const CaseStudyContent = ({ caseStudy }: { caseStudy: CaseStudy }) => (
  <div className="case-study-content">
    <figure className="case-study-image">
      <img src={caseStudy.image.src} alt={caseStudy.image.alt} />
      <figcaption>{caseStudy.image.caption}</figcaption>
    </figure>
    <CaseStudySection title="Project Overview" content={caseStudy.overview} />
    <CaseStudySection title="The Challenge" content={caseStudy.challenge} />
    <CaseStudySection title="My Approach" content={caseStudy.approach} />
    <CaseStudyListSection title="Key Features" items={caseStudy.keyFeatures} />
    <CaseStudyListSection title="My Contribution" items={caseStudy.contribution} />
    <CaseStudyListSection title="Skills Demonstrated" items={caseStudy.skills} />
    <p className="project-note">This case study reflects the current scope of the project. Further details can be discussed confidentially.</p>
  </div>
);

const CaseStudySection = ({ title, content }: { title: string; content: string }) => (
  <section className="case-study-section"><h2>{title}</h2><p>{content}</p></section>
);

const CaseStudyListSection = ({ title, items }: { title: string; items: string[] }) => (
  <section className="case-study-section"><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>
);

export default Project;
