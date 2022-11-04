import _ from 'lodash';
import './style.css';
import printMe from './print.js';
const data=[
    {
       description:"Todo listings",
       "completed":true,
       "index":1
    },
    {
        description:"Todo listings",
        "completed":true,
        "index":1
     },
     {
        description:"Todo listings",
        "completed":true,
        "index":1
     },
]

const ul=document.createElement('ul')
const div=document.createElement('div')
div.innerHTML=`<h3 class="today">Today's todo</h3>`
ul.appendChild(div)
const input=document.createElement('div')
input.innerHTML=`<input type="text" class="textinput" placeholder="Enter something" />`
ul.appendChild(input)

const addliststodom=()=>{ 

data.map((item)=>{
   const li=document.createElement('li')
   li.innerHTML = `<div class="flexerere"><div class="flexer"><input type="checkbox" class="check"/><h5>${item.description}</h5> </div><button class="btn">del</button></div>`

ul.append(li)
})
const item=document.querySelector(".container")
item.appendChild(ul)
}

addliststodom()
// const divx=document.createElement('div')
// divx.innerHTML=`<button class="complete">Clear all Completed</button>`
// ul.appendChild(divx)

const deletebtn=document.querySelectorAll(".btn")

deletebtn.forEach((item)=>{
   item.addEventListener("click",()=>{
      item.parentElement.remove()
   })
})

const checkbox=document.querySelectorAll(".check")
const btns=document.querySelector(".complete")


// checkbox.forEach((item)=>{
// btns.addEventListener("click",()=>{
//       item.addEventListener('click',()=>{
//          if(item.checked){
//             console.log(item)
//             item.parentElement.remove()
//          }
//       })
//    })
// })

const entered=document.querySelector(".today")
entered.addEventListener('click',()=>{
  const values=document.querySelector(".textinput").value
  if(values !==""){
   const li=document.createElement('li')
   li.innerHTML = `<div class="flexerere"><div class="flexer"><input type="checkbox" class="check"/><h5>${values}</h5> </div><button class="btn">del</button></div>`
   ul.appendChild(li)
  }
})
