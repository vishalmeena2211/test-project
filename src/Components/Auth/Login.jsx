import { useEffect, useState } from 'react';


const Login = () => {

  // const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const dispatch = useDispatch();
  // const navigate = useNavigate();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // You can process the form data here
    // const res = await apiConnector("POST", authEndpoints.ADMIN_LOGIN_API, formData);
    // const userToken = res?.data?.data?.token;
    // const userData = res?.data?.data;
    // localStorage.setItem('token', userToken);
    // localStorage.setItem('user', JSON.stringify(userData));
    // // Dispatch the login action with the token
    // dispatch(login(userToken));
    // dispatch(setUser(userData));
    // if (res.status === 200) {

    //   setTimeout(() => {

    //     navigate('/');
    //   }, 3000);

    // }
  };



  // useEffect(() => {


  //   if (isLoggedIn) {
  //     navigate('/');
  //   }
  //   // Check if a token is present in local storage on page load
  //   if (!isLoggedIn && localStorage.getItem('token')) {
  //     // If a token is found in local storage, set the user as logged in
  //     dispatch(login(localStorage.getItem('token')));
  //   }
  // }, [isLoggedIn, dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="p-10 rounded-3xl w-full sm:w-[400px]">
        <h1 className="text-4xl font-sans text-blue-600 font-semibold mb-2">
          Welcome back
        </h1>
        <h2 className="mb-6">Enter your Email and Password to sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 font-sans text-grey font-normal">
            <label
              className="block text-gray-800 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="rounded-xl border p-3 mb-4 w-full"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-800 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="rounded-xl border p-3 w-full mb-4"
              placeholder="Your password"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-indigo-500 font-sans font-bold text-white w-full py-3 rounded-xl hover:bg-indigo-600 mt-4"
          >
            Login
          </button>
        </form>

        {/* {<SignupPage />} */}
      </div>
    </div>
  );
};

export default Login;
