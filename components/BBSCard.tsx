import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const BBSCard = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            {/* <Button variant="link">Sign Up</Button> */}
          </CardAction>
        </CardHeader>
        <CardContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur, aut enim autem, facere voluptatem illo nisi ipsa tempore in adipisci pariatur consectetur illum culpa cum consequuntur temporibus ratione repudiandae.
        </CardContent>
        <CardFooter>
          <Link href={"/"} className="text-blue-500">Read More</Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default BBSCard