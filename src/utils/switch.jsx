import React from "react";

function Switch({ json, register, pk = "" }) {
  return (
    <div className="flex flex-row items-center my-2">
      <div className="">
        <input
          disabled={json.validate.immutable}
          {...register(pk + json.jsonKey)}
          type={"checkbox"}
          defaultChecked={json.validate.defaultValue}
          className="form-checkbox h-4 w-4 text-black outline-none rounded-md focus:ring  focus:ring-gray-400 ring-offset-1"
        />
      </div>
      <div className="text-sm font-bold text-black ml-2 flex flex-row items-center">
        {json.label}
        
      </div>
    </div>
  );
}

export default Switch;
