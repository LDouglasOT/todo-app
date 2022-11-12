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
   <div class="flexer"><input type="checkbox" data-id=${item.index} class="check"/><div class="editcontainer"><h5 class="edithx" data-id=${item.index}>${item.description}</h5></div></div>
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
    let data=JSON.parse(localStorage.getItem("deletetodo")) || []
    data=data.filter((element)=>element.index !== Number(item.getAttribute("data-id")))
    console.log(data)
    let i = 1;
    data.forEach((todo) => {
      todo.index = i;
      console.log(todo.index)
      i += 1;
    });
    localStorage.setItem("deletetodo",JSON.stringify(data)) 
    addliststodom()
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
            let data=JSON.parse(localStorage.getItem("deletetodo")) || []
            let datax=-1
            datax += parseInt(inputelement.getAttribute("data-id"))
            console.log(inputelement.value)
            data[datax].description=inputelement.value
            console.log(data[datax])
            localStorage.setItem("deletetodo",JSON.stringify(data))
            addliststodom()

}})})})
}

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
       console.log(target)
       let todos=new todo(target,addtodo.value,false)
       cleandata.push(todos)
       localStorage.setItem("deletetodo",JSON.stringify(cleandata))
       addliststodom()
}})}