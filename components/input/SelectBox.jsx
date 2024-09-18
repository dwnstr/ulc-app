import React, { useContext } from "react";
import * as Select from "@radix-ui/react-select";
import { ConfigsContext } from "@/context/configs.context";
import { ChevronDown } from "lucide-react";
import Label from "./Label";

const SelectBox = (props) => {
  const {
    controlled,
    configId,
    field,
    label,
    tooltip,
    options,
    value,
    setValue,
    disabledOptions,
  } = props;
  const { updateConfigValue } = useContext(ConfigsContext);

  const handleChange = (newValue) => {
    console.log(newValue);
    if (controlled) {
      setValue(newValue);
    } else {
      updateConfigValue(configId, field, newValue);
    }
  };

  const optionFactory = options.map((option, index) => {
    const isDisabled = disabledOptions
      ? disabledOptions.includes(option.value)
      : false;
    return (
      <Select.Item
        key={index}
        className={`w-full relative flex items-center px-8 py-2 rounded-md text-sm text-shark-300 font-medium select-none cursor-pointer ${
          isDisabled
            ? "opacity-50 cursor-not-allowed"
            : "dark:focus:bg-shark-700"
        }`}
        value={option.value}
        disabled={isDisabled}
      >
        <Select.ItemText>{option.name}</Select.ItemText>
      </Select.Item>
    );
  });

  return (
    <div className="flex flex-col gap-2 items-start">
      <Label text={label} tooltip={tooltip} />
      <Select.Root value={value} onValueChange={handleChange}>
        <Select.Trigger className="inline-flex items-center text-sm justify-center rounded-md px-[15px] leading-none h-[35px] gap-[5px] text-shark-300 bg-shark-800 border border-shark-600 outline-none">
          <Select.Value />
          <Select.Icon>
            <ChevronDown size={14} />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="overflow-hidden">
            <Select.ScrollUpButton />
            <Select.Viewport className="bg-shark-800 p-2 rounded-lg shadow-lg border border-shark-600">
              {optionFactory}
            </Select.Viewport>
            <Select.ScrollDownButton />
            <Select.Arrow />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default SelectBox;
