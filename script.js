// Função para permitir o evento de arrastar
function allowDrop(ev) {
    ev.preventDefault();
  }
  
  // Função para iniciar o arraste
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  // Função para fazer o drop da tarefa em uma nova coluna
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var task = document.getElementById(data);
    ev.target.appendChild(task);
  }
  
  // Função para adicionar uma nova tarefa
  function addTask(column) {
    const taskInput = document.getElementById(`new-task-${column}`);
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const taskDiv = document.createElement("div");
      taskDiv.classList.add("task");
      taskDiv.setAttribute("draggable", "true");
      taskDiv.setAttribute("ondragstart", "drag(event)");
      taskDiv.id = `task-${Date.now()}`;
  
      const taskContent = document.createTextNode(taskText);
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Remover";
      deleteButton.classList.add("remove-button");
      deleteButton.onclick = () => removeTask(taskDiv);
  
      taskDiv.appendChild(taskContent);
      taskDiv.appendChild(deleteButton);
  
      const taskContainer = document.getElementById(`${column}-tasks`);
      taskContainer.appendChild(taskDiv);
  
      taskInput.value = ""; // Limpa o campo de input após adicionar
    } else {
      alert("Por favor, insira uma tarefa!");
    }
  }
  
  // Função para remover uma tarefa
  function removeTask(taskElement) {
    taskElement.remove();
  }
  