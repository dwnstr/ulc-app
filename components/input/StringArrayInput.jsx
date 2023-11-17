"use client";
import React, { useContext, useEffect, useState } from "react";
import { ConfigsContext } from "@/context/configs.context";

const StringInput = (props) => {
  const { valueIndex, value, values, setNewValues, removeValue } = props;
  const [error, setError] = useState(null);

  const updateValue = (newValue) => {
    const newValues = [...values];
    newValues[valueIndex] = newValue;
    setNewValues(newValues);
  };

  return (
    <div className='flex gap-2 items-center'>
      <form
        className=''
        onChange={(e) => {
          e.preventDefault();

          if (e.target.value.length < 1) {
            setError("Required");
            return;
          } else if (e.target.value.includes(" ")) {
            setError("No spaces");
            return;
          }

          setError(null);
          updateValue(e.target.value);
        }}
      >
        <input
          type='text'
          placeholder='Model Name'
          className={`bg-zinc-700 rounded-md`}
          onChange={(e) => {
            e.preventDefault();
          }}
        />
        {error ? <p>{error}</p> : null}
      </form>
      <button
        className='h-8 aspect-square bg-zinc-700 rounded-md'
        onClick={() => {
          removeValue(valueIndex);
        }}
      >
        X
      </button>
    </div>
  );
};

const StringArrayInput = (props) => {
  const { configId, field, label, values } = props;
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
    console.log("removeValue", index);
    const newValues = [...values];
    newValues.splice(index, 1);
    setNewValues(newValues);
  };

  const inputs = newValues.map((value, index) => {
    return (
      <StringInput
        key={index}
        valueIndex={index}
        value={value}
        values={newValues}
        setNewValues={setNewValues}
        removeValue={removeValue}
      />
    );
  });

  return (
    <div>
      <label>{label}</label>
      <button
        className='h-8 aspect-square bg-zinc-700 rounded-md'
        onClick={() => {
          addValue();
        }}
      >
        +
      </button>
      <div className='flex flex-col gap-2 mt-2'>{inputs}</div>
    </div>
  );
};

export default StringArrayInput;
