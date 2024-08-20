document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('todo-form');
    let input = document.getElementById('todo-input');
    let todoList = document.getElementById('todo-list');
    let taskCounter = 1; 

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let todoText = input.value.trim();
        if (todoText === '') return;

        let li = document.createElement('li');
        li.innerHTML = `${taskCounter}. ${todoText}`;

        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove');
        removeButton.addEventListener('click', () => {
            todoList.removeChild(li);
            updateTaskNumbers(); 
        });

        li.appendChild(removeButton);
        todoList.appendChild(li);

        input.value = '';
        taskCounter++; 
    });

    function updateTaskNumbers() {
        const items = todoList.querySelectorAll('li');
        items.forEach((item, index) => {
            item.firstChild.textContent = `${index + 1}. ` + item.firstChild.textContent.split('. ')[1];
        });
        taskCounter = items.length + 1; 
    }
});
