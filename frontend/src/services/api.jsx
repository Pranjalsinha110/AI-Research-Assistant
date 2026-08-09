
const API_URL = process.env.REACT_APP_API_URL

export const generateResearchReport = async(query) => {

const response  = await fetch(
    `${API_URL}/api/generate_report`,
    {
        method  : "POST",
        headers : {
            "content-type" : "application/json",
        },
        body : JSON.stringify({
            query:query ,
        })
    }
);

if(!response.ok){
    let errorMessage = "Failed to generate research report.";
    try{
        const errorData = await response.json();
        if (errorData.detail){
            errorMessage = errorData.detail;
        }
    }catch(error){
        //ignore json parsing error
    }
    throw new Error(errorMessage);
}

return await response.json();
}





// for document DOCX download
export const downloadResearchDocx  = async (final_report_with_citation)=>{

    const response = await fetch(
        `${API_URL}/api/generate_docx`,
        {
            method : "POST",

            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                final_report_with_citation  : final_report_with_citation,
            })
        }
  );
  if(!response.ok){
    let errorMessage = "Failed to generate Docx . "
    try{
        const  errorData = await response.json()
        if(errorData.detail){
            errorMessage = errorData.detail;
        }

    }catch (error){
        // ignore JSON parsing error
    }
    throw new Error(errorMessage);
  }

  const blob =  await response.blob();

  const url = window.URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;

  link.download = "research_report.docx";

  document.body.appendChild(link);

  link.click();
  link.remove();


  window.URL.revokeObjectURL(url);

};