from fastapi import APIRouter
from fastapi import HTTPException
from workflow.graph import workflow
from APIs.schema import Requestschema, Researchresponse,Documentrequest
from fastapi.responses import StreamingResponse
from service.document_generator import document_generator




router  = APIRouter(
    prefix = "/api",
    tags = ["Research Assistant"]
)

@router.get("/")
def status_check():
    return {
        "status": "running",
        "message": "AI Research Assistant API is running."
    }

@router.post("/generate_report", response_model=Researchresponse)
def generate_report(request: Requestschema):
 try:
    result = workflow.invoke(
        {
            "query" : request.query
        }
    )
    return{
        "status": "success",
        "query": result["query"],


        "planner":{
            "plan":result["plan"]
        },


        "tools": {
            "web_result" : result["web_result"],
            "wikipedia_result" : result["wikipedia_result"],
            "arxiv_result" : result["arxiv_result"]
        },



        "final_report" :result["final_report"],
        # "final_report_with_citation" : result["final_report_with_citation"]
    }
 except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )


@router.post("/generate_docx")
def generate_docs(request:Documentrequest):
    try:
        document = document_generator(
            {
                # "final_report_with_citation": request.final_report_with_citation
                "final_report": request.final_report
            }
        )
        buffer = document["docx_buffer"]
        return StreamingResponse(
            buffer,
            media_type="application/vnd.openxmlformats-officedocument.wordprocessingml.document",

            headers = {
                "content-disposition": "attachment; filename=research_report.docx"
            }
        )
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )