import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Toaster, toast } from 'sonner';
import * as yup from 'yup'
import axios from "axios";

export default function Signup() {

  const schema = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    terms: yup.bool().oneOf([true], "You must accept the terms and conditions")
  });

  const nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    console.log(data);

    const query = `
          mutation {
            register(first_name: "${data.first_name}", last_name: "${data.last_name}", email: "${data.email}", password: "${data.password}")
          }
        `;
    try {
      const response = await axios.post("https://nzqqkzs6-3000.inc1.devtunnels.ms/graphql", {
        query
      });//http://localhost:3000/graphql
      if (response.data.data.register == "successful") {
        toast.success("Successfully Registered!")
        localStorage.setItem("user",JSON.stringify(data));
        nav('/registration');

      } else {
        toast.success("Email Already Exists")
      }

    } catch (error) {

    }
  };

  return (
    <>
      <Toaster />
      <form className="form-container d-flex flex-column container" onSubmit={handleSubmit(onSubmit)}>
        <h3 className="text-center">Sign-Up</h3>
        <label className="mt-2">First Name*</label>
        <input {...register("first_name")} className="form-control" placeholder="First Name" />
        <p className="text-danger">{errors.first_name?.message}</p>
        <label className="mt-2">Last Name:</label>
        <input {...register("last_name")} className="form-control" placeholder="Last Name" />
        <p className="text-danger">{errors.last_name?.message}</p>
        <label className="mt-2">Email*</label>
        <input {...register("email")} className="form-control" placeholder="Email" />
        <p className="text-danger">{errors.email?.message}</p>
        <label className="mt-2">Password*</label>
        <input {...register("password")} className="form-control" type="password" placeholder="Password" />
        <p className="text-danger">{errors.password?.message}</p>
        <div className="mt-2 d-flex align-items-center">
          <input id="terms" type="checkbox" {...register("terms")} className="me-2" />
          <label htmlFor="terms" className="d-flex align-self-center">I agree to the &nbsp;<a href="https://tringapps.com/" >terms and conditions</a></label>
        </div>
        <p className="text-danger">{errors.terms?.message}</p>

        <button type="submit" className="px-4 py-2 bg-primary mt-2 text-white rounded-1 align-self-center">Register</button>
      </form>
    </>
  );
}
