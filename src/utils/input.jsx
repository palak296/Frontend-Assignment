import React from "react";

function resolve(path, obj = self, separator = ".") {
  var properties = Array.isArray(path) ? path : path.split(separator);
  return properties.reduce((prev, curr) => prev?.[curr], obj);
}
function Input({ json, register, pk = "", errors }) {
  return (
    <div className="flex flex-row items-center justify-between my-2">
      <div className="text-sm font-bold text-black flex flex-row items-center">
        {json.label}
        {json.validate.required && <span className="text-red-600">*</span>}{" "}
        
      </div>
      <div className="w-[50%]">
        <input
          placeholder={json.placeholder}
          disabled={json.validate.immutable}
          {...register(pk + json.jsonKey, {
            required: json.validate.required,
            pattern: json.validate.pattern,
          })}
          className="w-full outline-none bg-[#e5eefa] border border-gray-400 text-gray-600 px-2 py-1 text-sm rounded-lg shadow font-semibold"
        />
        {resolve(pk + json.jsonKey, errors) && (
          <p className="text-red-600 text-xs mt-1 font-medium">
            The field cannot be empty
          </p>
        )}
      </div>
    </div>
  );
}

export default Input;
