
const {sum,addTask} = require('./print.js');
describe('Add new todo task', () => {

test("properly adds objects to local storage",()=>{
localStorage.clear();
const obj = {
    description: 'new todo item',
    index: 1,
    completed: false,
  };
  Utility.addTask(obj,[])
  const result = JSON.parse(window.localStorage.getItem('deletetodo'));

  expect(result.length).toBe(1)
})

})