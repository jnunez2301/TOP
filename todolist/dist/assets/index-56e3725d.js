(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=(i,o,n,r)=>{if(i.length>0&&o.length>0&&n&&r){const e={description:o,dueDate:n,priority:r};localStorage.setItem(i,JSON.stringify(e))}else alert("All fields must be filled")},s=()=>{const i=document.querySelector("#list");i.innerHTML="",Object.keys(localStorage).forEach(o=>{const n=localStorage.getItem(o),r=JSON.parse(n),e=document.createElement("li");e.textContent=`Title: ${o}`;const t=document.createElement("p"),d=document.createElement("p");d.textContent=`Description: ${r.description}`;const c=document.createElement("p");c.textContent=`Due Date: ${r.dueDate}`;const a=document.createElement("p");a.textContent=`Priority: ${r.priority}`;const l=document.createElement("button");l.innerHTML="DELETE",l.classList.add("delete-btn"),l.addEventListener("click",()=>{window.confirm("Do you want to delete this task?")&&(localStorage.removeItem(o),e.remove())}),e.appendChild(t),e.appendChild(d),e.appendChild(c),e.appendChild(a),e.appendChild(l),i.appendChild(e),i.appendChild(document.createElement("hr"))})},p=i=>{i.addEventListener("submit",o=>{o.preventDefault();const n=document.querySelector("#todoTitle").value,r=document.querySelector("#todoDescription").value,e=new Date,t=document.querySelector('input[name="priority"]:checked').value;u(n,r,e,t),s(),i.reset()})};window.addEventListener("load",()=>{s()});document.querySelector("#app").innerHTML=`
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
`;p(document.querySelector("#todo-form"));
