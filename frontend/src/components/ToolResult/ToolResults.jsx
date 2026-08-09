import { Container } from "react-bootstrap";
import "./ToolResults.css";
import { summary } from "framer-motion/client";

const ToolResults = ({ toolResults = null }) => {

    const tools = [

        {
            id: "web",
            icon: "bx-world",
            title: "Web Search",
            result: toolResults?.web_result
        },

        {
            id: "wikipedia",
            icon: "bx-book-open",
            title: "Wikipedia",
            result: toolResults?.wikipedia_result
        },

        {
            id: "arxiv",
            icon: "bx-file",
            title: "ArXiv",
            result: toolResults?.arxiv_result?.map((paper)=>paper.summary[0])
        }

    ];


    return (
        <section
            className="tool-results-section"
            id="tool-results"
        >

            <Container>

                {/* ================= HEADER ================= */}

                <div className="tool-results-header">

                    <span className="tool-results-badge">
                        <i className="bx bx-data"></i>
                        Research Sources
                    </span>

                    <h2 className="tool-results-title">
                        Information
                        <span> Collected</span>
                    </h2>

                    <p className="tool-results-description">
                        Explore the sources and research tools used by the
                        AI to gather information for your research report.
                    </p>

                </div>


                {/* ================= TOOL CARDS ================= */}

                <div className="tool-results-grid">

                    {tools.map((tool) => (

                        <div
                            className="tool-result-card"
                            key={tool.id}
                        >

                            <div className="tool-card-top">

                                <div className="tool-icon">
                                    <i className={`bx ${tool.icon}`}></i>
                                </div>

                                <span className="tool-status">

                                    <span className="tool-status-dot"></span>

                                    {tool.result
                                        ? "Completed"
                                        : "Waiting"
                                    }

                                </span>

                            </div>


                            <div className="tool-card-content">

                                <h3>
                                    {tool.title}
                                </h3>


                                {/* Large result yahan scroll hoga */}

                                <div className="tool-result-scroll">

                                    {tool.result ? (

                                        typeof tool.result === "string" ? (

                                            <p>
                                                {tool.result}
                                            </p>

                                        ) : (

                                            <pre>
                                                {JSON.stringify(
                                                    tool.result,
                                                    null,
                                                    2
                                                )}
                                            </pre>

                                        )

                                    ) : (

                                        <p>
                                            Research results will appear
                                            here after research starts.
                                        </p>

                                    )}

                                </div>

                            </div>


                            <div className="tool-card-footer">

                                <div className="tool-count">

                                    <i className="bx bx-layer"></i>

                                    <span>
                                        {tool.result
                                            ? "Results Available"
                                            : "Waiting"
                                        }
                                    </span>

                                </div>


                                <i className="bx bx-check-circle tool-check"></i>

                            </div>

                        </div>

                    ))}

                </div>

            </Container>

        </section>
    );
};

export default ToolResults;