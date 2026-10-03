<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00C2FF,50:7C3AED,100:00E5FF&height=220&section=header&text=AI%20Research%20Assistant&fontSize=42&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Multi-Agent%20Intelligent%20Research%20System&descAlignY=58&descSize=18" width="100%" />

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=21&duration=3000&pause=900&color=00C2FF&center=true&vCenter=true&width=850&lines=Multi-Agent+AI+Research+Assistant;Automated+Research+Planning;Multi-Source+Information+Collection;Fact-Checking+%26+Knowledge+Synthesis;AI-Powered+Research+Reports;Citations+%26+References;Powered+by+LangGraph+%2B+LangChain+%2B+Groq" alt="Typing SVG" />

</div>

<br/>

<a href="https://ai-research-assistant-red-zeta.vercel.app">
<img src="https://img.shields.io/badge/%F0%9F%9A%80_LIVE_DEMO-00C2FF?style=for-the-badge&logo=vercel&logoColor=white" />
</a>

<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white" />
<img src="https://img.shields.io/badge/LangGraph-Agentic_AI-7C3AED?style=for-the-badge" />
<img src="https://img.shields.io/badge/Groq-LLM-F55036?style=for-the-badge" />

<br/>

<img src="https://img.shields.io/badge/LangChain-LLM%20Framework-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" />
<img src="https://img.shields.io/badge/ArXiv-Research-B31B1B?style=for-the-badge&logo=arxiv&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-Frontend-000000?style=for-the-badge&logo=vercel&logoColor=white" />
<img src="https://img.shields.io/badge/Render-Backend-46E3B7?style=for-the-badge&logo=render&logoColor=black" />

<br/><br/>

**Research smarter. Verify deeper. Synthesize faster.**

</div>

---

<div align="center">

### ✨ From a single research question to a structured, cited report — automatically.

</div>

# 🤖 Multi-Agent AI Research Assistant

An intelligent **multi-agent research system** that takes a research topic from the user, automatically creates a research plan, gathers information from multiple sources, fact-checks the collected information, synthesizes the findings, generates a structured research report, and adds citations and references.

The application is built using **React, FastAPI, LangGraph, LangChain, and Groq** and follows a sequential multi-agent workflow for automated research.

---

## 🚀 Live Project

### 🌐 Frontend

<a href="https://ai-research-assistant-red-zeta.vercel.app">
<img src="https://img.shields.io/badge/🌐_Live_Demo-Open_Project-00C2FF?style=for-the-badge&logo=vercel&logoColor=white" />
</a>

https://ai-research-assistant-red-zeta.vercel.app

---

<div align="center">

|     🧠 Core    |     🔎 Research     |   🏗️ Engineering   | 🚀 Delivery |
| :------------: | :-----------------: | :-----------------: | :---------: |
| Multi-Agent AI |    Research Tools   | System Architecture |  Deployment |
|    LangGraph   |    Fact Checking    |      Tech Stack     | Local Setup |
|    LangChain   | Knowledge Synthesis |         API         | DOCX Export |

</div>

---

# ✨ Features

* 🤖 Multi-agent AI research workflow
* 🧠 Automatic research planning
* 🔎 Multi-source information collection
* 🌐 Web Search integration
* 📚 Wikipedia integration
* 📄 ArXiv research paper search
* ✅ Fact-checking of collected information
* 🧩 Knowledge synthesis
* 📝 Automated research report generation
* 🔖 Citation and reference generation
* 📄 DOCX research report generation
* 🎨 Responsive modern UI
* 🌙 Dark / Light theme support
* 📊 Visual research workflow
* ⚡ LangGraph-powered agent orchestration
* 🔐 Environment-variable based API configuration
* 🚨 Frontend error handling for unavailable AI services

---

# 🧠 How It Works

The application uses a sequential multi-agent architecture.

A user enters a research topic and the system automatically processes it through multiple specialized agents.

```text
                         ┌──────────────────────┐
                         │      👤 USER QUERY   │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │  🧠 PLANNER AGENT    │
                         │  Creates Research    │
                         │        Plan          │
                         └──────────┬───────────┘
                                    │
                                    ▼
                  ┌─────────────────────────────────┐
                  │     🔎 INFORMATION COLLECTOR    │
                  │                                 │
                  │   ┌────────┐ ┌────────────┐     │
                  │   │  WEB   │ │ WIKIPEDIA  │     │
                  │   │ SEARCH │ │            │     │
                  │   └────────┘ └────────────┘     │
                  │          ┌────────┐             │
                  │          │ ARXIV  │             │
                  │          └────────┘             │
                  └───────────────┬─────────────────┘
                                  │
                                  ▼
                         ┌──────────────────────┐
                         │   ✅ FACT CHECKER   │
                         │  Validates Collected │
                         │      Information     │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │ 🧩 KNOWLEDGE         │
                         │    SYNTHESIZER       │
                         │ Combines Important   │
                         │   Research Findings  │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │    📝 REPORT WRITER  │
                         │ Generates Structured │
                         │   Research Report    │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   🔖 CITATION AGENT  │
                         │ Adds Citations and   │
                         │     References       │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   📄 FINAL RESEARCH  │
                         │        REPORT        │
                         └──────────────────────┘
```

---

The workflow is implemented with LangGraph using the following sequence:

```text
START
  ↓
🧠 Planner Agent
  ↓
🔎 Information Collector
  ↓
✅ Fact Checker
  ↓
🧩 Knowledge Synthesizer
  ↓
📝 Report Writer
  ↓
🔖 Citation Agent
  ↓
END
```

---

# 🤖 Multi-Agent Architecture

The project separates the research process into specialized agents.

## 1. 🧠 Planner Agent

The Planner Agent receives the user's research topic and creates a structured research plan.

Example:

```text
User Query:
"Impact of Generative AI on Software Development"

Generated Plan:

Step 1:
Understand the fundamentals of Generative AI.

Step 2:
Research recent academic studies related to Generative AI
and software development.

Step 3:
Search for recent industry developments and adoption trends.
```

This plan is then passed to the next stage of the workflow.

---

## 2. 🔎 Information Collector

The Information Collector gathers information using multiple external research tools.

### 🌐 Web Search

Used to discover relevant information from the web and find recent developments.

### 📚 Wikipedia

Used to retrieve general background information and foundational knowledge.

### 📄 ArXiv

Used to search for academic research papers and scientific studies.

The collected information is then passed to the fact-checking stage.

---

## 3. ✅ Fact Checker Agent

The Fact Checker reviews the collected information and identifies important factual information that can be used in the final research.

The goal is to reduce irrelevant or unreliable information before the report-writing stage.

---

## 4. 🧩 Knowledge Synthesizer Agent

The Knowledge Synthesizer combines the processed information into a more concise and meaningful research context.

Instead of sending every raw result directly to the final report generator, the workflow produces a more structured knowledge representation.

---

## 5. 📝 Report Writer Agent

The Report Writer generates the main research report using the synthesized information.

The generated report is structured into a professional research format.

---

## 6. 🔖 Citation Agent

The Citation Agent processes the generated report and adds citations and references.

The API returns both:

```text
final_report
```

and

```text
final_report_with_citation
```

The cited version is used for the final research output.

---

# 🔎 Research Tools

## 🌐 Web Search

The Web Search tool retrieves information from the web for current and relevant research topics.

## 📚 Wikipedia

The Wikipedia tool provides background information and foundational knowledge about the research topic.

## 📄 ArXiv

The ArXiv tool searches academic papers and provides research-oriented information.

ArXiv results are especially useful when the research topic requires academic or scientific sources.

---

# 🏗️ System Architecture

The application is divided into two major parts:

```text
                         ┌─────────────────────┐
                         │  ⚛️ React Frontend  │
                         │                     │
                         │  User Interface     │
                         │  Research Input     │
                         │  Planner            │
                         │  Tool Results       │
                         │  Report Preview     │
                         └──────────┬──────────┘
                                    │
                                    │ HTTP / REST API
                                    ▼
                         ┌─────────────────────┐
                         │ ⚡ FastAPI Backend │
                         │                     │
                         │    API Routes       │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │      🧩 LangGraph   │
                         │  Agent Orchestration│
                         └──────────┬──────────┘
                                    │
                       ┌────────────┼────────────┐
                       ▼            ▼            ▼
                    Agents        Tools          LLM
                       │            │             │
                       │       ┌────┼────┐        │
                       │       ▼    ▼    ▼        │
                       │     Web  Wiki  ArXiv     │
                       │                          │
                       └──────────► ⚡ Groq ◄────┘
```

---

# 🛠️ Tech Stack

## Frontend

* React
* JavaScript
* Axios
* React Markdown
* React Bootstrap
* Bootstrap
* Framer Motion
* React Toastify
* Boxicons
* CSS
* Responsive design

The frontend package currently includes React 19, Axios, Framer Motion, React Markdown, React Bootstrap, React Toastify and other supporting packages.

---

## Backend

* Python
* FastAPI
* Uvicorn
* Pydantic
* python-dotenv
* python-docx

---

## AI / Agentic Layer

* LangChain
* LangChain Core
* LangChain Community
* LangChain Groq
* LangGraph
* Groq

---

## Research Tools

* DuckDuckGo Search
* Wikipedia
* ArXiv

---

## Observability

* LangSmith

The backend dependency configuration includes FastAPI, LangChain, LangGraph, Groq/LangChain-Groq, DuckDuckGo, Wikipedia, ArXiv, python-docx and LangSmith.

---

# 📁 Project Structure

```text
AI-Research-Assistant/
│
├── Backend/
│   │
│   ├── APIs/
│   │   ├── main.py
│   │   ├── routes.py
│   │   └── schema.py
│   │
│   ├── agents/
│   │   ├── planner_agent.py
│   │   ├── information_collector.py
│   │   ├── fact_checker_agent.py
│   │   ├── knowledge_synthesizer_agent.py
│   │   ├── report_writer_agent.py
│   │   └── citation_agent.py
│   │
│   ├── model/
│   │   └── model.py
│   │
│   ├── service/
│   │   └── document_generator.py
│   │
│   ├── states/
│   │   └── research_state.py
│   │
│   ├── tools/
│   │   ├── webSearch_tool.py
│   │   ├── wikipedia_tool.py
│   │   └── arxiv_tool.py
│   │
│   ├── workflow/
│   │   ├── __init__.py
│   │   └── graph.py
│   │
│   └── requirements.txt
│
│
├── frontend/
│   │
│   ├── public/
│   │   ├── favicon.png
│   │   ├── index.html
│   │   └── manifest.json
│   │
│   └── src/
│       │
│       ├── components/
│       │   ├── About/
│       │   ├── Footer/
│       │   ├── Hero/
│       │   ├── HowItWorks/
│       │   ├── Navbar/
│       │   ├── Planner/
│       │   ├── ReportPreview/
│       │   ├── ResearchInput/
│       │   └── ToolResult/
│       │
│       ├── pages/
│       │   └── Home.jsx
│       │
│       ├── services/
│       │   └── api.jsx
│       │
│       ├── styles/
│       │   ├── animation.css
│       │   ├── global.css
│       │   └── variable.css
│       │
│       ├── App.js
│       ├── App.css
│       └── index.js
│
├── .gitignore
└── README.md
```

---

# 🔄 Research Workflow

When a user enters a research topic:

### Step 1 — User Input

The user enters a research topic from the frontend.

Example:

```text
"Impact of Generative AI on Software Development"
```

---

### Step 2 — Research Planning

The Planner Agent generates a series of research steps.

```text
Research Topic
      ↓
🧠 Planner Agent
      ↓
Structured Research Plan
```

---

### Step 3 — Information Collection

The system gathers information from:

```text
🌐 Web Search
📚 Wikipedia
📄 ArXiv
```

---

### Step 4 — Fact Checking

The collected information is processed by the Fact Checker Agent.

```text
Collected Information
        ↓
✅ Fact Checker
        ↓
Verified / Relevant Information
```

---

### Step 5 — Knowledge Synthesis

The Knowledge Synthesizer combines the important findings into a useful research context.

---

### Step 6 — Report Generation

The Report Writer generates the research report.

---

### Step 7 — Citation

The Citation Agent adds citations and references.

---

### Step 8 — Final Output

The frontend receives:

* Research plan
* Tool results
* Final report
* Final report with citations

---

# 🔌 API Endpoints

The backend exposes the API under the `/api` prefix.

## GET `/api/`

Used to verify that the backend is running.

Example response:

```json
{
  "status": "running",
  "message": "AI Research Assistant API is running."
}
```

---

## POST `/api/generate_report`

Generates a complete research report.

### Request

```json
{
  "query": "Impact of Generative AI on Software Development"
}
```

### Response

The response contains:

```text
status
query
planner
tools
final_report
final_report_with_citation
```

The `tools` section contains:

```text
web_result
wikipedia_result
arxiv_result
```

The backend schema defines these response structures explicitly.

---

## POST `/api/generate_docx`

Converts the final cited research report into a DOCX document.

### Request

```json
{
  "final_report_with_citation": "Your final research report..."
}
```

The endpoint returns the generated Word document as a downloadable response.

---

# 📄 DOCX Report Generation

The project supports generating a downloadable `.docx` research report.

The workflow is:

```text
Final Research Report
        ↓
🔖 Citation Agent
        ↓
Cited Research Report
        ↓
📄 Document Generator
        ↓
DOCX File
```

The backend uses `python-docx` for document generation.

---

# ⚙️ Backend Setup

## 1. Clone the repository

```bash
git clone https://github.com/Pranjalsinha110/AI-Research-Assistant.git
```

```bash
cd AI-Research-Assistant
```

---

## 2. Create a virtual environment

Navigate to the backend:

```bash
cd Backend
```

Create a virtual environment:

### Windows

```bash
python -m venv venv
```

Activate it:

```bash
venv\Scripts\activate
```

### macOS / Linux

```bash
python3 -m venv venv
```

```bash
source venv/bin/activate
```

---

## 3. Install dependencies

```bash
pip install -r requirements.txt
```

---

# 🔐 Environment Variables

Create a `.env` file inside the `Backend` directory.

```env
GROQ_API_KEY=your_groq_api_key

LANGCHAIN_API_KEY=your_langsmith_api_key
LANGCHAIN_TRACING_V2=true
LANGCHAIN_PROJECT=AI-Research-Assistant
```

> Never commit your `.env` file or API keys to GitHub.

---

# ▶️ Run the Backend

From the `Backend` directory:

```bash
uvicorn APIs.main:app --reload
```

The API will be available at:

```text
http://127.0.0.1:8000
```

API status:

```text
http://127.0.0.1:8000/api/
```

---

# 💻 Frontend Setup

Open a new terminal.

Navigate to the frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The frontend will normally be available at:

```text
http://localhost:3000
```

---

# 🔗 Frontend ↔ Backend Configuration

The frontend communicates with the FastAPI backend through the API service layer.

For local development, configure the backend API URL according to your frontend API configuration.

For production, point the frontend to the deployed Render backend URL.

---

# 🌐 Deployment

The application is deployed as two separate services.

```text
                         🐙 GitHub Repository
                                  │
                         ┌────────┴────────┐
                         ▼                 ▼
                       Vercel          🚀 Render
                         │                 │
                         ▼                 ▼
                  ⚛️ React Frontend   ⚡ FastAPI Backend
```

### Frontend

Deployed using:

```text
Vercel
```

### Backend

Deployed using:

```text
Render
```

Environment variables are configured separately in the deployment platforms.

---

# 🧪 Local Development

For local development, run both services.

### Terminal 1 — Backend

```bash
cd Backend
venv\Scripts\activate
uvicorn APIs.main:app --reload
```

### Terminal 2 — Frontend

```bash
cd frontend
npm start
```

Then open:

```text
http://localhost:3000
```

---

# 🧩 State Management

The research workflow uses a shared research state managed through LangGraph.

The state carries information between agents including:

```text
👤 User Query
🧠 Research Plan
🌐 Web Search Results
📚 Wikipedia Results
📄 ArXiv Results
✅ Fact-Checked Information
🧩 Synthesized Knowledge
📝 Generated Report
🔖 Citations
```

This allows each agent to work on a specific stage while passing the required information to the next stage.

---

# 🔭 Why Multi-Agent Architecture?

Instead of asking one LLM call to perform the entire research process, the project separates responsibilities between specialized agents.

```text
Single Agent Approach

User
 ↓
One Huge Prompt
 ↓
Final Answer
```

Compared with:

```text
Multi-Agent Approach

User
 ↓
🧠 Planner
 ↓
🔎 Research
 ↓
✅ Fact Checking
 ↓
🧩 Knowledge Synthesis
 ↓
📝 Report Writing
 ↓
🔖 Citation
 ↓
📄 Final Report
```

This separation makes the research workflow easier to understand, extend, debug, and maintain.

---

# 🛡️ Error Handling

The frontend includes handling for failed research requests and can notify the user when the AI research service is temporarily unavailable.

The backend exposes HTTP errors through FastAPI when an exception occurs during research processing.

> Note: AI model providers can enforce request and token limits. Availability therefore depends partly on the configured LLM provider and API quota.

---

# 📊 Example Use Cases

The application can be used for research topics such as:

* Generative AI
* Artificial Intelligence
* Machine Learning
* Software Engineering
* Emerging technologies
* Academic research topics
* Technology trends
* Research paper discovery
* Industry developments

---

# 🔮 Future Improvements

Possible future improvements include:

* 🔄 Parallel execution of research tools
* 🧠 More advanced source ranking
* 📚 Support for additional academic databases
* 🔍 Better source credibility scoring
* 💾 Persistent research history
* 👤 User authentication
* 🗂️ Saved research projects
* 📑 PDF report generation
* 📊 Research analytics
* 🔁 Automatic retry and model fallback
* ⚡ Better token optimization
* 🧪 Automated testing for agents and tools
* 📈 Advanced LangSmith observability
* 🧠 More sophisticated multi-agent routing

---

# 🎯 Project Goals

This project was built to explore and demonstrate:

* Agentic AI
* Multi-agent systems
* LangGraph workflows
* LLM orchestration
* Tool calling
* AI-powered research automation
* Information retrieval
* Fact checking
* Knowledge synthesis
* Automated report generation
* Citation generation
* Full-stack AI application development

---

# 📚 Main Technologies

| Technology  | Purpose              |
| ----------- | -------------------- |
| React       | Frontend UI          |
| JavaScript  | Frontend logic       |
| FastAPI     | Backend API          |
| Python      | Backend development  |
| LangGraph   | Agent orchestration  |
| LangChain   | LLM/tool integration |
| Groq        | LLM inference        |
| DuckDuckGo  | Web search           |
| Wikipedia   | Background research  |
| ArXiv       | Academic research    |
| Pydantic    | Data validation      |
| python-docx | DOCX generation      |
| LangSmith   | LLM observability    |
| Vercel      | Frontend deployment  |
| Render      | Backend deployment   |

---

# 📌 Project Highlights

### 🤖 Agentic AI

The system is not a single LLM call. It uses multiple specialized agents connected through a LangGraph workflow.

### 🔎 Multi-Source Research

Research is collected from multiple sources including web search, Wikipedia and ArXiv.

### 🧠 Automated Research Pipeline

The entire pipeline—from planning to final citations—is automated.

### 📄 Exportable Reports

The final research report can be converted into a DOCX document.

### 🌐 Full-Stack Architecture

The project combines a React frontend with a Python/FastAPI AI backend.

---

# 👨‍💻 Author

**Pranjal Sinha**

GitHub:

[Pranjal Sinha](https://github.com/Pranjalsinha110)

---

# ⭐ Support

If you find this project useful or interesting, consider giving the repository a ⭐ on GitHub.

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00E5FF,50:7C3AED,100:00C2FF&height=140&section=footer&animation=fadeIn" width="100%" />

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=18&duration=3000&pause=900&color=00C2FF&center=true&vCenter=true&width=750&lines=Thanks+for+visiting+the+project!+%F0%9F%9A%80;Explore+%E2%80%A2+Research+%E2%80%A2+Learn+%E2%80%A2+Build+%F0%9F%A4%96;Star+%E2%AD%90+the+repository+if+you+find+it+useful!" alt="Footer animation" />

<br/>

### 🤖 Multi-Agent AI Research Assistant

**Built for Agentic AI • Research Automation • Full-Stack AI Development**

<br/>

<a href="https://github.com/Pranjalsinha110/AI-Research-Assistant">
<img src="https://img.shields.io/badge/⭐_Star_on_GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>

</div>

---

## 📜 License

This project is intended for educational, learning, and portfolio purposes.
