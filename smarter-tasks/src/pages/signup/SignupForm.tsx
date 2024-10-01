import { API_ENDPOINT } from '../../config/constants';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  organisationName: string
  userName: string
  userEmail: string
  userPassword: string
};

const SignupForm: React.FC = () => {
  const navigate = useNavigate(); 
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs>  = async (data) =>  {
    const { organisationName, userName, userEmail, userPassword } = data
    try {
      // const response = await fetch(`https://wd301-api.pupilfirst.school/organisations`,
      // console.log(API_ENDPOINT);
      const response = await fetch(`${API_ENDPOINT}/organisations`,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: organisationName, user_name: userName, email: userEmail, password: userPassword}),
      });

      if (!response.ok) {
        throw new Error('Sign-up failed');
      }
      console.log('Sign-up successful');
      // Dialogue: After successful signup we have to redirect the user to the secured page. We will do that later.
      const data = await response.json();

      // if successful, save the token in localStorage
      localStorage.setItem('authToken', data.token);
    // if successful, save the user info in localStorage
    localStorage.setItem('userData', JSON.stringify(data.user))
    navigate("/account");
    } catch (error) {
      console.error('Sign-up failed:', error);
    }
    // //const userData = JSON.parse(localStorage.getItem('userData'));
    // //console.log(userData.id);
    // localStorage.removeItem('userData');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Organisation Name:</label>
        <input type="text" id="organisationName"{...register('organisationName')} 
          className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
            errors.organisationName ? 'border-red-500' : ''
          }`}
        />
        {errors.organisationName && <span>This field is required</span>}
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Your Name:</label>
        <input type="text" id="userName" {...register('userName')} 
          className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
            errors.userName ? 'border-red-500' : ''
          }`}
        />
        {errors.userName && <span>This field is required</span>}
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input type="email" id="userEmail" {...register('userEmail')}
          className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
            errors.userEmail ? 'border-red-500' : ''
          }`}
         />
         {errors.userEmail && <span>This field is required</span>}
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Password:</label>
        <input type="password" id="userPassword" {...register('userPassword')} 
          className={`w-full border rounded-md py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue ${
            errors.userPassword ? 'border-red-500' : ''
          }`}
        />
        {errors.userPassword && <span>This field is required</span>}
      </div>
      <button type="submit" className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4">Sign up</button>
    </form>
  );
};

export default SignupForm;