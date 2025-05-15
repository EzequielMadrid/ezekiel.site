type Colors = {
  [key: string]: string | Colors;
};

export default function flattenColorPalette(colors: Colors): {
  [key: string]: string;
} {
  return Object.assign(
    {},
    ...Object.entries(colors).map(([key, value]) => {
      if (typeof value === "string") {
        return { [key]: value };
      }
      const nested = Object.entries(value).map(([subKey, subValue]) => ({
        [`${key}-${subKey}`]: subValue,
      }));
      return Object.assign({}, ...nested);
    })
  );
}
