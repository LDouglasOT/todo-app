import _ from 'lodash';
import './style.css';
import { removeTask,addTask,falsify,clearall,editTodo} from './print.js';
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
   <div class="flexer"><input type="checkbox" ${item.completed ? "checked":""} data-id=${item.index} class="check"/><div class="editcontainer"><h5 class="edithx" id='${item.completed ? "striked":"notstriked"}' data-id=${item.index}>${item.description}</h5></div></div>
   <h6 class="deletetodo" data-id=${item.index} type="button"><img src="https://img.icons8.com/material-rounded/18/ff0000/delete-forever.png"/></h6>
   </div>
   `
})

const item=document.querySelector(".htmls")
item.appendChild(ul)
const deletebtn=document.querySelectorAll('.deletetodo')
console.log("engage")
deletebtn.forEach((item) => {
  item.addEventListener("click", () =>{
    removeTask(item.getAttribute("data-id"))
    addliststodom()
  })

})

const checkmark=document.querySelectorAll('.check')
const completed=document.querySelector('.completed')
completed.addEventListener('click',()=>{
    clearall()
   addliststodom()    
})
const checks=document.querySelectorAll(".check")
checks.forEach((item)=>{
item.addEventListener('change',()=>{
  falsify(addliststodom,parseInt(item.getAttribute('data-id')),item.checked)
})
})

const edithx=document.querySelectorAll(".edithx") 
edithx.forEach((item)=>{ 
   item.addEventListener('click',()=>{
      const div=document.createElement("div")
      const input =document.createElement("input")
      console.log(item.innerHTML)
      input.setAttribute('value',item.innerHTML)
      input.className="modified"
      input.setAttribute("data-id",Number(item.getAttribute("data-id")))
      item.style.display='none'
      div.appendChild(input)
      item.parentElement.appendChild(div)
      const inputelement=document.querySelector(".modified")
      inputelement.addEventListener("keypress",(event)=>{
         if (event.key === "Enter") {
            if(inputelement.value==""){
              addliststodom()
              return
            }
            console.log(inputelement.getAttribute("data-id"))
            editTodo(inputelement.getAttribute("data-id"),inputelement.value)
            addliststodom()

}})})})}

addliststodom()

const addtodo=document.querySelector(".enter")
addtodo.addEventListener("keypress",(event)=>{
    if (event.key === "Enter") {
      if(addtodo.value==""){
        return
      }
      let target=1
      let data=JSON.parse(localStorage.getItem("deletetodo")) || []
      let cleandata=data
      target +=cleandata.length
      let todos=new todo(target,addtodo.value,false)
      addTask(todos,cleandata)
      addliststodom()
}})
}


