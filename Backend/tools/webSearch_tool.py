from  model.model import llm
from langchain_community.tools import DuckDuckGoSearchRun
from langchain_core.tools import tool


search = DuckDuckGoSearchRun()
@tool
def web_search(query:str) -> str :
    """search the web using DuckDuckGo and return the most relevant and efficient results"""
    result = search.invoke(query)
    return result
