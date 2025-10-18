import React from 'react'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BBSData } from '@/app/types/types';

interface BBSDataProps {
  bbsData: BBSData
}

const BBSCard = ({ bbsData }: BBSDataProps) => {
  const { id, title, content, createdAt} = bbsData;

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {createdAt.toString()}
          </CardDescription>
          <CardAction>
            {/* <Button variant="link">Sign Up</Button> */}
          </CardAction>
        </CardHeader>
        <CardContent>
          {content}
        </CardContent>
        <CardFooter>
          <Link href={`/bbs-post/${id}`} className="text-blue-500">Read More</Link>
        </CardFooter>
      </Card>
    </div>
  )
}

export default BBSCard