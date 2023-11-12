import {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";
import { Toast } from "./classes/toast.ts";

export type ToastActionType = "add" | "deleteFirst" | "clear";
export class ToastAction {
  constructor(public type: ToastActionType, public toast: Toast) {}
}
export default function toastReducer(toastList: Toast[], action: ToastAction) {
  switch (action.type) {
    case "add": {
      return [...toastList, action.toast];
    }
    case "deleteFirst": {
      toastList = toastList.slice(1);
      return toastList;
    }
    case "clear": {
      return [];
    }
    default: {
      console.log("Unknown action type");
      return toastList;
    }
  }
}
export function useCreateToast() {
  const dispatch = useToastDispatchContext();
  return (toast: Toast) => {
    dispatch({
      type: "add",
      toast: toast,
    });
    setTimeout(() => {
      dispatch({ type: "deleteFirst", toast: new Toast("", "") });
    }, 2000);
  };
}

export const ToastContext = createContext(new Array<Toast>());
export const ToastDispatchContext = createContext<Dispatch<ToastAction>>(null!);

export function useToastContext(): Array<Toast> {
  return useContext(ToastContext);
}
export function useToastDispatchContext(): Dispatch<ToastAction> {
  return useContext(ToastDispatchContext);
}

interface ToastProviderInput {
  children: ReactNode;
}
export function ToastProvider({ children }: ToastProviderInput) {
  const [toastList, dispatch] = useReducer(toastReducer, new Array<Toast>());
  return (
    <ToastContext.Provider value={toastList}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastContext.Provider>
  );
}
