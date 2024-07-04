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
            <div className="grid gap-4 grid-cols-1 md:grid-cols-3 px-10 items-center justify-center">
                <div className="col-span-1 flex justify-center md:justify-start">
                    <ul className="flex justify-center items-center flex-col text-2xl md:text-4xl space-y-2 font-semibold border p-4 rounded-full">
                        <li>THE</li>
                        <li>FIGMA</li>
                        <li>STORE</li>
                    </ul>
                </div>
                <div className="col-span-1 flex justify-center md:justify-center text-center md:text-left">
                    <h1 className="text-xl md:text-3xl font-bold">
                        OBJECTS <br /> THAT INSPIRE.
                    </h1>
                </div>
                <div className="col-span-1 flex justify-center md:justify-end">
                    <ul className="text-sm md:text-lg space-y-2 font-semibold text-center md:text-right">
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
                <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row justify-center md:justify-between items-center mt-5 md:mt-10">
                    <div className="flex space-x-4 md:space-x-10 text-sm md:text-3xl">
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
                    <button
                        id="scrollToTopBtn"
                        className="p-3 bg-black rounded-full mt-3"
                        onClick={topBtnHandler}
                    >
                        <ArrowUp color="#fff" />
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
                    <span>FIGMA&apos;S</span>
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
                    <span>FIGMA&apos;S</span>
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
                    <span>FIGMA&apos;S</span>
                    <span>MARVELOUSLY</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
