function Services() {
  return (
    <div className="mx-10 mt-20">
      <div className="container mx-auto flex md:flex-row flex-col justify-evenly">
        <div className="flex flex-column py-5">
          <div className="bg-pink-50 p-3 rounded-full mr-5 self-center">
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
                d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
              />
            </svg>
          </div>
          <div>
            <span className="font-bold">Pricing Transparency</span>
            <p className="text-sm text-gray-400">Search and compare pricing</p>
          </div>
        </div>
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
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <div>
            <span className="font-bold">Your Health Records</span>
            <p className="text-sm text-gray-400">
              Consolidate your medical records
            </p>
          </div>
        </div>
      </div>
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
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
              />
            </svg>
          </div>
          <div>
            <span className="font-bold">Your Claims and Bills</span>
            <p className="text-sm text-gray-400">No more duplication errors</p>
          </div>
        </div>
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
            <span className="font-bold">Fundraise for Medical Needs</span>
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
