import React, { useState } from "react";
import Link from "next/link";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {

  const [email,setEmail]=useState('');
  const [wrongEmail,setWrongEmail]=useState(false)

  const emailEntered=React.useCallback((e)=>{

    const eme=e.target.value
    setEmail(eme);
  })

  const onSubmit=React.useCallback(async (e)=>{
    e.preventDefault();

    const res = await fetch('/api/user', {
      body:JSON.stringify({email}),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()
    console.log("result",result);
  })
  return (
    <>
      {/* <IndexNavbar fixed /> */}
      <div className="w-full h-full bg-gray-50">
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="rounded-lg bg-white flex items-center overflow-hidden shadow-lg">
            <div className="p-14 flex-1">
        


              <h1 className="font-bold text-3xl">
                <svg
                  className="w-8 inline-block h-8 text-pink-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                HopSugar
              </h1>
              <p className="text-gray-400">We are coming soon!</p>

              <div className="mt-4">
                <form onSubmit={onSubmit}>
                <div>
                  <label>Email</label>
                  <input
                    className="px-3 mt-1 py-2 rounded-md shadow-sm border block w-full"
                    placeholder="someone@somewhere.com"
                    type="email"
                    onChange={emailEntered}
                    value={email}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>

                <button className="rounded-md mt-2 bg-pink-500 text-white px-4 py-2" type="submit">
                  Submit
                </button>
                </form>
              </div>
          
            </div>
            <div className="flex-1">
              <img src={require("assets/img/cover.png")} width="500px" />
            </div>
          </div>
        </div>
      </div>
      
    {/* <Footer /> */}
    </>
  );
}
