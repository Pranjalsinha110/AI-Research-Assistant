import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero"
import ResearchInput from "../components/ResearchInput/ResearchInput";
import Planner from "../components/Planner/Planner";
import ToolResults from "../components/ToolResult/ToolResults";
import ReportPreview from "../components/ReportPreview/ReportPreview";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import { generateResearchReport } from "../services/api";

const Home = () => {
    const [researchData , setResearchData] = useState(null);
    const handleResearch = async (query) =>{
        try{
            const data = await generateResearchReport(query);
            setResearchData(data);
        }catch(error){
            console.error(
                "researh request failed : ",
                    error);
            
                 alert(
            "⚠️ Agent Limit Reached\n\n" +
            "Too many requests have been made. Please try again later."
                )

            throw error;
        }
        
    }
    return (
        <>
            <Navbar/>

            <Hero/>

            <ResearchInput onResearch={handleResearch}/>

          <Planner plan={researchData?.planner?.plan}/>

          <ToolResults toolResults = {researchData?.tools}/>

         <ReportPreview  report={researchData?.final_report}/>

            <HowItWorks/>

            <About/>

           <Footer/>
        </>
    );
};

export default Home;