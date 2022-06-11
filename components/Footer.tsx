// NextJS
import Link from "next/link";

// ReactJS
import { FiGithub, FiBook } from "react-icons/fi";
import { TbBrandDiscord } from "react-icons/tb";

export default function Footer() {
  return (
    <>
      <div className="mt-20 text-center text-gray-400">
        <div>
          <small>
            <span className="mr-1">Built by</span> 🌙
            <span className="ml-3">
              <Link href="https://twitter.com/sicktastic">
                <a className="hover:text-gray-700">Sicktastic</a>
              </Link>
            </span>
          </small>
        </div>
        <div className="flex justify-center mt-8 mb-10">
          <Link href="https://github.com/daalbeat">
            <a>
              <FiGithub className="hover:text-gray-700" />
            </a>
          </Link>
          <Link href="https://docs.daalbeat.com">
            <a className="ml-4">
              <FiBook className="hover:text-gray-700" />
            </a>
          </Link>
          <Link href="https://discord.gg/wgv22BAQDu">
            <a className="ml-4">
              <TbBrandDiscord className="hover:text-gray-700" />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
