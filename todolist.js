<!DOCTYPE html>
<html>
<head>
  <title>My To-Do List</title>

  <style>
    body {
      font-family: Arial;
      text-align: center;
      background-color: #f0f8ff;
    }

    h2 {
      margin-top: 20px;
    }

    input {
      padding: 8px;
      width: 200px;
    }

    button {
      padding: 8px;
      margin-left: 5px;
      cursor: pointer;
    }

    li {
      margin: 10px;
      list-style: none;
    }
  </style>

</head>

<body>

  <h2>My To-Do List</h2>

  <input type="text" id="taskInput" placeholder="Enter task">
  <button onclick="addTask()">Add</button>

  <ul id="taskList"></ul>

  <script>
    function addTask() {
      let input = document.getElementById("taskInput");
      let task = input.value;

      if (task === "") {
        alert("Please enter a task");
        return;
      }

      let li = document.createElement("li");
      li.innerText = task;

      // Mark as complete
      li.onclick = function () {
        li.style.textDecoration = "line-through";
      };

      // Delete button
      let btn = document.createElement("button");
      btn.innerText = "Delete";

      btn.onclick = function () {
        li.remove();
      };

      li.appendChild(btn);

      document.getElementById("taskList").appendChild(li);

      input.value = "";
    }
  </script>

</body>
</html>
