// Helper to generate unique IDs for demo tasks
const generateId = () => Math.random().toString(36).substr(2, 9);

// Initialize demo tasks in localStorage if not exists
const initDemoTasks = () => {
  if (!localStorage.getItem('demoTasks')) {
    localStorage.setItem('demoTasks', JSON.stringify([]));
  }
};

export const demoStorage = {
  getTasks: () => {
    initDemoTasks();
    return JSON.parse(localStorage.getItem('demoTasks'));
  },

  addTask: (taskData) => {
    const tasks = demoStorage.getTasks();
    const newTask = {
      id: generateId(),
      title: taskData.title,
      createdAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    localStorage.setItem('demoTasks', JSON.stringify(tasks));
    return newTask;
  },

  updateTask: (id, taskData) => {
    const tasks = demoStorage.getTasks();
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) throw new Error('Task not found');
    
    tasks[taskIndex] = { ...tasks[taskIndex], ...taskData };
    localStorage.setItem('demoTasks', JSON.stringify(tasks));
    return tasks[taskIndex];
  },

  deleteTask: (id) => {
    const tasks = demoStorage.getTasks();
    const filteredTasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('demoTasks', JSON.stringify(filteredTasks));
  },

  clearTasks: () => {
    localStorage.removeItem('demoTasks');
  },
}; 