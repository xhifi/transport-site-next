import Logo from "../core/Logo";
import BrandImage from "../../../public/brand.svg";

const FooterLogo = () => {
  return (
    <div className="col-6">
      <Logo small src={BrandImage.src} className="mb-2 d-flex align-items-center text-decoration-none text-dark" />
      <p>Lorem Ipsum Dolor Sit Amet Something Else Harry Potter Elden Ring Allan Wake</p>
    </div>
  );
};
export default FooterLogo;
