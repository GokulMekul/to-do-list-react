import React from "react";
import PageB from "./PageB";

function PageA() {
  const fut = () => {
    return <h1>PageA</h1>;
  };

  return (
    <div>
      <h1>Hello</h1>
      <PageB fut={fut} />
    </div>
  );
}
export default PageA;
