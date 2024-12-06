import { useRef, useState } from "react";
import { Preset } from "./@type";

export const useInnerDesignParameterList = (initialValue: Preset.Preset[]) => {
  const presetListRef = useRef<Preset.Preset[]>(initialValue);

  const [_currentPresetList, _setCurrentPresetList] =
    useState<Preset.Preset[]>(initialValue);

  const [_selectedPreset, _setSelectedPreset] =
    useState<string>("defaultPreset");

  const presetIndexRef = useRef<number>(
    initialValue.findIndex((preset) => preset.name === _selectedPreset)
  );
  if (presetIndexRef.current === -1) throw new Error("No Preset");

  const [_currentPreset, _setCurrentPreset] = useState<Preset.Preset>(
    presetListRef.current[presetIndexRef.current]
  );

  const [_commonDesignParameter, _setCommonDesignParameter] =
    useState<Preset.CommonParameter>(
      presetListRef.current[presetIndexRef.current].common
    );

  const [_crownDesignParameter, _setCrownDesignParameter] =
    useState<Preset.RestorationTypeSpecificParameter>(
      presetListRef.current[presetIndexRef.current].crown
    );

  const [_inOnlayDesignParameter, _setInOnlayDesignParameter] =
    useState<Preset.RestorationTypeSpecificParameter>(
      presetListRef.current[presetIndexRef.current].inOnlay
    );

  const [_implantDesignParameter, _setImplantDesignParameter] =
    useState<Preset.RestorationTypeSpecificParameter>(
      presetListRef.current[presetIndexRef.current].implant
    );

  const setCurrentPresetList = (presetList: Preset.Preset[]) => {
    presetListRef.current = presetList;
    _setCurrentPresetList(presetList);
  };

  const setCurrentPreset = (input: Preset.SetPresetInput) => {
    const newPreset = {
      ...presetListRef.current[presetIndexRef.current],
      ...input,
    };
    presetListRef.current[presetIndexRef.current] = newPreset;
    _setCurrentPreset(newPreset);
  };

  const setSelectedPreset = (presetName: string) => {
    const newPresetIndex = presetListRef.current.findIndex(
      (preset) => preset.name === presetName
    );
    if (newPresetIndex === -1) throw new Error("No Preset");
    presetIndexRef.current = newPresetIndex;

    const _currentPreset = presetListRef.current[newPresetIndex];

    const _commonDesignParameter = presetListRef.current[newPresetIndex].common;

    const _crownDesignParameter = presetListRef.current[newPresetIndex].crown;

    const _inOnlayDesignParameter =
      presetListRef.current[newPresetIndex].inOnlay;

    const _implantDesignParameter =
      presetListRef.current[newPresetIndex].implant;

    _setSelectedPreset(presetName);
    _setCurrentPreset(_currentPreset);
    _setCommonDesignParameter(_commonDesignParameter);
    _setCrownDesignParameter(_crownDesignParameter);
    _setInOnlayDesignParameter(_inOnlayDesignParameter);
    _setImplantDesignParameter(_implantDesignParameter);
  };

  const setCommonParameter = (input: Preset.SetCommonParameterInput) => {
    const newCommonParameterList = {
      ...presetListRef.current[presetIndexRef.current].common,
      ...input,
    };
    presetListRef.current[presetIndexRef.current].common =
      newCommonParameterList;
    _setCommonDesignParameter(newCommonParameterList);
  };

  const setCrownDesignParameter = (
    input: Preset.SetRestorationTypeSpecificParameterInput
  ) => {
    const newCrownParameterList = {
      ...presetListRef.current[presetIndexRef.current].crown,
      ...input,
    };
    presetListRef.current[presetIndexRef.current].crown = newCrownParameterList;
    _setCrownDesignParameter(newCrownParameterList);
  };

  const setInOnlayDesignParameter = (
    input: Preset.SetRestorationTypeSpecificParameterInput
  ) => {
    const newInOnlayParameterList = {
      ...presetListRef.current[presetIndexRef.current].inOnlay,
      ...input,
    };
    presetListRef.current[presetIndexRef.current].inOnlay =
      newInOnlayParameterList;
    _setInOnlayDesignParameter(newInOnlayParameterList);
  };

  const setImplantDesignParameter = (
    input: Preset.SetRestorationTypeSpecificParameterInput
  ) => {
    const newImplantParameterList = {
      ...presetListRef.current[presetIndexRef.current].implant,
      ...input,
    };
    presetListRef.current[presetIndexRef.current].implant =
      newImplantParameterList;
    _setImplantDesignParameter(newImplantParameterList);
  };

  const currentPresetListState = {
    SET: (presetList: Preset.Preset[]) => {
      setCurrentPresetList(presetList);
    },
    GET: () => {
      return _currentPresetList;
    },
  };

  const selectedPresetState = {
    SET: (presetName: string) => {
      setSelectedPreset(presetName);
    },
    GET: () => {
      return _selectedPreset;
    },
  };

  const currentPresetState = {
    SET: (preset: Preset.Preset) => {
      setCurrentPreset(preset);
    },
    GET: () => {
      return _currentPreset;
    },
  };

  const commonParameterState = {
    SET: (param: Preset.CommonParameter) => {
      setCommonParameter(param);
    },
    GET: () => {
      return _commonDesignParameter;
    },
  };

  const crownParameterState = {
    SET: (param: Preset.RestorationTypeSpecificParameter) => {
      setCrownDesignParameter(param);
    },
    GET: () => {
      return _crownDesignParameter;
    },
  };

  const inOnlayParameterState = {
    SET: (param: Preset.RestorationTypeSpecificParameter) => {
      setInOnlayDesignParameter(param);
    },
    GET: () => {
      return _inOnlayDesignParameter;
    },
  };

  const implantParameterState = {
    SET: (param: Preset.RestorationTypeSpecificParameter) => {
      setImplantDesignParameter(param);
    },
    GET: () => {
      return _implantDesignParameter;
    },
  };

  return {
    currentPresetListState,
    selectedPresetState,
    currentPresetState,
    commonParameterState,
    crownParameterState,
    inOnlayParameterState,
    implantParameterState,
  };
};
