import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-800 dark:text-white text-lg font-medium">
          {question}
        </span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-600 dark:text-gray-300">
          {answer}
        </div>
      )}
    </div>
  );
};

const FAQs = () => {
  const faqData = [
    {
      question: 'What is CV Switch?',
      answer: 'CV Switch is an AI-powered tool that helps you transform your resume to fit specific job roles by uploading your resume and writing a prompt.',
    },
    {
      question: 'How does CV Switch work?',
      answer: 'Using CV Switch is simple! Upload your resume, write a prompt describing the desired job role, and let our AI enhance your resume accordingly.',
    },
    {
      question: 'Can I use CV Switch for different job roles?',
      answer: 'Yes, you can use CV Switch to tailor your resume for various job roles, ensuring it highlights the skills and experiences relevant to each position.',
    },
    {
      question: 'Is CV Switch suitable for all industries?',
      answer: 'Absolutely! CV Switch is designed to work across all industries, helping professionals, job seekers, and students create industry-specific resumes.',
    },
    {
      question: 'Is there a limit to the number of resumes I can transform?',
      answer: 'There are no limits to the number of resumes you can transform with CV Switch. Customize as many resumes as you need for different job applications.',
    },
  ];

  return (
    <section id="faqs" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">Frequently Asked Questions</h2>
          <p className="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            Find answers to some of the most commonly asked questions about CV Switch.
          </p>
        </div>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
