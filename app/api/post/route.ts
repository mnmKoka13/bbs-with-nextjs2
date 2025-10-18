import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  const allBBSPosts = await prisma.post.findMany()
  return NextResponse.json(allBBSPosts)
}