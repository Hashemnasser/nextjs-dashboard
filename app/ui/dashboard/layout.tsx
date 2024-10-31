import SideNav from "./sidenav";

export default function Layout({children}:{children:React.ReactNode}){

    return(
        <main  className=" flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div   className="flex-none w-full md:w-64">
                <SideNav/>
            </div >
            <div  className="flex-grow overflow-y-auto p-6 md:p-12">{children}</div>
        </main>
    )

}