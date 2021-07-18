import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const hospitals = await prisma.hospital.findMany({
    skip: 100,
    take: 500,
  });
  res.status(200).json(hospitals);
}
