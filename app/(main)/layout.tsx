import MobileHeader from "@/components/MobileHeader"
import Sidebar from "@/components/sidebar"

type Props ={
    children: React.ReactNode
}
const layoutMain = ({children}:Props) => {
  return (
    <>
        <MobileHeader/>
        <Sidebar className="hidden lg:flex"/>
        <main className="min-h-screen h-screen lg:pl-[256px] pt-[48px] lg:pt-0">
            {children}
        </main>
    </>
  )
}
export default layoutMain