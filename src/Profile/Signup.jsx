import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
import axios from "axios";

export default function Signup() {

  const schema = yup.object().shape({
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required(),
  });

  const nav=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    console.log(data);
    
    const query= `
          mutation {
            register(first_name: "${data.first_name}", last_name: "${data.last_name}", email: "${data.email}", password: "${data.password}")
          }
        `;
    try {
      const response = await axios.post("http://localhost:3000/graphql", {
        query
      });
      console.log(response.data.data.register);
      
    } catch (error) {
      
    }
  };

  return (
    <form className="form-container " onSubmit={handleSubmit(onSubmit)}>
      <input {...register("first_name")} placeholder="First Name" />
      <p>{errors.first_name?.message}</p>

      <input {...register("last_name")} placeholder="Last Name" />
      <p>{errors.last_name?.message}</p>

      <input {...register("email")} placeholder="Email" />
      <p>{errors.email?.message}</p>

      <input {...register("password")} type="password" placeholder="Password" />
      <p>{errors.password?.message}</p>

      <button type="submit">Register</button>
    </form>
  );
}
