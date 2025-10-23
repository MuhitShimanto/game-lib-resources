import React, { useEffect, useRef, useState } from "react";
// All Swiper imports have been removed to fix the compilation errors.
// We will now load Swiper from a CDN.

const Banner = () => {
  const [slideData, setSlideData] = useState([]);
  const swiperRef = useRef(null);

  // This useEffect fetches your data. This part is correct.
  useEffect(() => {
    // Fetch data once on mount
    fetch("/json/bannerFeatured.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch banner data");
        }
        return response.json();
      })
      .then((data) => {
        setSlideData(data);
      })
      .catch((error) => {
        console.error("Error fetching banner data:", error);
      });
  }, []);

  // This useEffect loads the CDN scripts ONCE and never removes them.
  useEffect(() => {
    const swiperScriptSrc = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js";
    const swiperLinkHref = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
    const styleId = "swiper-custom-styles";

    // 1. Load Swiper's CSS
    if (!document.querySelector(`link[href="${swiperLinkHref}"]`)) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = swiperLinkHref;
      document.head.appendChild(link);
    }

    // 2. Load Swiper's JavaScript bundle
    if (!document.querySelector(`script[src="${swiperScriptSrc}"]`)) {
      const script = document.createElement("script");
      script.src = swiperScriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }

    // 3. Define the custom styles for navigation/pagination
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId; // Give it an ID so we can check for it
      style.innerHTML = `
        .swiper-button-next,
        .swiper-button-prev {
          color: #FFAA00; /* Your theme's primary color */
          transform: scale(0.8);
          transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
          border: 2px solid #FFAA00;
          border-radius: 9999px;
          width: 50px;
          height: 50px;
          background-color: rgba(28, 28, 28, 0.5); /* bg-base-100 with opacity */
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          color: #FFFFFF;
          background-color: #FFAA00; /* Primary color */
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
      document.head.appendChild(style);
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  // NEW: This useEffect initializes Swiper *after* data is loaded
  useEffect(() => {
    // Only run if we have data AND the swiperRef is attached to the element
    if (slideData.length > 0 && swiperRef.current) {
      const swiperEl = swiperRef.current;

      // Define all Swiper parameters
      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: true,
        pagination: { clickable: true },
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        effect: "fade",
        crossFade: true,
      };

      // Assign parameters to the element
      Object.assign(swiperEl, swiperParams);

      // Manually initialize the swiper element
      swiperEl.initialize();
    }
  }, [slideData]); // This effect re-runs whenever slideData changes

  // We add a check here: only render the swiper if we have data
  if (slideData.length === 0) {
    // Optional: You can put a loading skeleton here
    return (
      <div className={`relative h-[30vh] md:h-[40vh] lg:h-[50vh] w-full flex justify-center items-center bg-base-200`}>
        <span className="loading loading-spinner text-primary loading-lg"></span>
      </div>
    );
  }

  return (
    <div className={`relative h-[30vh] md:h-[40vh] lg:h-[50vh] w-full`}>
      {/* We pass the ref and set init="false".
        init="false" tells Swiper to wait for our manual .initialize() call.
      */}
      <swiper-container
        ref={swiperRef}
        class="h-full w-full"
        init="false"
      >
        {slideData.map((slide, index) => (
          <swiper-slide key={index} class="relative">
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

            {/* Dark Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/35"></div>

            {/* Content Container (Aligned with your navbar/footer) */}
            <div className="absolute inset-0 max-w-[1600px] mx-auto w-full flex items-center">
              <div className="px-8 md:px-16 max-w-xl lg:max-w-2xl text-white">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary poppins mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-base-content mb-8">
                  {slide.description}
                </p>
                <button className="btn btn-primary btn-lg font-semibold text-lg cursor-target">
                  Discover More
                </button>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
};

export default Banner;

