import Logo from "../core/Logo";
import LOGO from "@/app/favicon.ico";

const FooterLogo = () => {
  return (
    <div className="col">
      <Logo src={LOGO.src} className="mb-2 d-flex align-items-center text-decoration-none text-dark" />
      <p>Lorem Ipsum Dolor Sit Amet Something Else Harry Potter Elden Ring Allan Wake</p>
    </div>
  );
};
export default FooterLogo;
