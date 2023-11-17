"use client";

import React, { useContext } from "react";
import { ConfigsContext } from "@/context/configs.context";

const NumberSelectGroup = (props) => {
  const { configId, field, label, values } = props;
  // console.log(configId);
  const { updateConfigValue } = useContext(ConfigsContext);
  //console.log(values);

  const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
    const selected = values.includes(i);

    if (selected) {
      return (
        <button
          key={i}
          className='h-full w-full py-1 rounded-sm hover:brightness-125 transition bg-blue-500'
          onClick={() => {
            updateConfigValue(
              configId,
              field,
              values.filter((e) => e !== i)
            );
          }}
        >
          {i}
        </button>
      );
    }

    return (
      <button
        key={i}
        className='h-full w-full py-1 rounded-sm hover:brightness-125 transition bg-zinc-700'
        onClick={() => {
          updateConfigValue(configId, field, values.concat(i));
        }}
      >
        {i}
      </button>
    );
  });

  return (
    <div className=''>
      <label>{label}</label>
      <div className='grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-1 flex-wrap'>
        {buttons}
      </div>
    </div>
  );
};

export default NumberSelectGroup;
