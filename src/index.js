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
div.innerHTML=`<h3>Today's todo</h3>`
ul.appendChild(div)
const input=document.createElement('div')
input.innerHTML=`<input type="text" class="enter" placeholder="Enter something" />`
ul.appendChild(input)

const addliststodom=()=>{ 

data.map((item)=>{
   const li=document.createElement('li')
   li.innerHTML=`<div class="flexer"><input type="checkbox" class="check"/><h5>${item.description}</h5></div>`

ul.append(li)
})
const item=document.querySelector(".container")
item.appendChild(ul)
}

addliststodom()
const divx=document.createElement('div')
divx.innerHTML=`<button>Clear all Completed</button>`
ul.appendChild(divx)
//  function component() {
//    const element = document.createElement('div');
//    return element;
//  }

//  document.body.appendChild(component());