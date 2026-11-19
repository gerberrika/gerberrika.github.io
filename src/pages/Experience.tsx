import "../components/CvDownload.css";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";

const cvPath = "/Rika-Gerber-Resume.pdf";

const Experience = () => (
  <main className="project-page experience-page">
    <div className="project-page-top">
      <Link className="underlined-link" to="/">Back to home <ArrowLeft size={15} /></Link>
      <a className="project-contact-link" href="/#contact">Let&apos;s connect</a>
    </div>
    <div className="project-page-content experience-content">
      <p className="section-label">Professional experience</p>
      <h1>Experience</h1>
      <p className="project-lead">A considered blend of executive support, operations, digital systems, communication and creative work.</p>
      <a className="button button-primary experience-cv-button" href={cvPath} download="Rika-Gerber-CV.pdf"><Download size={17} /> Download My CV</a>
    </div>
  </main>
);

export default Experience;
