import React from "react";

const EarlyAccess = () => {
  return (
    <section className="mt-20 text-center flex flex-row justify-center m-5">
      <div className="bg-gray-50 p-10 rounded border border-gray-100 shadow-sm">
        <span className="font-extrabold text-xl">Early Access</span>
        <p>Hello world.</p>
        <div className="grid grid-cols-2">
          <div>
            <input
              type="text"
              name="early-access-email"
              id="early-access-email"
              className="flex-1 border border-gray-300 rounded-none rounded-l-md"
              placeholder="your@email.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
