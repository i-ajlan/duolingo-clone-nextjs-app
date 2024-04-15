import { ArrowBigLeft } from "lucide-react"
import Link from "next/link"

type Props = {
    lang: string,
}

const Header = ({lang}:Props) => {
  return (
    <div className=" border border-slate-200 flex justify-between items-center rounded-lg sticky top-[48px] lg:top-0 z-10 bg-white p-2">
      <Link href="/courses">
        <ArrowBigLeft/>
      </Link>
        <p>{lang}</p>
        <div/>
    </div>
  )
}
export default Header