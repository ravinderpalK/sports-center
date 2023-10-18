
import React from 'react';
import SignupForm from './SignupForm';
import { Link } from 'react-router-dom';

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign up</h1>
        <SignupForm />
      </div>
      <div>
        <div className="mt-4 text-base">
          Already have an account?
          <Link to="/signin" className="px-2">Signin</Link>
        </div>
      </div>
    </div>
  );
}
export default Signup;