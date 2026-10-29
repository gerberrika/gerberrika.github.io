import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const projects = {
  "service-business-support": {
    category: "Executive support · Everblue Pool Pros",
    title: "Keeping a US service business moving",
    description: "Coordinating customer communications, technician routes, appointments, quotations, work orders, and follow-up remotely from South Africa.",
    focus: ["Customer communication via phone, email, and text", "Technician routes, service appointments, repairs, and pool openings and closings", "Quotations, invoices, estimates, service documentation, and customer records", "Recruitment administration, marketing content, and internal business processes"],
  },
  "property-operations": {
    category: "Operations · NPPM Properties",
    title: "Turning complex property into clarity",
    description: "Supporting the Principal while coordinating transactions, contractors, compliance records, maintenance, and sensitive client relationships.",
    focus: ["Executive support, complex schedules, and confidential correspondence", "Property transactions, mandates, lease agreements, and legal documentation", "Tenant lifecycle administration, inspections, maintenance, and contractor coordination", "Audit-ready records, compliance certifications, and stakeholder communication"],
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
} as const;

type ProjectSlug = keyof typeof projects;

const Project = () => {
  const { slug } = useParams();
  const project = projects[slug as ProjectSlug];

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
        <div className="project-detail-line" />
        <h2>Project focus</h2>
        <ul>
          {project.focus.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <p className="project-note">This overview reflects the scope of work represented in my portfolio. Further details can be discussed confidentially.</p>
      </div>
    </main>
  );
};

export default Project;
