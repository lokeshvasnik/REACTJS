import { Search, UserRound } from "lucide-react";

const Navbar = () => {
    function inputHandlerFn() {
        document.querySelector(".inputSearch").classList.toggle("show");
    }

    return (
        <div>
            {/* <!-- Input Field --> */}
            <div className="inputSearch">
                <input
                    type="text"
                    className="text-4xl w-full  border-black px-10 py-5 border-b-4 outline-none"
                    placeholder="Enter"
                />
            </div>
            {/* <!-- Navbar --> */}
            <nav className="py-5 px-10 flex justify-between">
                <div className="flex items-center">
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
                <div>
                    <h1 className="text-2xl font-bold">THE FIGMA STORE</h1>
                </div>
                <div className="flex items-center">
                    <UserRound className="mx-2" />

                    <select
                        name="option"
                        id="optim"
                        className="navBtn py-1 px-5 border-2 border-black rounded-full font-bold mx-1 text-sm"
                    >
                        <option value="UNITED STATES">UNITED STATES</option>
                        <option value="UNITED STATES">UNITED KINGDOM</option>
                        <option value="UNITED STATES">JAPAN</option>
                        <option value="UNITED STATES">CANADA</option>
                        <option value="UNITED STATES">EUROPEAN UNION</option>
                    </select>

                    <button className="navBtn py-1 px-5 border-2 border-black rounded-full font-bold mx-1 text-sm">
                        CART 0
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
