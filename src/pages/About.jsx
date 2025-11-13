import React from 'react';

const About = () => {
  const technologies = [
    'React 19',
    'Tailwind CSS 4',
    'React Router 7',
    'Vite',
    'Prop Types'
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xs border border-gray-200 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">About PLP Task Manager</h1>
      <p className="text-lg text-gray-600 mb-6">
        This is a modern task management application built as part of the PLP 
        Week 3 assignment for mastering React.js, JSX, and Tailwind CSS.
      </p>
      
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features</h2>
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600">
        <li>Complete task management (add, complete, delete, filter)</li>
        <li>Local storage persistence</li>
        <li>API integration with JSONPlaceholder</li>
        <li>Responsive design</li>
        <li>Modern React 19 features</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Technologies Used</h2>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default About;