import React from 'react';

const SignUpForm = () => (
  <div className="bg-[#23262F] rounded-xl p-8 w-full max-w-md mx-auto shadow-lg">
    <h2 className="text-white text-3xl font-bold mb-6 text-center">Sign up</h2>
    <form className="space-y-4">
      <div>
        <label className="block text-gray-300 mb-1">Full name</label>
        <input className="w-full p-2 rounded bg-transparent border border-gray-600 text-white" placeholder="Enter your name" />
      </div>
      <div>
        <label className="block text-gray-300 mb-1">Email</label>
        <input className="w-full p-2 rounded bg-transparent border border-gray-600 text-white" placeholder="Enter your email address" />
      </div>
      <div>
        <label className="block text-gray-300 mb-1">Password</label>
        <input type="password" className="w-full p-2 rounded bg-transparent border border-gray-600 text-white" placeholder="Enter your password" />
      </div>
      <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold mt-4">Create account</button>
      <div className="flex items-center my-4">
        <div className="flex-grow h-px bg-gray-700" />
        <span className="mx-2 text-gray-400">OR</span>
        <div className="flex-grow h-px bg-gray-700" />
      </div>
      <button type="button" className="w-full flex items-center justify-center gap-2 py-2 border border-gray-600 text-white rounded-lg font-semibold">
        <span className="material-icons">code</span> Continue with GitHub
      </button>
    </form>
  </div>
);

export default SignUpForm; 