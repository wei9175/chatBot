import cohere
co = cohere.Client("B46mampmv7YaDnr870gbUmRyAjGpPTKSJNai3bfk") 

response = co.chat(message="What is the largest city in taiwan?",
                   model="command-r-plus",
                   preamble="You are an expert on geography, be more specific")

print(response.text)