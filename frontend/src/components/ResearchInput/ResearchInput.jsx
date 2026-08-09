import { Container } from "react-bootstrap";
import { useState } from "react";
import "./ResearchInput.css";

const ResearchInput = ({onResearch}) => {

    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!query.trim()) {
            return;
        }

        setLoading(true);

        try {
            await onResearch(query)

        } catch (error) {

            console.error("Research request failed:", error);

        } finally {

            setLoading(false);

        }
    };

    return (

        <section
            className="research-input-section"
            id="research"
        >

            <Container>

                <div className="research-input-wrapper">

                    {/* Section Header */}

                    <div className="research-input-header">

                        <span className="research-input-badge">

                            <i className="bx bx-search-alt"></i>

                            AI Research Assistant

                        </span>

                        <h2 className="research-input-title">

                            What do you want to{" "}

                            <span>research?</span>

                        </h2>

                        <p className="research-input-description">

                            Enter your research topic and let AI
                            plan, search, analyze and generate
                            a comprehensive research report.

                        </p>

                    </div>


                    {/* Research Form */}

                    <form
                        className="research-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="research-textarea-wrapper">

                            <i className="bx bx-search research-input-icon"></i>

                            <textarea
                                className="research-textarea"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Example: Impact of Generative AI on software development"
                                rows="5"
                                disabled={loading}
                            />

                            <span className="research-input-hint">

                                Ask anything you want to research

                            </span>

                        </div>


                        {/* Submit Button */}

                        <button
                            type="submit"
                            className="research-submit-btn"
                            disabled={loading || !query.trim()}
                        >

                            {loading ? (

                                <>
                                    <span
                                        className="research-spinner"
                                    ></span>

                                    Researching...
                                </>

                            ) : (

                                <>
                                    <i className="bx bx-rocket"></i>

                                    Start Research
                                </>

                            )}

                        </button>

                    </form>


                    {/* Example Queries */}

                    <div className="research-examples">

                        <span className="examples-label">

                            <i className="bx bx-bulb"></i>

                            Try an example:

                        </span>

                        <button
                            type="button"
                            className="example-query"
                            onClick={() =>
                                setQuery(
                                    "Impact of Generative AI on software development"
                                )
                            }
                        >
                            Generative AI in software development
                        </button>

                        <button
                            type="button"
                            className="example-query"
                            onClick={() =>
                                setQuery(
                                    "Latest advancements in artificial intelligence"
                                )
                            }
                        >
                            Latest AI advancements
                        </button>

                    </div>

                </div>

            </Container>

        </section>

    );
};

export default ResearchInput;