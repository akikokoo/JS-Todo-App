const todoInput = document.getElementById("todo-input");
const todoButton = document.getElementById("todo-button");
const todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo(e){
    e.preventDefault();

    const todoButtonDiv = document.createElement("div");
    todoButtonDiv.classList.add("todo-buttons");
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    todoDiv.appendChild(newTodo);
    todoInput.value = "";

    const completeButton = document.createElement("button");
    completeButton.innerText = "✓";
    completeButton.classList.add("complete-button");
    todoButtonDiv.appendChild(completeButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "X";
    deleteButton.classList.add("delete-button");
    todoButtonDiv.appendChild(deleteButton);

    todoDiv.appendChild(todoButtonDiv);
    todoList.appendChild(todoDiv);
}

function deleteTodo(e){
    const item = e.target;

    if(item.classList[0] === "delete-button"){
        const todo = item.parentElement.parentElement;
        todo.remove();
    }
    else if(item.classList[0] === "complete-button"){
        const todoDiv = item.parentElement.parentElement;
        const listElement = todoDiv.querySelector("li");
        listElement.style.textDecoration = "line-through";
    }
}
