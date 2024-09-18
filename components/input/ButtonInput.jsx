import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import NumberSelectGroup from "./NumberSelectGroup";
import ToggleSwitch from "./ToggleSwitch";
import SelectBox from "./SelectBox";
import Label from "./Label";

const ButtonInput = (props) => {
  const { index, button, buttons, setNewButtons, removeButton } = props;
  const [usedExtras, setUsedExtras] = useState([]);

  // whenever button.linkedExtras, button.oppositeExtras, or button.offExtras changes, update usedExtras
  useEffect(() => {
    const extras = [
      ...button.linkedExtras,
      ...button.oppositeExtras,
      ...button.offExtras,
    ];
    setUsedExtras(extras);
    // console.log("usedExtras", extras);
  }, [button.linkedExtras, button.oppositeExtras, button.offExtras]);

  return (
    <div className="flex gap-2 w-full bg-shark-800/60 p-2 rounded">
      <div className="flex flex-col gap-2 w-full ">
        {/* label */}
        <Label
          text="Label"
          tooltipText='This is the text that will show on the button in-game. Keep this below 5 characters when possible. Use abbreviations like "TKD" in place of "Takedowns"'
        />
        <input
          type="text"
          name="label"
          placeholder="Button Label"
          className="bg-shark-900/40 rounded-md px-2 py-1 w-full border border-shark-600 text-shark-300 placeholder:text-shark-500 focus:ring-emerald-500 focus:outline-0 focus:border-emerald-500"
          value={button.label}
          onChange={(e) => {
            const newButtons = [...buttons];
            newButtons[index].label = e.target.value;
            setNewButtons(newButtons);
          }}
        />
        {/* key */}
        <SelectBox
          controlled
          label="Key"
          tooltipText="The key that will be used to activate the button."
          options={[
            { name: "Num 1", value: 1 },
            { name: "Num 2", value: 2 },
            { name: "Num 3", value: 3 },
            { name: "Num 4", value: 4 },
            { name: "Num 5", value: 5 },
            { name: "Num 6", value: 6 },
            { name: "Num 7", value: 7 },
            { name: "Num 8", value: 8 },
            { name: "Num 9", value: 9 },
          ]}
          // TODO add keys used in other buttons as disabledOptions
          value={button.key}
          setValue={(value) => {
            const newButtons = [...buttons];
            newButtons[index].key = value;
            setNewButtons(newButtons);
          }}
        />
        {/* Primary extra */}
        <SelectBox
          controlled
          label="Extra"
          tooltipText="This is the primary extra that will be bound to this button." //TODO improve this
          options={[
            { name: "1", value: 1 },
            { name: "2", value: 2 },
            { name: "3", value: 3 },
            { name: "4", value: 4 },
            { name: "5", value: 5 },
            { name: "6", value: 6 },
            { name: "7", value: 7 },
            { name: "8", value: 8 },
            { name: "9", value: 9 },
            { name: "10", value: 10 },
            { name: "11", value: 11 },
            { name: "12", value: 12 },
          ]}
          // TODO use primary extras used in other buttons as disabledOptions
          value={button.extra}
          setValue={(value) => {
            const newButtons = [...buttons];
            newButtons[index].extra = value;
            setNewButtons(newButtons);
          }}
        />

        <NumberSelectGroup
          controlled
          label="Linked Extras"
          tooltipText="These extras will always change to match the state of the button."
          values={button.linkedExtras}
          disabledOptions={[...usedExtras, button.extra]}
          setValues={(values) => {
            const newButtons = [...buttons];
            newButtons[index].linkedExtras = values;
            setNewButtons(newButtons);
          }}
        />
        <NumberSelectGroup
          controlled
          label="Opposite Extras"
          tooltipText="These extras will always change to be opposite of the button state."
          values={button.oppositeExtras}
          disabledOptions={[...usedExtras, button.extra]}
          setValues={(values) => {
            const newButtons = [...buttons];
            newButtons[index].oppositeExtras = values;
            setNewButtons(newButtons);
          }}
        />
        <NumberSelectGroup
          controlled
          label="Off Extras"
          tooltipText="These extras will always turn off then the button is switched on."
          values={button.offExtras}
          disabledOptions={[...usedExtras, button.extra]}
          setValues={(values) => {
            const newButtons = [...buttons];
            newButtons[index].offExtras = values;
            setNewButtons(newButtons);
          }}
        />
        <ToggleSwitch
          controlled
          label="Repair"
          tooltipText="When enabled, the button will repair the vehicle." //TODO improve this
          value={button.repair}
          setValue={(value) => {
            const newButtons = [...buttons];
            newButtons[index].repair = value;
            setNewButtons(newButtons);
          }}
        />
      </div>
      <button
        className="flex items-center justify-center h-7 aspect-square bg-shark-600 rounded hover:bg-red-500 active:scale-90 transition border-t border-shark-500"
        onClick={() => {
          removeButton(index);
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default ButtonInput;
