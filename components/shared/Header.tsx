import Link from "next/link";

export default function Header()
{
    return(
        <header className="w-full border-b">
            <div className="wrapper flex items-center justify-between">
                <Link href='/'>
                    <p className="p-bold-24">LOGO</p>
                </Link>
            </div>
        </header>
    )
}
