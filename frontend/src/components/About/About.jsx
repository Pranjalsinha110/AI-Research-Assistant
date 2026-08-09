import { Container, Row, Col } from "react-bootstrap";
import "./About.css";

const About = () => {

    const stats = [
        {
            icon: "bx-bot",
            number: "6",
            label: "AI Agents",
            description: "Specialized agents working together"
        },
        {
            icon: "bx-wrench",
            number: "3",
            label: "Research Tools",
            description: "Multiple sources for better research"
        },
        {
            icon: "bx-file-blank",
            number: ". . .",
            label: "AI Report",
            description: "Structured research report"
        }
    ];


    const technologies = [
        "React",
        "Multi-Agent",
        "LLMs",
        "Agentic AI",
        "Generative AI",
         "GitHub"
    ];


    return (

        <section
            className="about-section"
            id="about"
        >

            {/* Background decorative elements */}

            <div className="about-glow about-glow-one"></div>

            <div className="about-glow about-glow-two"></div>


            <Container>

                {/* =================================================
                                SECTION HEADER
                ================================================= */}

                <div className="about-header">

                    <span className="about-badge">

                        <i className="bx bx-user"></i>

                        About US

                    </span>


                    <h2 className="about-title">

                        Built With
                        <span> Intelligence</span>

                    </h2>


                    <p className="about-subtitle">

                        An AI-powered multi-agent research assistant
                        designed to discover, analyze, verify and
                        transform information into structured research.

                    </p>

                </div>


                {/* =================================================
                                PROJECT SHOWCASE
                ================================================= */}

                <div className="about-showcase">

                    <div className="showcase-orbit orbit-one"></div>

                    <div className="showcase-orbit orbit-two"></div>


                    <div className="showcase-center">

                        <div className="showcase-icon">

                            <i className="bx bx-brain"></i>

                        </div>


                        <span>
                            AI RESEARCH
                        </span>


                        <h3>
                            Intelligent
                            <br />
                            Research Workflow
                        </h3>


                        <p>
                            Multiple AI agents collaborate with
                            specialized research tools to produce
                            reliable and structured reports.
                        </p>

                    </div>


                    {/* Floating Elements */}

                    <div className="floating-tech tech-one">

                        <i className="bx bx-search"></i>

                        Web Search

                    </div>


                    <div className="floating-tech tech-two">

                        <i className="bx bx-book-open"></i>

                        ArXiv

                    </div>


                    <div className="floating-tech tech-three">

                        <i className="bx bx-globe"></i>

                        Wikipedia

                    </div>


                    <div className="floating-tech tech-four">

                        <i className="bx bx-file"></i>

                        AI Report

                    </div>

                </div>


                {/* =================================================
                                STAT CARDS
                ================================================= */}

                <Row className="about-stats">

                    {stats.map((stat, index) => (

                        <Col
                            lg={4}
                            md={4}
                            sm={12}
                            key={index}
                        >

                            <div className="stat-card">

                                <div className="stat-icon">

                                    <i className={`bx ${stat.icon}`}></i>

                                </div>


                                <div className="stat-number">

                                    {stat.number}

                                </div>


                                <h4>

                                    {stat.label}

                                </h4>


                                <p>

                                    {stat.description}

                                </p>

                            </div>

                        </Col>

                    ))}

                </Row>


                {/* =================================================
                                DEVELOPER SECTION
                ================================================= */}

                <div className="developer-showcase">

                    <Row className="align-items-center">

                        {/* Developer Avatar */}

                        <Col
                            lg={4}
                            md={4}
                            className="developer-visual"
                        >

                            <div className="developer-orbit">

                                <div className="developer-avatar-large">

                                    <i className="bx bx-code-alt"></i>

                                </div>

                            </div>

                        </Col>


                        {/* Developer Information */}

                        <Col
                            lg={8}
                            md={8}
                            className="developer-info"
                        >

                            <span className="developer-label">

                                <i className="bx bx-code-alt"></i>

                                THE DEVELOPER

                            </span>


                            <h3>

                                Hi, I'm{" "}

                                <span>
                                    Pranjal Sinha
                                </span>

                            </h3>


                            <h4>

                                Full Stack Developer
                                <span> • </span>
                                AI & GenAI Enthusiast

                            </h4>


                            <p>

                               I build intelligent AI systems powered by Generative AI, agentic workflows,
                                and autonomous problem-solving — turning complex ideas into practical solutions.

                            </p>


                            {/* Technologies */}

                            <div className="technology-list">

                                {technologies.map(
                                    (technology, index) => (

                                        <span
                                            key={index}
                                            className="technology-pill"
                                        >

                                            {technology}

                                        </span>

                                    )
                                )}

                            </div>


                            {/* Developer Quote */}

                            <div className="developer-quote">

                                <i className="bx bxs-quote-alt-left"></i>

                                <span>
                                    Building intelligent systems,
                                    one idea at a time.
                                </span>

                            </div>

                        </Col>

                    </Row>

                </div>


                {/* =================================================
                                BOTTOM TAG
                ================================================= */}

                <div className="about-bottom">

                    <span>

                        <i className="bx bx-code-curly"></i>

                        Build Multi-Agent Systems

                    </span>

                </div>

            </Container>

        </section>

    );
};

export default About;