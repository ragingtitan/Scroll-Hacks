import React from 'react'
import Hero from './Hero'
const Features = () => {
  return (
    <div className='mt-9'>
      <Hero/>
        <section className="bg-white text-gray-800 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12">
              Why Choose AI Notes Maker?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="mb-4 flex justify-center items-center">
                  <svg
                    className="w-12 h-12 text-indigo-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 8v4m0 4h.01"></path>
                    <path d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">High Accuracy</h3>
                <p>
                  Our AI models are trained on vast datasets to ensure accurate
                  transcription and note generation.
                </p>
              </div>
              <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="mb-4 flex justify-center items-center">
                  <svg
                    className="w-12 h-12 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Fast Processing</h3>
                <p>
                  Get your notes in seconds, not minutes. Perfect for on-the-go
                  professionals and students.
                </p>
              </div>
              <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="mb-4 flex justify-center items-center">
                  <svg
                    className="w-12 h-12 text-yellow-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h8m-8 6h16"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">Easy to Use</h3>
                <p>
                  Simply upload your recordings and let our service do the rest.
                  No complex setups or installations.
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Features