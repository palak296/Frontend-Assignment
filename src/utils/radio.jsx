import React, {  useEffect } from "react";

function Radio({ json, setValue, watch, pk = "" }) {
  const selected = watch(pk + json.jsonKey);


  useEffect(() => {
    if (!selected) {
      setValue(pk + json.jsonKey, json?.validate?.defaultValue);
    }
  }, []);

  const onChange = (value) => {
    setValue(pk + json.jsonKey, value);
  };
  return (
    <div className="my-2">
      {json.level == 0 && (
        <div className="text-sm font-bold text-black">{json.label}</div>
      )}

      <div className="flex flex-row gap-x-2">
        {json.validate.options.map((obj, i) =>
          obj.value == selected ? (
            <div
              key={i}
              className="w-full outline-none bg-[#dfebfc] border-2 border-[#c8cdf5] p-2 text-sm rounded-lg shadow-md font-bold text-black cursor-pointer"
            >
              {obj.label}
            </div>
          ) : (
            <div
              key={i}
              className="w-full outline-none bg-[#e5eefa] border border-gray-400 font-bold text-black px-2 py-1 text-sm rounded-lg inner-shadow cursor-pointer "
              onClick={() => onChange(obj.value)}
            >
              {obj.label}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Radio;
