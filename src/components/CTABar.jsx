import React from 'react';

const CallToActionBar = () => {
  return (
    <div className="bg-gradient-to-r from-amber-500 via-red-500 to-red-500 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 text-center">
        <p className="text-lg font-semibold">
          Create a Better Resume with CV Switch
        </p>
        <a
          href="https://beta.cvswitch.com"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block bg-white text-primary font-semibold rounded-full px-6 py-2 shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Improve Your Resume Now
        </a>
      </div>
    </div>
  );
}

export default CallToActionBar;
