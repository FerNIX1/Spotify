import { EmailValidation,MinPassword,MaxPassword } from "../../Utils/Validators";
import { useForm } from "react-hook-form"
import "./Login.css"
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js'
import { useState } from "react";
import {app} from "../firebaseform"
import {signInWithEmailAndPassword} from "firebase/auth";
export const Login = () => {
  const {register, handleSubmit, formState: {errors }} = useForm()
  const navigate = useNavigate()
  const auth =getAuth(app)
  const [error, setError] = useState()
  const Login=async(data)=>{
    try {
      await signInWithEmailAndPassword(auth,data.email,data.password);
     navigate("/HomePage");
 } catch (error) {
     setError(error.message.replace('FireBase','E-Comerce error'));
 }
  }
  
  return (
    <section className="Container d-flex align-items-center justify-content-center mt-4">
      <form onSubmit={handleSubmit(Login)} style={{ maxWidth: "500px", margin: "auto" }}>
        <h1 className="text-white text-center mb-4">Login with Spotify</h1>
        <div className="mb-3">
          <h5 className="text-white">Email</h5>
          <input type="text" className="form-control" {...register("email",{required:"email is required",pattern:EmailValidation})} placeholder="Type your email" name="email" />
          {errors.email && <span className="text-danger">{errors.email.message}</span>}
        </div>
        <div className="mb-3">
          <h5 className="text-white">Password</h5>
          <input type="password" className="form-control" {...register("password",{required:"password is required",maxLength:MaxPassword,minLength:MinPassword})} placeholder="Type your password" name="password" />
          {errors.password && <span className="text-danger">{errors.password.message}</span>}
        </div>
        <div className="mb-3">
          <span className="text-white">Dont have an account?<Link to={"/NewUser"}>Subscribe to Spotify</Link></span>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-submit btn-success btn-lg">
            Log in
          </button>
        </div>
      </form>
      {
              error && <span className='text-danger'>{error}</span>
           }
    </section>
  )
}
