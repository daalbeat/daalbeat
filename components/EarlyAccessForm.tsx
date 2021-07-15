import React, { useState } from "react";

const EarlyAccessForm = () => {
  const [email, setEmail] = useState("");

  const submitLead = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const body = { email };
    const res = await fetch("/api/lead", {
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
  };

  return (
    <section className="mt-20 text-center flex justify-center m-5">
      <div className="bg-gray-100 p-10 rounded border border-gray-200 shadow-sm">
        <span className="font-extrabold text-xl text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 font-work">
          Waiting List
        </span>
        <p className="text-gray-500">
          You’ll be one of the first to get early access.
        </p>
        <div id="lead-form-card" className="mt-10">
          <form onSubmit={submitLead}>
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-none rounded-l-md py-2 px-3 focus:outline-none text-sm"
              placeholder="your@email.com"
            />
            <button
              className="bg-blue-100 hover:bg-blue-200 px-3 py-2 transition duration-500 ease-in-out rounded-none rounded-r-md focus:ring font-extrabold uppercase text-sm"
              type="submit"
            >
              Submit
            </button>
            <div
              id="lead-error-message-container"
              className="text-sm mt-3 text-red-400"
            ></div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessForm;
