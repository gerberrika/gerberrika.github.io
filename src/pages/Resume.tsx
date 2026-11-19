import { useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Download, ExternalLink, ZoomIn, ZoomOut } from "lucide-react";
import { Link } from "react-router-dom";
import "../components/Resume.css";

const resumePath = "/Rika%20Gerber_Resume.pdf";
const resumePages = [
  "/resume-page-1.jpg",
  "/resume-page-2.jpg",
  "/resume-page-3.jpg",
  "/resume-page-4.jpg",
  "/resume-page-5.jpg",
];
const zoomLevels = [75, 90, 100, 110, 125, 150, 175, 200];

const Resume = () => {
  const [page, setPage] = useState(1);
  const [zoom, setZoom] = useState(100);

  const changeZoom = (direction: number) => {
    const currentIndex = zoomLevels.indexOf(zoom);
    const nextIndex = Math.min(Math.max(currentIndex + direction, 0), zoomLevels.length - 1);
    setZoom(zoomLevels[nextIndex]);
  };

  return (
    <main className="project-page resume-page">
      <div className="project-page-top">
        <Link className="underlined-link" to="/"><ArrowLeft size={15} /> Back to home</Link>
        <a className="project-contact-link" href="/#contact">Let&apos;s connect</a>
      </div>

      <div className="resume-content">
        <p className="section-label">Professional experience</p>
        <h1>My Resume</h1>
        <p className="project-lead">A complete overview of my experience, skills, and the practical support I bring to ambitious work.</p>

        <div className="resume-actions" aria-label="Resume PDF options">
          <a className="resume-file-link" href={resumePath} target="_blank" rel="noreferrer"><ExternalLink size={15} /> Open original PDF</a>
          <a className="resume-file-link" href={resumePath} download="Rika-Gerber-Resume.pdf"><Download size={15} /> Download PDF</a>
        </div>

        <section className="resume-viewer" aria-label="Resume document viewer">
          <div className="resume-toolbar">
            <div className="resume-page-controls">
              <button className="resume-control" type="button" aria-label="Previous page" disabled={page === 1} onClick={() => setPage((current) => Math.max(1, current - 1))}>
                <ChevronLeft size={18} />
              </button>
              <span className="resume-page-count">Page {page} of {resumePages.length}</span>
              <button className="resume-control" type="button" aria-label="Next page" disabled={page === resumePages.length} onClick={() => setPage((current) => Math.min(resumePages.length, current + 1))}>
                <ChevronRight size={18} />
              </button>
            </div>
            <div className="resume-zoom-controls">
              <button className="resume-control" type="button" aria-label="Zoom out" disabled={zoom === zoomLevels[0]} onClick={() => changeZoom(-1)}>
                <ZoomOut size={17} />
              </button>
              <span className="resume-zoom-level">{zoom}%</span>
              <button className="resume-control" type="button" aria-label="Zoom in" disabled={zoom === zoomLevels[zoomLevels.length - 1]} onClick={() => changeZoom(1)}>
                <ZoomIn size={17} />
              </button>
            </div>
          </div>
          <div className="resume-document-wrap">
            <img
              className="resume-document"
              src={resumePages[page - 1]}
              alt={`Resume page ${page} of ${resumePages.length}`}
              style={{ width: `${zoom}%`, maxWidth: zoom === 100 ? "900px" : "none" }}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Resume;
