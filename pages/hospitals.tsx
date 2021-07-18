import React from "react";
import prisma from "./../lib/prisma";
import useSWR from "swr";
import fetch from "unfetch";
import { useSession } from "next-auth/client";
import * as d3 from "d3";

const fetcher = (url) => fetch(url).then((r) => r.json());

const Hospitals = () => {
  const [session, loading] = useSession();
  const { data, error } = useSWR("/api/hospitals", fetcher);

  if (error) return <div>An error occured.</div>;
  if (!data) return <div className="p-5 text-green-700">Loading ...</div>;

  return (
    <>
      <div className="bg-white p-5 fixed t-0 w-full shadow-sm">
        Logo Goes Here
      </div>

      <div className="pt-20">
        {data.map((hospital) => (
          <div key={hospital.id} className="p-5 mx-5 max-w-3xl border-b">
            <div>{hospital.facilityName}</div>
            <div className="text-sm text-gray-400">
              {hospital.address}
              <br />
              {hospital.city}, {hospital.state} {hospital.zipcode}
              <div>{parseInt(hospital.hospitalOverallRating)}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hospitals;
