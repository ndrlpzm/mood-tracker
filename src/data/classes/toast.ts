export type ToastType = "warning" | "error" | "information" | "success";
export class Toast {
  constructor(
    public title: string,
    public content: string,
    public type: ToastType
  ) {}
}
