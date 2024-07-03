import { ArrowUp } from "lucide-react";

const Footer = () => {
    function topBtnHandler() {
        document
            .getElementById("scrollToTopBtn")
            .addEventListener("click", () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
    }
    return (
        <footer className="mt-10 py-5">
            <div className="grid gap-4 grid-cols-3 grid-rows-2 px-10 items-center justify-center">
                <div className="col-span-1 md:col-span-1">
                    <ul className="flex justify-center items-center flex-col text-4xl space-y-2 font-semibold border rounded-full">
                        <li>THE</li>
                        <li>FIGMA</li>
                        <li>STORE</li>
                    </ul>
                </div>
                <div className="col-span-1 md:col-span-1 flex">
                    <h1 className="text-3xl font-bold">
                        OBJECTS <br /> THAT INSPIRE.
                    </h1>
                </div>
                <div className="col-span-1 md:col-span-1">
                    <ul className="text-lg space-y-2 font-semibold">
                        <li>
                            <a href="#faq" className="hover:underline">
                                FAQ
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:underline">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="#privacy" className="hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#terms" className="hover:underline">
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>
                {/* <!-- Social Links --> */}
                <div className="flex">
                    <div className="flex space-x-10 text-3xl ml-40 ">
                        <li className="hover:underline cursor-pointer list-none">
                            FIGMA
                        </li>
                        <li className="hover:underline cursor-pointer list-none">
                            TWITTER
                        </li>
                        <li className="hover:underline cursor-pointer list-none">
                            INSTAGRAM
                        </li>
                        <li className="hover:underline cursor-pointer list-none">
                            YOUTUBE
                        </li>
                    </div>
                    <button id="scrollToTopBtn" className="footerBtn ml-80 p-3">
                        <ArrowUp onClick={topBtnHandler} />
                    </button>
                </div>
            </div>
            <div className="marquee">
                <div className="marquee__slider">
                    <span>COLLECTION</span>
                    <span>OF</span>
                    <span>OBJECTS</span>
                    <span>FOR</span>
                    <span>OUR</span>
                    <span>TIME</span>
                    <span>ON</span>
                    <span>FIGMA'S</span>
                    <span>MARVELOUSLY</span>
                </div>
                <div className="marquee__slider">
                    <span>COLLECTION</span>
                    <span>OF</span>
                    <span>OBJECTS</span>
                    <span>FOR</span>
                    <span>OUR</span>
                    <span>TIME</span>
                    <span>ON</span>
                    <span>FIGMA'S</span>
                    <span>MARVELOUSLY</span>
                </div>
                <div className="marquee__slider">
                    <span>COLLECTION</span>
                    <span>OF</span>
                    <span>OBJECTS</span>
                    <span>FOR</span>
                    <span>OUR</span>
                    <span>TIME</span>
                    <span>ON</span>
                    <span>FIGMA'S</span>
                    <span>MARVELOUSLY</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
