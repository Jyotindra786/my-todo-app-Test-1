// Step 1: HTML elements pakdo
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

// Step 2: Button suno
addBtn.addEventListener('click', function () {

  const taskText = taskInput.value.trim();

  // Khali input check
  if (taskText === '') {
    alert('Kuch toh likho bhai! 😄');
    return;
  }

  // Naya <li> banao
  const newTask = document.createElement('li');
  newTask.innerHTML = `
    <span class="task-text">${taskText}</span>
    <div class="task-buttons">
      <button class="done-btn">✔️</button>
      <button class="delete-btn">🗑️</button>
    </div>
  `;

  // ✔️ Done button ka kaam
  const doneBtn = newTask.querySelector('.done-btn');
  doneBtn.addEventListener('click', function () {
    newTask.classList.toggle('completed');
  });

  // 🗑️ Delete button ka kaam
  const deleteBtn = newTask.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', function () {
    taskList.removeChild(newTask);
  });

  // List mein daalo
  taskList.appendChild(newTask);

  // Input khali karo
  taskInput.value = '';
});

// Enter key se bhi task add ho
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});