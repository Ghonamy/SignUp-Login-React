import React, { useState } from "react";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
function Form() {
  const [action, setAction] = useState("Sign Up");
  return (
    <div className="bg-gradient-to-r from-[#2A00B7] via-[#400168] to-[#39005d] min-h-screen pt-[10px]">
      <div className="bg-[#FFF] flex flex-col mt-[100px] mx-auto gap-5 p-9 rounded-lg w-[450px]">
        <div className="flex flex-col items-center mb-3">
          <h1 className="text-[40px] text-[#3C009D] font-bold">{action}</h1>
          <div className="bg-[#3C009D] h-[5px] w-[70px] my-1 rounded-full"></div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          {action === "Login" ? (
            ""
          ) : (
            <div className="flex items-center bg-[#eaeaea] w-[380px] h-[60px] p-3 gap-3 rounded-lg">
              <img src={user_icon} alt="Name" />
              <input
                type="text"
                placeholder="Name"
                className="border-0 outline-0 w-[350px] h-[50px]"
              />
            </div>
          )}

          <div className="flex items-center bg-[#eaeaea] w-[380px] h-[60px] p-3 gap-3 rounded-lg">
            <img src={email_icon} alt="Email" />
            <input
              type="email"
              placeholder="Email"
              className="border-0 outline-0 w-[350px] h-[50px]"
            />
          </div>
          <div className="flex items-center bg-[#eaeaea] w-[380px] h-[60px] p-3 gap-3 rounded-lg">
            <img src={password_icon} alt="Password" />
            <input
              type="password"
              placeholder="Password"
              className="border-0 outline-0 w-[350px] h-[50px]"
            />
          </div>
        </div>
        {action === "Login" ? (
          <p className="text-[#606060]">
            Forget Password?{" "}
            <span className="text-[#3C009D] font-semibold cursor-pointer">
              Click Here!
            </span>
          </p>
        ) : (
          ""
        )}
        <div className="flex gap-5 items-center justify-center my-2">
          <button
            onClick={() => setAction("Sign Up")}
            className={`px-12 py-2 rounded-full text-[18px] transition-all duration-300 cursor-pointer ${
              action === "Login"
                ? "bg-[#eaeaea] text-[#5f5f5f]"
                : "bg-[#3C009D] text-white"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setAction("Login")}
            className={`px-12 py-2 rounded-full text-[18px] transition-all duration-300 cursor-pointer ${
              action === "Sign Up"
                ? "bg-[#eaeaea] text-[#5f5f5f]"
                : "bg-[#3C009D] text-white"
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
