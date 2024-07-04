import { Link, useParams } from "react-router-dom";
import { products } from "../data/catedata.json";

const Category = () => {
    const { categoryName } = useParams();

    const categoryProducts = products[0][categoryName] || [];

    return (
        <section className="py-10  md:flex md:justify-evenly md:items-center">
            {categoryProducts.map((category) => (
                <Link
                    to={`/product/${categoryName}/${category.id}`}
                    key={category.id}
                    className="md:flex md:flex-col "
                >
                    <div>
                        <div className="category-container cursor-pointer ">
                            {/* Replace with actual images from your data */}
                            <img
                                src={category.thumbnail}
                                alt="Image 1"
                                className="image rounded-lg md:w-72"
                            />

                            {/* <img
                            src="https://store.figma.com/cdn/shop/files/37_8a934c54-da56-46b1-b522-a63e062140cf_1000x.png?v=1719338623"
                            alt="Image 2"
                            className="image rounded-lg hover-image"
                        /> */}
                        </div>
                        <div className="my-5 flex justify-between mx-9 md:mx-auto">
                            <p className="font-bold text-md">
                                {category.title}
                            </p>
                            <p className="">Rs {category.price}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </section>
    );
};

export default Category;
