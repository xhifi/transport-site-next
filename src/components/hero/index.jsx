import Image from "next/image";
import HeroTruck from "../../../public/hero_truck.png";

const index = () => {
  return (
    <div className="container-fluid px-0 hero-container overflow-hidden">
      <div className="row row-cols-1 row-cols-md-2 align-items-center">
        <div className="col p-4 ps-md-5">
          <span className="h4 text-warning">We specialize in the transportation</span>
          <h1>Focused on moving vehicles efficiently</h1>
          <p>
            We are a specialized transportation solutions provider with over 20 years of experience in the industry. We offer a variety of
            transportation solutions, including air freight, sea freight, and ground transportation.
          </p>
        </div>
        <div className="col position-relative hero-image-container d-none d-md-block">
          <Image src={HeroTruck.src} layout="fill" className="hero-image" />
        </div>
      </div>
    </div>
  );
};
export default index;
