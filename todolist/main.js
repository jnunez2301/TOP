import './style.css'
import { handleSubmit } from './handleSubmit.js'
/* import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg' */
import { getTasks } from './taskHelper'

window.addEventListener('load', () => {
    getTasks();
  });

document.querySelector('#app').innerHTML = `
<h1>TO DO LIST</h1>
<form id="todo-form">
<label for="todoTitle">Title:</label>
<input type="text" id="todoTitle" name="todoTitle" >

<label for="todoDescription">Description:</label>
<textarea rows="5" cols="50" id="todoDescription" name="todoDescription" ></textarea>
<div id="priority">
  <input type="radio" id="lowPriority" name="priority" value="low">Low
  <input type="radio" id="mediumPriority" name="priority" value="medium">Medium
  <input type="radio" id="highPriority" name="priority" value="high">High
  </div>
<button type="submit">Add Todo</button>
</form>
<ul id="list">
</ul>
`

handleSubmit(document.querySelector('#todo-form'))
