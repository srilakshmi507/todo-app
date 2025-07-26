function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const taskList = document.getElementById("taskList");
  
      const li = document.createElement("li");
      li.innerText = taskText;
  
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "❌";
      deleteBtn.onclick = () => li.remove();
  
      li.appendChild(deleteBtn);
      taskList.appendChild(li);
  
      taskInput.value = "";
    }
  }
  