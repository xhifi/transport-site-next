import NLink from "next/link";

const checkLink = (link) => {
  try {
    const checked = new URL(link);
    if (checked.protocol.startsWith("http")) {
      return true;
    }
    return false;
  } catch (error) {
    if (error) return false;
  }
};

const Link = ({ path, children, ...rest }) => {
  if (checkLink(path)) {
    return (
      <a href={path} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <NLink href={path} {...rest}>
      {children}
    </NLink>
  );
};

export default Link;
