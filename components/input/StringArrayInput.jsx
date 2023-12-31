import React, { useContext, useEffect, useState } from "react";
import { ConfigsContext } from "@/context/configs.context";
import { Plus, X } from "lucide-react";
import Label from "./Label";

const StringInput = (props) => {
  const { configId, valueIndex, value, values, setNewValues, removeValue } =
    props;
  const [error, setError] = useState(null);

  const updateValue = (newValue) => {
    const newValues = [...values];
    newValues[valueIndex] = newValue;
    setNewValues(newValues);
  };

  return (
    <div className='flex gap-2 items-center w-full'>
      <div className="flex flex-col gap-2 w-full">
        <input
          key={`${valueIndex}${configId}`}
          type='text'
          placeholder='Model Name'
          className={`bg-shark-900/40 rounded-md px-2 py-1 w-full border border-shark-600 text-shark-300 placeholder:text-shark-500 focus:ring-emerald-500 focus:outline-0 focus:border-emerald-500`}
          value={value}
          onChange={(e) => {
            e.preventDefault();

            if (e.target.value.length < 1) {
              setError("Model name required! Delete this field if it is not needed.");
            } else if (e.target.value.includes(" ")) {
              setError("Model name cannot include spaces!");
            } else {
              setError(null);
            }
            
            updateValue(e.target.value);
          }}
        />
        {error ? <p className="pl-2 text-sm text-red-500">{error}</p> : null}
      </div>
      
      <button
        className='flex items-center justify-center h-7 aspect-square bg-shark-600 rounded hover:bg-red-500 hover:brightness-125 transition border-t border-shark-500'
        onClick={() => {
          removeValue(valueIndex);
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
};

const StringArrayInput = (props) => {
  const { configId, field, label, tooltip, values } = props;
  const { updateConfigValue } = useContext(ConfigsContext);

  const [newValues, setNewValues] = useState(values);

  useEffect(() => {
    updateConfigValue(configId, field, newValues);
  }, [newValues]);

  const addValue = () => {
    const newValues = [...values];
    newValues.push("");
    setNewValues(newValues);
  };

  const removeValue = (index) => {
    const newValues = [...values];
    newValues.splice(index, 1);
    setNewValues(newValues);
  };

  const inputs = values.map((value, index) => {
    return (
      <StringInput
        key={index}
        configId={configId}
        valueIndex={index}
        value={value}
        values={newValues}
        setNewValues={setNewValues}
        removeValue={removeValue}
      />
    );
  });

  return (
    <div className='w-full'>
      <div className='flex justify-between w-full items-center'>
        <Label text={label} tooltip={tooltip} />
        <button
          className='flex items-center justify-center h-7 aspect-square bg-shark-600 rounded hover:brightness-125 transition border-t border-shark-500'
          onClick={() => {
            addValue();
          }}
        >
          <Plus size={18} />
        </button>
      </div>

      <div key={configId} className='flex flex-col gap-2 mt-2'>
        {inputs}
      </div>
    </div>
  );
};

export default StringArrayInput;
