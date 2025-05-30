import React from "react";
import useApiContext from "../contexts/ApiContext";

const Eredmeny = () => {
  const { eredmeny } = useApiContext();
  return (
    <div>
      <p>Az elért eredmény: {eredmeny}</p>
    </div>
  );
};

export default Eredmeny;
