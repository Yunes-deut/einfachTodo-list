


window.addEventListener("load", () => {
   
  const form = document.querySelector("form");
  const addInput = document.querySelector(".addInput");
  const btnAddLlist = document.querySelector(".btnAddLlist");
  const tasks = document.querySelector(".tasks");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = addInput.value;
    if (!task) {
      alert("geben sie bette etwas ein");
      return;
    }

    // creation de l'element div
    const div = document.createElement("div");
    div.setAttribute("class", "task1");
    // creation de l'element input
    const inputtext = document.createElement("input");
    inputtext.setAttribute("class", "taskInput");
    inputtext.setAttribute("type", "text");
    inputtext.setAttribute("readonly", "readonly");
    inputtext.setAttribute('maxlength',"60")
    inputtext.value = task;
    div.appendChild(inputtext);
    // creation de l'element button edit
    const btntaskEdit = document.createElement("button");
    btntaskEdit.setAttribute("class", "btntaskEdit");
    btntaskEdit.innerText = "Edit";
    div.appendChild(btntaskEdit);
    // creation de l'element button delet
    const btntaskDelet = document.createElement("button");
    btntaskDelet.setAttribute("class", "btntaskDelet");
    btntaskDelet.innerText = "Delet";
    div.appendChild(btntaskDelet);

    tasks.appendChild(div);
    addInput.value="";
    
    let counter=0;
    btntaskEdit.addEventListener('click',()=>{
        counter++;
        if(counter %2!=0){
            inputtext.removeAttribute("readonly", "readonly")
            inputtext.focus();
            btntaskEdit.innerText="Save"
           
        }
        else{
            inputtext.setAttribute("readonly", "readonly");
            btntaskEdit.innerText="Edit"
        }
    })
    btntaskDelet.addEventListener('click',()=>{
        tasks.removeChild(div);
    })
  });
  
});

