import React, { useContext, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react"; // Importing icons from Lucide
import { AdminContext } from "../contexts/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [state, setState] = useState("Admin");
  const [showPassword, setShowPassword] = useState(false); 

  const {setAdminToken, backendUrl } = useContext(AdminContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e)=>{
     e.preventDefault()

     try {

       if(state === 'Admin'){
         const response =  await axios.post(`${backendUrl}/admin/login`, {email, password})
         
            
        if(response.data.success){
          const token = response.data.data;
          localStorage.setItem("adminToken", token)
           setAdminToken(token)
           console.log(response.data.message);
           
        }else{
          console.log(data.data);
          
          // toast.error(data.message)
        
        }
           
       }else{

       }
      
     } catch (error) {
      const response = error.response.data;
      console.log(response);
      
       console.log(response.message);
       
       toast.error(response.message)
       
      
     }

  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form onSubmit={onSubmitHandler} className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-xl sm:text-2xl font-semibold text-center mb-6">
          <span className="text-blue-500">{state}</span> Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
        
          <input
            type="email"
            onChange={ (e)=>setEmail(e.target.value) }
            value={email}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input with Show/Hide Toggle */}
        <div className="mb-6 relative">
          <label className="block text-gray-700 font-medium">Password</label>
      
          <input
            type={showPassword ? "text" : "password"}
            onChange={(e)=> setPassword(e.target.value)}
            value={password}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10"
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-10 right-3 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition font-medium"
        >
          Login
        </button>

        <p className="text-center text-gray-600 mt-4 text-sm">
          {state === "Admin" ? (
            <>
              Doctor Login?{" "}
              <span
                onClick={() => setState("Doctor")}
                className="text-blue-500 font-semibold cursor-pointer hover:underline"
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Admin Login?{" "}
              <span
                onClick={() => setState("Admin")}
                className="text-blue-500 font-semibold cursor-pointer hover:underline"
              >
                Click here
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
}

export default Login;
