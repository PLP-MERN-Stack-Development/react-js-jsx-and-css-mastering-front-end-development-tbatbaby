import React, { useState, useEffect } from 'react';
import Button from './Button';

<<<<<<< HEAD
const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
=======
/**
 * Custom hook for managing tasks with localStorage persistence
 */
const useLocalStorageTasks = () => {
  // Initialize state from localStorage or with empty array
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Update localStorage when tasks change
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

<<<<<<< HEAD
  const addTask = (text) => {
    if (text.trim()) {
      const newTask = {
        id: Date.now(),
        text: text.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTasks([...tasks, newTask]);
      setNewTaskText('');
    }
  };

=======
  // Add a new task
  const addTask = (text) => {
    if (text.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ]);
    }
  };

  // Toggle task completion status
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

<<<<<<< HEAD
=======
  // Delete a task
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

<<<<<<< HEAD
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
  };

  return (
    <div className="bg-white rounded-xl shadow-xs border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Task Manager</h2>

=======
  return { tasks, addTask, toggleTask, deleteTask };
};

/**
 * TaskManager component for managing tasks
 */
const TaskManager = () => {
  const { tasks, addTask, toggleTask, deleteTask } = useLocalStorageTasks();
  const [newTaskText, setNewTaskText] = useState('');
  const [filter, setFilter] = useState('all');

  // Filter tasks based on selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' filter
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTaskText);
    setNewTaskText('');
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-6">Task Manager</h2>

      {/* Task input form */}
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Add a new task..."
<<<<<<< HEAD
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent transition-all duration-200"
          />
          <Button type="submit" variant="primary" className="shadow-xs">
=======
            className="flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
          />
          <Button type="submit" variant="primary">
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
            Add Task
          </Button>
        </div>
      </form>

<<<<<<< HEAD
=======
      {/* Filter buttons */}
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
      <div className="flex gap-2 mb-4">
        <Button
          variant={filter === 'all' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('all')}
<<<<<<< HEAD
          className="shadow-xs"
=======
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('active')}
<<<<<<< HEAD
          className="shadow-xs"
=======
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
        >
          Active
        </Button>
        <Button
          variant={filter === 'completed' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setFilter('completed')}
<<<<<<< HEAD
          className="shadow-xs"
=======
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
        >
          Completed
        </Button>
      </div>

<<<<<<< HEAD
      <ul className="space-y-3">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500 text-center py-6 rounded-lg bg-gray-50">
=======
      {/* Task list */}
      <ul className="space-y-2">
        {filteredTasks.length === 0 ? (
          <li className="text-gray-500 dark:text-gray-400 text-center py-4">
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
            No tasks found
          </li>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
<<<<<<< HEAD
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-all duration-200 hover:shadow-xs"
=======
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 dark:border-gray-700"
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
<<<<<<< HEAD
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                />
                <span
                  className={`font-medium ${
                    task.completed ? 'line-through text-gray-500' : 'text-gray-700'
=======
                  className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span
                  className={`${
                    task.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
                  }`}
                >
                  {task.text}
                </span>
              </div>
              <Button
                variant="danger"
                size="sm"
                onClick={() => deleteTask(task.id)}
<<<<<<< HEAD
                className="shadow-xs"
=======
                aria-label="Delete task"
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>

<<<<<<< HEAD
      <div className="mt-6 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
        <p>
          {tasks.filter((task) => !task.completed).length} tasks remaining
          {tasks.length > 0 && ` • ${tasks.length} total`}
=======
      {/* Task stats */}
      <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
        <p>
          {tasks.filter((task) => !task.completed).length} tasks remaining
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
        </p>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default TaskManager;
=======
export default TaskManager; 
>>>>>>> 4ed5bfc937dae33fbf84288ba83a41373961b9e4
