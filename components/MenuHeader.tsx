import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Sidebar from "./sidebar"

const MenuHeader = () => {
  return (
    <Sheet>
        <SheetTrigger><Menu className="size-8 stroke-blue-500"/></SheetTrigger>
        <SheetContent side="left">
            <Sidebar/>
        </SheetContent>
    </Sheet>

  )
}
export default MenuHeader