import { createContext, useContext, useEffect, useState } from "react";
import { myAxios } from "../api/Axios";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [temak, setTemak] = useState([]);
  const [szavak, setSzavak] = useState([]);

  const fetchTemak = async () => {
    const response = await myAxios.get("/tema");
    setTemak(response.data);
  };

  const fetchSzavakTemakSzerint = async (id) => {
    const response = await myAxios.get(`/szavak/tema/${id}`);
    setSzavak(response.data);
  };

  useEffect(() => {
    fetchTemak();
  }, []);

  return (
    <ApiContext.Provider value={{ temak, szavak, fetchSzavakTemakSzerint }}>
      {children}
    </ApiContext.Provider>
  );
};

export default function useApiContext() {
  return useContext(ApiContext);
}
