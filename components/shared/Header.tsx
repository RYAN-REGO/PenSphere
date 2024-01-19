import Link from "next/link";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import MobileNav from "./MobileNav";

export default function Header()
{
    return(
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href='/'>
                    <p className="p-bold-24">LOGO</p>
                </Link>
                <Link href='/posts/create'>
                <div className="flex border rounded-full py-2 px-5 bg-primary-10 gap-2 cursor-pointer text-[15px] items-center max-sm:hidden">
                        <Image
                        src = '/assets/icons/write.svg'
                        alt="w"
                        width={20}
                        height={20}
                    />
                    Write something
                </div>
                </Link>
                <div className="flex gap-4 items-center">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/"/>
                        <MobileNav/>
                    </SignedIn>
                    {/* //render something if signed out */}
                    <SignedOut>
                        <Button asChild className="bg-black hover:bg-grey-600 tracking-wider" size='lg'>
                            <Link href='/sign-in'>
                                Login
                            </Link>
                        </Button>
                    </SignedOut>
                </div>
            </div>
        </header>
    )
}
