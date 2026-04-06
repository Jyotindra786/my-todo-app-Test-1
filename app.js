// HTML elements pakdo
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// ✅ localStorage se tasks load karo
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(task => renderTask(task.text, task.completed));
}

// ✅ localStorage mein tasks save karo
function saveTasks() {
  const items = taskList.querySelectorAll('li');
  const tasks = [];
  items.forEach(item => {
    tasks.push({
      text: item.querySelector('.task-text').textContent,
      completed: item.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// ✅ Task UI banana — ek function mein
function renderTask(text, completed = false) {
  const newTask = document.createElement('li');
  if (completed) newTask.classList.add('completed');

  newTask.innerHTML = `
    <span class="task-text">${text}</span>
    <div class="task-buttons">
      <button class="done-btn">✔️</button>
      <button class="delete-btn">🗑️</button>
    </div>
  `;

  // Done button
  newTask.querySelector('.done-btn').addEventListener('click', function() {
    newTask.classList.toggle('completed');
    saveTasks();
  });

  // Delete button
  newTask.querySelector('.delete-btn').addEventListener('click', function() {
    taskList.removeChild(newTask);
    saveTasks();
  });

  taskList.appendChild(newTask);
}

// ✅ Add button
addBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Kuch toh likho bhai! 😄');
    return;
  }

  renderTask(taskText);
  saveTasks();
  taskInput.value = '';
});

// ✅ Enter key support
taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addBtn.click();
});

// ✅ Page load hone pe tasks wapas laao
loadTasks();