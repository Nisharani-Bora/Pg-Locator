'use client';

import Images from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return(
    <Images
    alt="Logo"
    className="hidden md:block cursor-pointer"
    height = "90"
    width= "90"
    src="/images/logo.png"
    />
    );
}
export default Logo;