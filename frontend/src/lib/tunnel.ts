import Constants from "expo-constants";

export const getTunnelUrl = () => {
  if (!Constants.expoConfig?.extra?.useTunnel) return null;
  try {
    return require("../../.fungitunnel.json").url as string;
  } catch {
    return null;
  }
};

export const tunnel = getTunnelUrl();
