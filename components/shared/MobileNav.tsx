import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          {/* <Image 
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          /> */}
          LOGO
          <Separator className="border border-gray-50" />
          <Link href='/posts/create'>
          <div className="flex gap-3 tracking-wider bg-dotted-pattern py-4 w-full">
            <Image
              src="/assets/icons/write.svg"
              alt="w"
              width={20}
              height={20}
            />
            Write something
          </div>
          </Link>

          {/* trending topics and saved items to be shown here bottom */}
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
