import Annotations from "../Annotations";
import FooterList from "./FooterList";
import FooterLogo from "./FooterLogo";

const mockData = {
  footerListHeading: "Mock Heading",
  footerLinks: [
    { path: "/", text: "Home Page" },
    { path: "/about", text: "About Page" },
    { path: "/why-us", text: "Why Us?" },
    { path: "/contact", text: "Contact Us" },
  ],
};

const index = () => {
  return (
    <>
      <div className="container-fluid bg-light border-top py-4">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-4">
          <FooterLogo />
          <FooterList data={mockData} />
          <FooterList data={mockData} />
          <FooterList data={mockData} />
        </div>
      </div>
      <Annotations />
    </>
  );
};
export default index;
