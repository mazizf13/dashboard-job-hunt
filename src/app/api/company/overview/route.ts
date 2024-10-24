import { NextResponse } from "next/server";
import prisma from "../../../../../lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();

  const profile = await prisma.companyOverview.findFirst({
    where: {
      companyId: data.companyId,
    },
  });

  const result = await prisma.companyOverview.upsert({
    where: {
      id: profile?.id || "",
      companyId: data.companyId,
    },
    update: data,
    create: data,
  });

  return NextResponse.json(result);
}
