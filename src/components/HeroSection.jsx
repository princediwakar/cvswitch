import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative" id="home">
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-amber-400 via-red-500 to-amber-600 dark:from-amber-700 dark:via-red-800 dark:to-amber-900"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-amber-400 to-red-400 dark:from-amber-600 dark:to-red-700"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">Create your perfect resume in <span className="text-primary dark:text-amber-400">minutes</span></h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">Effortlessly create professional resumes tailored to your dream job. Ideal for job seekers, professionals, and students.</p>
            <div className="mt-16 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="https://beta.cvswitch.com"
                target="_blank"
                rel="noreferrer" 
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">Create Your Resume</span>
              </a>
            </div>
            <div className="hidden py-8 mt-16 border-y border-gray-100 dark:border-gray-800 sm:flex justify-between">
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Easy to Use</h6>
                <p className="mt-2 text-gray-500">User-friendly interface</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Quick Customization</h6>
                <p className="mt-2 text-gray-500">Tailor resumes quickly</p>
              </div>
              <div className="text-left">
                <h6 className="text-lg font-semibold text-gray-700 dark:text-white">Professional Templates</h6>
                <p className="mt-2 text-gray-500">Choose from various templates</p>
              </div>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6">
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./images/clients/microsoft.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./images/clients/google.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img src="./images/clients/airbnb.svg" className="h-9 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./images/clients/ge.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
            </div>
            <div className="p-4 flex grayscale transition duration-200 hover:grayscale-0">
              <img src="./images/clients/netflix.svg" className="h-8 w-auto m-auto" loading="lazy" alt="client logo" width="" height="" />
            </div>
            <div className="p-4 grayscale transition duration-200 hover:grayscale-0">
              <img src="./images/clients/google-cloud.svg" className="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width="" height="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
