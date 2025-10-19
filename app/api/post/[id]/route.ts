import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  _req: Request,
  { params }: { params: {id: string}}
) {
  const { id } = await params;
  const allBBSPosts = await prisma.post.findUnique({
    where: { id: parseInt(id) }
  })
  return NextResponse.json(allBBSPosts)
}