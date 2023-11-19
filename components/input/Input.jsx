import React, { useContext } from "react";
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
  const { config } = props;
  const { removeConfig } = useContext(ConfigsContext);

  return (
    <div className='flex flex-col gap-2 w-full p-2 bg-shark-800/70 rounded-lg'>
      <div className='flex justify-between w-full'>
        {/* remove button */}
        <button
          className='flex items-center justify-center gap-2 h-8 px-4 pb-1 bg-shark-600 hover:bg-red-500 rounded hover:brightness-125 active:scale-95 transition border-t border-shark-500'
          onClick={() => {
            removeConfig(config.id);
          }}
        >
          <p className='text-s pointer-events-none'>Delete Config</p>
          <Trash2 size={18} />
        </button>
      </div>

      {/* names */}
      <div className='bg-shark-700 border border-shark-700 rounded-md px-3 py-2'>
        <StringArrayInput
          configId={config.id}
          field={"names"}
          label={"Names"}
          tooltipText={
            "Enter the model names for each vehicle that will be affected by this configuration."
          }
          values={config.names}
        />
        {config.names.length < 1 ? (
          <div className='flex items-center justify-center text-red-400'>
            At least one model name is required!
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* buttons */}
      <div className='bg-shark-700 border border-shark-700 rounded-md px-3 py-2'>
        <ToggleCheckbox
          configId={config.id}
          field={"useButtons"}
          label={"Use Buttons"}
          value={config.useButtons}
        />
        <CollapsibleSection open={config.useButtons}>
          <ButtonInputGroup
            configId={config.id}
            label='Buttons'
            tooltipText=''
            field={"buttons"}
            values={config.buttons}
          />
        </CollapsibleSection>
      </div>

      {/* cruise lights */}
      <div className='bg-shark-700 border border-shark-700 rounded-md px-3 py-2'>
        <ToggleCheckbox
          configId={config.id}
          label={"Use Cruise"}
          field={"useCruise"}
          value={config.useCruise}
        />
        <CollapsibleSection open={config.useCruise}>
          <NumberSelectGroup
            configId={config.id}
            field={"cruiseExtras"}
            label={"Cruise Extras"}
            tooltipText='Select each extra that will be used as cruise lights!'
            values={config.cruiseExtras}
          />
          <SelectBox
            configId={config.id}
            field={"cruiseForced"}
            label='Cruise Forced'
            options={[
              { name: "Never", value: "forceOn = false, useTime = false" },
              { name: "Always", value: "forceOn = true, useTime = false" },
              { name: "At night", value: "forceOn = false, useTime = true" },
            ]}
            value={config.cruiseForced}
          />
          <ToggleSwitch
            configId={config.id}
            label={"Disable with lights"}
            tooltipText='If enabled, the cruise lights will turn off when emergency lights are activated.'
            field={"cruiseDWL"}
            value={config.cruiseDWL}
          />
        </CollapsibleSection>
      </div>

      {/* park extras */}
      <div className='bg-shark-700 border border-shark-700 rounded-md px-3 py-2'>
        <ToggleCheckbox
          configId={config.id}
          label={"Use Park"}
          field={"usePark"}
          value={config.usePark}
        />
        <CollapsibleSection open={config.usePark}>
          <NumberSelectGroup
            configId={config.id}
            field={"parkExtras"}
            label={"Park Extras"}
            tooltipText={
              "These extras will be enabled when the vehicle is parked, and disabled when it is driving."
            }
            values={config.parkExtras}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"driveExtras"}
            label={"Drive Extras"}
            values={config.driveExtras}
          />
          <ToggleSwitch
            configId={config.id}
            label={"Use Sync"}
            field={"useSync"}
            value={config.useSync}
          />
          <CollapsibleSection open={config.useSync}>
            <div className='bg-shark-900/40 p-4 rounded'>
              <StringArrayInput
                configId={config.id}
                field={"syncWith"}
                label={"Sync with"}
                values={config.syncWith}
              />
            </div>
          </CollapsibleSection>
        </CollapsibleSection>
      </div>

      {/* horn extras */}
      <div className='bg-shark-700 border border-shark-700 rounded-md px-3 py-2'>
        <ToggleCheckbox
          configId={config.id}
          label={"Use Horn"}
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
        </CollapsibleSection>
      </div>

      {/* brake extras */}
      <div className='bg-shark-700 border border-shark-700 rounded-md px-3 py-2'>
        <ToggleCheckbox
          configId={config.id}
          label={"Use Brakes"}
          field={"useBrakes"}
          value={config.useBrakes}
        />
        <CollapsibleSection open={config.useBrakes}>
          <NumberInput
            configId={config.id}
            label={"Speed Threshold"}
            tooltipText='If you start braking below this speed the brake light extras will not activate. If the value is 3, this will enable realistic mode (the brake lights will stay on while stationary). '
            field={"brakeSpeedThreshold"}
            value={config.brakeSpeedThreshold}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"brakeExtras"}
            label={"Brake Extras"}
            values={config.brakeExtras}
          />
        </CollapsibleSection>
      </div>

      {/* reverse extras */}
      <div className='bg-shark-700 border border-shark-700 rounded-md px-3 py-2'>
        <ToggleCheckbox
          configId={config.id}
          label={"Use Reverse"}
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
        </CollapsibleSection>
      </div>

      {/* door extras */}
      <div className='bg-shark-700 border border-shark-700 rounded-md px-3 py-2'>
        <ToggleCheckbox
          configId={config.id}
          label={"Use Doors"}
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

      {/* default stages */}
      <div className='bg-shark-700 border border-shark-700 rounded-md px-3 py-2'>
        <ToggleCheckbox
          configId={config.id}
          label={"Use Default Stages"}
          field={"useDefaultStages"}
          value={config.useDefaultStages}
        />
        <CollapsibleSection open={config.useDefaultStages}>
          <NumberSelectGroup
            configId={config.id}
            field={"enableKeys"}
            label={"Enable Keys"}
            values={config.enableKeys}
          />
          <NumberSelectGroup
            configId={config.id}
            field={"disableKeys"}
            label={"Disable Keys"}
            values={config.disableKeys}
          />
        </CollapsibleSection>
      </div>
    </div>
  );
};

const Input = () => {
  const { configs, addConfig } = useContext(ConfigsContext);
  //console.log("Configs", configs);
  // map configs to input groups
  const inputGroups = configs.map((config, index) => {
    //console.log(key, config);
    return <ConfigInputGroup key={index} config={config} />;
  });

  return (
    <section className='flex flex-col gap-4 h-full w-full '>
      {inputGroups}
      <button
        className='flex items-center justify-center gap-2 h-10 pb-1 aspect-square bg-shark-600 rounded hover:brightness-125 active:brightness-75 transition border-t border-shark-500'
        onClick={() => {
          addConfig();
        }}
      >
        <p className='text-s pointer-events-none'>Add config</p>
        <Plus size={18} />
      </button>
    </section>
  );
};

export default Input;
