import Featurette from "./Featurette";

const mockData = {
  heading: "Featured Content",
  features: [{ image: "" }],
};

const index = () => {
  return (
    <div className="container-fluid px-0 bg-primary text-light">
      <div className="container py-5">
        <div className="container-fluid px-2 px-md-0">
          <Featurette
            heading="Experienced and Professional Team"
            image="https://plus.unsplash.com/premium_photo-1668279471288-4e712d40c989?q=80&w=2046&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            border="border-funky-1"
          >
            <p>
              Our transport operations are orchestrated by a team of seasoned industry professionals. With a collective experience spanning
              decades, our experts bring in-depth knowledge, meticulous attention to detail, and a commitment to upholding the highest
              standards of professionalism. Your vehicles are in the capable hands of a team dedicated to ensuring the utmost care and
              precision throughout the transportation process.
            </p>
          </Featurette>
          <Featurette
            heading="Transparent Pricing"
            image="https://images.unsplash.com/photo-1694813646634-9558dc7960e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            invert={true}
            border="border-funky-2"
          >
            <p>
              At Active Transports we believe in transparency and integrity in our business practices. Our pricing structure is clear,
              concise, and devoid of hidden fees. You can trust that the cost you see is the cost you pay. This commitment to transparent
              pricing reflects our dedication to providing an honest and straightforward experience for our valued customers, ensuring that
              you have a clear understanding of the financial aspect of your vehicle transportation needs
            </p>
          </Featurette>
        </div>
      </div>
    </div>
  );
};
export default index;
