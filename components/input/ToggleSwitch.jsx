import React, {useContext} from 'react'
import * as Switch from '@radix-ui/react-switch';
import { ConfigsContext } from "@/context/configs.context";

const ToggleSwitch = (props) => {
  const { configId, label, field, value } = props
  const { updateConfigValue } = useContext(ConfigsContext);

  const handleChange = (e) => {
    updateConfigValue(configId, field, e)
  }

  return (
    <div className='flex gap-2 items-center'>
      <Switch.Root 
        className="w-[32px] h-[18px] bg-zinc-700 rounded-full relative data-[state=checked]:bg-emerald-500 outline-none cursor-default" 
        onCheckedChange={handleChange}
      >
        <Switch.Thumb className="block w-[12px] h-[12px] bg-white rounded-full transition-transform duration-100 translate-x-1 will-change-transform data-[state=checked]:translate-x-[17px]" />
      </Switch.Root>
      <label>{label}</label>
    </div>

  )
}

export default ToggleSwitch;
