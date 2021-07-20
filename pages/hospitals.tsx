import React from "react";
import Link from "next/link";
import Image from "next/image";
import prisma from "./../lib/prisma";
import useSWR from "swr";
import fetch from "unfetch";
import { useSession } from "next-auth/client";
import * as d3 from "d3";
import DaalBeatLogo from "../public/daalbeat.png";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Hospitals = () => {
  const [session, loading] = useSession();
  const { data, error } = useSWR("/api/hospitals", fetcher);

  if (error) return <div>An error occured.</div>;
  if (!data) return <div className="p-5 text-green-700">Loading ...</div>;

  return (
    <>
      <div className="bg-white p-5 fixed t-0 w-full filter drop-shadow">
        <Link href="/">
          <a>
            <Image
              src={DaalBeatLogo}
              width={30}
              height={34}
              alt="DaalBeat Logo"
            />
          </a>
        </Link>
      </div>

      <div className="pt-20">
        {data.map((hospital) => (
          <div key={hospital.id} className="p-5 mx-5 max-w-3xl border-b">
            <div>{hospital.facilityName}</div>
            <div className="text-sm text-gray-400">
              {hospital.address}
              <br />
              {hospital.city}, {hospital.state} {hospital.zipcode}
              <div className="flex flex-column mt-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-red-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div className="ml-1 text-black font-bold">
                  {Number.isNaN(parseInt(hospital.hospitalOverallRating))
                    ? "No Rating Data"
                    : hospital.hospitalOverallRating + "/5"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hospitals;
