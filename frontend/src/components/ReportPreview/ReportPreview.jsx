import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import "./ReportPreview.css";
import { downloadResearchDocx } from "../../services/api";

const ReportPreview = ({ report = "" }) => {

const reportContent = report || "";


const handleDownload = async () => {

    try {

         await downloadResearchDocx(report);
         

    } catch (error) {

        console.error("Download error:", error);

    }
};

    return (
        <section
            className="report-preview-section"
            id="report-preview"
        >

            <Container>

                {/* ================= HEADER ================= */}

                <div className="report-preview-header">

                    <div className="report-heading-group">

                        <span className="report-badge">

                            <i className="bx bx-file"></i>

                            Research Report

                        </span>

                        <h2 className="report-title">

                            Report
                            <span> Preview</span>

                        </h2>

                        <p className="report-description">

                            Review the AI-generated research report
                            before downloading the final document.

                        </p>

                    </div>


                    <div className="report-status">

                        <span className="report-status-dot"></span>

                        Report Generated

                    </div>

                </div>


                {/* ================= REPORT DOCUMENT ================= */}

                <div className="report-container">

                    {/* Document Top Bar */}

                    <div className="report-toolbar">

                        <div className="report-document-info">

                            <div className="report-document-icon">

                                <i className="bx bx-file-blank"></i>

                            </div>

                            <div>

                                <h4>
                                    AI Research Report
                                </h4>

                                <span>
                                    Generated Research Document
                                </span>

                            </div>

                        </div>


                        <div className="report-document-meta">

                            <span>
                                <i className="bx bx-check-circle"></i>
                                Ready
                            </span>

                        </div>

                    </div>


                    {/* Scrollable Report */}

                    <div className="report-scroll-area">

                        <article className="report-document">

                            <ReactMarkdown>
                                {reportContent}
                            </ReactMarkdown>

                        </article>

                    </div>


                    {/* Document Footer */}

                    <div className="report-footer">

                        <div className="report-footer-info">
                            

                            <i className="bx bx-info-circle"></i>

                            <span>
                                Scroll to read the complete report
                            </span>

                        </div>

                            <button
                             className="download-report-btn"
                                onClick={handleDownload}
                            >
                                <i className="bx bx-download"></i>

                                Download DOCX
                            </button>




                        <div className="report-footer-pages">

                            <i className="bx bx-file"></i>

                            Full Report

                        </div>

                    </div>

                </div>

            </Container>

        </section>
    );
};

export default ReportPreview;