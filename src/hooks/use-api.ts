import { useEffect } from "react";
import useSWR from "swr";
import { useCreateToast } from "../data/toastContext";
import { Toast } from "../data/classes/toast";

export const useApi = <Tpayload>(
  path: string,
  func: (path: string) => Promise<Tpayload>
) => {
  const setToast = useCreateToast();

  const { isLoading, isValidating, data, error } = useSWR(
    path,
    async (path) => await func(path)
  );

  useEffect(() => {
    setToast(new Toast("Error", `error message, ts: ${new Date()}`));

    console.log("end - useEffect");
  }, [error, setToast]);

  if (error) {
    return { isLoading: true, isValidating, data };
  }

  return { isLoading, isValidating, data };
};
