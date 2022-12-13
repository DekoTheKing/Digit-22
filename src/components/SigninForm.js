import React from 'react';
import { useForm } from "react-hook-form";
import "./SigninForm.css";

const SigninForm = () => {

    const { register, handleSubmit, errors } = useForm();

    function onSubmit(data) {
        console.log("Data submitted: ", data);
      }

    return (
        <div className="Signin-form" >

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <label>
      Name:
      <input type="text" name="name" />
      </label>
      <label>
      Lastname:
      <input type="text" name="lastname" />
      </label>

        <label htmlFor="inputEmail">E-mail</label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          ref={register("email",{
            required: "Enter your e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Enter a valid e-mail address",
            },
          })}
        />
        <label htmlFor="inputEmail">Re-enter e-mail</label>
        <input
          type="email"
          id="inputEmail"
          name="email"
          ref={register("reenteremail",{
            required: "Reenter your e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "e-mail address must match",
            },
          })}
        />
        {errors && errors.email && <p className="error">{errors.email.message}</p>}

        <label htmlFor="inputPassword">Password</label>
        <input
          type="password"
          id="inputPassword"
          name="password"
          ref={register("password", { required: "Enter your password" })}
        />
        {errors && errors.password && <p className="error">{errors.password.message}</p>}

        <label htmlFor="inputPassword">Re-enter password</label>
        <input
          type="password"
          id="inputPassword"
          name="password"
          ref={register("repassword",{ required: "Re-enter your password" })}
        />
        {errors && errors.password && <p className="error">{errors.password.message}</p>}


        <button type="submit">Sign in</button>
      </form>
    </div>  
    );
};

export default SigninForm;