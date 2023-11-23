import React, { useContext } from "react";
import { ConfigsContext } from "@/context/configs.context";
import Label from "./Label";

const NumberSelectGroup = (props) => {
  const { controlled, configId, field, label, tooltip, choices, values, setValues } =
    props;
  // console.log(configId);
  const { updateConfigValue } = useContext(ConfigsContext);
  //console.log(values);

  const buttons = (choices || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).map((i) => {
    const selected = values.includes(i);

    if (selected) {
      return (
        <button
          key={i}
          className='h-full w-full rounded hover:brightness-125 active:scale-90 transition bg-emerald-500 border-t border-emerald-300 select-none'
          onClick={() => {
            if (controlled) {
              setValues(values.filter((e) => e !== i));
            } else {
              updateConfigValue(
                configId,
                field,
                values.filter((e) => e !== i)
              );
            }
          }}
        >
          {i}
        </button>
      );
    }

    return (
      <button
        key={i}
        className='h-full w-full rounded hover:brightness-125 active:scale-90 transition bg-shark-600 border-t border-shark-500 select-none'
        onClick={() => {
          if (controlled) {
            setValues(values.concat(i));
          } else {
            updateConfigValue(configId, field, values.concat(i));
          }
        }}
      >
        {i}
      </button>
    );
  });

  return (
    <div className='flex flex-col gap-2'>
      <Label text={label} tooltip={tooltip} />
      <div className='grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-1 flex-wrap'>
        {buttons}
      </div>
    </div>
  );
};

export default NumberSelectGroup;
