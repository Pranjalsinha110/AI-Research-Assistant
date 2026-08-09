import { Container } from "react-bootstrap";
import "./HowItWorks.css";

const HowItWorks = () => {

    const steps = [
        {
            id: "01",
            icon: "bx-search-alt",
            title: "Enter Your Query",
            description:
                "Start by entering the topic or question you want the AI research assistant to investigate."
        },
        {
            id: "02",
            icon: "bx-brain",
            title: "AI Creates a Plan",
            description:
                "The AI analyzes your query and creates a structured research plan with focused steps."
        },
        {
            id: "03",
            icon: "bx-data",
            title: "Research & Analyze",
            description:
                "Multiple research tools gather information from web sources, Wikipedia and ArXiv for deeper analysis."
        },
        {
            id: "04",
            icon: "bx-file-blank",
            title: "Get Your Report",
            description:
                "The AI combines the gathered information into a structured research report with relevant citations."
        }
    ];

    return (
        <section
            className="how-it-works-section"
            id="how-it-works"
        >

            <Container>

                {/* Section Header */}

                <div className="how-it-works-header">

                    <span className="how-it-works-badge">
                        <i className="bx bx-git-branch"></i>
                        How It Works
                    </span>

                    <h2 className="how-it-works-title">
                        From Question to
                        <span> Research Report</span>
                    </h2>

                    <p className="how-it-works-description">
                        See how the AI research assistant transforms
                        your research question into a structured,
                        source-backed report.
                    </p>

                </div>


                {/* Workflow */}

                <div className="workflow-container">

                    <div className="workflow-line"></div>

                    {steps.map((step, index) => (

                        <div
                            className="workflow-step"
                            key={step.id}
                        >

                            {/* Step Number */}

                            <div className="workflow-number">
                                {step.id}
                            </div>


                            {/* Icon */}

                            <div className="workflow-icon">

                                <i className={`bx ${step.icon}`}></i>

                            </div>


                            {/* Content */}

                            <div className="workflow-content">

                                <span className="workflow-step-label">
                                    STEP {step.id}
                                </span>

                                <h3>
                                    {step.title}
                                </h3>

                                <p>
                                    {step.description}
                                </p>

                            </div>


                            {/* Arrow */}

                            {index !== steps.length - 1 && (
                                <div className="workflow-arrow">

                                    <i className="bx bx-right-arrow-alt"></i>

                                </div>
                            )}

                        </div>

                    ))}

                </div>

            </Container>

        </section>
    );
};

export default HowItWorks;