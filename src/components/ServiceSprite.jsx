import Card from "./core/Card";
import Image from "./core/Image";
import Link from "./core/Link";

const ServiceSprite = ({ image, heading, description, children }) => {
  return (
    <Card className="text-center border-none" alignCenter>
      <div
        className="d-block rounded rounded-circle overflow-hidden position-relative mb-3 shadow"
        style={{ width: "100px", height: "100px" }}
      >
        <Image src={image} height={100} width={100} style={{ top: 0, left: 0 }} className="position-absolute" />
      </div>
      <div className="card-content">
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default ServiceSprite;
