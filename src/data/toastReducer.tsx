import { Dispatch, ReactNode, createContext, useReducer } from "react";

export class Toast {
  constructor(public title: string, public content: string) {}
}

export type ToastActionType = "add" | "deleteFirst" | "clear";
export class ToastAction {
  constructor(public type: ToastActionType, public toast: Toast) {}
}
export default function moodsReducer(toastList: Toast[], action: ToastAction) {
  switch (action.type) {
    case "add": {
      return toastList;
    }
    case "deleteFirst": {
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

export const ToastContext = createContext(new Array<Toast>());
export const ToastDispatchContext = createContext<Dispatch<ToastAction>>(null!);

interface ToastProviderInput {
  children: ReactNode;
}
export function ToastProvider({ children }: ToastProviderInput) {
  const [toastList, dispatch] = useReducer(moodsReducer, new Array<Toast>());
  return (
    <ToastContext.Provider value={toastList}>
      <ToastDispatchContext.Provider value={dispatch}>
        {children}
      </ToastDispatchContext.Provider>
    </ToastContext.Provider>
  );
}
