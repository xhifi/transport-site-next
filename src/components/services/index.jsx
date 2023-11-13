import ServiceSprite from "../ServiceSprite";

const mockData = {
  servicesTitle: "Service Title",
  servicesSprites: [
    {
      heading: "Service 1",
      description: "Service 1 description",
      image:
        "https://images.unsplash.com/photo-1693307815317-f457f9b9d1fb?q=80&w=2033&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      heading: "Service 2",
      description: "Service 2 description",
      image:
        "https://images.unsplash.com/photo-1696794754344-5a44bf0663a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      heading: "Service 3",
      description: "Service 3 description",
      image:
        "https://images.unsplash.com/photo-1694813646634-9558dc7960e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      heading: "Service 4",
      description: "Service 4 description",
      image:
        "https://plus.unsplash.com/premium_photo-1668279471288-4e712d40c989?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

const index = () => {
  return (
    <div className="services-container">
      <div className="services-heading">
        <h2 className="text-center">Our Services</h2>
      </div>
      <div className="services row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
        {mockData.servicesSprites.map((item, index) => {
          return <ServiceSprite heading={item.heading} description={item.description} image={item.image} key={index} />;
        })}
      </div>
    </div>
  );
};
export default index;
