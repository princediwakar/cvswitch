import React from 'react'

const AppFooter = () => {
  return (
    <footer className="md:py-40 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="flex flex-wrap justify-between items-start md:flex-nowrap">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <h2 className="text-2xl font-bold text-white mb-6">SnapMyDesign</h2>
            <p className="text-gray-400 mb-6">
              Revolutionize your design process with AI-powered tools from SnapMyDesign. Create stunning graphics, illustrations, and more with just a prompt and a sample image.
            </p>
            <ul className="flex space-x-6">
              <li>
                <a href="https://www.facebook.com/snapmydesign" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/snapmydesign" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/snapmydesign" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/snapmydesign" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 16 16">
                    <path d="M0 1.146c0-.636.518-1.146 1.175-1.146h13.65C15.482 0 16 .51 16 1.146v13.708c0 .635-.518 1.146-1.175 1.146H1.175C.518 16 0 15.49 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.249c.837 0 1.509-.675 1.509-1.509a1.51 1.51 0 1 0-3.02 0c0 .834.676 1.509 1.51 1.509zm4.908 8.249V9.359c0-.236.018-.473.085-.645.185-.473.61-.962 1.321-.962.932 0 1.304.726 1.304 1.792v4.85h2.4V9.06c0-2.053-1.096-3.008-2.556-3.008-1.185 0-1.71.66-2.016 1.125v.036h-.014a1.74 1.74 0 0 0-.086-.03h-.001v-.001l-.012-.005h-.001v-.001c-.19-.047-.39-.07-.595-.07-1.366 0-2.316.92-2.316 2.569v4.757h2.401zm0-7.225V6.169H8.541v7.225h2.401zm4.908 0V6.169h-2.401v7.225h2.401z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-2/3 lg:w-3/4 mt-12 md:mt-0">
            <div className="flex flex-wrap justify-between">
              <div className="w-full sm:w-1/3 lg:w-1/4">
                <h5 className="text-lg font-semibold text-white mb-4">Quick Links</h5>
                <ul className="space-y-2">
                  <li><a href="#home" className="transition hover:text-primary">Home</a></li>
                  <li><a href="#features" className="transition hover:text-primary">Features</a></li>
                  <li><a href="#how-it-works" className="transition hover:text-primary">How It Works</a></li>
                  <li><a href="#testimonials" className="transition hover:text-primary">Testimonials</a></li>
                  <li><a href="#blog" className="transition hover:text-primary">Blog</a></li>
                </ul>
              </div>

              <div className="w-full sm:w-1/3 lg:w-1/4">
                <h5 className="text-lg font-semibold text-white mb-4">Resources</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="transition hover:text-primary">About Us</a></li>
                  <li><a href="#" className="transition hover:text-primary">Contact</a></li>
                  <li><a href="#" className="transition hover:text-primary">Privacy Policy</a></li>
                  <li><a href="#" className="transition hover:text-primary">Terms of Service</a></li>
                </ul>
              </div>

              <div className="w-full sm:w-1/3 lg:w-1/4">
                <h5 className="text-lg font-semibold text-white mb-4">Support</h5>
                <ul className="space-y-2">
                  <li><a href="#" className="transition hover:text-primary">Help Center</a></li>
                  <li><a href="#" className="transition hover:text-primary">FAQs</a></li>
                  <li><a href="#" className="transition hover:text-primary">Support</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-gray-500 dark:text-gray-400">
          <span>© 2024 SnapMyDesign. All rights reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
