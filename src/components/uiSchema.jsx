import { Editor } from "@monaco-editor/react";
const UiSchema = ({ setjson, secondJson }) => {
  const ondatachange = (e) => {
    secondJson.current = e;
  };
  const setJson = () => {
    try {
      setjson(JSON.parse(secondJson.current));
    } catch (err) {
      alert("Json Not Valid");
    }
  };
  return (
    <div className="border-black border-solid border-2 w-[49%] h-screen fixed bg-gray-400 p-5  rounded-xl">
      <div className="text-lg text-gray-800 underline  w-28 text-center rounded-xl bg-blue-200 mt-5 font-bold ">
        UI Schema
      </div>
      <div className="w-full my-2">
        <Editor
          width="90%"
          height="80vh"
          theme="vs-dark"
          defaultLanguage="json"
          onChange={ondatachange}
        />
      </div>
      <div
        onClick={setJson}
        className="text-gray-800 font-bold p-1  cursor-pointer border-4 border-blue-950 w-40 text-center rounded-xl bg-blue-200 hover:shadow-xl hover:bg-blue-950 hover:text-white "
      >
        Generate Form
      </div>
    </div>
  );
};
export default UiSchema;
