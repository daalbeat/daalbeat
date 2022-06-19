// ReactJS
import { useForm } from "react-hook-form";

export default function Newsletter() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
    <div className="pb-16 bg-white mt-18 sm:py-2">
      <div id="join-waitlist" className="relative sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
          <svg
            className="absolute -ml-3 top-8 left-1/2"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={392}
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative px-6 py-10 overflow-hidden bg-purple-900 shadow-xl rounded-2xl sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-indigo-500 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-indigo-700 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Get notified when we&rsquo;re launching.
                </h2>
                <p className="max-w-2xl mx-auto mt-6 text-lg text-indigo-200">
                  We are building the new healthcare toolkit on blockchain.
                </p>
              </div>

              <form
                className="mt-12 sm:mx-auto sm:max-w-lg sm:flex"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex-1 min-w-0">
                  <label htmlFor="cta-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    {...register("email", { required: true })}
                    id="cta-email"
                    type="email"
                    className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-900"
                    placeholder="Enter your email"
                  />
                  <div
                    id="lead-status-message-container"
                    className="mt-2 text-xs text-red-400"
                  >
                    &nbsp;
                    {errors.email?.type === "required" && "Email is required"}
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="block w-full px-5 py-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-900 sm:px-10"
                  >
                    {isSubmitting && (
                      <div className="flex">
                        <svg
                          className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <div>Submitting</div>
                      </div>
                    )}
                    {!isSubmitting && <span>Submit</span>}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
