from model.model import llm
from states.research_state import ResearchState


def citation_agent(state: ResearchState) -> dict:
    """
    Citation Agent

    Responsibilities:
    1. Insert appropriate in-text citations.
    2. Generate APA-style References section.
    3. Do NOT modify the report content.
    4. Use ONLY the provided source metadata.
    """

    prompt = f"""
You are an expert Academic Citation Specialist.

You are given a completed research report along with the source metadata
used to generate that report.

Your task is ONLY to enhance the report by adding professional academic
citations.

------------------------------------------------------------
Research Report
------------------------------------------------------------

{state["final_report"]}


------------------------------------------------------------
Available Source Metadata
------------------------------------------------------------

{state["source"]}


------------------------------------------------------------
Rules
------------------------------------------------------------

1. DO NOT rewrite the report.

2. DO NOT remove any paragraph.

3. DO NOT shorten the report.

4. DO NOT add any new factual information.

5. Preserve every heading exactly as it is.

6. Insert appropriate APA-style in-text citations wherever applicable.

7. Every important factual statement should have an appropriate citation whenever possible.

8. Use ONLY the provided source metadata.

9. NEVER invent:
   - authors
   - publication year
   - paper title
   - URLs
   - website names

10. If a source does not contain enough metadata,
    use only the available information.

11. At the end of the report create a new section:

# References


12. Generate APA-style references using the supplied metadata.

13. Remove duplicate references.

14. Keep the original Markdown formatting.

15. Return ONLY the complete report with citations.

Do not write any explanation.
Do not wrap the report inside markdown code blocks.
Return only the final report.
"""

    result = llm.invoke(prompt)

    return {
        "final_report_with_citation": result.content
    }