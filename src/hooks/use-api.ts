import { useEffect } from "react";
import useSWR from "swr";
import { useCreateToast } from "../data/toastContext";
import { Toast } from "../data/classes/toast";
import useSWRMutation, { SWRMutationConfiguration } from "swr/mutation";

export const useApi = <Tpayload>(
  path: string | null,
  func: (path: string) => Promise<Tpayload>
) => {
  const setToast = useCreateToast();
  const { isLoading, isValidating, data, error } = useSWR(
    path,
    async (path) => await func(path)
  );

  useEffect(() => {
    if (error)
      setToast(new Toast("Error", `error, ts: ${new Date()}`, "error"));
  }, [error, setToast]);

  if (error) {
    return { isLoading: true, isValidating, data };
  }

  return { isLoading, isValidating, data };
};

export const useApiMutation = <Tpayload>(
  path: string,
  func: (path: string) => Promise<Tpayload>,
  options?: SWRMutationConfiguration<any, any> | undefined
) => {
  const setToast = useCreateToast();
  const { trigger, isMutating, data, error } = useSWRMutation(
    path,
    func,
    options
  );

  useEffect(() => {
    if (error)
      setToast(
        new Toast("Error", `error mutation, ts: ${new Date()}`, "error")
      );
  }, [error, setToast]);

  if (error) {
    return { trigger, isMutating, data, error };
  }

  return { trigger, isMutating, data, error };
};
