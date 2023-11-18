import React, { useContext } from "react";
import { ConfigsContext } from "@/context/configs.context";
import CollapsibleSection from "./CollapsibleSection";
import NumberSelectGroup from "./NumberSelectGroup";
import StringArrayInput from "./StringArrayInput";
import ToggleSwitch from "./ToggleSwitch";
import ToggleCheckbox from "./ToggleCheckbox";
import NumberInput from "./NumberInput";
import SelectBox from "./SelectBox"

const ConfigInputGroup = (props) => {
  const { configId, config } = props;

  return (
    <div className="flex flex-col gap-2 w-full p-2 rounded-md bg-zinc-800 rounded-md">

      

      {/* names */}
      <div className="bg-zinc-700/20 border border-zinc-700 rounded-md px-3 py-2">
        <StringArrayInput
          configId={configId}
          field={"names"}
          label={"Names"}
          tooltipText={"Enter the model names for each vehicle that will be affected by this configuration."}
          values={config.names}
        />
        {config.names.length < 1 ? (<div className="flex items-center justify-center text-red-400">At least one model name is required!</div>):(<></>)}
      </div>
      {/* buttons */}

      {/* cruise lights */}
      <div className="bg-zinc-700/20 border border-zinc-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={configId}
          label={"Use Cruise"}
          field={"useCruise"}
          value={config.useCruise}
        />
        <CollapsibleSection open={config.useCruise}>
          <NumberSelectGroup
            configId={configId}
            field={"cruiseExtras"}
            label={"Cruise Extras"}
            tooltipText="Select each extra that will be used as cruise lights!"
            values={config.cruiseExtras}
          />
          <SelectBox configId={configId} field={"cruiseForced"} label="Cruise Forced" value={config.cruiseForced}/>
          <ToggleSwitch
            configId={configId}
            label={"Disable when lights are on"}
            field={"cruiseDWL"}
            value={config.cruiseDWL}
          />
        </CollapsibleSection>
      </div>

      {/* park extras */}
      <div className="bg-zinc-700/20 border border-zinc-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={configId}
          label={"Use Park"}
          field={"usePark"}
          value={config.usePark}
        />
        <CollapsibleSection open={config.usePark}>
          <NumberSelectGroup
            configId={configId}
            field={"parkExtras"}
            label={"Park Extras"}
            values={config.parkExtras}
          />
          <NumberSelectGroup
            configId={configId}
            field={"driveExtras"}
            label={"Drive Extras"}
            values={config.driveExtras}
          />
          <ToggleSwitch
            configId={configId}
            label={"Use Sync"}
            field={"useSync"}
            value={config.useSync}
          />
          <StringArrayInput
            configId={configId}
            field={"syncWith"}
            label={"Sync with"}
            values={config.syncWith}
          />
        </CollapsibleSection>
      </div>

      {/* horn extras */}
      <div className="bg-zinc-700/20 border border-zinc-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={configId}
          label={"Use Horn"}
          field={"useHorn"}
          value={config.useHorn}
        />
        <CollapsibleSection open={config.useHorn}>
          <NumberSelectGroup
            configId={configId}
            field={"hornExtras"}
            label={"Horn Extras"}
            values={config.hornExtras}
          />
        </CollapsibleSection>
      </div>

      {/* brake extras */}
      <div className="bg-zinc-700/20 border border-zinc-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={configId}
          label={"Use Brakes"}
          field={"useBrakes"}
          value={config.useBrakes}
        />
        <CollapsibleSection open={config.useBrakes}>
          <NumberInput
            configId={configId}
            label={"Threshold"}
            field={"brakeSpeedThreshold"}
            value={config.brakeSpeedThreshold}
          />
          <NumberSelectGroup
            configId={configId}
            field={"brakeExtras"}
            label={"Brake Extras"}
            values={config.brakeExtras}
          />
        </CollapsibleSection>
      </div>

      {/* reverse extras */}
      <div className="bg-zinc-700/20 border border-zinc-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={configId}
          label={"Use Reverse"}
          field={"useReverse"}
          value={config.useReverse}
        />
        <CollapsibleSection open={config.useReverse}>
          <NumberSelectGroup
            configId={configId}
            field={"reverseExtras"}
            label={"Reverse Extras"}
            values={config.reverseExtras}
          />
        </CollapsibleSection>
      </div>

      {/* door extras */}
      <div className="bg-zinc-700/20 border border-zinc-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={configId}
          label={"Use Doors"}
          field={"useDoors"}
          value={config.useDoors}
        />
        <CollapsibleSection open={config.useDoors}>
          <NumberSelectGroup
            configId={configId}
            field={"dEnable"}
            label={"Driver Enable"}
            values={config.dEnable}
          />
          <NumberSelectGroup
            configId={configId}
            field={"dDisable"}
            label={"Driver Disable"}
            values={config.dDisable}
          />
          <NumberSelectGroup
            configId={configId}
            field={"pEnable"}
            label={"Passenger Enable"}
            values={config.pEnable}
          />
          <NumberSelectGroup
            configId={configId}
            field={"pDisable"}
            label={"Passenger Disable"}
            values={config.pDisable}
          />
          <NumberSelectGroup
            configId={configId}
            field={"tEnable"}
            label={"Trunk Enable"}
            values={config.tEnable}
          />
          <NumberSelectGroup
            configId={configId}
            field={"tDisable"}
            label={"Trunk Disable"}
            values={config.tDisable}
          />
        </CollapsibleSection>
      </div>

      {/* default stages */}
      <div className="bg-zinc-700/20 border border-zinc-700 rounded-md px-3 py-2">
        <ToggleCheckbox
          configId={configId}
          label={"Use Default Stages"}
          field={"useDefaultStages"}
          value={config.useDefaultStages}
        />
        <CollapsibleSection open={config.useDefaultStages}>
          <NumberSelectGroup
            configId={configId}
            field={"enableKeys"}
            label={"Enable Keys"}
            values={config.enableKeys}
          />
          <NumberSelectGroup
            configId={configId}
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
  const { configs } = useContext(ConfigsContext);
  //console.log("Configs", configs);
  // map configs to input groups
  const inputGroups = configs.map((config, index) => {
    //console.log(key, config);
    return <ConfigInputGroup key={index} configId={index} config={config} />;
  });

  return (
    <section className="flex flex-col gap-2  h-full w-full ">
      {inputGroups}
    </section>
  );
};

export default Input;
