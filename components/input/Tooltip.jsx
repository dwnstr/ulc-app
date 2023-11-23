import * as Popover from "@radix-ui/react-popover";
import { HelpCircle } from "lucide-react";

const Tooltip = (props) => {
  const { text, link } = props;

  return (
    <Popover.Root>
      <Popover.Trigger>
        <HelpCircle size={17} className='text-shark-400 ml-1' />
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content side='right' align='center'>
          <div className='flex flex-col items-start gap-3 max-w-md bg-shark-900 border border-shark-700 rounded-lg px-3 py-2 text-shark-300'>
            {text}
            {link ? (<a href={link} className="text-xs text-emerald-400 px-3 py-2 rounded bg-shark-800 hover:brightness-125 transition">View Documentation</a>) : null}
          </div>
          <Popover.Arrow className='fill-shark-700' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default Tooltip;
