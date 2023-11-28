// const firstMember={
//     name:'ms',
//     age:22,
//     addres:{
//         city:'lal',
//         country:'bd'
//     },
//     draw:function(a,b){
//         return a+b;
//     }
// }
// console.log(firstMember)


const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');
console.log(inputBox,listContainer);
function addTask(){
    if(inputBox.value===''){
        alert("You must add your task")
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}


listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();

    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
};

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");

}

showTask();