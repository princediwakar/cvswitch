import React from 'react';

const Testimonials = () => {
  return (
    <div className="text-gray-600 py-20 bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-gray-300" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Our Users Love Us!
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-green-500 dark:text-green-400">Shashank Dixit</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
              </div>
            </div>
            <p className="mt-8">CV Switch helped me revamp my resume in no time. The AI suggestions were spot-on and made my resume stand out!</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-green-500 dark:text-green-400">Jane Smith</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">Product Manager</p>
              </div>
            </div>
            <p className="mt-8">Using CV Switch was a game changer. The tailored prompts and easy customization made my resume shine.</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-green-500 dark:text-green-400">Emily Johnson</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Specialist</p>
              </div>
            </div>
            <p className="mt-8">CV Switch made my resume transformation so simple. I landed more interviews thanks to the professional templates.</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-green-500 dark:text-green-400">Michael Brown</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">Operations Manager</p>
              </div>
            </div>
            <p className="mt-8">For any operations manager, CV Switch is essential. The AI-enhanced resume was just what I needed to highlight my skills.</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-green-500 dark:text-green-400">Sarah Lee</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">UI/UX Designer</p>
              </div>
            </div>
            <p className="mt-8">CV Switch is a fantastic tool. The design and ease of use made creating a standout resume a breeze.</p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-green-500 dark:text-green-400">David Wilson</h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">Freelancer</p>
              </div>
            </div>
            <p className="mt-8">As a freelancer, CV Switch has been invaluable. It helps me present my skills and projects in the best light possible.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
