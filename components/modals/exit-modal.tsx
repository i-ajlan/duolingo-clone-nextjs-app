import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useExitModal } from "@/store/use-exit-modal";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";



const ExitModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const {isOpen, close} = useExitModal();

    useEffect(()=>setIsClient(true), []);

    if(!isClient){
        return null;
    }
    
  return (
    <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className="max-w-d">
            <DialogHeader className="flex items-center w-full justify-center mb-5">
                <div>
                    <Image
                    src=""
                    alt="mascot sad"
                    height={80}
                    width={80}
                    />
                </div>
                <DialogTitle>
                    Wait, don&apos;t get
                </DialogTitle>
                <DialogDescription className="text-center text-base">
                    You&apos;re about to leave the lesson. Are you sure?
                </DialogDescription>
            </DialogHeader>
            <DialogFooter className="mb-4">
                <div>
                    <Button variant="primary" className="w-full" size="lg" onClick={close}>
                        Keep Learning
                    </Button>
                    <Button variant="dangerOutline" className="w-full" size="lg" onClick={()=>{
                    close();
                    router.push("/learn");
                    }}>
                      End session
                    </Button>

                </div>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}
export default ExitModal