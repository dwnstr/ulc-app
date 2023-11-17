import React, { useContext } from "react";
import { ConfigsContext } from "@/context/configs.context";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeWindow = () => {
  const { configs } = useContext(ConfigsContext);

  // const code = `--[[
  //     Ultimate Lighting Controller data
  //     the ULC resource is required to use this datauration
  //     get the resource here: https://github.com/Flohhhhh/ultimate-lighting-controller/releases/latest

  //     To learn how to setup and use ULC visit here: https://docs.dwnstr.com/ulc/overview
  // ]]

  // return { names = {${data.names}},
  //     steadyBurndata = {
  //         ${data.cruiseForced}
  //         disableWithLights = ${data.cruiseDWL},
  //         sbExtras = {${data.cruiseExtras}}
  //     },
  //     parkdata = {
  //         usePark = ${data.usePark},
  //         useSync = ${data.useSync},
  //         syncWith = {${data.syncWith}},
  //         pExtras = {${data.parkExtras}},
  //         dExtras = {${data.driveExtras}}
  //     },
  //     horndata = {
  //         useHorn = ${data.useHorn},
  //         hornExtras = {${data.hornExtras}},
  //     },
  //     brakedata = {
  //         useBrakes = ${data.useBrakes},
  //         speedThreshold = ${data.brakeSpeedThreshold},
  //         brakeExtras = {${data.brakeExtras}}
  //     },
  //     reversedata = {
  //         useReverse = ${data.useReverse},
  //         reverseExtras = {${data.reverseExtras}}
  //     },
  //     doordata = {
  //         useDoors = ${data.useDoors},
  //         driverSide = {enable = {${data.dEnable}}, disable = {${data.dDisable}}},
  //         passSide = {enable = {${data.pEnable}}, disable = {${data.pDisable}}},
  //         trunk = {enable ={${data.tEnable}}, disable = {${data.tDisable}}}
  //     },
  //     buttons = {
  //         ${data.buttons}
  //     },
  //     defaultStages = {
  //         useDefaults = ${data.useDefaultStages},
  //         enableKeys = {${data.enableKeys}},
  //         disableKeys = {${data.disableKeys}}
  //     }
  // }`;

  return (
    <section className='-mt-3 p-1'>
      {/* https://github.com/react-syntax-highlighter/react-syntax-highlighter#readme */}
      <SyntaxHighlighter
        className='w-full h-full'
        language='lua'
        style={oneDark}
        codeTagProps={{
          className: "text-s",
        }}
        wrapLines
        lineProps={{ className: "pointer-events-none" }}
        showLineNumbers
      >
        {JSON.stringify(configs[0], null, 1)}
      </SyntaxHighlighter>
    </section>
  );
};

export default CodeWindow;
