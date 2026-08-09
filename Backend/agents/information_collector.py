from states.research_state import ResearchState
from tools.arxiv_tool import arxiv_search
from tools.webSearch_tool import web_search
from tools.wikipedia_tool import wikipedia_search

def information_collector(state: ResearchState) -> ResearchState:
    """
    Executes the required tools based on Planner Agent output
    and stores their results in the ResearchState.
    """
    web_result = ""
    arxiv_result = []
    wikipedia_result = ""
    source = []


    if state["use_web_tool"]:
        web_result = web_search.invoke(
            {
                "query": state["web_query"]
            }
        )
        source.append("Web Search")

    if state["use_arxiv_tool"]:
        arxiv_result = arxiv_search.invoke(
            {
                "query": state["arxiv_query"]
            }
        )
        for paper in arxiv_result:
         paper["type"] = "arxiv"

        source.extend(arxiv_result)






    if state["use_wikipedia_tool"]:
        wikipedia_result = wikipedia_search.invoke(
            {
                "query": state["wikipedia_query"]
            }
        )
        source.append({ "type": "wikipedia",
                        "title": state["wikipedia_query"],
                        "url": f"https://en.wikipedia.org/wiki/{state['wikipedia_query'].replace(' ','_')}"
                        })

    return {
        
        "web_result": web_result,
        "arxiv_result": arxiv_result,
        "wikipedia_result": wikipedia_result,
        "source": source
    }