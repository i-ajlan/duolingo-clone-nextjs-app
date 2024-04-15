import Image from "next/image"
import Link from "next/link"
import { Separator } from "./ui/separator"
import SidebarItem from "./sidebar-item"
import { cn } from "@/lib/utils"

type Props = {
  className?:string,
}

const Sidebar = ({className}:Props) => {
  return (
    <div className={cn("h-screen w-[256px] fixed flex flex-col items-center gap-5 p-2", className)}>
        <Link href='/learn' className="flex items-center gap-2">
            <Image src='/mascot.svg' height={34} width={34} alt="mascot"/>
            <p className="font-bold">Duolingo-Clone</p>    
        </Link>
        <Separator/>

        <SidebarItem label='learn' iconSrc='/home.svg' href='/learn'/>
        <SidebarItem label='leaderboard' iconSrc='/graduation-cap.svg' href='/leaderboard'/>
        <SidebarItem label='quest' iconSrc='/mail-question.svg' href='/quest'/>
        <SidebarItem label='shop' iconSrc='/store.svg' href='/shop'/>
    </div>
  )
}
export default Sidebar