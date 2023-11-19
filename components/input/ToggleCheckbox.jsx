import React, { useContext } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { ConfigsContext } from "@/context/configs.context";

const ToggleCheckbox = (props) => {
  const { configId, label, field, value } = props;
  const { updateConfigValue } = useContext(ConfigsContext);

  const handleChange = (newValue) => {
    console.log(newValue);
    updateConfigValue(configId, field, newValue);
  };

  return (
    <div className='flex gap-4 items-center'>
      <Checkbox.Root
        key={`${configId}${field}`}
        onCheckedChange={handleChange}
        checked={value}
        className='hover:brightness-125 flex h-5 w-5 items-center justify-center rounded-[4px] bg-shark-600 border border-shark-500aria-checked:bg-emerald-600 outline-none focus:outline-emerald-500'
      >
        <Checkbox.Indicator className=''>
          <Check className='w-4 h-4' />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label className='text-sm text-shark-200 font-bold select-none'>{label}</label>
    </div>
  );
};

export default ToggleCheckbox;
