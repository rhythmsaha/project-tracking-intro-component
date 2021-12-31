import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Header = () => {
    const [navIsShown, setNavIsShown] = useState(false);

    const openNavHandler = () => {
        setNavIsShown(true);
    };

    const closeNavHandler = () => {
        setNavIsShown(false);
    };

    return (
        <header className="flex justify-between items-center p-7 fixed top-0 w-full lg:px-28 lg:py-10">
            {navIsShown && <MobileNav onClose={closeNavHandler} />}

            <span>
                <Image
                    src="/images/logo.svg"
                    alt="logo"
                    height={25}
                    width={25}
                />
            </span>

            <nav className="hidden lg:flex items-center">
                <ul className="flex items-center space-x-10 font-Barlow-Condensed font-bold text-grayish-blue-900">
                    <li>
                        <Link href="#">PRODUCT</Link>
                    </li>
                    <li>
                        <Link href="#">FEATURES</Link>
                    </li>
                    <li>
                        <Link href="#">PRICING</Link>
                    </li>

                    <div className="h-1.5 w-1.5 rounded-full bg-grayish-blue-200" />

                    <li className="text-grayish-blue-200 font-bold">
                        <Link href="#">LOGIN</Link>
                    </li>
                </ul>
            </nav>

            {!navIsShown && (
                <span className="lg:hidden">
                    <button onClick={openNavHandler}>
                        <Image
                            src="/images/icon-hamburger.svg"
                            alt="hamburger"
                            height={16}
                            width={24}
                        />
                    </button>
                </span>
            )}
        </header>
    );
};

export default Header;
