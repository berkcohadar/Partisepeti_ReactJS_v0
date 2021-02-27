import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import {CampaignDiv,CampaignItem,CampaignItemImage,} from "./Home.elements"

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const data = [
    {
      url:
        "https://www.partisepeti.com/Images//PS%20BERK%20YENI%20BANNER//yilbasi-slider.jpg",
      alt: "Yilbasi Isik Agac Christmas",
    },
    {
      url:
        "https://www.partisepeti.com/Images//PS%20BERK%20YENI%20BANNER//valentines-slider-gift.jpg",
      alt: "Sevgililer Gunu Valentines Day Hediye Sürpriz 14 Subat",
    },
    {
      url:
        "https://www.partisepeti.com/Images//PS%20BERK%20YENI%20BANNER//valentines-slider-balloon.jpg",
      alt: "Yilbasi Isik Agac Christmas",
    },
    {
      url:
        "https://www.partisepeti.com/Images//PS%20BERK%20YENI%20BANNER///valentines-slider-box.jpg",
      alt: "Yilbasi Isik Agac Christmas",
    },
    {
      url:
        "https://www.partisepeti.com/Images//PS%20BERK%20YENI%20BANNER//valentines-slider-decor.jpg",
      alt: "Yilbasi Isik Agac Christmas",
    },
    {
      url:
        "https://www.partisepeti.com/Images//PS%20BERK%20YENI%20BANNER////anasayfa-slider-isik-genel.jpg",
      alt: "Yilbasi Isik Agac Christmas",
    },
    {
      url:
        "https://www.partisepeti.com/Images//PS%20BERK%20YENI%20BANNER/////anasayfa-banner-pastalar.jpg",
      alt: "Yilbasi Isik Agac Christmas",
    },
  ];
  const length = data.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(data) || data.length <= 0) return null;
  return (
    <div>
    <CampaignDiv>
    {data.map((slide, index) => {
      return <CampaignItem style={current==index?{transform:"scale(1.2)",boxShadow: "0px 0px 15px 0px #1a1b29"}:null}><CampaignItemImage id={index} onClick={()=>setCurrent(index)} src={slide.url}></CampaignItemImage> </CampaignItem>})}
      
    </CampaignDiv>
    <section className="slider">
      {/* <LeftOutlined className="left-arrow" onClick={prevSlide} />
      <RightOutlined className="right-arrow" onClick={nextSlide} /> */}
      {data.map((slide, index) => {
        return <div className={index===current? 'slide active' : 'slide'} key={index}>

            {index === current && (
                <img src={slide.url} alt={slide.alt} />

            )}
        </div>


      })}
    </section>
</div>

  );
};
export default Carousel;
