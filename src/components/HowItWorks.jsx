import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">How CV Switch Works</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-200 via-red-200 to-red-200 dark:from-amber-900 dark:via-red-800 dark:to-red-900 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="relative overflow-hidden rounded-xl">
              <img src="https://example.com/upload-resume.png" alt="Upload Resume" loading="lazy" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Step 1: Upload Resume</h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Upload your current resume to start the transformation process.
              </p>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-200 via-red-200 to-red-200 dark:from-amber-900 dark:via-red-800 dark:to-red-900 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="relative overflow-hidden rounded-xl h-64 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <p className="text-xl font-semibold text-gray-800 dark:text-white">Write Prompt</p>
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Step 2: Write Prompt</h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Describe the job role and skills you want to highlight. Be specific for best results.
              </p>
            </div>
          </div>
          <div className="group p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-200 via-red-200 to-red-200 dark:from-amber-900 dark:via-red-800 dark:to-red-900 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="relative overflow-hidden rounded-xl">
              <img src="https://example.com/transform-resume.png" alt="Transform Resume" loading="lazy" className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div className="mt-6 relative">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Step 3: Transform Resume</h3>
              <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                Click the transform button and let our AI enhance your resume for the desired role.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-700 dark:text-white md:text-4xl">An Example</h2>
          <img src="/images/examples/example-resume.png" alt="Example Resume Transformation" loading="lazy" className="mx-auto mt-8 rounded-3xl shadow-2xl shadow-gray-600/10 dark:shadow-none" />
        </div> */}
      </div>
    </section>
  );
}

export default HowItWorks;
