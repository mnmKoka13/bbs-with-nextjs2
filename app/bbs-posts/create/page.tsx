'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  userName: z
    .string()
    .min(2, { message: 'ユーザー名は２文字以上で入力してください。'})
    .max(20, { message: 'ユーザー名は20文字以下で入力してください。'}),
  title: z
    .string()
    .min(2, { message: 'タイトルは２文字以上で入力してください。'})
    .max(50, { message: 'タイトルは50文字以下で入力してください。'}),
  content: z
    .string()
    .min(10, { message: '内容は10文字以上で入力してください。'})
    .max(500, { message: '内容は500文字以下で入力してください。'}),
})

function CreateBBSPostPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: '',
      title: '',
      content: '',
    }
  })

  const onSubmit = async () => {
    console.log("submitted")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 w-1/2 px-7">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>タイトル</FormLabel>
              <FormControl>
                <Input placeholder="タイトル" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>本文</FormLabel>
              <FormControl>
                <Textarea placeholder="本文" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default CreateBBSPostPage