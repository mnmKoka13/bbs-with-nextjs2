'use client'

import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"
import React from 'react'
import { useForm } from 'react-hook-form'
import { Textarea } from '@/components/ui/textarea'
import { postBBS } from '@/app/actions/postBBSAction'

export const formSchema = z.object({
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
      title: '',
      content: '',
    }
  })

  const onSubmit = async (value: z.infer<typeof formSchema>) => {
    const { title, content } = value
    postBBS({title, content})
    // server actionへ移行に伴いコメントアウト
    // try {
    //   await fetch('http://localhost:3000/api/post', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       title,
    //       content,
    //     })
    //   })
    //   // 投稿が成功したら、トップページにリダイレクト
    //   router.push('/')
    //   router.refresh()
    // } catch (err) {
    //   console.error(err)
    // } finally {
    //   console.log('投稿処理が完了しました。')
    // }
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