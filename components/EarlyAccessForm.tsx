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
    const res = await fetch("api/lead", {
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  }

  return (
    <section className="mt-20 text-center flex justify-center m-5">
      <div className="bg-gray-100 p-10 rounded border border-gray-200 shadow-sm">
        <span className="font-extrabold text-2xl text-gradient bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500 font-work">
          Waiting List
        </span>
        <p className="text-gray-500 text-sm mt-2">
          You’ll be one of the first to get early access.
        </p>
        <div id="lead-form-card" className="mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email"></label>
            <input
              {...register("email", { required: true })}
              type="email"
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
              className="text-xs mt-1 text-red-400"
            >
              &nbsp;
              {errors.email?.type === "required" && "Email is required"}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccessForm;
