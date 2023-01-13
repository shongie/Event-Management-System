
import { useEffect } from "react";
import { React, useRef } from "react";
import axios from "axios";

const ForgotPasswordPage = () => {
    const forms = useRef();
    const emailInputRefs = useRef();





    async function forgot_Password  (e){
        e.preventDefault();
    
      
        const enteredEmail = emailInputRefs.current.value;
        let data = {
          email: enteredEmail,
        };
    
        console.log(data);
     
    
    
        axios
          .post(
            "http://localhost:1337/api/auth/forgot-password",
            data,
            {
              headers: {
                Authorization:
                  "Bearer c03f2ff3dc732f216fff5ab4e4766d1fc88b820752ff5cc25d47cb4e5e867b67e01f3748cf3d6de665bad7c22f2c995d3f549073874e893ac037685ed2081be326647aac58ae737ccee9dde8d36d56c36f84fe34ecd6e2b42b27dff6662b6e959f420b117d0c3cddcdcf45263bfe82dc75fb854690842ed01bb88f960226d62e",
              },
            }
          )
          .then((response) => {
            // Handle success.
            console.log(response);
          })
          .catch((error) => {
            // Handle error.
            console.log("An error occurred:", error.response);
          });
        
    
        e.target.reset();
      };
    
  return (
    <section className="bg-ct-blue-600 min-h-screen grid place-items-center">
      <div className="w-full">
        <h1 className="text-4xl xl:text-6xl text-center font-[600] text-ct-yellow-600 mb-7">
          Forgot Password
        </h1>
       
          <form
            ref={forms}
            onSubmit={forgot_Password}
            className="max-w-md w-full mx-auto overflow-hidden shadow-lg bg-ct-dark-200 rounded-2xl p-8 space-y-5"
          >
            <input
            ref={emailInputRefs}
            label="Email Address" name="email" type="email" />
            <button
              
            >
              Send Reset Code
            </button>
          </form>
       
      </div>
    </section>
  );
};

export default ForgotPasswordPage;


