import React from "react";
import "./Definations.css";

const Definations = ({ word, category, meanings }) => {
  return (
    <div className="meaning">
      {word === "" ? (
        <div className="subTitle">Start by typing a word in search</div>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def, index) => (
              <div
                className="singleMean"
                style={{ backgroundColor: "white", color: "black" }}
              >
                {def.definition}
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example : </b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms : </b> {def.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definations;
