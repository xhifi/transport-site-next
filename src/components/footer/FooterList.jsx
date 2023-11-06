import Link from "../core/Link";

const FooterList = ({ data }) => {
  return (
    <div className="col">
      <h5>{data.footerListHeading}</h5>
      <ul className="mb-0 list-unstyled footer-list">
        {data.footerLinks.map((listItem, index) => {
          return (
            <li key={index}>
              <Link path={listItem.path}>{listItem.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FooterList;
