import { ReactNode } from "react";

export interface ICheckboxProps
  extends Omit<React.HTMLAttributes<HTMLInputElement>, "onChange"> {
  id: string;
  name: string;
  value?: string;
  label?: string | ReactNode;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (data: any | null, name?: string) => void;
}
