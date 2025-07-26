let tasks = [];
let filterMode = 'all';

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
        renderTask();
    }
}

function renderTask() {
    const taskBody = document.getElementById('taskBody');
    const filterStatus = document.getElementById('filterStatus');
    taskBody.innerHTML = ''; 

    let filteredTasks = tasks;

    if (filterMode === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
        filterStatus.textContent = 'Completed Tasks';
    } else if (filterMode === 'pending') {
        filteredTasks = tasks.filter(task => !task.completed);
        filterStatus.textContent = 'Pending Tasks';
    } else {
        filterStatus.textContent = 'All Tasks';
    }

    filteredTasks.forEach((task) => {
        const originalIndex = tasks.indexOf(task);
        taskBody.innerHTML += `
        <tr>
            <td class="p-3">${task.task}</td>
            <td class="p-3">${task.date}</td>
            <td class="p-3">${task.completed ? 'Completed' : 'Pending'}</td>
            <td class="p-3">
                <button onclick="toggleStatus(${originalIndex})"class="material-symbols-outlined">Edit</button>
                <button onclick="deleteTask(${originalIndex})"class="material-symbols-outlined">Delete</button>
            </td>
        </tr>
    `;
});

}

function toggleStatus(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTask(); // Refresh display
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTask();
}

function deleteAll() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    tasks = [];
    renderTask();
  }
}

function toggleFilter() {
    if (filterMode === 'all') {
        filterMode = 'completed';
    } else if (filterMode === 'completed') {
        filterMode = 'pending';
    } else {
        filterMode = 'all';
    }
    renderTask();
}