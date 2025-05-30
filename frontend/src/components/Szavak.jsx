import React, { useState } from "react";
import useApiContext from "../contexts/ApiContext";
import ListGroup from "react-bootstrap/ListGroup";

const Szavak = () => {
  const { szavak } = useApiContext();
  const [valasz, setValasz] = useState("");
  return (
    <ListGroup>
      <ListGroup.Item className="cim">
        <div className="cim">ANGOL</div>
        <div className="cim">MAGYAR</div>
        <div className="cim eredmeny">visszajelzés</div>
      </ListGroup.Item>
      {szavak.length > 0
        ? szavak.map((szo) => {
            return (
              <ListGroup.Item className="lista-elem">
                <div>{szo.angol}</div>
                <div>
                  <input
                    type="text"
                    onChange={(e) => setValasz(e.target.value)}
                  />
                </div>
                {valasz !== "" ? (valasz === szo.magyar ? "✅" : "❌") : ""}
              </ListGroup.Item>
            );
          })
        : ""}
    </ListGroup>
  );
};

export default Szavak;
