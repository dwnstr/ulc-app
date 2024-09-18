import React, { useContext } from "react";
import { ConfigsContext } from "@/context/configs.context";
import Label from "./Label";

const NumberSelectGroup = (props) => {
  const {
    controlled,
    configId,
    field,
    label,
    tooltip,
    choices,
    values,
    setValues,
    disabledOptions,
  } = props;
  // console.log(configId);
  const { updateConfigValue } = useContext(ConfigsContext);
  //console.log(values);

  const buttons = (choices || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]).map(
    (i) => {
      const selected = values.includes(i);
      const disabled =
        disabledOptions && !selected ? disabledOptions.includes(i) : false;
      return (
        <button
          key={i}
          className={`h-full w-full rounded  transition select-none ${
            selected
              ? "bg-emerald-500 border-emerald-300"
              : "bg-shark-600 border-shark-500"
          } ${
            disabled && !selected
              ? "opacity-50"
              : "hover:brightness-125 active:scale-90"
          }`}
          onClick={() => {
            if (selected) {
              if (controlled) {
                setValues(values.filter((e) => e !== i));
              } else {
                updateConfigValue(
                  configId,
                  field,
                  values.filter((e) => e !== i)
                );
              }
            } else {
              if (controlled) {
                setValues(values.concat(i));
              } else {
                updateConfigValue(configId, field, values.concat(i));
              }
            }
          }}
          disabled={disabled && !selected}
        >
          {i}
        </button>
      );
    }
  );

  return (
    <div className="flex flex-col gap-2">
      <Label text={label} tooltip={tooltip} />
      <div className="grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-1 flex-wrap">
        {buttons}
      </div>
    </div>
  );
};

export default NumberSelectGroup;
