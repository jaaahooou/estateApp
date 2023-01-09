import React from "react";

const notFound = () => {
  return (
    <div className="notfound">
      <h1 className="notfound__heading">404 Not found</h1>
      <p className="notfound__paragraph">
        The link you requested does not exist on this website.
      </p>
    </div>
  );
};

export default notFound;
