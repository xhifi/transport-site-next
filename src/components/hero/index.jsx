import Image from "next/image";
import HeroTruck from "../../../public/hero_truck.png";
import HeroBG from "../../../public/hero_bg_cropped_compressed.jpg";
import Link from "../core/Link";

const index = () => {
  return (
    <div className="container-fluid p-4 hero-container overflow-hidden position-relative hero-container">
      <div className="hero-bg">
        <Image src={HeroBG} />
      </div>

      <div className="d-flex align-items-center">
        <div className="hero-content text-center text-md-start col-12 col-md-6 my-0 my-md-5">
          <span className="h4 text-warning">We specialize in the transportation</span>
          <h1>Focused on moving vehicles efficiently</h1>
          <p>
            Setting the Standard for Over Two Decades: Elevate Your Automobile Transport with Our Unrivaled Expertise. As Your Premier
            Choice, We Offer Professional Services in Air, Sea, and Ground Transportation, Delivering Unmatched Excellence and Commitment to
            Your Vehicle`&apos;s Journey.
          </p>
          <Link className="btn btn-lg btn-outline-primary w-100" path="/">
            Get a Quote
          </Link>
        </div>

        <div className="hero-image col-md-6 d-none d-md-block" style={{ width: HeroTruck.width / 2, height: HeroTruck.height / 2 }}>
          <Image src={HeroTruck} />
        </div>
      </div>
    </div>
  );
};
export default index;
