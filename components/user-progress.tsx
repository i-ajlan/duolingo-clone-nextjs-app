import { courses } from "@/db/schema"
import { Heart, InfinityIcon, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

type Props = {
    activeCourse: typeof courses.$inferSelect,
    hearts:number,
    points:number,
    hasActiveSubscription:boolean,
}


const UserProgress = ({activeCourse, hearts, points, hasActiveSubscription}:Props) => {
  return (
    <div className="flex justify-between sticky top-0 p-1 items-center border border-slate-200 rounded-lg">
      <Link href='/courses'>
        <button>
          <Image src={activeCourse.imageSrc}
          width={34}
          height={34}
          alt={activeCourse.title}/>
        </button>
      </Link>

      <button className="flex gap-1 items-center">
        <Zap className="stroke-yellow-500"/>
        <p>{points}</p>
      </button>
      <button className="flex gap-1 items-center">
        {hasActiveSubscription? <InfinityIcon className="stroke-indigo-500 fill-indigo-500"/>:<>
        <Heart className="stroke-red-500 fill-red-500"/>
        <p>{hearts}</p>
        </>}
      </button>
    </div>
  )
}
export default UserProgress