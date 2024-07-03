import { Link, useParams } from "react-router-dom";
import { products } from "../data/catedata.json";

const Category = () => {
    const { categoryName } = useParams();

    const categoryProducts = products[0][categoryName] || [];

    return (
        <section className="flex py-10 justify-center">
            {categoryProducts.map((category) => (
                <Link to="/product" key={category.id}>
                    <div className="category-container cursor-pointer">
                        {/* Replace with actual images from your data */}
                        <img
                            src={category.thumbnail}
                            alt="Image 1"
                            className="image rounded-lg"
                        />

                        {/* <img
                            src="https://store.figma.com/cdn/shop/files/37_8a934c54-da56-46b1-b522-a63e062140cf_1000x.png?v=1719338623"
                            alt="Image 2"
                            className="image rounded-lg hover-image"
                        /> */}
                    </div>
                    <div className="px-5 my-5 flex justify-between">
                        <p className="font-bold text-lg">{category.title}</p>
                        <p className="">Rs {category.price}</p>
                    </div>
                </Link>
            ))}
        </section>
    );
};

export default Category;
