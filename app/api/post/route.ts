import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(_req: Request) {
  const allBBSPosts = await prisma.post.findMany()
  return NextResponse.json(allBBSPosts)
}

// server actionへ移行に伴いコメントアウト
// export async function POST(req: Request) {
//   const { title, content } = await req.json()

//   const post = await prisma.post.create({
//     data: {
//       title: title,
//       content: content,
//     },
//   })
//   return NextResponse.json(post)
// }