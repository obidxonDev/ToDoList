 const TASK_INPUT = document.querySelector("#task_input");
 const TASK_FORM = document.querySelector(".todolist_form");
 const DELETE_FEED = document.querySelector(".delete");
 const permission = document.querySelector(".delete_permission");
 const COLLECTION = document.querySelector(".collection");
 const CLEA_ICON = document.querySelector("#clear_input");
 const DELETE   = document.querySelector(".yes");
 const noBtn = document.querySelector(".no")
 const SearchInput = document.querySelector('#search')


TASK_FORM.addEventListener('submit', createTask);

function createTask(e){
    e.preventDefault();
    let list = document.createElement("li");
    let listText = document.createElement("p");
    let div = document.createElement("div");
    
    listText.innerHTML = TASK_INPUT.value;
    list.appendChild(listText);
    COLLECTION.appendChild(list);
    list.className = "reminder";
    list.appendChild(div);
    TASK_INPUT.value = '';

    let trash = document.createElement("i");
    let edit = document.createElement("i");
    let completed = document.createElement("i");
    
    trash.className = "fas fa-trash";
    edit.className = "fas fa-edit";
    completed.className = "fas fa-check";    

    div.appendChild(edit);
    div.appendChild(completed);
    div.appendChild(trash);


    completed.addEventListener('click', () => {
        listText.classList.toggle("checked");
        if(listText.classList.contains("checked")){
            list.style.backgroundColor = "green";
            checked.style.color = "#fff";
        }
        else{
            list.style.backgroundColor = "#fff";
            checked.style.color = "#000";
        }
    })



    trash.addEventListener('click', (e) => {
        // 1 method NOT recomended
        // list.remove()

        // 2 method RECOMMNEDED
        e.target.parentElement.parentElement.remove()
    });

    edit.addEventListener('click', () => {
        if(listText.hasAttribute('contenteditable')){
            listText.removeAttribute('contenteditable');
            listText.classList.remove("active_edit");
        }
        else{
            listText.setAttribute('contenteditable', true);
            listText.classList.add("active_edit");
        }

    })
    




}

CLEA_ICON.addEventListener('click', () => {
    TASK_INPUT.value = '';
    TASK_INPUT.focus();
})


DELETE.addEventListener('click', () => {
    COLLECTION.innerHTML = '';
})

noBtn.addEventListener('click', () => {
    permission.style.display = "none";
})
DELETE.addEventListener('click', () => {
    permission.style.display = "none";
})


DELETE_FEED.addEventListener('click', deleteTask);

function deleteTask() {
    if(permission.classList.contains("display")){
        permission.classList.remove("display");
        permission.style.display = "none"
    }
    else{
        permission.classList.add("display");
        permission.style.display = "block"
    }
}

SearchInput.addEventListener('keyup', searchTasks); 
 
function searchTasks(){ 
    let searchedWord = SearchInput.value.toLowerCase(); 
    let lis = document.querySelectorAll('.reminder') 
    lis.forEach(item => { 
        if(item.firstChild.textContent.indexOf(searchedWord) !== -1){ 
            item.style.display = "flex" 
        }
        else{   
            item.style.display = "none" 
        } 
    }) 
}
