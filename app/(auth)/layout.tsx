export default function Layout({children} : {children : React.ReactNode})
{
    return(
        <div className="min-h-screen flex-center bg-dotted-pattern w-full bg-primary-50 bg-cover bg-fixed bg-center">
            {children}
        </div>
    )
}