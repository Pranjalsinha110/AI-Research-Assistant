from typing import  Any, Dict, List, Optional,TypedDict


class ResearchState(TypedDict):
    #user
    query : str

    #planner
    plan : list[str]
    use_web_tool : bool
    use_arxiv_tool : bool
    use_wikipedia_tool :bool

    web_query : Optional[str]
    arxiv_query : Optional[str]
    wikipedia_query : Optional[str]

    #tool
    web_result:str
    arxiv_result: list[dict]
    wikipedia_result: str


    # Fact Checker
    verified_information: list[str]

    #knowledge synthesizer
    introduction: str
    background: str
    core_concepts: str
    working_principle: str
    architecture: str
    recent_research: str
    applications: str
    advantages: str
    limitations: str
    future_scope: str
    conclusion: str

    mathematical_foundation: Optional[str]
    implementation: Optional[str]
    additional_sections: Optional[str]

    #summary
    summary : str

    #report
    final_report : str

    #citation
    source : list[dict[str,Any]]
    final_report_with_citation : str


