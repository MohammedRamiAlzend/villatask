import { Carousel } from "react-responsive-carousel";
import "./ResponsiveCarousel.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Banner1 from "../../assets/images/banner-01.jpg"
import Banner2 from "../../assets/images/banner-02.jpg"
import Banner3 from "../../assets/images/banner-03.jpg"
const ResponsiveCarousel = () => {
  return (
    <Carousel
      className="carousel"
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      infiniteLoop={true}
      transitionTime={1000}
      interval={10000}
      animationHandler={"slide"}
      emulateTouch={true}
      renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div
            className={`${
              hasPrev ? "absolute" : "hidden"
            } top-0 bottom-0 left-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <FaArrowCircleLeft className="w-9 h-9 text-white" />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div
            className={`${
              hasNext ? "absolute" : "hidden"
            } top-0 bottom-0 right-0 flex justify-center items-center p-3 opacity-30 hover:opacity-100 cursor-pointer z-20`}
            onClick={clickHandler}
          >
            <FaArrowCircleRight className="w-9 h-9 text-white" />
          </div>
        );
      }}
    >
      <div className="container">
        <img src={Banner1} />
        <div className="center">
          <div className="words">
            <p className="title">
              Toronto,<span>Canda</span>
            </p>
            <p>HURRY! GET THE BEST VILLA FOR YOU</p>
          </div>
        </div>
      </div>
      <div className="container">
        <img src={Banner2} />
        <div className="center">
          <div className="words">
            <p className="title">
              Toronto,<span>Canda</span>
            </p>
            <p>HURRY! GET THE BEST VILLA FOR YOU</p>
          </div>
        </div>
      </div>
      <div className="container">
        <img src={Banner3} />
        <div className="center">
          <div className="words">
            <p className="title">
              Toronto,<span>Canda</span>
            </p>
            <p>HURRY! GET THE BEST VILLA FOR YOU</p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default ResponsiveCarousel;
