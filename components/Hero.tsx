// ReactJS
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <main className="px-4 mx-auto mt-16 max-w-7xl sm:mt-40">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          className="text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">Healthcare Toolkit on the</span>{" "}
            <span className="block text-purple-900 xl:inline">Blockchain</span>
          </h1>
          <p className="max-w-md mx-auto mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Building the new healthcare infrastructure.
          </p>
          <div className="max-w-md mx-auto mt-5 sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="https://docs.daalbeat.com"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-purple-900 border border-transparent rounded-md hover:bg-purple-700 md:py-4 md:text-lg md:px-10"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="https://discord.gg/wgv22BAQDu"
                className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-purple-900 bg-white border border-transparent border-gray-200 rounded-md hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Join Community
              </a>
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
}
