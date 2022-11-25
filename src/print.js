
clearall=()=>{
  let data=JSON.parse(localStorage.getItem("deletetodo")) || []
  data=data.filter((element)=>element.completed !== true)
  localStorage.setItem("deletetodo",JSON.stringify(data))
}

falsify=(addliststodom,index,checked)=>{
  let data=JSON.parse(localStorage.getItem("deletetodo")) || []
            let datax=-1
            datax += parseInt(index)
            data[datax].completed=!data[datax].completed
            localStorage.setItem("deletetodo",JSON.stringify(data))
            addliststodom()
}

addTask=(todos,data)=>{
  data.push(todos)
  localStorage.setItem("deletetodo",JSON.stringify(data))
}

removeTask=(id)=>{
  let data=JSON.parse(localStorage.getItem("deletetodo")) || []
    data=data.filter((element)=>element.index !== Number(id))
    let i = 1;
    data.forEach((todo) => {
      todo.index = i;
      i += 1;
    });
    localStorage.setItem("deletetodo",JSON.stringify(data)) 
    
}


sum=(c,y)=>{
  return c+y
}
editTodo=(id,value)=>{
  let data=JSON.parse(localStorage.getItem("deletetodo")) || []
  let datax=-1
  datax += parseInt(id)
  data[datax].description=value
  console.log(data[datax].index)
  localStorage.setItem("deletetodo",JSON.stringify(data))
}


module.exports={
  removeTask,
  addTask,
  falsify,
  clearall,
  editTodo,
  sum,
}