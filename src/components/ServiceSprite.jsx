import Card from "./core/Card";
import Image from "./core/Image";
import Link from "./core/Link";

const ServiceSprite = ({ image, heading, description, children }) => {
  return (
    <div className="service col">
      <div className="service-inner">
        <div className="position-relative">
          <Image src={image} layout="fill" className="position-relative" />
          <span className="service-icon">
            <i className="bi bi-4-circle-fill"></i>
          </span>
        </div>

        <div className="card-content p-3 mt-5">
          <h3>{heading}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSprite;
