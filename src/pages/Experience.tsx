import "../components/CvDownload.css";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
      <Link className="button button-primary experience-cv-button" to="/resume">View My Resume</Link>
    </div>
  </main>
);

export default Experience;
