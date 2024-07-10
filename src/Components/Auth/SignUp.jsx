import React, { useState } from "react";
// import { apiConnector } from "../../Service/apiconnector";
// import { authEndpoints} from "../../Service/apis"

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isCreated, setIsCreated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const response = apiConnector("POST",authEndpoints.CREATE_NEW_ADMIN_API,formData)
    //   setFormData({
    //     name: "",
    //     email: "",
    //     password: "",
    //     position: "",
    //   });
    //   setIsCreated(true);
    //   setTimeout(()=>{
    //     setIsCreated(false);
    //   },5000) // Log the response from the server
    // } catch (error) {
    //   console.error("Error:", error);
    // }
  };

  return (
    <div className="flex min-h-screen items-center mt-4 justify-center bg-transparent ">
      <div className="p-6 rounded-3xl w-full sm:w-96 text-center">
        <h2 className="text-4xl font-semibold text-blue-600 mb-10">Create New Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-8 mt-6">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 w-full rounded-xl border mb-2"
              placeholder="Your name"
              required
            />
          </div>
          <div className="mb-8">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 w-full rounded-xl border mb-2"
              placeholder="Your email"
              required
            />
          </div>
          <div className="mb-8">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="p-3 w-full rounded-xl border mb-2"
              placeholder="Your password"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white w-full font-bold font-sans py-3 rounded-xl mb-8 hover:bg-indigo-600"
          >
            Sign Up
          </button>
        </form>

        {isCreated && <h1 className="text-green-600 text-2xl">Sucessfully created new Admin !!!!</h1>}

      </div>
    </div>
  );
};

export default SignUp;
