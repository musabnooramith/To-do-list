
const Input = document.getElementById("search");
const listContainer = document.getElementById("list-wrapper")

function addTasks(){
    if(Input.value === ""){
        alert("write something!");
    }else{
        let li = document.createElement("li");
        li.innerHTML =Input.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        li.appendChild(span);
        span.innerHTML = "\u00d7";
    }
    Input.value = "";
    savedata();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }else if(e.target.tagName ==="SPAN"){
         e.target.parentElement.remove();
         savedata();
    }
},false)

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function displaydata(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displaydata();