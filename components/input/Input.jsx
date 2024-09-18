import React, { useContext, useEffect } from "react";
import { ConfigsContext } from "@/context/configs.context";
import { Plus, Trash2 } from "lucide-react";
import CollapsibleSection from "./CollapsibleSection";
import NumberSelectGroup from "./NumberSelectGroup";
import StringArrayInput from "./StringArrayInput";
import ToggleSwitch from "./ToggleSwitch";
import ToggleCheckbox from "./ToggleCheckbox";
import NumberInput from "./NumberInput";
import SelectBox from "./SelectBox";
import ButtonInputGroup from "./ButtonInputGroup";

const ConfigInputGroup = (props) => {
  const { config, updateConfigValue } = props;
  const { removeConfig } = useContext(ConfigsContext);

  // whenever config.buttons changes remove any stage keys not contained in buttons at button.key
  useEffect(() => {
    //console.log("useEffect", config.buttons);
    const newStageKeys = config.stageKeys.filter((key) => {
      return config.buttons.some((button) => button.key === key);
    });
    //console.log("newStageKeys", newStageKeys);
    if (newStageKeys.length !== config.stageKeys.length) {
      updateConfigValue(config.id, "stageKeys", newStageKeys);
    }
  }, [config.buttons]);

  return (
    <div className="flex flex-col gap-2 w-full p-2 bg-shark-800/70 rounded-lg">
      <div className="flex justify-between w-full">
        {/* remove button */}
        <button
          className="flex items-center justify-center gap-2 h-8 px-4 pb-1 bg-shark-600 hover:bg-red-500 rounded hover:brightness-125 active:scale-95 transition border-t border-shark-500"
          onClick={() => {
            removeConfig(config.id);
          }}
        >
          <p className="text-s pointer-events-none">Delete Config</p>
          <Trash2 size={18} />
        </button>
      </div>

      {/* names */}
      <div className="bg-shark-700 border border-shark-700 rounded-md px-3 py-2">
        <StringArrayInput
          configId={config.id}
          field={"names"}
          label={"Names"}
          tooltip={{
            text: "Enter the model names for each vehicle that will be affected by this configuration.",
          }}
          values={config.names}
        />
        {config.names.length < 1 ? (
          <div className="flex items-center justify-center text-red-400">
            At least one model name is required!
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* buttons */}
      <div className="bg-shark-700 border border-shark-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={config.id}
          field={"useButtons"}
          label={"Buttons"}
          tooltip={{
            text: "Buttons are the main functionality of ULC, each button will show on the UI and allow the player to change the states of extras with keybindings.",
            link: "https://docs.dwnstr.com/ulc/configuration/stage-controls",
          }}
          value={config.useButtons}
        />
        <CollapsibleSection open={config.useButtons}>
          <ButtonInputGroup
            configId={config.id}
            label="Buttons"
            field={"buttons"}
            values={config.buttons}
          />
        </CollapsibleSection>
      </div>

      {/* stages */}
      <div className="bg-shark-700 border border-shark-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={config.id}
          label={"Stages"}
          tooltip={{
            text: "Buttons listed as stages will change their behavior to stay enabled if pressed when another stage is active. This gives a more predictable stage behavior where stages can be sequential. See docs for examples.",
            link: "https://docs.dwnstr.com/ulc/configuration/smart-stages",
          }}
          field={"useStages"}
          value={config.useStages}
        />
        <CollapsibleSection open={config.useStages}>
          <NumberSelectGroup
            configId={config.id}
            field={"stageKeys"}
            label={"Stage Keys"}
            tooltip={{
              text: "Specify buttons (by their key) that will behave as stages.",
            }}
            choices={config.buttons.map((button) => button.key)}
            values={config.stageKeys}
          />
        </CollapsibleSection>
      </div>

      {/* default stages */}
      <div className="bg-shark-700 border border-shark-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={config.id}
          label={"Default Stages"}
          tooltip={{
            text: "Default stages will set the state of buttons that were configured above whenever the emergency lighting is activated.",
            link: "https://docs.dwnstr.com/ulc/configuration/default-stages",
          }}
          field={"useDefaultStages"}
          value={config.useDefaultStages}
        />
        <CollapsibleSection open={config.useDefaultStages}>
          <NumberSelectGroup
            configId={config.id}
            field={"enableKeys"}
            label={"Enable Keys"}
            tooltip={{
              text: "Specify buttons by their keys that will always be activated when the lights turn on.",
            }}
            choices={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            values={config.enableKeys}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"disableKeys"}
            label={"Disable Keys"}
            tooltip={{
              text: "Specify buttons by their keys that will always be activated when the lights turn on.",
            }}
            choices={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
            values={config.disableKeys}
          />
        </CollapsibleSection>
      </div>

      {/* cruise lights */}
      <div className="bg-shark-700 border border-shark-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={config.id}
          label={"Smart Cruise Lights"}
          tooltip={{
            text: "Smart cruise lights allows you to specify extras that will be force enabled either always or based on time of day.",
            link: "https://docs.dwnstr.com/ulc/configuration/cruise-lights",
          }}
          field={"useCruise"}
          value={config.useCruise}
        />
        <CollapsibleSection open={config.useCruise}>
          <NumberSelectGroup
            configId={config.id}
            field={"cruiseExtras"}
            label={"Cruise Extras"}
            tooltip={{
              text: "Select each extra that will be used as cruise lights!",
            }}
            values={config.cruiseExtras}
          />
          <SelectBox
            configId={config.id}
            field={"cruiseForced"}
            label="Cruise Forced"
            tooltip={{
              text: "Determines when the extras will automatically turn on.",
            }}
            options={[
              { name: "Never", value: "forceOn = false, useTime = false," },
              { name: "Always", value: "forceOn = true, useTime = false," },
              { name: "At night", value: "forceOn = false, useTime = true," },
            ]}
            value={config.cruiseForced}
          />
          <ToggleSwitch
            configId={config.id}
            label={"Disable with lights"}
            tooltip={{
              text: "If enabled, the cruise lights will turn off when emergency lights are activated.",
              link: "https://docs.dwnstr.com/ulc/configuration/cruise-lights#disablewithlights",
            }}
            field={"cruiseDWL"}
            value={config.cruiseDWL}
          />
        </CollapsibleSection>
      </div>

      {/* park extras */}
      <div className="bg-shark-700 border border-shark-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={config.id}
          label={"Park Extras"}
          tooltip={{
            text: "Allows you to automatically enable or disable extras at a certain speed.",
            link: "https://docs.dwnstr.com/ulc/configuration/park-patterns-sync",
          }}
          field={"usePark"}
          value={config.usePark}
        />
        <CollapsibleSection open={config.usePark}>
          <NumberSelectGroup
            configId={config.id}
            field={"parkExtras"}
            label={"Park Extras"}
            tooltip={{
              text: "These extras will be enabled when the vehicle is parked, and disabled when it is driving.",
            }}
            values={config.parkExtras}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"driveExtras"}
            label={"Drive Extras"}
            tooltip={{
              text: "These extras will be enabled when the vehicle is driving, and disabled when it is parked.",
            }}
            values={config.driveExtras}
          />
          <ToggleSwitch
            configId={config.id}
            label={"Use Sync"}
            tooltip={{
              text: "Sync will synchronize the light patterns of specified vehicle models when they are parked near each other.",
            }}
            field={"useSync"}
            value={config.useSync}
          />
          <CollapsibleSection open={config.useSync}>
            <div className="bg-shark-900/40 p-4 rounded">
              <StringArrayInput
                configId={config.id}
                field={"syncWith"}
                label={"Sync with"}
                tooltip={{
                  text: "Enter the model names of vehicles that this config should sync with. If this config is only for one vehicle, you do not need to include it here.",
                }}
                values={config.syncWith}
              />
            </div>
          </CollapsibleSection>
        </CollapsibleSection>
      </div>

      {/* horn extras */}
      <div className="bg-shark-700 border border-shark-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={config.id}
          label={"Horn Extras"}
          field={"useHorn"}
          value={config.useHorn}
        />
        <CollapsibleSection open={config.useHorn}>
          <NumberSelectGroup
            configId={config.id}
            field={"hornExtras"}
            label={"Horn Extras"}
            values={config.hornExtras}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"hornDisableExtras"}
            label={"Disable Extras"}
            values={config.hornDisableExtras}
          />
        </CollapsibleSection>
      </div>

      {/* brake extras */}
      <div className="bg-shark-700 border border-shark-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={config.id}
          label={"Brake Extras"}
          field={"useBrakes"}
          value={config.useBrakes}
        />
        <CollapsibleSection open={config.useBrakes}>
          <NumberInput
            configId={config.id}
            label={"Speed Threshold"}
            tooltip={{
              text: "If you start braking below this speed the brake light extras will not activate. If the value is 3, this will enable realistic mode (the brake lights will stay on while stationary).",
              link: "https://docs.dwnstr.com/ulc/configuration/brake-extras",
            }}
            field={"brakeSpeedThreshold"}
            value={config.brakeSpeedThreshold}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"brakeExtras"}
            label={"Enable Extras"}
            tooltip={{
              text: "These extras will be enabled when the vehicle is braking.",
            }}
            values={config.brakeExtras}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"brakeDisableExtras"}
            label={"Disable Extras"}
            tooltip={{
              text: "These extras will be disabled when the vehicle is braking.",
            }}
            values={config.brakeDisableExtras}
          />
        </CollapsibleSection>
      </div>

      {/* reverse extras */}
      <div className="bg-shark-700 border border-shark-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={config.id}
          label={"Reverse Extras"}
          field={"useReverse"}
          value={config.useReverse}
        />
        <CollapsibleSection open={config.useReverse}>
          <NumberSelectGroup
            configId={config.id}
            field={"reverseExtras"}
            label={"Reverse Extras"}
            values={config.reverseExtras}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"reverseDisableExtras"}
            label={"Disable Extras"}
            values={config.reverseDisableExtras}
          />
        </CollapsibleSection>
      </div>

      {/* door extras */}
      <div className="bg-shark-700 border border-shark-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={config.id}
          label={"Door Extras"}
          tooltip={{
            text: "These extras will be triggered by doors opening and closing. Adding extra 1 to driver disable will disable it whenever a driver side door opens.",
            link: "https://docs.dwnstr.com/ulc/configuration/door-extras",
          }}
          field={"useDoors"}
          value={config.useDoors}
        />
        <CollapsibleSection open={config.useDoors}>
          <NumberSelectGroup
            configId={config.id}
            field={"dEnable"}
            label={"Driver Enable"}
            values={config.dEnable}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"dDisable"}
            label={"Driver Disable"}
            values={config.dDisable}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"pEnable"}
            label={"Passenger Enable"}
            values={config.pEnable}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"pDisable"}
            label={"Passenger Disable"}
            values={config.pDisable}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"tEnable"}
            label={"Trunk Enable"}
            values={config.tEnable}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"tDisable"}
            label={"Trunk Disable"}
            values={config.tDisable}
          />
        </CollapsibleSection>
      </div>
    </div>
  );
};

const Input = () => {
  const { configs, addConfig, updateConfigValue } = useContext(ConfigsContext);
  //console.log("Configs", configs);
  // map configs to input groups
  const inputGroups = configs.map((config, index) => {
    //console.log(key, config);
    return (
      <ConfigInputGroup
        key={index}
        config={config}
        updateConfigValue={updateConfigValue}
      />
    );
  });

  return (
    <section className="flex flex-col gap-4 h-full w-full ">
      {inputGroups}
      <button
        className="flex items-center justify-center gap-2 h-10 pb-1 aspect-square bg-shark-600 rounded hover:brightness-125 active:brightness-75 transition border-t border-shark-500"
        onClick={() => {
          addConfig();
        }}
      >
        <p className="text-s pointer-events-none">Add config</p>
        <Plus size={18} />
      </button>
    </section>
  );
};

export default Input;
