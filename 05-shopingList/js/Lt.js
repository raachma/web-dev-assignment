const inputItem = document.getElementById("label");
const btnAddItem = document.getElementById("push");
const listContainer = document.querySelector(".list");
const database = new Map();

btnAddItem.addEventListener("click", () => {
  const ITEM_KEY = inputItem.value.toUpperCase();
  const ITEM_VALUE = inputItem.value;

  // NOTE: Create element
  const listItem = document.createElement("li");
  const textItem = document.createElement("p");
  const btnDelete = document.createElement("button");
  const counter = document.createElement("button");
  var numR = 1;
  btnDelete.classList = "fas fa-trash Raa";
  counter.classList = "cntr-btn";
  textItem.classList = "Raa button";

  // WARN: Handle error, empty input
  if (ITEM_VALUE === "") {
    alert("Silakan Ketik Sesuatu");
    inputItem.focus();
    return;
  }
  // WARN: Check for duplication
  if (database.has(ITEM_KEY)) {
    const duplicateConfirm = confirm("Sudah memiliki   " + ITEM_VALUE + "   Ingin menambahkannya?");
    const getCounter = document.getElementById(ITEM_KEY);
    numR = Number(getCounter.textContent);
    getCounter.textContent = numR + 1;
    inputItem.value = "";
    inputItem.focus();
    return;
  }
  //counter
  counter.textContent = numR;
  counter.setAttribute("id", ITEM_KEY);

  // NOTE: Add the new item to database
  database.set(ITEM_KEY, ITEM_VALUE);

  // NOTE: Add attribute
  listItem.classList.add("list-item"); // NOTE: Add Class

  // NOTE: Add value
  textItem.textContent = ITEM_VALUE;

  // NOTE: Combine elements
  listItem.textContent = ITEM_VALUE;
  listItem.append(btnDelete, counter);
  listContainer.appendChild(listItem);

  // NOTE: Handle click event for delete button
  btnDelete.addEventListener("click", () => {
    let conf = confirm("Yakin ingin menghapusnya?");
    if (conf) {
      let getCounter = document.getElementById(ITEM_KEY);
      if (getCounter.textContent === "1") {
        listContainer.removeChild(listItem);
      } else {
        numR = Number(getCounter.textContent);
        getCounter.textContent = numR - 1;
      }
    }
  });
  inputItem.value = "";
  inputItem.focus();
});

// const inputItem = document.getElementById("label");
// const database = new Map();
// document.querySelector("#push").onclick = function () {
//   const ITEM_KEY = inputItem.value.toUpperCase();
//   const ITEM_VALUE = inputItem.value;
//   if (document.querySelector("#R input").value.length == 0) {
//     alert("Silakan Ketik Sesuatu");
// } else {
//   document.querySelector("#Ra").innerHTML += `
//         <div class="Raa">
//             <span id="taskname">
//               ${document.querySelector("#R input").value}
//             </span>
//             <button class="delete">
//             <i class="fas fa-trash"></i>
//             </button>
//         </div>
//     `;

//     var current_tasks = document.querySelectorAll(".delete");
//     for (var i = 0; i < current_tasks.length; i++) {
//       current_tasks[i].onclick = function () {
//         var konfirmasi = confirm("Yakin ingin menghapusnya?");
//         if (konfirmasi == true) this.parentNode.remove();
//       };
//     }

//     var tasks = document.querySelectorAll(".Raa");
//     for (var i = 0; i < tasks.length; i++) {
//       tasks[i].onclick = function () {
//         this.classList.toggle("completed");
//       };
//     }
//     document.querySelector("#R input").value = "";
//   }
//   if (database.has(ITEM_KEY)) {
//     inputItem.value = "";
//     inputItem.focus();
//     return;
//   }
// };
