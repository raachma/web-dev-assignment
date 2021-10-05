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
// // mengambil element html
// const inputItem = document.getElementById("input-item");
// const btnAddItem = document.getElementById("btn-add-item");
// const listContainer = document.querySelector(".list");

// btpAddItem.addEventListener("clik", (Event) => {
//   const item = inputItem.value;

//   // membuat element
//   const listItem = document.createElement("li");
//   const textItem = document.createElement("p");
//   const btnDelete = document.createEvent("button");

//   // handle error
//   if (item == "") {
//     alert("Item name can't be blank");
//     inputItem.focus();
//     return;
//   }
//   // add attribute
//   listItem.classList.add("list-item"); // add class
//   btnDelete.textCotent = "Delete"; //add value
//   textItem.textContent = item;

//   // combine elements
//   listItem.append(textItem, btnDelete);
//   listContainer.appendChild(listItem);

//   // handle delete
//   btnDelete.addEventListener("click", () => {
//     listContainer.removeChild(listItem);
//   });

//   inputItem.value = "";
//   inputItem.focus();
// });
