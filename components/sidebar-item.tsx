import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"

type Props = {
    label:string,
    iconSrc:string,
    href:string
}

const SidebarItem = ({label, iconSrc, href}:Props) => {
  return (
    <Link href={href}>
        <Button variant="primaryOutline" className="gap-2 flex items-center">
            <Image src={iconSrc} width={34} height={34} alt={label}/>
            <p className="font-bold">{label}</p>
        </Button>
    </Link>
  )
}
export default SidebarItem