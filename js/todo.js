const todoForm = document.getElementById("todo_form");
const todoInput = document.querySelector("#todo_form input");
const todoList = document.getElementById("todo_list");

const TODOS_KEY = "todos";

let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event){
    const list = event.target.parentElement;
    list.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(list.id));
    saveTodos();
}

function paintTodo(newTodo){
    const list = document.createElement("li");
    list.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const btn = document.createElement("button");
    btn.innerText = "❌";
    btn.addEventListener("click", deleteTodo);
    list.appendChild(span);
    list.appendChild(btn);
    todoList.appendChild(list);
}

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newObj = {
        text: newTodo,
        id: Date.now(),
    };
    todos.push(newObj);
    paintTodo(newObj);
    saveTodos();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if(saveTodos !== null){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}