
import { LayoutProps } from "@/types/Layout";
import { Fragment } from "react";

const Layout = ({ children }: LayoutProps) => {
    return (
        <Fragment>
            <div className="bg-zinc-950 h-screen w-screen overflow-y-scroll" style={{padding:`0 40px`}}>
                {/* <NavBar />
                <SideBar /> */}
                {children}
            </div>
        </Fragment>
    );
}

export default Layout;