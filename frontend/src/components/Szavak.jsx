import React, { useState } from "react";
import useApiContext from "../contexts/ApiContext";
import ListGroup from "react-bootstrap/ListGroup";

const Szavak = () => {
  const { szavak } = useApiContext();
  const [valasz, setValasz] = useState("");

  return (
    <ListGroup>
      <ListGroup.Item
        className="cim-sor"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="cim">ANGOL</div>
        <div className="cim">MAGYAR</div>
        <div className="cim eredmeny">visszajelzés</div>
      </ListGroup.Item>
      {szavak.length > 0
        ? szavak.map((szo) => {
            return (
              <ListGroup.Item
                className="lista-elem"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div>{szo.angol}</div>
                <div>
                  <input
                    type="text"
                    onChange={(e) => setValasz(e.target.value)}
                  />
                </div>
                <div>
                  {valasz !== "" ? (valasz === szo.magyar ? "✅" : "❌") : ""}
                </div>
              </ListGroup.Item>
            );
          })
        : ""}
    </ListGroup>
  );
};

export default Szavak;
