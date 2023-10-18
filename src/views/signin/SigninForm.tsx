import { useForm, SubmitHandler } from "react-hook-form"
import { API_ENDPOINT } from "../../config/constants";
import { useNavigate } from "react-router-dom";

type Inputs = {
  email: string;
  password: string;
}

const SigninForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error('Sign-in failed');
      }
      console.log('Sign-in successful');
      const data = await response.json();
      localStorage.setItem('authToken', data.token);
      localStorage.setItem('userData', JSON.stringify(data.user));
      navigate("/");
    } catch (error) {
      console.error('Sign-in failed:', error);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
          <input type="email" id="email" {...register("email", { required: true })} className={`w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${errors.email ? "border-red-500" : ""} `} />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password:</label>
          <input type="password" id="password" {...register("password", { required: true })} className={`w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${errors.password ? "border-red-500" : ""} `} />
        </div>
        <div>
          <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign In</button>        </div>
      </form>
    </div>
  )
}
export default SigninForm;