/** @jest-environment jsdom */
const {sum,addTask,removeTask} = require('./print.js');
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



describe("delete items from tod",()=>{
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
        console.log(results)
        expect(results).toHaveLength(2)

    })
})