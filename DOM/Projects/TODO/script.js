

//!-----------------------------------------------------CLASS WAY--------------------------------------


// const inp = document.querySelector("input");
// const btn = document.querySelector("#add");
// const todoBox = document.querySelector(".todo-list");

// btn.addEventListener("click", () => {
//   const value = inp.value;
//   if (value.trim() === "") return;
//   todoBox.innerHTML += ` <div class="li">
//                 <h3>${value}</h3>
//                 <div>
//                     <button class="btn edit">Edit</button>
//                     <button class="btn del">Delete</button>
//                 </div>
//             </div>`;

//    inp.value = "";

// });



//!-----------------------------------------------------CREATELEMENT WAY--------------------------------------


//make this via createelement
//complete edit and delete function

const inp = document.querySelector("input");
const btn = document.querySelector("#add");
const todoBox = document.querySelector(".todo-list");

btn.addEventListener("click", () => {
  const value = inp.value.trim();
  if (value === "") return;

  // 1. Create the main wrapper container
  const todoItem = document.createElement("div");
  todoItem.className = "li";

  // 2. Create the heading to hold the text
  const h3 = document.createElement("h3");
  h3.textContent = value;

  // 3. Create the button container
  const btnContainer = document.createElement("div");

  // 4. Create the Edit Button
  const editBtn = document.createElement("button");
  editBtn.className = "btn edit";
  editBtn.textContent = "Edit";

  // 5. Create the Delete Button
  const delBtn = document.createElement("button");
  delBtn.className = "btn del";
  delBtn.textContent = "Delete";

  // --- FUNCTIONALITY ---

  // Delete Function
  delBtn.addEventListener("click", () => {
    todoItem.remove(); // Simply removes this specific item from the DOM
  });

  // Edit Function
  editBtn.addEventListener("click", () => {
    // Prompt the user for the new text, defaulting to the current text
    const newValue = prompt("Edit your task:", h3.textContent);
    
    // If the user didn't cancel and didn't leave it empty, update it
    if (newValue !== null && newValue.trim() !== "") {
      h3.textContent = newValue.trim();
    }
  });

  // --- ASSEMBLING THE DOM TREE ---
  btnContainer.appendChild(editBtn);
  btnContainer.appendChild(delBtn);

  todoItem.appendChild(h3);
  todoItem.appendChild(btnContainer);

  // Append the fully built todo item to the main list
  todoBox.appendChild(todoItem);

  // Clear the input field
  inp.value = "";
});