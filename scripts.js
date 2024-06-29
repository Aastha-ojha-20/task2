function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    var dueDate = document.getElementById("dueDate").value;
    var priority = document.getElementById("priority").value;
    var category = document.getElementById("category").value;

    if (taskText !== "") {
        createTaskElement(taskText, dueDate, priority, category);
        taskInput.value = "";
        document.getElementById("dueDate").value = "";
        document.getElementById("priority").value = "Medium";
        document.getElementById("category").value = "Work";
    }
}

function createTaskElement(taskText, dueDate, priority, category) {
    var taskList = document.getElementById("taskList");

    var taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    var taskInfoDiv = document.createElement("div");
    taskInfoDiv.classList.add("task-info");

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    var taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    var dueDateSpan = document.createElement("span");
    dueDateSpan.textContent = dueDate;

    var prioritySpan = document.createElement("span");
    prioritySpan.textContent = priority;
    prioritySpan.classList.add("priority");
    prioritySpan.classList.add(priority.toLowerCase());

    var categorySpan = document.createElement("span");
    categorySpan.textContent = category;

    taskInfoDiv.appendChild(checkbox);
    taskInfoDiv.appendChild(taskSpan);
    taskInfoDiv.appendChild(dueDateSpan);
    taskInfoDiv.appendChild(prioritySpan);
    taskInfoDiv.appendChild(categorySpan);

    var buttonsDiv = document.createElement("div");

    var completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.classList.add("complete");
    completeButton.onclick = function() {
        taskSpan.style.textDecoration = "line-through";
        taskDiv.style.backgroundColor = "#f0f0f0";
    };

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
        taskList.removeChild(taskDiv);
    };

    buttonsDiv.appendChild(completeButton);
    buttonsDiv.appendChild(deleteButton);

    taskDiv.appendChild(taskInfoDiv);
    taskDiv.appendChild(buttonsDiv);

    taskList.appendChild(taskDiv);
}
