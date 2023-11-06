import Link from "./Link";
import Image from "./Image";

const Logo = ({ src, ...rest }) => {
  return (
    <Link className="navbar-brand m-0 d-flex align-items-center h-100" path="/" {...rest}>
      <Image src={src} cover height="32px" width="32px" quality={100} />
      <span className="ms-2 mb-0 fw-bold">LOGO</span>
    </Link>
  );
};
export default Logo;
