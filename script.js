
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function () {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
    <td>${taskText}</td>
    <td>
        <button class="updateButton">Update</button>
        <button class="deleteButton">Delete</button>
    </td>
    `;

        taskList.appendChild(newRow);

        taskInput.value = '';
    }
});

taskList.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('updateButton')) {
        const taskTextElement = target.parentNode.previousElementSibling;
        const updatedTaskText = prompt('Enter the updated task', taskTextElement.textContent);
        if (updatedTaskText !== null) {
            taskTextElement.textContent = updatedTaskText.trim();
        }
    } else if (target.classList.contains('deleteButton')) {
        const row = target.parentNode.parentNode;
        row.remove();
    }
});
