import React, { useContext, useState } from "react";
import * as Slider from "@radix-ui/react-slider";
import { ConfigsContext } from "@/context/configs.context";
import Label from "./Label";

const NumberInput = (props) => {
  const { configIndex, label, tooltipText, field, value } = props;
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
    updateConfigValue(configIndex, field, newValue);
  };

  return (
    <div className='flex flex-col gap-1'>
      <Label text={label} tooltipText={tooltipText} />
      <div className='flex flex-col gap-2'>
        <div className='w-48 px-2 py-1 rounded-md bg-zinc-700 border border-zinc-600 text-center justify-center'>
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
          <Slider.Track className='relative bg-zinc-700 grow rounded-full h-2'>
            <Slider.Range className='absolute bg-emerald-500 rounded-full h-full' />
          </Slider.Track>
          <Slider.Thumb
            className='block w-5 h-5 bg-white rounded-[10px] hover:bg-violet3 focus:outline-none'
            aria-label='Volume'
          />
        </Slider.Root>
      </div>
    </div>
  );
};

export default NumberInput;
