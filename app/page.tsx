
import BBSCardList from "@/components/BBSCardList";
import { BBSData } from "./types/types";

async function fetchBBSAllData() {
  const response = await fetch("http://localhost:3000/api/post",
    { cache: "no-store" }
  )
  
  const bbsAllData: BBSData[] = await response.json()
  return bbsAllData
}


export default async function Home() {
  const bbsAllData = await fetchBBSAllData()

  return (
    <div>
      <BBSCardList bbsAllData={bbsAllData} />
    </div>
  );
}

