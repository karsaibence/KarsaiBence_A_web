import React, { useState } from "react";
import useApiContext from "../contexts/ApiContext";
import Szavak from "./Szavak";

const TemaValaszto = () => {
  const { temak, fetchSzavakTemakSzerint } = useApiContext();
  const [valasztottTema, setValasztottTema] = useState(-1);

  const handleChange = (e) => {
    setValasztottTema(e.target.value);
    fetchSzavakTemakSzerint(e.target.value);
  };

  return (
    <div>
      <select onChange={(e) => handleChange(e)}>
        {valasztottTema < 0 ? <option value="-1">Válassz témát</option> : ""}
        {temak.length > 0
          ? temak.map((tema) => (
              <option key={tema.id} value={tema.id}>
                {tema.temanev}
              </option>
            ))
          : ""}
      </select>
      <Szavak />
    </div>
  );
};

export default TemaValaszto;
