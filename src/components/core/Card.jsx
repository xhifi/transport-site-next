import Link from "./Link";

const Card = ({
  clickable,
  path,
  equalHeight,
  alignCenter,
  children,
  ...rest
}) => {
  if (clickable) {
    return (
      <Link
        path={path}
        {...rest}
        className={`col text-decoration-none text-dark ${rest.className}`}
      >
        <div
          className={`card border-0 ${equalHeight ? "h-100" : ""} ${
            alignCenter ? "align-items-center" : ""
          }`.trim()}
        >
          {children}
        </div>
      </Link>
    );
  }

  return (
    <div {...rest} className={`col ${rest.className}`}>
      <div
        className={`card border-0 ${equalHeight ? "h-100" : ""} ${
          alignCenter ? "align-items-center" : ""
        }`.trim()}
      >
        {children}
      </div>
    </div>
  );
};
export default Card;
