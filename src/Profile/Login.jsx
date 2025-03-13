import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ProfileName } from '../routes/AppRoutes';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Login = () => {
  const [toggleEye,setToggleEye]=useState(false);
  const [passwordType,setPasswordType]=useState("password");
  const {userName,setUsername}=useContext(ProfileName);

  const nav=useNavigate();

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (user) => {


    const query = `
    query {
      login(email: "${user.email}", password: "${user.password}")
      {
        id
        user
      }
    }
`;
    try {
      console.log(user);
      
      const userLogin=await axios.post("https://nzqqkzs6-5000.inc1.devtunnels.ms/loginUser",user)
      console.log(userLogin);
      
      const response = await axios.post("https://nzqqkzs6-3000.inc1.devtunnels.ms/graphql", { query });//http://localhost:3000/graphql
      console.log(response);

      const username = response.data.data.login.user;
      const userId=response.data.data.login.id;

      if (username == "InvalidCredentials") {
        toast.error("Invalid Credentials")
        return;
      }
      if (username == "UserNotFound") {
        toast.error("Email address not registered")
        return;
      }
      
      localStorage.setItem("user",JSON.stringify(username));
      localStorage.setItem("id",JSON.stringify(userId));
      setUsername(username);
      console.log(userName);
      
      toast.error(`Welcome ${username}`)
      nav('/');


    } catch (error) {
      console.log(error);
      
      toast.error("Something went wrong")
    }
  };

  const setEye=()=>
  {
    setToggleEye(!toggleEye);
    setPasswordType(passwordType=="password"?"text":"password");
  }

  return (
    <div>
      <ToastContainer />
      <form className="form-container d-flex flex-column container" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center">Login</h3>
        <div className="email">
        <label className="mt-3">Email*</label>
        <input
          className="form-control border-success"
          type="email"
          {...register("email")}
        />
        </div>
        <p className="text-danger">{errors.email?.message}</p>
        
        <label>Password*</label>
        <div className="password d-flex align-items-center">
        <input
          className="form-control border-success"
          type={passwordType}
          {...register("password")}
        />
        <span className="eyeButton" onClick={()=>setEye()}>{toggleEye?<FaEye/>:<FaEyeSlash/>}</span>
        </div>
        <p className="text-danger">{errors.password?.message}</p>
        <button className="px-4 py-2 bg-primary mt-2 text-white rounded-1 align-self-center" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
