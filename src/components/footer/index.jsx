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
    [
      { path: "/", text: "Privacy Policy" },
      { path: "/about", text: "Data Security Policy" },
      { path: "/why-us", text: "Health and Control Policy" },
    ],
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
        </div>
      </div>
      <Annotations />
    </>
  );
};
export default index;
