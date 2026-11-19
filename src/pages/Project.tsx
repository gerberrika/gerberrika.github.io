import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";

type CaseStudy = {
  overview: string;
  challenge: string;
  approach: string;
  keyFeatures: string[];
  contribution: string[];
  skills: string[];
};

type Project = {
  category: string;
  title: string;
  description: string;
  focus: string[];
  caseStudy?: CaseStudy;
};

const projects: Record<string, Project> = {
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
  "everblue-quick-quote": {
    category: "Digital systems · Business tools",
    title: "EverBlue Quick Quote",
    description: "A digital quoting solution designed to make quote creation more organized and efficient. It supports structured quote information, line items, pricing, calculations, and totals.",
    focus: [],
    caseStudy: {
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
        {project.caseStudy ? <CaseStudyContent caseStudy={project.caseStudy} /> : <LegacyProjectContent focus={project.focus} />}
      </div>
    </main>
  );
};

const LegacyProjectContent = ({ focus }: { focus: string[] }) => (
  <>
    <div className="project-detail-line" />
    <h2>Project focus</h2>
    <ul>{focus.map((item) => <li key={item}>{item}</li>)}</ul>
    <p className="project-note">This overview reflects the scope of work represented in my portfolio. Further details can be discussed confidentially.</p>
  </>
);

const CaseStudyContent = ({ caseStudy }: { caseStudy: CaseStudy }) => (
  <div className="case-study-content">
    <div className="case-study-image-placeholder" role="img" aria-label="Project screenshot placeholder">Project screenshot placeholder</div>
    <CaseStudySection title="Project Overview" content={caseStudy.overview} />
    <CaseStudySection title="The Challenge" content={caseStudy.challenge} />
    <CaseStudySection title="My Approach" content={caseStudy.approach} />
    <CaseStudyListSection title="Key Features" items={caseStudy.keyFeatures} />
    <CaseStudyListSection title="My Contribution" items={caseStudy.contribution} />
    <CaseStudyListSection title="Skills Demonstrated" items={caseStudy.skills} />
    <div className="case-study-image-placeholder secondary" role="img" aria-label="Additional project screenshot placeholder">Additional screenshot placeholder</div>
    <p className="project-note">This case study reflects the current scope of the project. Further details and screenshots can be added as the work develops.</p>
  </div>
);

const CaseStudySection = ({ title, content }: { title: string; content: string }) => (
  <section className="case-study-section"><h2>{title}</h2><p>{content}</p></section>
);

const CaseStudyListSection = ({ title, items }: { title: string; items: string[] }) => (
  <section className="case-study-section"><h2>{title}</h2><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></section>
);

export default Project;
