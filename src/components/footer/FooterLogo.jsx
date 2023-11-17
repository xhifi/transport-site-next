import Logo from "../core/Logo";
import BrandImage from "../../../public/brand.svg";
import Link from "../core/Link";

const FooterLogo = () => {
  return (
    <div className="col-12 col-md-4">
      <Logo small src={BrandImage.src} className="mb-2 d-flex align-items-center text-decoration-none" />
      <ul className="list-unstyled">
        <li>
          <i className="bi bi-globe-americas me-1"></i>77002 Houston Texas
        </li>
        <li>
          <Link path="tel:3463263009" className="text-decoration-none">
            <i className="bi bi-telephone-fill me-1"></i>(346) 326-3009
          </Link>
        </li>
        <li>
          <Link path="mailto:info@activetransportllc.com" className="text-decoration-none">
            <i className="bi bi-envelope-fill me-1"></i> info@activetransportllc.com
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default FooterLogo;
