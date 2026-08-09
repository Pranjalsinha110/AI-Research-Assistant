from langgraph.graph import StateGraph, START, END

from states.research_state import ResearchState

from agents.planner_agent import planner_agent
from agents.information_collector import information_collector
from agents.fact_checker_agent import fact_checker_agent
from agents.knowledge_synthesizer_agent import knowledge_synthesizer_agent
from agents.report_writer_agent import report_writer_agent
from agents.citation_agent import citation_agent

graph = StateGraph(ResearchState)

#adding nodes
graph.add_node("planner_agent",planner_agent)
graph.add_node("information_collector",information_collector)
graph.add_node("fact_checker_agent",fact_checker_agent)
graph.add_node("knowledge_synthesizer_agent",knowledge_synthesizer_agent)
graph.add_node("report_writer_agent",report_writer_agent)
graph.add_node("citation_agent",citation_agent)
#adding edges
graph.add_edge(START,"planner_agent")
graph.add_edge("planner_agent","information_collector")
graph.add_edge("information_collector","fact_checker_agent")
graph.add_edge("fact_checker_agent","knowledge_synthesizer_agent")
graph.add_edge("knowledge_synthesizer_agent","report_writer_agent")
graph.add_edge("report_writer_agent","citation_agent")
graph.add_edge("citation_agent",END)

workflow = graph.compile()