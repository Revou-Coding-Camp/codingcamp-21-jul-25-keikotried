let tasks = [];

function addTask(event) {
    event.preventDefault();

    let taskInput = document.getElementById('taskInput');
    let dateInput = document.getElementById('dateInput');

    if (taskInput.value === '' || dateInput.value === '') {
        alert('Please enter both task and due date.');
    }
    else {
        tasks.push(
            {
                task: taskInput.value,
                date: dateInput.value,
                completed: false
            }
        )
        insertTask();
    }
}

function insertTask() {
    const taskList = document.getElementById('taskList');

    tasks.forEach(() => {
        taskList.innerHTML += `
            <tr>
                <td class="p-3">${tasks.task}</td>
                <td class="p-3">${tasks.date}</td>
                <td class="p-3">${tasks.completed ? 'Completed' : 'Pending'}</td>
                <td class="p-3">
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            </tr>
        `;
    });
}