export type QueryParams = { key: string; value: any }[];

export const formatParams = (path: string, params: QueryParams): string => {
  if (params.length > 0) {
    const paramArray = params.map((x) => `${x.key}=${x.value}`);
    return `${path}?${paramArray.join("&")}`;
  } else return path;
};
/**
 * Returns a list of param values from a path as strings
 * Used for mocking purposes
 * @param fullPath
 * @returns
 */
export const unravelParams = (fullPath: string): string[] | undefined => {
  if (!fullPath.includes("?")) return undefined;

  const paramString = fullPath.split("?").pop();
  const paramArray = paramString?.split("&");

  if (paramArray)
    return paramArray?.map((x) => {
      return x.split("=")[1].toString();
    });
  else return undefined;
};
