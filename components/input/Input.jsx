import React, { useContext } from "react";
import { ConfigsContext } from "@/context/configs.context";
import NumberSelectGroup from "./NumberSelectGroup";
import StringArrayInput from "./StringArrayInput";

const ConfigInputGroup = (props) => {
  const { configId, config } = props;

  return (
    <div className='flex flex-col gap-2 w-full p-4 border-2 border-zinc-600 rounded-md'>
      <StringArrayInput
        configId={configId}
        field={"names"}
        label={"Names"}
        values={config.names}
      />
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
      <NumberSelectGroup
        configId={configId}
        field={"hornExtras"}
        label={"Horn Extras"}
        values={config.hornExtras}
      />
      <NumberSelectGroup
        configId={configId}
        field={"brakeExtras"}
        label={"Brake Extras"}
        values={config.brakeExtras}
      />
      <NumberSelectGroup
        configId={configId}
        field={"reverseExtras"}
        label={"Reverse Extras"}
        values={config.reverseExtras}
      />
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
    <section className='flex flex-col gap-2 bg-zinc-800 h-full w-full rounded-md p-2'>
      {inputGroups}
    </section>
  );
};

export default Input;
