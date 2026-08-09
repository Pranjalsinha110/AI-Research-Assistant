import arxiv
from langchain_core.tools import tool
from model.model import llm

client = arxiv.Client()

@tool
def arxiv_search(query: str,max_results:int=2)-> list:
    """Search research paper on Arxiv and return only the most relevent and accurate part also take care that there is no irrelevant information """
    search   = arxiv.Search(
                query=query,
                max_results=max_results,
                sort_by=arxiv.SortCriterion.Relevance
                    )
    result = client.results(search)
    papers = []
    for paper in result:
        papers.append({
            "title": paper.title,
            "authors": [author.name for author in paper.authors],
            "summary": paper.summary,
            "published": str(paper.published),
            "pdf_url": paper.pdf_url,
            "entry_id": paper.entry_id
        })
    return papers

