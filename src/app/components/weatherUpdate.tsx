import { Container } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

export const revalidat = 10;

function WeatherUpdate() {
  const [clicked, setclicked] = useState(false);
  const [input, setinput] = useState("");
  const [info, setinfo] = useState({
    condition: { icon: "", text: "" },
    tempinC: 0,
    tempinF: 0,
  });
  console.log(info);
  async function handleClick(input: string) {
    setclicked(true);
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=e2881c38544744d38b974702240710&q=Township, ${input}&aqi=yes`
    );
    const data = await res.json();
    setinfo((pre) => ({
      ...pre,
      condition: {
        icon: data.current.condition.icon,
        text: data.current.condition.text,
      },
      tempinC: data.current.temp_c,
      tempinF: data.current.tem_f,
    }));
  }

  return (
    <div className="my-10 ">
      <Container maxWidth="lg">
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-7xl text-rose-600 text-center">
            Know the Weather <br />
            condition in your Area
          </h1>
          <div className="flex gap-4 justify-center items-center mt-10 ">
            <div className="font-bold text-2xl ">City Name :</div>
            <input
              onChange={(e) => setinput(e.target.value)}
              type="text"
              placeholder="Enter your city Name"
              className="pl-2 py-3 rounded-md text-black w-1/2 outline-none hover:outline-slate-500"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              onClick={() => handleClick(input)}
              className="py-2 px-5 rounded-md bg-gradient-to-r from-amber-500 to-rose-500 text-white font-semibold mt-6 w-1/6 text-2xl"
            >
              Get info
            </button>
          </div>

          <div className="mt-20">
            <div className="font-bold text-4xl text-center text-amber-500">
              Your City Current Weather Situation
              {clicked && (
                <div className="mt-10 flex flex-col gap-4">
                  <div>{`Condiiton : ${info.condition.text}`}</div>
                  {/* <Image
                    src={`${info.condition.icon}`}
                    alt="weather image"
                    width={100}
                    height={100}
                  /> */}
                  <div>{`Tempearture in Celcius : ${info.tempinC}`}</div>
                  <div>{`Temperature in Farenhite : ${info.tempinF}`}</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WeatherUpdate;
