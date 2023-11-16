import Featurette from "./Featurette";
import Feature1 from "../../../public/images/services/transparent-pricing.jpg";
import Feature2 from "../../../public/images/services/efficient-team.jpg";

const mockData = {
  heading: "Featured Content",
  features: [{ image: "" }],
};

const index = () => {
  return (
    <div className="container-fluid px-0 bg-primary bg-gradient text-light shadow">
      <div className="container py-5">
        <div className="container-fluid px-2 px-md-0">
          <Featurette heading="Experienced and Professional Team" image={Feature1} border="border-funky-1">
            <p>
              Our transport operations are orchestrated by a team of seasoned industry professionals. With a collective experience spanning
              decades, our experts bring in-depth knowledge, meticulous attention to detail, and a commitment to upholding the highest
              standards of professionalism. Your vehicles are in the capable hands of a team dedicated to ensuring the utmost care and
              precision throughout the transportation process.
            </p>
          </Featurette>
          <Featurette heading="Transparent Pricing" image={Feature2} invert={true} border="border-funky-2">
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
