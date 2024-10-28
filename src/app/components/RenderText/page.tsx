// "use client";

// import React, { useEffect, useState } from "react";

// function RenderText() {
//   const [text, settext] = useState("");
//   const [data, setdata] = useState<string[]>([]);

//   useEffect(() => {
//     const storedData = localStorage.getItem("cards");
//     if (storedData) {
//       setdata(JSON.parse(storedData));
//     }
//   }, []);

//   useEffect(() => {
//     if (data.length > 0) {
//       localStorage.setItem("cards", JSON.stringify(data));
//     }
//   }, [data]);

//   return (
//     <div>
//       <SearchBar text={text} settext={settext} setdata={setdata} data={data} />
//       <div className="flex items-stretch flex-wrap gap-4 mt-10">
//         {data.map((item, index) => (
//           <DataBox data={item} key={index} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RenderText;

// // SearchBar started haere.........
// function SearchBar({ text, settext, setdata, data }: any) {
//   return (
//     <div className="flex justify-center items-stretch mt-4 h-10" id="search">
//       <input
//         type="text"
//         className="text-black w-[50%] pl-4 border rounded-l-md"
//         placeholder="Enter the text"
//         value={text}
//         onChange={(e) => settext(e.target.value)}
//       />
//       <button
//         className="border px-2"
//         onClick={() => InputProcessing(text, setdata, data)}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// //Searchbar ended heree.......

// // DataBox component rendering input data
// function DataBox({ data }: any) {
//   return <div className="flex justify-center w-40 h-auto border">{data}</div>;
// }

// // Input processing function
// function InputProcessing(text: any, setdata: any, data: any) {

//   let splittedText = text.split(",").map((t: any) => t.trim());
//   let uniqueText = Array.from(
//     new Set([...data, ...splittedText])
//   );
//   setdata(uniqueText);
// }

// "use client ";
// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";

// function RenderText() {
//   const [username, setusername] = useState("");
//   const [storedname, setstoredname] = useState("");
//   function HandleClick() {
//     if (username) {
//       localStorage.setItem("userName", username);
//       setstoredname(username);
//     }
//   }

//   useEffect(() => {
//     const savedName = localStorage.getItem("userName");
//     if (savedName) {
//       setstoredname(savedName);
//     }
//   }, []);

//   return (
//     <div>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setusername(e.target.value)}
//         className="text-black"
//       />
//       <button onClick={HandleClick}>Submit</button>
//       {storedname && <p>Hello, {storedname}</p>}
//     </div>
//   );
// }

// export default RenderText;

"use client";

import React, { useEffect, useState } from "react";

function RenderText() {
  const [text, setText] = useState("");
  const [uniqueText, setUniqueText] = useState<string[]>([]); // Always an array

  function HandleClick() {
    // Split the input text by commas, trim whitespace, and convert to lowercase
    const newTextArray = text
      .split(",")
      .map((t) => t.trim().toLowerCase())
      .filter((t) => t !== ""); // Filter out empty values

    const newUniqueText = [...new Set(newTextArray)]; // Remove duplicates

    // Combine old uniqueText (from localStorage) with the new one
    const updatedUniqueText = [...new Set([...uniqueText, ...newUniqueText])];

    // Update state with new unique text entries
    setUniqueText(updatedUniqueText);

    // Save the updated unique text array to localStorage
    localStorage.setItem("text", JSON.stringify(updatedUniqueText));

    // Clear the input field
    setText("");
  }

  // On component mount, retrieve unique text data from localStorage
  useEffect(() => {
    const savedText = localStorage.getItem("text");
    if (savedText) {
      try {
        const parsedText = JSON.parse(savedText);
        if (Array.isArray(parsedText)) {
          setUniqueText(parsedText); // Ensure it's an array before setting state
        }
      } catch (error) {
        console.error("Error parsing localStorage data:", error);
      }
    }
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter some text"
          className="text-black pl-2"
          value={text}
          onChange={(e) => setText(e.target.value)} // Update text state
        />
        <button onClick={HandleClick}>Submit</button>
      </div>
      <div className="flex gap-4 mt-10">
        {uniqueText.length > 0 &&
          uniqueText.map((text, index) => (
            <div key={index} className="border w-30 h-auto text-white">
              {text}
            </div>
          ))}
      </div>
    </>
  );
}

export default RenderText;
