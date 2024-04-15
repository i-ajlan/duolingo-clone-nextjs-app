import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-center flex-col md:flex-row items-center h-full flex-1">
      <figure className="flex flex-col items-center">
        <Image src='/hero.svg' width={300} height={300} alt='hero'/>
        <figcaption className="font-bold">Develop your language skills with Duolingo-Clone</figcaption>
      </figure>
      <div>
        <ClerkLoading>
          <Loader className="animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <Link href='/learn'> 
              <Button variant="secondary">Continue to your lessons</Button>
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal" afterSignInUrl="/learn" afterSignUpUrl="/learn">
              <Button variant={"primary"}>Create or Login to Your account</Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </div>
  );
}
