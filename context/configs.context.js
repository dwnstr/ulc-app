"use client";

import { createContext, useState } from "react";

const ConfigsContext = createContext();

const ConfigsProvider = ({ children }) => {
  const [configs, setConfigs] = useState([
    {
      names: [""],

      useCruise: false,
      cruiseForced: `forceOn = false, useTime = false`,
      cruiseDWL: false,
      cruiseExtras: [],

      usePark: false,
      parkExtras: [],
      driveExtras: [],
      useSync: false,
      syncWith: [],

      useHorn: false,
      hornExtras: [],

      useBrakes: false,
      useRealBrakes: true,
      brakeSpeedThreshold: 4,
      brakeExtras: [],

      useReverse: false,
      reverseExtras: [],

      useDoors: false,
      dEnable: [],
      dDisable: [],
      pEnable: [],
      pDisable: [],
      tEnable: [],
      tDisable: [],

      useButtons: false,
      buttons: [
        // {
        //   label: "",
        //   key: 1,
        //   color: "green",
        //   extra: 1,
        //   linkedExtras: [],
        //   oppositeExtras: [],
        //   offExtras: [],
        //   repair: false,
        // },
      ],

      useDefaultStages: false,
      enableKeys: [],
      disableKeys: [],
    },
    {
      names: [""],

      useCruise: false,
      cruiseForced: `forceOn = false, useTime = false,`,
      cruiseDWL: false,
      cruiseExtras: [],

      usePark: false,
      parkExtras: [],
      driveExtras: [],
      useSync: false,
      syncWith: [],

      useHorn: false,
      hornExtras: [],

      useBrakes: false,
      useRealBrakes: true,
      brakeSpeedThreshold: 4,
      brakeExtras: [],

      useReverse: false,
      reverseExtras: [],

      useDoors: false,
      dEnable: [],
      dDisable: [],
      pEnable: [],
      pDisable: [],
      tEnable: [],
      tDisable: [],

      useButtons: false,
      buttons: [
        // {
        //   label: "",
        //   key: 1,
        //   color: "green",
        //   extra: 1,
        //   linkedExtras: [],
        //   oppositeExtras: [],
        //   offExtras: [],
        //   repair: false,
        // },
      ],

      useDefaultStages: false,
      enableKeys: [],
      disableKeys: [],
    },
  ]);

  const updateConfigValue = (id, field, newValue) => {
    setConfigs((prevConfigs) => {
      const newConfigs = [...prevConfigs];
      newConfigs[id] = { ...newConfigs[id], [field]: newValue };
      return newConfigs;
    });
  };

  return (
    <ConfigsContext.Provider
      value={{
        configs,
        updateConfigValue,
      }}
    >
      {children}
    </ConfigsContext.Provider>
  );
};

export { ConfigsContext, ConfigsProvider };
