import Link from "next/link";

export default function Footer() {
  return(
    <footer className="border-t">
        <div className="w-full min-h-[25vh] flex max-sm:flex-col">
          {/* //all the talking */}
            <div className="w-[65%] h-[25vh] border-r bg-primary-25 flex items-center pl-[8vh]">
                <div className="h5-bold tracking-wide">Thank you for visiting..</div>
            </div>
            {/* links to my other projects */}
            <div className="w-[35%] h-[25vh]">
            <div className="text-md tracking-wide font-semibold px-[25px] py-[15px]">My other projects</div>

            <div className="flex flex-col gap-[10px] pl-[20px]">
              <button className="flex-center border w-[200px] rounded-full  bg-primary-10  text-[15px] py-2 hover:bg-black hover:text-white tracking-wide">
                <Link href='https://www.linkedin.com/in/ryan-rego-3111ab229/'>Prep-Net</Link>
                </button>
                <button className="flex-center  border w-[200px] rounded-full  bg-primary-10  text-[15px] py-2 hover:bg-black hover:text-white tracking-wide">
                <Link href='https://www.linkedin.com/in/ryan-rego-3111ab229/'>Campus-Connect</Link>
              </button>
              </div>
            </div>
        </div>
    </footer>
  )
}
