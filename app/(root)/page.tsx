import { Separator } from "@/components/ui/separator";

export default function Home()
{
    return(
        <main className="w-full min-h-screen flex max-sm:flex-col">
            <section className="w-[65%] min-h-screen border-r flex-col">
                <div className="h-[70px] w-full flex-center">
                    <div className="h-full w-[85%] flex underline underline-offset-[4px] items-center">For you</div>
                </div>
                <Separator/>
            </section>
            <section className="w-[35%] min-h-screen bg-primary-20 border-l">right</section>
        </main>
    )
}