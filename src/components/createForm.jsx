import { useForm } from "react-hook-form";
import Input from "../utils/input";
import Radio from "../utils/radio";
import Select from "../utils/select";
import Switch from "../utils/switch";
import React, { useState } from "react";
import Modal from "../utils/modal";
const CreateForm = ({ json }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    setIsModalOpen(true);
  };

  const FormData = ({ json, pk = "" }) => {
    const data = json;
    data.sort((a, b) => a.sort - b.sort);
    const Obj = ({ item }) => {
      switch (item.uiType) {
        case "Input":
          return (
            <div
              className={
                item.level == 0
                  ? "p-4 bg-[#fafdff] rounded-lg mb-4"
                  : "mb-4"
              }
            >
              <Input
                json={item}
                register={register}
                setValue={setValue}
                watch={watch}
                pk={pk}
                errors={errors}
              />
            </div>
          );
        case "Radio":
          return (
            <div
              className={
                item.level == 0
                  ? "p-5 bg-[#fafdff] shadow-md rounded-md max-w-2xl mb-4"
                  : "mb-4"
              }
            >
              <Radio
                json={item}
                register={register}
                setValue={setValue}
                watch={watch}
                pk={pk}
                errors={errors}
              />
            </div>
          );
        case "Select":
          return (
            <div
              className={
                item.level == 0
                  ? "p-5 bg-[#fafdff] shadow-md rounded-md max-w-2xl mb-4"
                  : "mb-4"
              }
            >
              <Select
                json={item}
                register={register}
                setValue={setValue}
                watch={watch}
                pk={pk}
                errors={errors}
              />
            </div>
          );
        case "Group":
          return (
            <div
              className={
                item.level == 0
                  ? "p-5 bg-[#fafdff] shadow-md rounded-md max-w-2xl mb-4"
                  : "mb-4"
              }
            >
              <div className="text-sm font-bold text-black ">
                {item.label}
              </div>
              <div className="h-[2px] bg-gray-300 my-2 w-full"></div>
              <FormData
                json={item.subParameters}
                pk={pk + item.jsonKey + "."}
              />
            </div>
          );
        case "Switch":
          return (
            <div
              className={
                item.level == 0
                  ? "p-5 bg-[#fafdff] shadow-md rounded-md max-w-2xl mb-4"
                  : "mb-4"
              }
            >
              <Switch
                json={item}
                register={register}
                setValue={setValue}
                watch={watch}
                pk={pk}
                errors={errors}
              />
            </div>
          );
        case "Ignore":
          if (item.conditions) {
            const cond = item.conditions[0];
            if (cond.op == "==") {
              if (getValues(cond.jsonKey) != cond.value) return null;
            }
          }
          return (
            <FormData
              json={item.subParameters}
              pk={pk + item.jsonKey + "."}
            />
          );
        default:
          return null;
      }
    };
    return (
      <div>
        {data.map((item, i) => (
          <Obj item={item} key={i} />
        ))}
      </div>
    );
  };

  return (
      <div className="ml-[50%] p-10 border-2 min-h-screen  border-black rounded-xl bg-gray-400">
          {json && json.length ?<FormData json={json} />: <div className="text-black flex  justify-center py-[40%] font-bold text-xl">Enter JSON data to generate a form </div>}
      
      {json && json.length > 0 && (
        <div className="flex justify-end">
          <div
            onClick={handleSubmit(onSubmit)}
            className="text-gray-800 font-bold p-1  cursor-pointer border-4 border-blue-950 w-40  text-center rounded-xl bg-blue-200 hover:shadow-xl hover:bg-blue-950 hover:text-white "
          >
            Submit Form
          </div>
        </div>
      )}{" "}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="bg-gray-400 rounded-xl shadow-md p-5 text-center">
          <p className="text-lg font-bold mb-4">Submitted Form Details:</p>
          <p className="text-black font-bold ">{JSON.stringify(getValues())}</p>
        </div>
      </Modal>
    </div>
  );
};

export default CreateForm;
