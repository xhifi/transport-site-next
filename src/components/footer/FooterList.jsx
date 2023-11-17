import Link from "../core/Link";

const FooterList = ({ data }) => {
  return (
    <ul className="col-12 col-md-4 list-unstyled footer-list">
      {data.map((listItem, index) => {
        return (
          <li key={index}>
            <i className="bi bi-chevron-right"></i>{" "}
            <Link path={listItem.path} className="footer-list-item-link text-decoration-none">
              {listItem.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default FooterList;
