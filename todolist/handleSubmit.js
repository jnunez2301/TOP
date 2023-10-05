import { addTask, getTasks } from "./taskHelper";

export const handleSubmit = (element)=>{
  element.addEventListener('submit', (event) =>{
    event.preventDefault()
    
    const title = document.querySelector('#todoTitle').value;
    const description = document.querySelector('#todoDescription').value;
    const dueDate = new Date();
    const priority = document.querySelector('input[name="priority"]:checked').value;
    addTask(title, description, dueDate, priority)
    getTasks()
    element.reset();
  })
}