import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Zoo_1 from "../assets/Zoo_1.png";
import Zoo_2 from "../assets/Zoo_2.png";
import Zoo_3 from "../assets/Zoo_3.png";
import Zoo_4 from "../assets/Zoo_4.png";
import Zoo_5 from "../assets/Zoo_5.png";

import Chatbot_1 from "../assets/Chatbot_1.png";
import Chatbot_2 from "../assets/Chatbot_2.png";
import Chatbot_3 from "../assets/Chatbot_3.png";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const images = [Zoo_1, Zoo_2, Zoo_3, Zoo_4, Zoo_5];
  const images_2 = [Chatbot_1, Chatbot_2, Chatbot_3];

  const title = ["HTML CSS Landing Page", "Chatbot Web App"];

  const description1 =
    "I developed the Zoo Landing Page project during an online free boot camp, showcasing my skills in HTML and CSS. This responsive website features a clean design, providing an optimal user experience on various devices. Through this project, I demonstrated my ability to develop a front-end static website.";

  const description2 =
    "In this project, we experimented and developed a hybrid model by combining two pretrained models GPT-2 and DistilBERT using three different fusion techniques. The aim was to enhance performance on a customer support dataset, demonstrating my ability to integrate advanced NLP models and experiment with multi-model architectures.";

  return (
    <div className="bg-indigo-900 min-h-screen flex flex-col gap-20 px-4 sm:px-8 py-10 rounded-2xl projects-container">
      {/* Project 1 */}
      <div className="w-full flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto bg">
        {/* Slider */}
        <div className="w-full md:w-1/2">
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`Zoo Slide ${index + 1}`}
                  className="w-full h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-contain rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* Description */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-start gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">{title[0]}</h2>
          <p className="text-base sm:text-lg leading-relaxed">{description1}</p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="w-full flex flex-col md:flex-row-reverse items-center gap-10 max-w-6xl mx-auto">
        {/* Slider */}
        <div className="w-full md:w-1/2">
          <Slider {...settings}>
            {images_2.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`Chatbot Slide ${index + 1}`}
                  className="w-full h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] object-contain rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>
        {/* Description */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-start gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold">{title[1]}</h2>
          <p className="text-base sm:text-lg leading-relaxed">{description2}</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
