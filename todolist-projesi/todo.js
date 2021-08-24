//tüm lementlerı sectım.
 const form = document.querySelector("#todo-form");
 const todoInput= document.querySelector("#todo");
 const todoList = document.querySelector(".list-group");
 const firstCardBody= document.querySelectorAll(".card-body")[0];
 const secondCardBody=document.querySelectorAll( ".card-body")[1];
 const filter =document.querySelector("#filter");
 const clearButton = document.querySelector("#clear-todos");

 eventListeners();

function eventListeners(){ //tüm event listenerlar burda olcak.
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllTodosToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    clearButton.addEventListener("click",clearAllTodos);


function clearAllTodos(e){
    if (confirm("tümünü silmek istediğinizden emin misiniz?")){
        //arayuz todoları temızleme
        todoList.innerHTML = "";
    }

}



function deleteTodo(e){
     if (e.target.className === "list-group-item d-flex justify-content-between"){
        e.target.parentElement.parentElement.remove();
         showAlert("success","Todo başarıyla silindi ...");
      
   }

}


function loadAllTodosToUI(){
let todos = getTodosFromStorage();
todos.forEach(function(todo) {
    addTodoToUI(todo);
});

}


}
function addTodo(e){

   const newTodo = todoInput.value.trim();

   if (newTodo === ""){
       showAlert("danger","lütfen bir todo girin...");
   }
   else{
    addTodoToUI(newTodo);

    addTodoToStorage(newTodo);
    showAlert( "success"," Todo başarıyla eklendi...");

   }



    e.preventDefault(); //sayfa yenilenmesı ıcın default atadım.
}
function getTodosFromStorage(){    //direkt storageden butun todoları al fonk
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];

    }
    else{
        todos =JSON.parse(localStorage.getItem("todos"));
    }
    return todos;

}

function addTodoToStorage(newTodo){

    let todos= getTodosFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));  //güncellendı


} 



function showAlert(type,message){
    const alert =document.createElement("div");
    alert.className=`alert alert-${type}`;
    alert.textContent =message;

    firstCardBody.appendChild(alert); //çoçugu olrk eklednı


    //ekranda sılınısn

    setTimeout(function(){
        alert.remove();
    },1000)};

 

function addTodoToUI(newTodo){ //strıng degerını list-item olrak uı ye ekledım.

    //list-item oluşturma

const listItem=document.createElement("li");
const link = document.createElement("a");
link.href ="#"
link.className = "delete-item";
link.innerHTML = "<i class = 'fa-fa-remove'></li>";

listItem.className ="list-group-item d-felx justify-content-between";

//text node ekleme */
listItem.appendChild(document.createTextNode(newTodo));
listItem.appendChild(link);


todoList.appendChild(listItem);




}









