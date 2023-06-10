import googleLogo from "../../img/Google Logo.svg";
import airnbLogo from "../../img/Airbnb Logo.svg";
import uberEatsLogo from "../../img/Uber Eats Logo.svg";
import amazonLogo from "../../img/Amazon Logo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ourClient.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export default function App(props: any) {
  const data = props?.builderBlock?.component?.options?.heros;
  return (
    <div className="outClientWrapper">
      <div className="wrapper">
        <div className="content">
          <h1>{data?.title}</h1>
          <p>{data?.description}</p>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={googleLogo} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={airnbLogo} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={uberEatsLogo} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={amazonLogo} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
