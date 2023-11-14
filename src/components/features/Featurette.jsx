import Image from "next/image";

const Featurette = ({ children, heading, invert, image }) => {
  return (
    <div className="featurette-row row row-cols-1 row-cols-md-2 align-items-center justify-content-between mb-5">
      <div className={`col-12 col-md-6 col-lg-7 ${invert ? "order-1" : ""}`.split()}>
        <h3>{heading}</h3>
        {children}
      </div>
      <div className="col-12 col-md-6 col-lg-5 shadow image-container position-relative rounded-4 shadow overflow-hidden">
        <Image src={image} fill className="img-fluid" />
      </div>
    </div>
  );
};
export default Featurette;
