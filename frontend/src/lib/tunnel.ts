export const getTunnelUrl = () => {
  try {
    return require("../../.fungitunnel.json").url as string;
  } catch {
    return null;
  }
};

export const tunnel = getTunnelUrl();
