import React, { useState } from "react";

function PassingDatatoApi() {
  const [Data, setData] = useState({});
  console.log("Data is", Data);
  // Define the structure of the body separately
  interface RequestBody {
    username: string;
    email: string;
    password: string;
    role: "USER" | "ADMIN"; // Assuming 'role' can be 'USER' or 'ADMIN'
  }

  // Define the main options type
  interface OptionsType {
    method: "POST" | "GET" | "PUT" | "DELETE"; // Restricting to common HTTP methods
    headers: {
      "Content-Type": string;
    };
    body: string; // JSON.stringify will produce a string
  }

  // Define the options object using the interfaces
  const options: OptionsType = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({
      username: "usman",
      email: "sufyan388official@gmail.com",
      password: "1234",
      role: "USER",
    } as RequestBody),
  };

  async function handleClick() {
    const getData = await fetch(
      "https://api.freeapi.app/api/v1/users/register",
      options
    );
    const jsonData = await getData.json();
    console.log(jsonData);
    setData(jsonData);
  }
  return (
    <button
      className="font-bold bg-rose-500 border-amber-500 rounded-md py-2 px-4 text-center"
      onClick={handleClick}
    >
      Click me
    </button>
  );
}

export default PassingDatatoApi;
