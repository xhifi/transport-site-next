"use client";

import Link from "./core/Link";

const Annotations = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-dark text-center py-2 text-secondary">
      <small>
        Developed by{" "}
        <Link path="https://www.brainloggers.co.uk" rel="referrer" className="text-light text-decoration-none">
          Brainloggers Ltd.&copy; {date}
        </Link>
      </small>
    </div>
  );
};
export default Annotations;
