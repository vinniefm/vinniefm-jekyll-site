// [x]Prevent Add on empty task
// [x]Change "edit" label to "save" when in .editMode
// [x]Set focus to addTask text input on page load
// [x]Set focus to addTask text input after task added
// [x]Set focus, and select all, to editInput field when click on "edit"
// Keyboard friendly:
  // [ ]Enter key function on addTask
  // [ ]Enter key function on editInput
  // [ ]Tab key function on #new-task focus on addButton
  // [ ]Enter key function when addButton has focus (after Tab key interaciton above)





var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0]; // first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");

// New task list item
var createNewTaskElement = function(taskString) {
    var listItem = document.createElement("li");
    // input (checkbox)
    var checkBox = document.createElement("input");
    // label
    var label = document.createElement("label");
    // input (text)
    var editInput = document.createElement("input");
    // button.edit
    var editButton = document.createElement("button");
    // button.delete
    var deleteButton = document.createElement("button");
    
    // Each element needs modifying
    checkBox.type = "checkbox";
    editInput.type = "text";

    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    label.innerText = taskString;

    // Each element needs appending
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);  


    return listItem;


}

// Add new task
var addTask = function() {
  if(taskInput.value !== ""){
    console.log("Add task...");
  
      // Create new list item with text from #new-task:
      
      var listItem = createNewTaskElement(taskInput.value);
  
      // Append listItem to incompleteTasksHolder;
      incompleteTasksHolder.appendChild(listItem);
      bindTaskEvents(listItem, taskCompleted);
  
    taskInput.value = "";
    taskInput.focus();
  }
}


// Edit existing task
var editTask = function() {
  console.log("Edit task...");
  

  var listItem = this.parentNode;

  var editInput = listItem.querySelector("input[type=text]");
  var editButton = listItem.querySelector("button.edit")
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");

  // if parent has class .editMode
  if(containsClass) {
    // Switch from .editMode
    // Label text becomes input value
    label.innerText = editInput.value;
    editButton.innerText = "Edit";
  } else {
    // Switch to .editMode
    // input value becomes the label's text
    editInput.value = label.innerText;
    editButton.innerText = "Save";
    // setFocus;
  }
  // Toggle .editMode on the parent and set select() method on editInput when going into .editMode
  listItem.classList.toggle("editMode");
  if (!containsClass) {
    editInput.select();
  }
}


// Delete existing task
var deleteTask = function() {
  console.log("Delete task...");

  var listItem  = this.parentNode;
  var ul = listItem.parentNode;
  // Remove the parent list item from the ul
  ul.removeChild(listItem);

}


// Mark task as complete
var taskCompleted = function() {
  console.log("Task complete...");
  // Append task list item to the #completed-tasks
  var listItem = this.parentNode;
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}


// Mark task as incomplete
var taskIncomplete = function() {
  console.log("Task incomplete...");
  // Append task list item to the #completed-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
    
}


var bindTaskEvents = function(taskListItem, checkboxEventHandler){
  console.log("Bind list item events");
  // select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  // bind editTask to edit button
  editButton.onclick = editTask;
  
  
  // bind deleteTask to delete button
  deleteButton.onclick = deleteTask;

  // bind taskCompleted to checkbox
  checkBox.onchange = checkboxEventHandler;
}


// Set focus to #new-task on pageLoad
taskInput.focus();

// Set the click handler to the addTask function
// addButton.onclick = addTask;

addButton.addEventListener("click", addTask);



// Cycle over completeTaskHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
  // Bind events to list item's children (taskCompleted)
  bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
    
}


// Cycle over incompleteTaskHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
    // Bind events to list item's children (taskIncomplete)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}




