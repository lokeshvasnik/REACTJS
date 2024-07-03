const SingleProduct = () => {
    return (
        <div>
            <div className="grid grid-cols-12 grid-rows-1 gap-4 px-10 mt-10">
                {/* Left Div */}
                <div className="col-span-3 space-y-5 flex flex-col  items-end">
                    <div>
                        <img
                            className="rounded-lg w-16"
                            src="./banner1.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="rounded-lg w-16"
                            src="./banner1.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="rounded-lg w-16"
                            src="./banner1.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="rounded-lg w-16"
                            src="./banner1.png"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            className="rounded-lg w-16"
                            src="./banner1.png"
                            alt=""
                        />
                    </div>
                </div>
                {/* Main Div */}
                <div className="col-span-5 col-start-4">
                    <img
                        src="./banner2.png"
                        className="rounded-lg w-full"
                        alt=""
                    />
                </div>
                {/* Right Div */}
                <div className="col-span-4 col-start-9">
                    <span>LAYER</span>
                    <h3 className="text-3xl">Design In Bloom Tee</h3>
                    <div className="flex space-x-2 mt-10">
                        <button className="border-black p-2 px-4 bg-black rounded-full text-white">
                            S
                        </button>
                        <button className="border-black p-2 px-4 bg-black rounded-full text-white">
                            M
                        </button>
                        <button className="border-black p-2 px-4 bg-black rounded-full text-white">
                            L
                        </button>
                        <button className="border-black p-2 px-4 bg-black rounded-full text-white">
                            XL
                        </button>
                        <button className="border-black p-2 px-4 bg-black rounded-full text-white">
                            2XL
                        </button>
                    </div>
                    <div className="mt-2 space-x-3">
                        <button className="border-black p-2 px-4 bg-black rounded-full text-white">
                            -
                        </button>
                        <span> 0 </span>
                        <button className="border-black p-2 px-4 bg-black rounded-full text-white">
                            +
                        </button>
                    </div>
                    <div>
                        <button className="border-black w-full mt-5 border-2 rounded-full font-bold bg-black-700">
                            SOLD OUT
                        </button>
                        <p className="mt-4 font-semibold">
                            In case you missed it (how could you have missed
                            it?) the shapes spell Figma.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
