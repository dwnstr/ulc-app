import React, { useContext } from "react";
import { ConfigsContext } from "@/context/configs.context";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeWindow = () => {
  const { configs } = useContext(ConfigsContext);

  const configsString = configs
    .map((config) => {
      return `
  { names = {${config.names.map((name) => {
    return `"${name}"`
  })}},
    steadyBurnConfig = {
      ${config.cruiseForced}
      disableWithLights = ${config.cruiseDWL},
      sbExtras = {${config.cruiseExtras}}
    },
    parkConfig = {
      usePark = ${config.usePark},
      useSync = ${config.useSync},
      syncWith = {${config.syncWith.map((name) => {
        return `"${name}"`
      })}},
      pExtras = {${config.parkExtras}},
      dExtras = {${config.driveExtras}}
    },
    hornConfig = {
      useHorn = ${config.useHorn},
      hornExtras = {${config.hornExtras}},
    },
    brakeConfig = {
      useBrakes = ${config.useBrakes},
      speedThreshold = ${config.brakeSpeedThreshold},
      brakeExtras = {${config.brakeExtras}}
    },
    reverseConfig = {
      useReverse = ${config.useReverse},
      reverseExtras = {${config.reverseExtras}}
    },
    doorConfig = {
      useDoors = ${config.useDoors},
      driverSide = {enable = {${config.dEnable}}, disable = {${config.dDisable}}},
      passSide = {enable = {${config.pEnable}}, disable = {${config.pDisable}}},
      trunk = {enable ={${config.tEnable}}, disable = {${config.tDisable}}}
    }, 
    buttons = {
      ${config.buttons.map((button) => {
        return `{label = "${button.label}", key = ${button.key}, color = "${button.color}", extra = ${button.extra}, linkedExtras = {${button.linkedExtras.toString()}}, oppositeExtras = {${button.oppositeExtras.toString()}}, offExtras = {${button.offExtras.toString()}}, repair = ${button.repair}}`
      })}
    },
    defaultStages = {
      useDefaults = ${config.useDefaultStages},
      enableKeys = {${config.enableKeys}},
      disableKeys = {${config.disableKeys}}
    }
  }`;
    })
    .join(",\n");

  const code = `--[[ 
    Ultimate Lighting Controller Config
    the ULC resource is required to use this configuration
    get the resource here: https://github.com/Flohhhhh/ultimate-lighting-controller/releases/latest
        
    To learn how to setup and use ULC visit here: https://docs.dwnstr.com/ulc/overview
  ]]
                
  return ${configsString.substring(1, configsString.length - 1)}`;

  return (
    <section className='-mt-3 p-1'>
      {/* https://github.com/react-syntax-highlighter/react-syntax-highlighter#readme */}
      <SyntaxHighlighter
        className='w-full h-full text-xs'
        language='lua'
        style={oneDark}
        codeTagProps={{
          className: "text-s",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </section>
  );
};

export default CodeWindow;
