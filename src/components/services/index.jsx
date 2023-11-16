import ServiceSprite from "./ServiceSprite";
import ServicesData from "@/data/services";

const index = () => {
  return (
    <div className="services-container my-5" id="#services">
      <div className="services-heading">
        <h2 className="text-center display-4 fw-bold">Our Services</h2>
      </div>
      <div className="services row row-cols-md-4 g-4 justify-content-center">
        {ServicesData.servicesSprites.map((item, index) => {
          return <ServiceSprite heading={item.heading} description={item.description} image={item.image} key={index} />;
        })}
      </div>
    </div>
  );
};
export default index;
