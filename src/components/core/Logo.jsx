import Link from "./Link";
import Image from "./Image";

const Logo = ({ src, small, ...rest }) => {
  return (
    <Link className="navbar-brand m-0 d-flex align-items-center h-100" path="/" {...rest}>
      <Image src={src} cover height="65px" width="65px" quality={100} />
      <span className={`ms-2 mb-0 fw-bold h3 ${small ? "h5" : ""}`}>Active Transport LLC</span>
    </Link>
  );
};
export default Logo;
