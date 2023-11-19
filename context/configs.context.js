"use client";

import { createContext, useState } from "react";

const ConfigsContext = createContext();

const ConfigsProvider = ({ children }) => {
  const [nextId, setNextId] = useState(1);
  const [configs, setConfigs] = useState([
    {
      id: 0,
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
    }
  ]);

  const updateConfigValue = (id, field, newValue) => {
    // find the index of the config where config.id matches id
    const index = configs.findIndex((config) => config.id === id);
    console.log(`Updating config with id ${id} at index ${index}`);
    // update the config with the new value
    setConfigs((prevConfigs) => {
      const newConfigs = [...prevConfigs];
      newConfigs[index] = { ...newConfigs[index], [field]: newValue };
      return newConfigs;
    });
  };

  const addConfig = () => {
    setConfigs((prevConfigs) => {
      const newConfigs = [...prevConfigs];
      newConfigs.push({
        id: nextId,
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
      });
      return newConfigs;
    });
    setNextId(nextId + 1);
  };

  const removeConfig = (id) => {
    // get the index of the config with config.id matching id
    const index = configs.findIndex((config) => config.id === id);
    setConfigs((prevConfigs) => {
      const newConfigs = [...prevConfigs];
      newConfigs.splice(index, 1);
      return newConfigs;
    });
  };

  return (
    <ConfigsContext.Provider
      value={{
        configs,
        updateConfigValue,
        addConfig,
        removeConfig,
      }}
    >
      {children}
    </ConfigsContext.Provider>
  );
};

export { ConfigsContext, ConfigsProvider };
