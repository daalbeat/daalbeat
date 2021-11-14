function Services() {
  return (
    <div className="mx-10 mt-20">
      <div className="container mx-auto flex md:flex-row flex-col justify-evenly">
        <div className="flex flex-column py-5">
          <div className="mr-5 self-center bg-pink-50 rounded-full p-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-pink-500"
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
              Fundraise Crypto for Medical Needs
            </span>
            <p className="text-sm text-gray-400">
              Get help from friends and family
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
