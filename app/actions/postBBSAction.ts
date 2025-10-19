'use server'

import z from "zod";
import { formSchema } from "../bbs-posts/create/page";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const postBBS = async ({title, content}: z.infer<typeof formSchema>)  => {

    await prisma.post.create({
      data: {
        title: title,
        content: content,
      },
    })

    revalidatePath('/')
    redirect('/')
}