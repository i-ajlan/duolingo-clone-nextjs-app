import Footer from "./Footer"
import Header from "./Header"

type Props = {
    children: React.ReactNode,
}

const layoutMarketing = ({children}: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
        <Header/>
       
            {children}
        
        <Footer/>
    </div>
  )
}
export default layoutMarketing