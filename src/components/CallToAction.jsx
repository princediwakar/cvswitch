import React from 'react';

const CallToAction = () => {
  return (
    <div className="relative py-20 bg-gradient-to-r from-amber-500 via-red-500 to-red-500 text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 xl:px-6 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">Transform Your Resume. Faster.</h2>
        <p className="mt-4 text-lg md:text-xl">Join thousands of professionals using CV Switch to enhance their resumes. It's quick, easy, and effective!</p>
        <div className="mt-8 flex flex-wrap justify-center gap-y-4 gap-x-6">
          <a
            href="https://beta.cvswitch.com"
            target="_blank"
            rel="noreferrer"
            className="relative flex h-11 w-full items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-full shadow-lg before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
          >
            <span className="relative">Improve Your Resume Now</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
