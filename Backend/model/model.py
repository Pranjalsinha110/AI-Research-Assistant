from langchain_groq import ChatGroq
from dotenv import load_dotenv
import os
load_dotenv()

llm = ChatGroq(model="groq/compound-mini",
               temperature=0.7
               )
