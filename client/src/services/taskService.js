import api from '../utils/api';
import { demoStorage } from '../utils/demoStorage';

export const taskService = {
  getAllTasks: async (isDemo = false) => {
    if (isDemo) {
      return demoStorage.getTasks();
    }
    return api.get('/tasks');
  },

  getTask: async (id, isDemo = false) => {
    if (isDemo) {
      const tasks = demoStorage.getTasks();
      const task = tasks.find(t => t.id === id);
      if (!task) throw new Error('Task not found');
      return task;
    }
    return api.get(`/tasks/${id}`);
  },

  createTask: async (taskData, isDemo = false) => {
    if (isDemo) {
      return demoStorage.addTask(taskData);
    }
    return api.post('/tasks', taskData);
  },

  updateTask: async (id, taskData, isDemo = false) => {
    if (isDemo) {
      return demoStorage.updateTask(id, taskData);
    }
    return api.patch(`/tasks/${id}`, taskData);
  },

  deleteTask: async (id, isDemo = false) => {
    if (isDemo) {
      return demoStorage.deleteTask(id);
    }
    return api.delete(`/tasks/${id}`);
  },
}; 