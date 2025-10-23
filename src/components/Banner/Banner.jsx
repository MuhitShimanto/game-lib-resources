import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Link } from "react-router";

// Optional: you can move these custom styles to a CSS file if you want
const customStyles = `
  .swiper-button-next,
  .swiper-button-prev {
    color: #FFAA00; /* Your theme's primary color */
    transform: scale(0.8);
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
    border-radius: 9999px;
    width: 50px;
    height: 50px;
  }
  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    color: #FFFFFF;
    transform: scale(0.85);
  }
  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 20px !important;
    font-weight: 900;
  }
  .swiper-pagination-bullet {
    background-color: rgba(255, 255, 255, 0.7);
    width: 10px;
    height: 10px;
    opacity: 0.7;
    transition: all 0.2s ease-in-out;
    margin: 0 5px !important;
  }
  .swiper-pagination-bullet-active {
    background-color: #FFAA00; /* Your theme's primary color */
    transform: scale(1.2);
    opacity: 1;
    width: 25px;
    border-radius: 5px;
  }
`;

const Banner = () => {
  const [slideData, setSlideData] = useState([]);

  useEffect(() => {
    // Inject custom styles (only once)
    if (!document.getElementById("swiper-custom-styles")) {
      const style = document.createElement("style");
      style.id = "swiper-custom-styles";
      style.innerHTML = customStyles;
      document.head.appendChild(style);
    }

    // Fetch banner data
    fetch("/json/bannerFeatured.json")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch banner data");
        return response.json();
      })
      .then((data) => setSlideData(data))
      .catch((error) => console.error("Error fetching banner data:", error));
  }, []);

  // Loading skeleton
  if (slideData.length === 0) {
    return (
      <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] w-full flex justify-center items-center bg-base-200">
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="relative h-[30vh] md:h-[40vh] lg:h-[50vh] w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect="fade"
        className="h-full w-full"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Image */}
            <img
              src={slide.imgUrl}
              alt={slide.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/1920x1080/1C1C1C/FF0000?text=Image+Load+Failed";
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/35"></div>

            {/* Content */}
            <div className="absolute inset-0 max-w-[1600px] mx-auto w-full flex items-center">
              <div className="px-8 md:px-16 max-w-xl lg:max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary poppins mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-base-content mb-8">
                  {slide.description}
                </p>
                <Link to={`/all-games/${slide.title}`} className="btn btn-primary btn-lg font-semibold text-lg cursor-target">
                  Discover More
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner;