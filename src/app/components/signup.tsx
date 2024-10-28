"use client";

import { Container } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function SignupForm() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [isError, setisError] = useState<{ [key: string]: string }>({});
  useEffect(() => {
    console.log("Errrroososo", isError);
  }, [isError]);

  const [issubmit, setissubmit] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, id } = e.target;
    setformData((pre) => ({
      ...pre,
      [id]: value,
    }));
  }

  function validatePassword(password: string) {
    const PasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return PasswordRegex.test(password);
  }

  function validateEmail(email: string) {
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return EmailRegex.test(email);
  }

  function formValidation() {
    const errors: { [key: string]: string } = {};
    if (!formData.name) {
      errors.name = "Name Required";
    }
    if (!formData.password) {
      errors.password = "Password Required";
    } else if (!validatePassword(formData.password)) {
      errors.password =
        "Password must be at least 8 characters long, include a number, an uppercase and lowercase letter.";
    }

    if (!formData.email) {
      errors.email = "Email Required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid Email Format";
    }

    if (!formData.confirmpassword) {
      errors.confirmpassword = "Password Verification Required";
    }
    if (formData.password !== formData.confirmpassword) {
      errors.confirmpassword = "Password not matched";
    }

    setisError(errors);
    return Object.keys(errors).length === 0;
  }

  interface Data {
    name: string;
    email: string;
    password: string;
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    setissubmit(true);
    if (formValidation()) {
      const Data: Data = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      localStorage.setItem("UserData", JSON.stringify(Data));
    }

    formValidation();

    const email = "sufyan@gmail.com";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log("email validatieon", regex.test(email));
  }
  return (
    <div className="lg:w-[33%] w-full">
      <Container maxWidth="md">
        <div className="bg-white text-black flex flex-col gap-8 px-8 py-10  rounded-3xl ">
          <p className="font-bold uppercase text-center tracking-tight text-3xl">
            <span className="text-amber-300 text-4xl font-thin hidden lg:inline">
              ▌
            </span>{" "}
            Crud Operations
          </p>
          <div className="mb-2">
            <p className="font-semibold uppercase text-center text-xl pb-1">
              Sign UP
            </p>
            <p className="text-center text-sm">
              Enter your information to get registered
            </p>
          </div>
          <form
            action="submit"
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name" className="text-sm">
              Name
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="pl-2 border w-full py-2 rounded-sm mt-1 focus:outline-none focus:border-amber-300"
                value={formData.name}
                onChange={handleChange}
              />
              {issubmit && isError && (
                <p className="text-red-700 text-sm">{isError.name}</p>
              )}
            </label>
            <label htmlFor="email" className="text-sm">
              Email
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="pl-2 border w-full py-2 rounded-sm mt-1 focus:outline-none focus:border-amber-300"
                value={formData.email}
                onChange={handleChange}
              />
              {issubmit && isError && (
                <p className="text-red-700 text-sm">{isError.email}</p>
              )}
            </label>

            <label htmlFor="password" className="text-sm ">
              Password
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="pl-2 border w-full py-2 rounded-sm mt-1 mb-2 focus:outline-none focus:border-amber-300"
                value={formData.password}
                onChange={handleChange}
              />
              {issubmit && isError && (
                <p className="text-red-700 text-sm">{isError.password}</p>
              )}
            </label>
            <label htmlFor="confirmpassword" className="text-sm ">
              Confirm Password
              <input
                type="password"
                id="confirmpassword"
                placeholder="Re-enter your password"
                className="pl-2 border w-full py-2 rounded-sm mt-1 mb-2 focus:outline-none focus:border-amber-300"
                value={formData.confirmpassword}
                onChange={handleChange}
              />
              {issubmit && isError && (
                <p className="text-red-700 text-sm">
                  {isError.confirmpassword}
                </p>
              )}
            </label>

            <button
              className="bg-amber-500 rounded-sm w-full text-white py-2 uppercase mt-2"
              type="submit"
            >
              Sign up
            </button>

            <div className="flex justify-center items-center gap-1 ">
              <p className="text-sm">Forgot your password?</p>
              <Link
                href={""}
                className="text-amber-500 cursor-pointer text-sm underline"
              >
                Reset Password
              </Link>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SignupForm;
