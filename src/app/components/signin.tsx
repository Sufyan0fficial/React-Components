"use client";

import { Container } from "@mui/material";

import Link from "next/link";
import React, { useState } from "react";

function SigninForm() {
  const [email, setemail] = useState("");
  const [isError, setIsError] = useState(false);
  const [password, setpassword] = useState("");
  const [submitted, setsubmitted] = useState(false);
  const data = { Email: "sufyan@gmail.com", Password: "1234" };

  async function handleSubmit(e: any) {
    e.preventDefault();
    setsubmitted(true);
    try {
      if (!email) {
        setIsError(true);
        return;
      }

      if (!password) {
        setIsError(true);
        return;
      }

      if (email == data.Email && password == data.Password) {
        console.log("Login Successful");
        setsubmitted(true);
      } else {
        throw new Error("Login Failed_Invalid Credentials");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  }

  return (
    <div className="lg:w-[30%] w-full">
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
              Sign IN
            </p>
            <p className="text-center text-sm">
              Enter your credentials to access your account
            </p>
          </div>
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <label htmlFor="email" className="text-sm">
              Email
              <input
                id="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                  setsubmitted(false);
                }}
                placeholder="Enter your email"
                className="pl-2 border w-full py-2 rounded-sm mt-1 focus:outline-none focus:border-amber-300"
              />
              {isError && email === "" && (
                <p className="text-red-500 text-xs m-0 p-0 leading-none my-1">
                  Email Required!
                </p>
              )}
            </label>

            <label htmlFor="password" className="text-sm ">
              Password
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  const newvalue = e.target.value;
                  //updating password
                  setpassword(newvalue);
                  setsubmitted(false);
                }}
                placeholder="Enter yor password"
                className="pl-2 border w-full py-2 rounded-sm mt-1 mb-2 focus:outline-none focus:border-amber-300"
              />
              {isError && password === "" && (
                <p className="text-red-500 text-xs m-0 p-0 leading-none mt-1">
                  Password Required !
                </p>
              )}
            </label>

            <button
              className="bg-amber-500 rounded-sm w-full text-white py-2 uppercase mt-2"
              type="submit"
            >
              Sign in
            </button>
            {email !== "" &&
              password !== "" &&
              submitted &&
              (email == data.Email && password == data.Password ? (
                <p className="text-base text-green-600 text-center">
                  Login Successfull
                </p>
              ) : (
                <p className="text-base text-red-600 text-center">
                  Invalid Credentials
                </p>
              ))}
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

export default SigninForm;
