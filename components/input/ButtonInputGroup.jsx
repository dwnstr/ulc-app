import React, { useContext, useState, useEffect } from "react";
import { ConfigsContext } from "@/context/configs.context";
import { Plus, X } from "lucide-react";
import ButtonInput from "./ButtonInput";
import Label from "./Label";

const ButtonInputGroup = (props) => {
  const { configId, label, tooltip, field, values } = props;
  const { updateConfigValue } = useContext(ConfigsContext);

  const [newButtons, setNewButtons] = useState(values);

  useEffect(() => {
    updateConfigValue(configId, field, newButtons);
  }, [newButtons]);

  const addNewButton = () => {
    const existingKeys = newButtons.map((button) => button.key);
    let newKey = 1;
    while (existingKeys.includes(newKey) && newKey <= 9) {
      newKey++;
    }
    if (newKey > 9) {
      console.error("Cannot add more than 9 buttons");
      return;
    }

    // sort the buttons by key
    newButtons.sort((a, b) => a.key - b.key);

    setNewButtons([
      ...newButtons,
      {
        label: "",
        key: newKey,
        color: "green",
        extra: newKey,
        linkedExtras: [],
        oppositeExtras: [],
        offExtras: [],
        repair: false,
      },
    ]);
  };

  const removeButton = (index) => {
    const newButtons = [...values];
    newButtons.splice(index, 1);
    setNewButtons(newButtons);
  };

  const buttonInputs = newButtons.map((button, index) => {
    return (
      <ButtonInput
        key={index}
        index={index}
        button={button}
        buttons={newButtons}
        setNewButtons={setNewButtons}
        removeButton={removeButton}
      />
    );
  });

  return (
    <div className="w-full">
      <div className="flex gap-2 justify-between w-full items-center">
        <Label text={label} tooltip={tooltip} />
        <button
          className="flex items-center justify-center h-7 aspect-square bg-shark-600 rounded hover:brightness-125 transition border-t border-shark-500 active:scale-90"
          onClick={() => {
            addNewButton();
          }}
        >
          <Plus size={18} />
        </button>
      </div>

      <div className="flex flex-col gap-2 mt-2">{buttonInputs}</div>
    </div>
  );
};

export default ButtonInputGroup;
