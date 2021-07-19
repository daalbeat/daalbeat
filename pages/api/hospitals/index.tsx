import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const hospitals = await prisma.hospital.findMany({
    skip: 0,
    take: 100,
  });
  res.status(200).json(hospitals);
}
