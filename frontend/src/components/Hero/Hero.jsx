import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero-section" id="home">

            <Container>

                <Row className="align-items-center hero-row">

                    {/* ================= LEFT CONTENT ================= */}

                    <Col lg={6} className="hero-left">

                        <div className="hero-badge">
                            <i className='bx bx-brain'></i>
                            AI Powered Research Platform
                        </div>

                        <h1 className="hero-title">

                            Research
                            <span> Smarter</span>

                            <br />

                            With AI Intelligence

                        </h1>

                        <p className="hero-description">

                            Generate comprehensive research reports from
                            <strong> Web Search</strong>,
                            <strong> Wikipedia</strong> and
                            <strong> ArXiv</strong> using AI.
                            Get intelligent planning, accurate citations,
                            report preview and downloadable DOCX reports
                            within seconds.

                        </p>

                        <div className="hero-buttons">

                            <Button
                                className="primary-btn"
                                size="lg"
                                href="#research"
                            >
                                <i className='bx bx-search-alt'></i>
                                Start Research
                            </Button>

                            <Button
                                variant="outline-light"
                                className="secondary-btn"
                                size="lg"
                                href="#about"
                            >
                                <i className='bx bx-info-circle'></i>
                                Learn More
                            </Button>

                        </div>

                        <div className="developer-card">

                            <div className="developer-avatar">

                                <i className='bx bx-code-alt'></i>

                            </div>

                            <div>

                                <h6>
                                    Developed by
                                </h6>

                                <h5>
                                    Pranjal Sinha
                                </h5>

                                <p>
                                    Full Stack Developer • AI & GenAI Enthusiast
                                </p>

                            </div>

                        </div>

                    </Col>

                    {/* ================= RIGHT CONTENT ================= */}

                    <Col lg={6} className="hero-right">

                        <div className="hero-dashboard">

                            <div className="floating-card web-card">

                                <i className='bx bx-world'></i>

                                <h5>Web Search</h5>

                                <p>Real-time Web Intelligence</p>

                            </div>

                            <div className="floating-card wiki-card">

                                <i className='bx bx-book'></i>

                                <h5>Wikipedia</h5>

                                <p>Trusted Knowledge Base</p>

                            </div>

                            <div className="floating-card arxiv-card">

                                <i className='bx bx-file'></i>

                                <h5>ArXiv Papers</h5>

                                <p>Research Publications</p>

                            </div>

                            <div className="floating-card report-card">

                                <i className='bx bx-file-blank'></i>

                                <h5>AI Report</h5>

                                <p>DOCX + Citations</p>

                            </div>

                            <div className="center-circle">

                                <i className='bx bx-brain'></i>

                            </div>

                        </div>

                    </Col>

                </Row>

            </Container>

        </section>
    );
};

export default Hero;