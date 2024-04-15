import { Button } from "@/components/ui/button"
import { NotebookIcon } from "lucide-react"
import Link from "next/link"

type Props = {
    title: string,
    description: string
}

const UnitBanner = ({title, description}:Props) => {
  return (
    <div className="rounded-lg bg-emerald-500 flex justify-between items-center p-2 text-white">
        <div className="">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p>{description}</p>
        </div>
        <Link href='/lesson'>
            <Button variant="secondary" >
                <NotebookIcon/>
                <p>Continue</p>
            </Button>
        </Link>
    </div>
  )
}
export default UnitBanner