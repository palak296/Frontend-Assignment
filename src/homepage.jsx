import { useRef, useState } from "react";
import React from "react";
import UiSchema from "./components/uiSchema";
import CreateForm from "./components/createForm";
const Homepage = () => {
  const secondJson = useRef();
  const [json, setjson] = useState([]);

  return (
    <div className="flex-row bg-black p-1 min-h-screen">
      <UiSchema setjson={setjson} secondJson={secondJson} />
      <CreateForm json={json} />
    </div>
  );
};

export default Homepage;
