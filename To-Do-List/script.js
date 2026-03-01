let input = document.getElementById("taskInput");
      let taskList = document.getElementById("taskList");

      function addTask() {
        let taskText = input.value.trim();

        if (taskText === "") {
          alert("Please enter a task!");
          return;
        }

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.innerText = taskText;

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function () {
          li.remove();
        });

        li.addEventListener("click", function () {
          li.classList.toggle("completed");
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        input.value = "";
      }

      // Add task on Enter key
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          addTask();
        }
      });