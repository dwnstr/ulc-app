import React, { useContext } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { ConfigsContext } from "@/context/configs.context";
import Label from "@/components/input/Label"

const ToggleCheckbox = (props) => {
  const { configId, label, tooltip, field, value } = props;
  const { updateConfigValue } = useContext(ConfigsContext);

  const handleChange = (newValue) => {
    updateConfigValue(configId, field, newValue);
  };

  return (
    <div className='flex gap-4 items-center'>
      <Checkbox.Root
        key={`${configId}${field}`}
        onCheckedChange={handleChange}
        checked={value}
        className='hover:brightness-125 flex h-5 w-5 items-center justify-center rounded-[4px] bg-shark-600 border border-shark-500 aria-checked:bg-emerald-600 outline-none focus:outline-emerald-500'
      >
        <Checkbox.Indicator className=''>
          <Check className='w-4 h-4' />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <Label text={label} tooltip={tooltip}/>
    </div>
  );
};

export default ToggleCheckbox;
