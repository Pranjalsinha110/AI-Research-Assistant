
import re

import wikipedia
import requests
from langchain_community.tools import WikipediaQueryRun
from langchain_community.utilities import WikipediaAPIWrapper
from langchain_community.retrievers import WikipediaRetriever
from langchain_core.tools import tool

# wrapper = WikipediaAPIWrapper(top_k_results= 1,
#                               doc_content_chars_max = 1200
#                               )
# wiki = WikipediaQueryRun(api_wrapper=wrapper)

# retriever = WikipediaRetriever(
#     top_k_results=1, doc_content_chars_max=1200   
# )

@tool
def wikipedia_search(query : str) ->str:
    """Searches Wikipedia for a given query and returns the most relevant result also take care that there is no irrelevant information only give accurate information and data"""
    headers = {
        "User-Agent":"Multi-Agent-AI-Research-Assistant/1.0"
    }
    try:
        params =  {
            "action": "query",
            "list": "search",
            "srsearch": query,
            "format": "json"
        }

        response = requests.get(
            "https://en.wikipedia.org/w/api.php",
            headers=headers,
            params=params
        )
        data = response.json()
        title = data["query"]["search"][0]["title"]

        extract_params = {
        "action": "query",
        "prop": "extracts",
        "titles": title,
        "exintro": True,
        "explaintext": True,
        "format": "json"
        }
        extract_response = requests.get(
        "https://en.wikipedia.org/w/api.php",
        params=extract_params,
        headers=headers
        )
        extract_data = extract_response.json()
        pages = extract_data["query"]["pages"]
        page = next(iter(pages.values()))

        return page["extract"][:3000]
    except requests.exceptions.Timeout:
        return "Wikipedia request timed out."

    except requests.exceptions.ConnectionError:
        return "Unable to connect to Wikipedia."

    except requests.exceptions.RequestException as e:
        return f"Wikipedia request failed: {e}"

    except Exception as e:
        return f"Unexpected error: {e}"



