import React from 'react'

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-lg w-full bg-gradient-to-r from-blue-500 to-purple-600 p-10 rounded-xl shadow-lg space-y-8">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-white">Make a Donation</h2>
      <p className="mt-2 text-lg text-gray-200 font-medium">
        Your support helps us make a difference!
      </p>
    </div>
    <form className="mt-8 space-y-6" >
      <div className="space-y-4">
        <div>
          <label htmlFor="donation-amount" className="block text-sm font-medium text-white">
            Donation Amount
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              id="donation-amount"
              name="amount"
              type="number"
              min="1"
              required
              className="appearance-none text-black block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="0.00"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">USD</span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="appearance-none block text-black w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="appearance-none text-black block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block  text-sm font-medium text-white">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="appearance-none text-black block w-full resize-none px-4 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Write a message..."
          />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Donate Now
        </button>
      </div>
    </form>
  </div>
</div>

  )
}

export default Pricing