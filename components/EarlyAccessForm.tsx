import React, { useState } from "react";
import { useForm } from "react-hook-form";

const EarlyAccessForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function onSubmit(value) {
    const leadMessage = document.getElementById(
      "lead-status-message-container"
    );

    try {
      const res = await fetch("api/lead", {
        body: JSON.stringify(value),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      if (res.status == 200) {
        reset();
        leadMessage.classList.remove("text-red-400");
        leadMessage.classList.add("text-green-600");
        leadMessage.innerHTML = "Thank you! You are on the list.";
      }

      if (res.status == 500) {
        reset();
        leadMessage.innerHTML = "💩 happens.  Connect with us @daalbeat";
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="px-2 text-center mt-14">
        <small className="font-bold text-gray-700">
          We are building the new healthcare emergency fund!
        </small>
      </div>
      <div className="flex justify-center m-5 text-center">
        <div className="p-10 bg-gray-100 border border-gray-200 rounded shadow-sm">
          <div className="mt-3 text-2xl font-extrabold text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 font-work">
            Waiting List
          </div>
          <p className="mt-2 text-sm text-gray-500">
            You’ll be one of the first to get early access.
          </p>
          <div id="lead-form-card" className="mt-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="email"></label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="flex-1 px-3 py-2 text-sm rounded-none rounded-l-md focus:outline-none"
                placeholder="your@email.com"
              />
              <button
                className="px-3 py-2 text-sm font-extrabold uppercase transition duration-500 ease-in-out bg-blue-100 rounded-none hover:bg-blue-200 rounded-r-md focus:ring"
                type="submit"
              >
                Submit
              </button>
              <div
                id="lead-status-message-container"
                className="mt-2 text-xs text-red-400"
              >
                &nbsp;
                {errors.email?.type === "required" && "Email is required"}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EarlyAccessForm;
