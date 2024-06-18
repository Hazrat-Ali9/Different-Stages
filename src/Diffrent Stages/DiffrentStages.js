import Stages from "./Stages/Stages.js";
import Text from "./Text/Text.js";
import Buttons from "./Buttons/Buttons.js";
import { useState } from "react";

export default function DiffrentStages() {
  const texts = [
    "Step 1: Learn JavaScript",
    "Step 2: Learn React",
    "Step 3: Invest Your new Income",
  ];
  const [number, setNumber] = useState(1);
  return (
    <div
      className="container w-50 d-flex flex-column justify-content-around align-items-center"
      style={{
        backgroundColor: "#f6f6f6",
        height: "40vh",
      }}
    >
      <div className="row d-flex flex-column justify-content-around align-items-center w-75">
        <Stages number={number} />
      </div>

      <Text text={texts[number - 1]} />
      <Buttons number={number} setNumber={setNumber} stages={texts.length} />
    </div>
  );
}
