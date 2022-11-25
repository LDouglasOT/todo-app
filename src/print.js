
clearall=(index)=>{
  let data=JSON.parse(localStorage.getItem("deletetodo")) || []
  data=data.filter((element)=>element.completed !== true)
  localStorage.setItem("deletetodo",JSON.stringify(data))
}

falsify=(addliststodom,index,checked)=>{
  let data=JSON.parse(localStorage.getItem("deletetodo")) || []
            let datax=-1
            datax += parseInt(index)
            console.log(falsify)
            console.log(checked)
            data[datax].completed=!data[datax].completed
            console.log(data[datax])
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

module.exports={
  removeTask,
  addTask,
  falsify,
  clearall,
  sum
}