import { EmailValidation, MinPassword, MaxPassword } from "../../Utils/Validators";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { app } from "../firebaseform";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
export const NewUser = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState();
  const auth = getAuth(app);
 const navigate = useNavigate();
 const createUser=async(data)=>{
     try {
          await createUserWithEmailAndPassword(auth,data.email,data.password);
         navigate("/");
     } catch (error) {
         setError(error.message.replace('FireBase','E-Comerce error'));
     }
 };
  

  return (
    <>
      <section className="Container d-flex align-items-center justify-content-center mt-4">
        <form onSubmit={handleSubmit(createUser)} style={{ maxWidth: "500px", margin: "auto" }}>
          <h1 className="text-white text-center mb-4">Register with Spotify</h1>
          <div className="mb-3">
            <h5 className="text-white">Register your email</h5>
            <input type="text" className="form-control" {...register("email", { required: "email is required", pattern: EmailValidation })} placeholder="Type your email" name="email" />
            {errors.email && <span className="text-danger">{errors.email.message}</span>}
          </div>
          <div className="mb-3">
            <h5 className="text-white">Register your Password</h5>
            <input type="password" className="form-control" {...register("password", { required: "password is required", maxLength: MaxPassword, minLength: MinPassword })} placeholder="create your password" name="password" />
            {errors.password && <span className="text-danger">{errors.password.message}</span>}
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-submit btn-success btn-lg">
              Register
            </button>
          </div>
        </form>
        {error && <span>{error}</span>}
      </section>
    </>
  );
}
