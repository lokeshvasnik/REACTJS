import { Search, UserRound } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    function inputHandlerFn() {
        document.querySelector(".inputSearch").classList.toggle("show");
    }

    function hamBurgerHandler() {
        document.getElementById("mobileMenu").classList.toggle("show");
    }

    return (
        <div>
            {/* <!-- Input Field --> */}
            <div className="inputSearch ">
                <input
                    type="text"
                    className="text-4xl w-full border-black px-10 py-5 border-b-4 outline-none"
                    placeholder="Enter"
                />
            </div>
            {/* <!-- Navbar --> */}
            <nav className="py-5 px-10">
                <div className="topnav_menu flex justify-between items-center">
                    <div className="flex items-center hidden md:flex">
                        <button className="navBtn py-1 px-5 border-2 border-black rounded-full font-bold text-sm mx-1">
                            SHOP
                        </button>
                        <button className="navBtn py-1 px-5 border-2 border-black rounded-full font-bold mx-1 text-sm">
                            ABOUT
                        </button>
                        <Search
                            className="cursor-pointer mx-2"
                            onClick={inputHandlerFn}
                        />
                    </div>
                    <div className="flex space-x-2 navbarMob  items-center">
                        <Search
                            className="cursor-pointer mx-2 md:hidden"
                            onClick={inputHandlerFn}
                        />

                        <Link to="/">
                            <h1 className="md:text-2xl font-bold">
                                THE FIGMA STORE
                            </h1>
                        </Link>
                    </div>
                    <div className="flex items-center hidden md:flex">
                        <UserRound className="mx-2" />
                        <select
                            name="option"
                            id="optim"
                            className="navBtn py-1 px-5 border-2 border-black rounded-full font-bold mx-1 text-sm"
                        >
                            <option value="UNITED STATES">UNITED STATES</option>
                            <option value="UNITED KINGDOM">
                                UNITED KINGDOM
                            </option>
                            <option value="JAPAN">JAPAN</option>
                            <option value="CANADA">CANADA</option>
                            <option value="EUROPEAN UNION">
                                EUROPEAN UNION
                            </option>
                        </select>
                        <button className="navBtn py-1 px-5 border-2 border-black rounded-full font-bold mx-1 text-sm">
                            CART 0
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            id="hamburger"
                            className="focus:outline-none"
                            onClick={hamBurgerHandler}
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    id="mobileMenu"
                    className="hidden md:hidden flex-col items-center mt-4"
                >
                    <button className="navBtn py-1 px-5 border-2 border-black rounded-full font-bold text-sm mx-1 my-1">
                        SHOP
                    </button>
                    <button className="navBtn py-1 px-5 border-2 border-black rounded-full font-bold text-sm mx-1 my-1">
                        ABOUT
                    </button>
                    <button className="navBtn py-1 px-5 border-2 border-black rounded-full font-bold text-sm mx-1 my-1">
                        CART 0
                    </button>
                    <select
                        name="option"
                        id="optim"
                        className="navBtn py-1 px-5 border-2 border-black rounded-full font-bold mx-1 text-sm"
                    >
                        <option value="UNITED STATES">UNITED STATES</option>
                        <option value="UNITED KINGDOM">UNITED KINGDOM</option>
                        <option value="JAPAN">JAPAN</option>
                        <option value="CANADA">CANADA</option>
                        <option value="EUROPEAN UNION">EUROPEAN UNION</option>
                    </select>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
