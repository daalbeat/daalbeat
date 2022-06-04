import Blog from "../components/Blog";

function Services() {
  return (
    <div className="mx-10 mt-10">
      <div className="container flex flex-col mx-auto md:flex-row justify-evenly">
        <div className="flex py-5 mx-auto flex-column">
          <div className="self-center p-3 mr-5 rounded-full bg-pink-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-pink-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </div>
          <div>
            <span className="font-bold">
              Create a DAO with friends and family
            </span>
            <p className="text-sm text-gray-400">
              Secure healthcare emergency funds together.
            </p>
          </div>
        </div>
      </div>
      <div className="container w-4/5 mx-auto md:w-1/2">
        <Blog />
      </div>
    </div>
  );
}

export default Services;
