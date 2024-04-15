import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import Image from "next/image"
type Props ={
                        id:number,
                        title:string,
                        imageSrc:string,
                        onClick:(id:number)=>void,
                        disabled?:boolean,
                        active?:boolean
}

const Card = ({id, title, imageSrc, onClick, disabled, active}: Props) => {
  return (
    <div  onClick={()=>onClick(id)} className={cn("border border-slate-200 rounded-lg drop-shadow-md", disabled && "pointer-events-none opacity-50")}>
        {
            active && 
            <div className="flex justify-end m-1">
            <Check className="bg-green-500 stroke-white rounded-lg"/>
            </div>
        }
        <div className="flex flex-col items-center justify-center gap-2 h-[200px]">
            <Image src={imageSrc} width={34} height={93} alt={title}/>
            <p>{title}</p>
        </div>

    </div>
  )
}
export default Card