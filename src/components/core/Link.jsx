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

const scroll2El = (elID) => {
  window.scrollTo({
    top: document.getElementById(elID).offsetTop - 60,
    behavior: "smooth",
  });
};

const scrollToSection = (e) => {
  e.preventDefault();
  const goto = e.target.getAttribute("goto");
  setTimeout(() => {
    scroll2El(goto);
  }, 100);
};

const Link = ({ path, children, ...rest }) => {
  if (path.startsWith("#")) {
    return (
      <button onClick={scrollToSection} goto={path} {...rest}>
        {children}
      </button>
    );
  }

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
