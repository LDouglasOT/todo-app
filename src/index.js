import _ from 'lodash';
import './style.css';
import printMe from './print.js';
window.onload=()=>{
let cleandata=[];
const ul=document.createElement('ul')

class todo {
    constructor(index, description, completed) {
      this.index = index;
      this.description = description;
      this.completed = completed;
    }
  }


const addliststodom=()=>{ 
ul.innerHTML = ""
cleandata=JSON.parse(localStorage.getItem('deletetodo')) || []
cleandata.forEach((item)=>{
   ul.innerHTML +=`
   <div class="delete">
   <div class="flexer"><input type="checkbox" class="check"/><h5>${item.description}</h5></div>
   <h6 class="deletetodo" data-id=${item.index} type="button">del</h6>
   </div>
   `
})

const item=document.querySelector(".htmls")
item.appendChild(ul)
const deletebtn=document.querySelectorAll('.deletetodo')
console.log("engage")
deletebtn.forEach((item) => {
  item.addEventListener("click", () =>{
    console.log(item.getAttribute("data-id"))
    let data=JSON.parse(localStorage.getItem("deletetodo")) || []
    data.pop(item.getAttribute("data-id"))
    localStorage.setItem("deletetodo",JSON.stringify(data))
    // cleandata.filter(element=>element.index==item.getAttribute("data-id"))
    
    cleandata=[...data]
    
  })
})


}
addliststodom()

const setitems=()=>{
  addliststodom()
  
}


const addtodo=document.querySelector(".enter")
addtodo.addEventListener("keypress",(event)=>{
    // let lenghts=deleteitem.length
    if (event.key === "Enter") {
       let data=JSON.parse(localStorage.getItem("deletetodo")) || []
       let cleandata=data
       let todos=new todo(1,"hello world",false)
       cleandata.push(todos)
       console.log(...cleandata)
       localStorage.setItem("deletetodo",JSON.stringify(cleandata))
       ul.innerHTML = ""
       addliststodom()
}})}