import React, { useContext } from "react";
import * as Select from "@radix-ui/react-select";
import { ConfigsContext } from "@/context/configs.context";
import { ChevronDown } from "lucide-react";
import Label from "./Label";

const SelectBox = (props) => {
  const {
    controlled,
    configIndex,
    field,
    label,
    tooltipText,
    options,
    value,
    setValue,
  } = props;
  const { updateConfigValue } = useContext(ConfigsContext);

  const handleChange = (newValue) => {
    console.log(newValue);
    if (controlled) {
      setValue(newValue);
    } else {
      updateConfigValue(configIndex, field, newValue);
    }
  };

  const optionFactory = options.map((option, index) => {
    return (
      <Select.Item
        key={index}
        className='w-full relative flex items-center px-8 py-2 rounded-md text-sm text-zinc-300 font-medium dark:focus:bg-zinc-700 select-none cursor-pointer'
        value={option.value}
      >
        <Select.ItemText>{option.name}</Select.ItemText>
      </Select.Item>
    );
  });

  return (
    <div>
      <Label text={label} tooltipText={tooltipText} />
      <Select.Root value={value} onValueChange={handleChange}>
        <Select.Trigger className='inline-flex items-center text-sm justify-center rounded-md px-[15px] leading-none h-[35px] gap-[5px] text-zinc-300 bg-zinc-900/40 border border-zinc-700 outline-none'>
          <Select.Value />
          <Select.Icon>
            <ChevronDown size={14} />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className='overflow-hidden'>
            <Select.ScrollUpButton />
            <Select.Viewport className='bg-zinc-800 p-2 rounded-lg shadow-lg border border-zinc-600'>
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
