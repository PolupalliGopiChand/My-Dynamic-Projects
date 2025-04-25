const todoItemsContainer = document.getElementById("todoItemsContainer");
const addTodoButton = document.getElementById("addTodoButton");
const saveTodoButton = document.getElementById("saveTodoButton");

const getTodoListFromLocalStorage = () => {
  const savedList = localStorage.getItem("todoList");
  return savedList ? JSON.parse(savedList) : [];
};

let todoList = getTodoListFromLocalStorage();
let todosCount = todoList.length;

saveTodoButton.onclick = () => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

const onAddTodo = () => {
  const userInput = document.getElementById("todoUserInput").value.trim();
  if (!userInput) {
    alert("Enter valid text");
    return;
  }

  const newTodo = {
    text: userInput,
    uniqueNo: ++todosCount,
    isChecked: false
  };

  todoList.push(newTodo);
  createAndAppendTodo(newTodo);
  document.getElementById("todoUserInput").value = "";
};

const onTodoStatusChange = (checkboxId, labelId, todoId) => {
  document.getElementById(labelId).classList.toggle("checked");
  const index = todoList.findIndex(todo => `todo${todo.uniqueNo}` === todoId);
  todoList[index].isChecked = !todoList[index].isChecked;
};

const onDeleteTodo = (todoId) => {
  document.getElementById(todoId).remove();
  todoList = todoList.filter(todo => `todo${todo.uniqueNo}` !== todoId);
};

const createAndAppendTodo = ({ text, uniqueNo, isChecked }) => {
  const todoId = `todo${uniqueNo}`;
  const checkboxId = `checkbox${uniqueNo}`;
  const labelId = `label${uniqueNo}`;

  const li = document.createElement("li");
  li.className = "todo-item-container col-md-6";
  li.id = todoId;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = checkboxId;
  checkbox.className = "checkbox-input";
  checkbox.checked = isChecked;
  checkbox.onclick = () => onTodoStatusChange(checkboxId, labelId, todoId);

  const labelDiv = document.createElement("div");
  labelDiv.className = "label-container";

  const label = document.createElement("label");
  label.htmlFor = checkboxId;
  label.id = labelId;
  label.className = `checkbox-label${isChecked ? ' checked' : ''}`;
  label.textContent = text;

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "far fa-trash-alt delete-icon";
  deleteIcon.onclick = () => onDeleteTodo(todoId);

  labelDiv.append(label, deleteIcon);
  li.append(checkbox, labelDiv);
  todoItemsContainer.appendChild(li);
};

todoList.forEach(createAndAppendTodo);
addTodoButton.onclick = onAddTodo;
