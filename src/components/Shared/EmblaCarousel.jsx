import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = ({ slides, options }) => {
    // const { slides, options } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    console.log(slides);
    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map((index) => (
                        <div className="embla__slide" key={index}>
                            <div className="embla__slide__number">
                                <img src="index" alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
