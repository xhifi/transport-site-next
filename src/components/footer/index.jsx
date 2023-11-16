import Annotations from "../Annotations";
import FooterList from "./FooterList";
import FooterLogo from "./FooterLogo";

const mockData = {
  footerLinks: [
    [
      { path: "/", text: "Home" },
      { path: "/", text: "About Us" },
      { path: "/", text: "Services we offer" },
      { path: "/", text: "Book a meeting" },
    ],
    // [
    //   { path: "/", text: "Privacy Policy" },
    //   { path: "/", text: "Data Security Policy" },
    //   { path: "/", text: "Transportation Policy" },
    // ],
  ],
};

const index = () => {
  return (
    <>
      <div className="container-fluid bg-light border-top py-4">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4">
          <FooterLogo />
          {mockData.footerLinks.map((list, index) => {
            return <FooterList data={list} key={index} />;
          })}
          <div className="col">
            <p className="mb-0 mb-md-2">
              Choose us to relocate your valuable vehicles. At Active Transports experience and professionalism combine to make us your
              premier choice for automobile transport
            </p>
          </div>
        </div>
      </div>
      <Annotations />
    </>
  );
};
export default index;
