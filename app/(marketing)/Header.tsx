import { Button } from "@/components/ui/button"
// import { SignedIn, UserButton } from "@clerk/clerk-react"
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import Image from "next/image"

const Header = () => {
  return (
        <div className="w-screen max-w-screen-lg mx-auto flex justify-between  p-2 items-center">
            <div className="flex gap-1 items-center">

                <Image src='/mascot.svg' height={34} width={34} alt="mascot"/>
                <h2 className="font-bold">
                    Duolingo-clone
                </h2>
            </div>
            <div>
                <ClerkLoading>
                    <Loader className="animate-spin"/>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton afterSignOutUrl="/"/>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">

                            <Button variant="primaryOutline">
                        Log in
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </div>
  )
}
export default Header