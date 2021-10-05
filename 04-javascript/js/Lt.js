document.querySelector("#push").onclick = function () {
  if (document.querySelector("#R input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#Ra").innerHTML += `
          <div class="Raa">
              <span id="taskname">
                ${document.querySelector("#R input").value}
              </span>
              <button class="delete">
              <i class="fas fa-trash"></i>
              </button>
          </div>
      `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    var tasks = document.querySelectorAll(".Raa");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    document.querySelector("#R input").value = "";
  }
};
