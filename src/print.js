export default function printMe() {
    console.log('I get called from print.js!');
}
export const clearall=(index)=>{
  let data=JSON.parse(localStorage.getItem("deletetodo")) || []
  data=data.filter((element)=>element.completed !== true)

  localStorage.setItem("deletetodo",JSON.stringify(data))
}


export const falsify=(addliststodom,index)=>{
  let data=JSON.parse(localStorage.getItem("deletetodo")) || []
            let datax=-1
            datax += parseInt(index)
            console.log(falsify)
            data[datax].completed=true
            console.log(data[datax])
            localStorage.setItem("deletetodo",JSON.stringify(data))
            addliststodom()
}