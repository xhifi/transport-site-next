import Image from "next/image";

const ServiceSprite = ({ image, heading, alt, description, children }) => {
  return (
    <div className="service col-12 col-sm-6 col-md-4">
      <div className="service-inner">
        <div className="position-relative">
          <Image src={image} fill className="position-relative service-image" alt={heading || alt} />
          {/* <span className="service-icon">
            <i className="bi bi-4-circle-fill"></i>
          </span> */}
        </div>

        <div className="text-primary p-4 mt-5">
          <h3 className="fw-medium h4">{heading}</h3>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSprite;
