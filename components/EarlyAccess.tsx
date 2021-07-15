import React from "react";

const EarlyAccess = () => {
  return (
    <section className="mt-20 text-center flex flex-row justify-center m-5">
      <div className="bg-gray-50 p-10 rounded border border-gray-100 shadow-sm">
        <span className="font-extrabold text-xl text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 font-work">
          Early Access
        </span>
        <p className="text-gray-500">
          DaalBeat is a marketplace that makes healthcare pricing transparent
          and simplified.
        </p>
        <div className="mt-10">
          <input
            type="text"
            name="early-access-email"
            id="early-access-email"
            className="flex-1 border border-gray-300 rounded-none rounded-l-md"
            placeholder="your@email.com"
          />
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
