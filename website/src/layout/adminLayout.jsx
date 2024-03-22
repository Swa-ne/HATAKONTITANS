import { Outlet } from "react-router-dom";
import SideBar from "../pages/admin/sidebar";
import { useEffect, useState } from "react";
export default function AdminLayout() {
    const [isHovered, setIsHovered] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    };
    const handleOpenSideBar = () => {
        setIsClicked(true);
    };

    const handleCloseSideBar = () => {
        setIsClicked(false);
    };
    return (
        <>
            <SideBar
                isClicked={isClicked}
                onClick={handleCloseSideBar}
                onHover={handleMouseOver}
                onUnhover={handleMouseOut}
            />
            <Outlet />
        </>
    );
}
