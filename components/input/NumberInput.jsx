import React, { useContext, useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { ConfigsContext } from "@/context/configs.context";
import Label from "./Label";

const NumberInput = (props) => {
  const { configId, label, tooltip, field, value } = props;
  const { updateConfigValue } = useContext(ConfigsContext);
  const [displayValue, setDisplayValue] = useState(value);

  const handleChange = (newValue) => {
    if (newValue < 4) {
      setDisplayValue("Realistic mode");
    } else {
      setDisplayValue(`${newValue} mph/kph`);
    }
  };

  const handleCommit = (newValue) => {
    updateConfigValue(configId, field, newValue);
  };

  return (
    <div className='flex flex-col gap-2'>
      <Label text={label} tooltip={tooltip} />
      <div className='flex flex-col gap-2'>
        <div className='w-48 px-2 py-1 rounded-md bg-shark-800 border border-shark-500 text-center justify-center'>
          {displayValue}
        </div>
        <Slider.Root
          className='relative flex items-center select-none touch-none w-48 h-6'
          defaultValue={[4]}
          min={3}
          max={95}
          step={1}
          onValueChange={handleChange}
          onValueCommit={handleCommit}
        >
          <Slider.Track className='relative bg-shark-600 grow rounded-full h-2'>
            <Slider.Range className='absolute bg-emerald-500 rounded-full h-full' />
          </Slider.Track>
          <Slider.Thumb
            className='block w-5 h-5 bg-shark-200 border border-shark-50 rounded-[10px] hover:brightness-90 cursor-pointer focus:outline-none'
            aria-label='Volume'
            value={value}
          />
        </Slider.Root>
      </div>
    </div>
  );
};

export default NumberInput;
