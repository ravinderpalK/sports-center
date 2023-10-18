import { Link } from "react-router-dom";
import SigninForm from "./SigninForm";


const Signin: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign in</h1>
        <SigninForm />
      </div>
      <div>
        <div className="mt-4 text-base">
          New to Sports-center?
          <Link to="/signup" className="px-2">Signup</Link>
        </div>
      </div>
    </div>
  )
}

export default Signin;