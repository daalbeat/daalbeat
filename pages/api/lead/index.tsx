import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { PrismaClient } from "@prisma/client";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const result = await prisma.earlyAccessLeads.create({
    data: {
      email: req.body.email,
    },
  });

  res.status(200).json({ email: req.body.email });
}
