import { Link } from "react-router-dom";
import { products } from "../data/catedata.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
    const categories = Object.keys(products[0]);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
    };

    console.log();

    return (
        <div>
            <section className="bg-[#F7CE31] border-b-8 border-black py-10">
                <Slider {...settings}>
                    <div>
                        <img
                            className="mx-20 w-96"
                            src="./banner6.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="mx-20 w-96"
                            src="./banner1.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="mx-20 w-96"
                            src="./banner2.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="mx-20 w-96"
                            src="./banner3.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="mx-20 w-96"
                            src="./banner4.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="mx-20 w-96"
                            src="./banner5.png"
                            alt=""
                        />
                    </div>
                </Slider>
            </section>
            <section className="p-10 my-10">
                <h2 className="cursor-pointer  text-2xl md:text-6xl font-bold text-center leading-tight">
                    FIGMA&apos;S{" "}
                    <i
                        className="bx bxs-balloon"
                        style={{ color: "#c7b9fd" }}
                    ></i>{" "}
                    COLLECTION OF <br />
                    <span className="underline">LAYERS</span> AND{" "}
                    <i className="bx bxs-leaf" style={{ color: "#5caa5a" }}></i>{" "}
                    <span className="underline">
                        COMPONENTS
                        <i
                            className="bx bxs-cricket-ball"
                            style={{ color: "#f5c631" }}
                        ></i>
                    </span>{" "}
                    FOR <br />
                    YOU{" "}
                    <i
                        className="bx bxs-pin"
                        style={{ color: "#c7b9fd" }}
                    ></i>{" "}
                    AND{" "}
                    <i
                        className="bx bxs-cricket-ball"
                        style={{ color: "#f5c631" }}
                    ></i>{" "}
                    YOUR{" "}
                    <i className="bx bxs-leaf" style={{ color: "#5caa5a" }}></i>{" "}
                    FRIENDS
                </h2>
            </section>

            <section className="flex py-10 justify-center items-center flex-col md:flex-row">
                {categories.map((category) => (
                    <div key={category}>
                        <Link
                            to={`/category/${category}`}
                            className="text-center"
                        >
                            {
                                <div className="home-image-container cursor-pointer">
                                    {/* Replace with actual images from your data */}
                                    <img
                                        src="https://store.figma.com/cdn/shop/files/20240619_Figma_Store_5116_859eaff4-b3e6-4bd7-84cd-3c82f1b66a4d_1000x.jpg?v=1719507726"
                                        alt="Image 1"
                                        className="home-image rounded-lg"
                                    />

                                    <img
                                        src="https://store.figma.com/cdn/shop/files/37_8a934c54-da56-46b1-b522-a63e062140cf_1000x.png?v=1719338623"
                                        alt="Image 2"
                                        className="home-image rounded-lg hover-image"
                                    />
                                </div>
                            }
                            <div className="px-5 my-5">
                                <div>CATEGORY</div>
                                <p className="font-bold uppercase">
                                    {category}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default Home;
