/** @jest-environment jsdom */
const {sum,addTask,removeTask,editTodo,addliststodom, clearall} = require('./print.js');
let localstore={}
describe('Test adding todo items to local storage', () => {
    beforeEach(()=>{
        localStorage.clear();
        jest.clearAllMocks();
        localStorage.setItem.mockClear();
        document.body.innerHTML = `
      <div class="to-do-list">
      </div>
    `;
    })

test("properly adds remove object from  local storage",()=>{
    localStorage.clear();
    const obj = {
        description: 'new todo item',
        index: 1,
        completed: false,
      };
      addTask(obj,[])
      addTask(obj,[...JSON.parse(localStorage.getItem('deletetodo'))])
      addTask(obj,[...JSON.parse(localStorage.getItem('deletetodo'))])
      const result = JSON.parse(localStorage.getItem('deletetodo'));
    
      expect(result).toHaveLength(3)
})

})



describe("delete items from todo",()=>{
    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
        localStorage.setItem.mockClear();
        document.body.innerHTML = `
        <div class="to-do-list">
        </div>
      `;
      });
    test("delete items from local storage",()=>{
        const obj = {
            description: 'new todo item',
            index: 1,
            completed: false,
          };
    
        const obj2 = {
            description: 'new todo item',
            index: 2,
            completed: false,
        };
        const data=[obj,obj2]
        window.localStorage.setItem("deletetodos",JSON.stringify(data))
        removeTask(obj.index)
        const results = JSON.parse(localStorage.getItem("deletetodos"))
        expect(results).toHaveLength(2)

    })
})


describe("edit todo test",()=>{
  beforeEach(()=>{
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
    document.body.innerHTML = `
  <div class="to-do-list">
  </div>
`;
})
test("Editing function test",()=>{
  const obj = {
    description: 'new todo item',
    index: 1,
    completed: false,
  };

  const obj2 = {
    description: 'new todo item',
    index: 2,
    completed: false,
  };
  const obj3 = {
    description: 'new todo item',
    index: 3,
    completed: false,
  };
  const data=[obj,obj2,obj3]
  localStorage.setItem("deletetodo",JSON.stringify(data))

  editTodo(3,"edited")      
  const results = JSON.parse(localStorage.getItem("deletetodo"))
  console.log(results)
  let result=results.filter((Element)=>Element.index==3)  
  expect(result[0].description).toBe("edited")   
})

test("Changing completed status",()=>{
  const obj = {
    description: 'new todo item',
    index: 1,
    completed: false,
  };

  const obj2 = {
    description: 'new todo item',
    index: 2,
    completed: false,
  };
  const obj3 = {
    description: 'new todo item',
    index: 3,
    completed: false,
  };
  const data=[obj,obj2,obj3]
  localStorage.setItem("deletetodo",JSON.stringify(data))

  editTodo(3,"edited")      
  const results = JSON.parse(localStorage.getItem("deletetodo"))
  console.log(results)
  let result=results.filter((Element)=>Element.index==3)  
  expect(result[0].description).toBe("edited")   
})
})

describe("Change completed status",()=>{
beforeEach(()=>{
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
    document.body.innerHTML = `
  <div class="to-do-list">
  </div>
`;
})

  test("Editing function test",()=>{
    const obj = {
      description: 'new todo item',
      index: 1,
      completed: false,
    };
  
    const obj2 = {
      description: 'new todo item',
      index: 2,
      completed: false,
    };
    const obj3 = {
      description: 'new todo item',
      index: 3,
      completed: false,
    };
    const caller = () => {
      return false
    }
    const data=[obj,obj2,obj3]
    localStorage.setItem("deletetodo",JSON.stringify(data))
    
    falsify(caller,3,true)      
    const results = JSON.parse(localStorage.getItem("deletetodo"))
    console.log(results)
    let result=results.filter((Element)=>Element.index==3)  
    expect(result[0].completed).toBeTruthy()   
  })
})

describe("clear tasks with the completed status",()=>{
  beforeEach(()=>{
      localStorage.clear();
      jest.clearAllMocks();
      localStorage.setItem.mockClear();
      document.body.innerHTML = `
    <div class="to-do-list">
    </div>
  `;
  })
  test("Editing function test",()=>{
    const obj = {
      description: 'new todo item',
      index: 1,
      completed: false,
    };
  
    const obj2 = {
      description: 'new todo item',
      index: 2,
      completed: true,
    };
    const obj3 = {
      description: 'new todo item',
      index: 3,
      completed: false,
    };
    const obj4 = {
      description: 'new todo item',
      index: 3,
      completed: true,
    };
    const obj5 = {
      description: 'new todo item',
      index: 3,
      completed: false,
    };
    const obj6 = {
      description: 'new todo item',
      index: 3,
      completed: true,
    };
    const obj7 = {
      description: 'new todo item',
      index: 3,
      completed: false,
    };
    const obj8 = {
      description: 'new todo item',
      index: 3,
      completed: false,
    };
    const obj9 = {
      description: 'new todo item',
      index: 3,
      completed: true,
    };
    const obj10 = {
      description: 'new todo item',
      index: 3,
      completed: false,
    };
    const data=[obj,obj2,obj3,obj4,obj5,obj6,obj7,obj8,obj9,obj10]
    localStorage.setItem("deletetodo",JSON.stringify(data))
    clearall()
    const results = JSON.parse(localStorage.getItem("deletetodo"))
    let datax=results.filter((element)=>element.completed == true)
    falsy=false
    if(datax.length > 0){
      falsy=!falsy
    }
    expect(falsy).toBeFalsy()

}) 

}) 