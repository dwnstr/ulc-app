import * as Popover from '@radix-ui/react-popover';
import { HelpCircle } from 'lucide-react';

const Tooltip = (props) => {
  const { text } = props
    
  return (
    <Popover.Root>
      <Popover.Trigger>
        <HelpCircle size={18} className='text-zinc-400'/>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content side="right" align="center">
          <div className='max-w-md bg-zinc-900/50 border border-zinc-700 rounded px-2 py-1 text-zinc-300'>
            {text}
          </div>
          <Popover.Arrow className='fill-zinc-700'/>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default Tooltip