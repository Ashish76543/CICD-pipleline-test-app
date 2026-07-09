from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel



class Todo(BaseModel):
    text: str
app=FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


todos=[]
@app.post("/todos")
def printtodo(todo:Todo):
    todos.append(todo.text)
    print(todos)
    return {"message":"success"}


@app.get("/")
def simpletester():
    return {"success":"success"}
    