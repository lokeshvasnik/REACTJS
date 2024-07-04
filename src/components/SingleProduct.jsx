import { Minus, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";
import { products } from "../data/catedata.json";

const SingleProduct = () => {
    const [activeSize, setActiveSize] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [count, setCount] = useState(1);
    const [showDetails, setShowDetails] = useState([]);
    const [mainImage, setMainImage] = useState("");
    const { categoryName, productName } = useParams();

    function isActive(index) {
        setActiveSize(index);
    }

    function quantityInc() {
        setCount(count + 1);
    }

    function quantityDec() {
        if (count !== 0) {
            setCount(count - 1);
        }
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    useEffect(() => {
        const categoryProducts = products[0][categoryName] || [];
        const matchedProduct = categoryProducts.find(
            (product) => product.id == productName
        );
        setShowDetails(matchedProduct);
    }, [categoryName, productName]);

    const handleThumbnailClick = (image) => {
        setMainImage(image);
    };

    return (
        <div>
            {showDetails && (
                <div className="grid grid-cols-1 md:grid-cols-8 gap-4 px-4 md:px-24 mt-10">
                    {/* Left Div */}
                    <div className="md:col-span-3 flex flex-row space-x-4 md:space-y-3  justify-center md:justify-start  md:flex-col  items-center md:items-end">
                        {showDetails.images &&
                            showDetails.images.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleThumbnailClick(item)}
                                >
                                    <img
                                        className="rounded-lg w-16"
                                        src={item}
                                        alt=""
                                    />
                                </div>
                            ))}
                    </div>
                    {/* Main Div */}
                    <div className="md:col-span-2 md:col-start-4 flex justify-center">
                        <img
                            src={mainImage || showDetails.thumbnail}
                            className="rounded-lg w-64"
                            alt=""
                        />
                    </div>
                    {/* Right Div */}
                    <div className="md:col-span-3 md:col-start-6 space-y-5">
                        <span className="bg-[#5ba857] rounded-lg text-black text-xs font-semibold me-2 px-3.5 py-1 dark:bg-green-900 dark:text-green-300">
                            LAYER
                        </span>
                        <h3 className="text-3xl my-2 font-bold">
                            {showDetails.title}
                        </h3>
                        <div className="flex space-x-2 mt-10">
                            {["S", "M", "L", "XL", "2XL"].map((size, index) => (
                                <button
                                    key={size}
                                    className={`border-black text-black border-2 p-2 px-4 rounded-full ${
                                        activeSize === index ? "active" : ""
                                    }`}
                                    onClick={() => isActive(index)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                        <div className="mt-2 space-x-3 flex items-center">
                            <button
                                className="border-black text-black border-2 p-2 px-4 rounded-full"
                                onClick={quantityDec}
                            >
                                <Minus />
                            </button>
                            <span>{count}</span>
                            <button
                                className="border-black text-black border-2 p-2 px-4 rounded-full"
                                onClick={quantityInc}
                            >
                                <Plus />
                            </button>
                        </div>
                        <div>
                            <button
                                className="border-black w-full mt-5 border-2 rounded-full font-bold bg-black-700"
                                onClick={() => setIsModalOpen(true)}
                                disabled={count === 0}
                            >
                                BUY NOW
                            </button>
                            <p className="mt-4 font-semibold">
                                In case you missed it (how could you have missed
                                it?) the shapes spell Figma.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* On Button Modal */}
            {isModalOpen && (
                <section className="px-6 py-8">
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex min-h-screen items-center justify-center">
                            <div
                                className="fixed inset-0 transition-opacity"
                                aria-hidden="true"
                            >
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>
                            <div className="relative rounded-lg bg-white p-8">
                                <div className="grid grid-cols-1 gap-4">
                                    <form className="rounded-xl">
                                        <div className="formbold-input-flex">
                                            <div>
                                                <label
                                                    htmlFor="firstname"
                                                    className="formbold-form-label"
                                                >
                                                    First Name{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    id="title"
                                                    placeholder="Lokesh"
                                                    className="formbold-form-input"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="location"
                                                    className="formbold-form-label"
                                                >
                                                    {" "}
                                                    Last name{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="location"
                                                    id="location"
                                                    placeholder="Vasnik"
                                                    className="formbold-form-input"
                                                />
                                            </div>
                                        </div>

                                        <div className="formbold-input-flex">
                                            <div>
                                                <label
                                                    htmlFor="number"
                                                    className="formbold-form-label"
                                                >
                                                    {" "}
                                                    Email{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="number"
                                                    id="number"
                                                    placeholder="lokesh2003@gmail.com"
                                                    className="formbold-form-input"
                                                />
                                            </div>
                                            <div>
                                                <label
                                                    htmlFor="number"
                                                    className="formbold-form-label"
                                                >
                                                    {" "}
                                                    Phone{" "}
                                                </label>
                                                <input
                                                    type="text"
                                                    name="number"
                                                    id="number"
                                                    placeholder="(9766202976)"
                                                    className="formbold-form-input"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label
                                                htmlFor="description"
                                                className="formbold-form-label"
                                            >
                                                {" "}
                                                Address{" "}
                                            </label>
                                            <textarea
                                                rows="6"
                                                name="description"
                                                id="description"
                                                placeholder="Your Address"
                                                className="formbold-form-input"
                                            ></textarea>
                                        </div>

                                        <button
                                            // type="submit"
                                            className="formbold-btn"
                                        >
                                            Confirm
                                        </button>

                                        <div className="modal-action">
                                            {/* if there is a button in form, it will close the modal */}

                                            <button
                                                onClick={closeModal}
                                                className="rounded-[7px]  px-[24px] py-[7px] hover:bg-red-500 bg-red-400 mt-4"
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
};

export default SingleProduct;
