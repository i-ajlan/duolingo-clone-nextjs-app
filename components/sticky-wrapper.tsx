type Props = {
    children:React.ReactNode
}

const StickyWrapper = ({children}:Props) => {
  return (
    <div className="flex-1 hidden lg:block sticky top-0 ">
        {children}
    </div>
  )
}
export default StickyWrapper