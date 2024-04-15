import Image from "next/image"
import MenuHeader from "./MenuHeader"

const MobileHeader = () => {
  return (
    <div className="flex p-1 justify-between lg:hidden fixed w-full items-center bg-white">
        <div className="flex items-center gap-1">
            <Image src='/mascot.svg' height={34} width={34} alt="mascot"/>
            <p className="font-bold">Duolingo-clone</p>
        </div>
        <MenuHeader/>
    </div>
  )
}
export default MobileHeader