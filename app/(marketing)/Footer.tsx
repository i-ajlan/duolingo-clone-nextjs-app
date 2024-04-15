import Image from "next/image"

const Footer = () => {
  return (
    <div className="hidden md:flex w-screen justify-center max-w-screen-lg p-4">
        <div className="flex items-center gap-4">

            <Image src='/fr.svg' width={34} height={34} alt='france'/>
            <Image src='/es.svg' width={34} height={34} alt='france'/>
            <Image src='/jp.svg' width={34} height={34} alt='france' className="border-slate-200 border"/>
            <Image src='/it.svg' width={34} height={34} alt='france'/>
        </div>
    </div>
  )
}
export default Footer