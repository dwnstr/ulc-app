import React, { useContext, useState } from 'react'
import * as Slider from '@radix-ui/react-slider';
import { ConfigsContext } from "@/context/configs.context";

const NumberInput = (props) => {
  const {configId, label, field, value} = props
  const { updateConfigValue } = useContext(ConfigsContext);
  const [displayValue, setDisplayValue] = useState(value)

  const handleChange = (newValue) => {
    setDisplayValue(newValue)
  }

  const handleCommit = (newValue) => {
    updateConfigValue(configId, field, newValue)
  }

  return (
    <div className='flex flex-col gap-1'>
      <label>{label}</label>
      <div className='flex gap-2 items-center'>
        <div className='px-2 py-1 rounded-md bg-zinc-700 border border-zinc-600 text-center justify-center'>{displayValue} mph/kph</div>
        <Slider.Root
          className="relative flex items-center select-none touch-none w-[200px] h-5"
          defaultValue={[5]}
          min={3}
          max={95}
          step={1}
          onValueChange={handleChange}
          onValueCommit={handleCommit}
        >
          <Slider.Track className="relative bg-zinc-700 grow rounded-full h-[3px]">
            <Slider.Range className="absolute bg-emerald-500 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb
            className="block w-5 h-5 bg-white rounded-[10px] hover:bg-violet3 focus:outline-none"
            aria-label="Volume"
          />
        </Slider.Root>
      </div>
      
    </div>        
  )
}

export default NumberInput