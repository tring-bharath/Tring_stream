import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Toaster,toast } from 'sonner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

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
    console.log(user);

    const query = `
    query {
      login(email: "${user.email}", password: "${user.password}")
    }
`;
    try {
      const response = await axios.post("https://nzqqkzs6-3000.inc1.devtunnels.ms/graphql", { query });//http://localhost:3000/graphql
      console.log(response);

      const username = response.data.data.login;

      if (username == "InvalidCredentials") {
        toast.error("Invalid Credentials")
        return;
      }
      if (username == "UserNotFound") {
        toast.error("Email address not registered")
        return;
      }
      
      localStorage.setItem("user",JSON.stringify(username));
      toast.error(`Welcome ${username}`)
      nav('/');


    } catch (error) {
      toast.error("Something went wrong")
    }
  };

  return (
    <div>
      <Toaster />
      <form className="form d-flex flex-column container " onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center">Login</h3>
        <label className="mt-3">Email:</label>
        <input
          className="form-control border-success"
          type="email"
          {...register("email")}
        />
        <p className="text-danger">{errors.email?.message}</p>
        <label>Password:</label>
        <input
          className="form-control border-success"
          type="password"
          {...register("password")}
        />
        <p className="text-danger">{errors.password?.message}</p>
        <button className="px-4 py-2 bg-primary mt-2 text-white rounded-1 align-self-center" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
