import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const img1 =
  "https://plus.unsplash.com/premium_photo-1668279471288-4e712d40c989?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img2 =
  "https://images.unsplash.com/photo-1694813646634-9558dc7960e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img3 =
  "https://images.unsplash.com/photo-1696794754344-5a44bf0663a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const img4 =
  "https://images.unsplash.com/photo-1693307815317-f457f9b9d1fb?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const index = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 2000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <div className="swiper-slide-background">
          <Image src={img2} fill />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-background">
          <Image src={img3} fill />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-background">
          <Image src={img4} fill />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-slide-background">
          <Image src={img1} fill />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default index;
