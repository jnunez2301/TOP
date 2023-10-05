const addTask = (title, description, dueDate, priority) => {

    if (title.length > 0 && description.length>0 && dueDate && priority) {
        const task = {
            description: description,
            dueDate: dueDate,
            priority: priority
        };
        localStorage.setItem(title, JSON.stringify(task));
    } else {
        alert('All fields must be filled')
    }
}

const getTasks = () => {
    const list = document.querySelector('#list'); // Select the list element here.

    // Clear the existing list items before appending new ones.
    list.innerHTML = '';

    Object.keys(localStorage).forEach(key => {
        const value = localStorage.getItem(key);
        const taskObject = JSON.parse(value);

        // Create an <li> element for each task and set its content.
        const listItem = document.createElement('li');
        listItem.textContent = `Title: ${key}`;

        const titleParagraph = document.createElement('p');
        
        const descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${taskObject.description}`;

        const dueDateParagraph = document.createElement('p');
        dueDateParagraph.textContent = `Due Date: ${taskObject.dueDate}`;

        const priorityParagraph = document.createElement('p');
        priorityParagraph.textContent = `Priority: ${taskObject.priority}`;

        const deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'DELETE'
        deleteBtn.classList.add('delete-btn')
        deleteBtn.addEventListener('click', ()=>{
            if(window.confirm("Do you want to delete this task?")){
                localStorage.removeItem(key);
                listItem.remove();
            }
        })

        listItem.appendChild(titleParagraph);
        listItem.appendChild(descriptionParagraph);
        listItem.appendChild(dueDateParagraph);
        listItem.appendChild(priorityParagraph);
        listItem.appendChild(deleteBtn);

        list.appendChild(listItem);
        list.appendChild(document.createElement('hr'))
        // Append the <li> element to the list.
    });
}


export { addTask, getTasks }
