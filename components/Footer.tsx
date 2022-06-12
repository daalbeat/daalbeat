// NextJS
import Link from "next/link";

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
      </div>
    </>
  );
}
