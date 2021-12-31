import Link from "next/link";

const MobileNav = ({ onClose }) => {
    return (
        <div className="fixed z-50 top-0 right-0 bottom-0 left-0 flex flex-col justify-start items-center lg:hidden">
            <div className="relative w-full p-8">
                <button className="block ml-auto" onClick={onClose}>
                    <img src="/images/icon-close.svg" alt="" />
                </button>
            </div>
            <nav className="bg-white w-10/12 shadow-2xl rounded-sm p-4 font-Barlow-Condensed font-bold tracking-widest text-lg">
                <ul className="border-b flex flex-col items-center py-4 space-y-4 text-grayish-blue-900">
                    <li>PRODUCT</li>
                    <li>FEATURES</li>
                    <li>PRICING</li>
                </ul>

                <div className="flex flex-col items-center text-grayish-blue-200 py-2 mt-2">
                    <Link href="#">LOGIN</Link>
                </div>
            </nav>
        </div>
    );
};

export default MobileNav;
