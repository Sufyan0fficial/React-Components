import React, { useState } from "react";

function PassingDatatoApi() {
  const [Data, setData] = useState({});
  console.log("Data is", Data);
  const options: any = {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify({
      username: "usman",
      email: "sufyan388official@gmail.com",
      password: "1234",
      role: "USER",
    }),
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
