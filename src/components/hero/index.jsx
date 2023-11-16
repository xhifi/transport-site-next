import Image from "next/image";
import HeroTruck from "../../../public/hero_truck.png";
import HeroBG from "../../../public/hero_bg_cropped_compressed.jpg";
import Link from "../core/Link";

const index = () => {
  return (
    <div className="container-fluid p-4 hero-container overflow-hidden position-relative hero-container shadow">
      <div className="hero-bg">
        <Image src={HeroBG} quality={50} priority={true} alt="hero background" />
      </div>

      <div className="d-flex align-items-center">
        <div className="hero-content text-center text-md-start col-12 col-md-6 my-0 my-md-5">
          <span className="h4 text-secondary">Our Commitment to excellence</span>
          <h1 className="fw-bold">Moving with safety and efficiency</h1>
          <p>
            Choose us to relocate your valuable vehicles. At Active Transports experience and professionalism combine to make us your
            premier choice for automobile transport
          </p>
          <Link className="btn btn-lg btn-outline-primary w-100" path="#contact">
            Get a Quote
          </Link>
        </div>

        <div className="hero-image col-md-6 d-none d-md-block" style={{ width: HeroTruck.width / 2, height: HeroTruck.height / 2 }}>
          <Image src={HeroTruck} quality={50} priority={true} alt="transportation truck red colored" />
        </div>
      </div>
    </div>
  );
};
export default index;
