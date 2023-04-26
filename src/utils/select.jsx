import React from "react";
function resolve(path, obj = self, separator = ".") {
  var properties = Array.isArray(path) ? path : path.split(separator);
  return properties.reduce((prev, curr) => prev?.[curr], obj);
}
function Select({ json, register, pk = "", errors }) {
  return (
    <div className="flex flex-row items-center justify-between my-2">
      <div className="text-sm font-bold text-black flex flex-row items-center">
        {json.label}
        {json.validate.required && <span className="text-red-500">*</span>}{" "}
        
      </div>
      <div className="w-[50%]">
        <select
          disabled={json.validate.immutable}
          defaultValue={json.validate.defaultValue}
          {...register(pk + json.jsonKey, {
            required: json.validate.required,
          })}
          className="w-full outline-none bg-[#e5eefa] border border-gray-400 text-gray-600 px-2 py-1 text-sm rounded-lg shadow font-bold"
        >
          {json.validate.options.map((obj, i) => (
            <option value={obj.value} key={i}>
              {obj.label}
            </option>
          ))}
        </select>
        {resolve(pk + json.jsonKey, errors) && (
          <p className="text-red-500 text-xs mt-1 font-medium">
            Field is required or Pattern not matched
          </p>
        )}
      </div>
    </div>
  );
}

export default Select;
