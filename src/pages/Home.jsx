import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  const features = [
    {
      title: 'Task Management',
      description: 'Create, complete, and organize your tasks with ease.',
      icon: '✅',
    },
    {
      title: 'API Integration',
      description: 'Fetch and display data from external APIs.',
      icon: '🌐',
    },
    {
      title: 'Responsive Design',
      description: 'Works perfectly on all devices.',
      icon: '📱',
    },
  ];

  return (
    <div className="space-y-8">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          PLP Task Manager
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          A modern task management application built with React 19 and Tailwind CSS 4.
        </p>
        <Link to="/tasks">
          <Button variant="primary" size="lg" className="shadow-xs">
            Get Started
          </Button>
        </Link>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-xs border border-gray-200 p-6 text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;