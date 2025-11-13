import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
};

export const useTasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const addTask = (text) => {
    if (text.trim()) {
      const newTask = {
        id: Date.now() + Math.random(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setTasks(prev => [...prev, newTask]);
      return newTask;
    }
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { 
              ...task, 
              completed: !task.completed,
              updatedAt: new Date().toISOString()
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const updateTask = (id, updates) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { 
              ...task, 
              ...updates,
              updatedAt: new Date().toISOString()
            }
          : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  const clearAll = () => {
    setTasks([]);
  };

  const getTaskStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;
    
    return { total, completed, pending };
  };

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
    clearCompleted,
    clearAll,
    getTaskStats,
  };
};

export default useLocalStorage;