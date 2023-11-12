import { Toast } from "../data/classes/toast.ts";
import { useToastContext } from "../data/toastContext.tsx";

export function ToastComponent() {
  const toastList = useToastContext();

  console.log("painting");
  return (
    <div className="toast-container">
      {toastList.map((toast, i) => {
        return (
          <div key={i} className="toast">
            {toast.title}
            {toast.content}
          </div>
        );
      })}
    </div>
  );
}

export default Toast;
