// Array to store all tasks
let tasks = [];


// Function to add a new task
function addTask() {
 // Get task name and date from input fields
 const name = document.querySelector(".name").value;
 const date = document.querySelector(".date").value;


 // Check if inputs are not empty
 if (name === "" || date === "") {
   alert("Please fill out both fields!");
   return;
 }


 // Add task to the tasks array
 tasks.push({ name: name, date: date });


 // Clear the input fields
 document.querySelector(".name").value = "";
 document.querySelector(".date").value = "";


 // Update the task list display
 renderTasks();
}


// Function to display the list of tasks
function renderTasks() {
 // Get the task list container
 const listContainer = document.querySelector(".list");
 listContainer.innerHTML = ""; // Clear the current list


 // Loop through the tasks array and display each task
 tasks.map((task, index) => {
   // Create a div for the task
   const taskDiv = document.createElement("div");
   taskDiv.classList.add("task");


   // Display task details
   taskDiv.innerHTML = `
     <p>${task.name} (${task.date})</p>
     <button class="delete-button" onclick="deleteTask(${index})">Delete</button>


   `;


   // Add the task div to the list container
   listContainer.appendChild(taskDiv);
 });
}


// Function to delete a task
function deleteTask(index) {
 // Remove the task from the tasks array
 tasks.splice(index, 1);
 // Update the task list display
 renderTasks();
}






