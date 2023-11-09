import useSWR from "swr";

export const useApi = <Tpayload>(
  path: string,
  func: (path: string) => Promise<Tpayload>
) => {
  console.log("before - useApi");
  const { isLoading, isValidating, data, error } = useSWR(
    path,
    async (path) => await func(path)
  );
  console.log("after - useApi");

  if (error) {
    return { isLoading: true, isValidating, data };
  }

  return { isLoading, isValidating, data };
};
