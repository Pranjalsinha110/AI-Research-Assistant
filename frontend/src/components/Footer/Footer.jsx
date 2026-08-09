import { Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-section">

            {/* Animated background */}

            <div className="footer-glow footer-glow-one"></div>
            <div className="footer-glow footer-glow-two"></div>


            <Container>

                {/* ================= FOOTER MAIN ================= */}

                <div className="footer-content">

                    {/* Brand */}

                    <div className="footer-brand">

                        <h3>
                            AI<span>Research</span>
                        </h3>

                        <p>
                            Intelligent research, powered by AI.
                        </p>

                    </div>


                    {/* Navigation */}

                    <div className="footer-nav">

                        <a href="#home">
                            Home
                        </a>

                        <a href="#about">
                            About
                        </a>

                        <a
                            href="https://github.com/Pranjalsinha110/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="bx bxl-github"></i>
                            GitHub
                        </a>

                    </div>


                    {/* ================= CONTACT ================= */}

                    <a
                        href="mailto:your-email@example.com"
                        className="footer-contact"
                    >

                        <div className="contact-icon">

                            <i className="bx bx-envelope"></i>

                        </div>


                        <div className="contact-text">

                            <span>
                                Let's Connect
                            </span>

                            <strong>
                                sinhapranjal2005@gmail.com
                            </strong>

                        </div>


                        <i className="bx bx-right-arrow-alt contact-arrow"></i>

                    </a>

                </div>


                {/* ================= DIVIDER ================= */}

                <div className="footer-divider">

                    <span></span>

                </div>


                {/* ================= BOTTOM ================= */}

                <div className="footer-bottom">

                    <p>
                        © 2026 Pranjal Sinha. All rights reserved.
                    </p>


                    <div className="footer-tagline">

                        <i className="bx bx-rocket"></i>

                        Building Agentic AI systems

                    </div>

                </div>

            </Container>

        </footer>
    );
};

export default Footer;