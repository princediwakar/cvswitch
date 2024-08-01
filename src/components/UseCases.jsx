import React from 'react';

const UseCases = () => {
  const useCases = [
    {
      title: 'Software Engineers',
      description: 'Highlight your technical skills and project experience to land your dream job.',
      icon: '💻',
    },
    {
      title: 'Product Managers',
      description: 'Showcase your product development and management expertise.',
      icon: '📈',
    },
    {
      title: 'Operations Managers',
      description: 'Emphasize your operational skills and achievements in streamlining processes.',
      icon: '⚙️',
    },
    {
      title: 'Marketing Managers',
      description: 'Present your marketing campaigns and strategic planning capabilities.',
      icon: '📊',
    },
    {
      title: 'UI/UX Designers',
      description: 'Display your design skills and portfolio to attract potential employers.',
      icon: '🎨',
    },
    {
      title: 'Data Scientists',
      description: 'Detail your data analysis projects and technical expertise.',
      icon: '📊',
    },
    {
      title: 'Business Analysts',
      description: 'Show your analytical skills and business insights to potential employers.',
      icon: '📈',
    },
    {
      title: 'Project Managers',
      description: 'Highlight your project management experience and successful projects.',
      icon: '📋',
    },
  ];

  return (
    <section id="usecases" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/geometric-web.png')] opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">Who Can Use CV Switch?</h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            Discover how various professionals can benefit from CV Switch to enhance their resumes.
          </p>
        </div>
        <div className="relative flex flex-wrap justify-center gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="w-60 p-6 bg-gradient-to-br from-green-100 via-blue-100 to-indigo-100 dark:from-green-800 dark:via-blue-700 dark:to-indigo-800 border border-gray-100 dark:border-gray-700 rounded-3xl shadow-lg text-center transform transition duration-500 hover:scale-105">
              <div className="text-4xl">{useCase.icon}</div>
              <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">{useCase.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
