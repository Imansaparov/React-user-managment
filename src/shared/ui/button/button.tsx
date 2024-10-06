import { ButtonProps as MuiButtonProps } from "@mui/material";

import { styles } from "./styles.ts";
import {Ref} from "react";

export type ButtonProps = MuiButtonProps & {
  loading?: boolean;
  customRef?: Ref<HTMLButtonElement>;
};

export const Button = ({
  children,
  disabled,
  loading = false,
  variant = "contained",
  type = "button",
  customRef,
  ...props
}: ButtonProps) => {
  return (
    <styles.Button
      ref={customRef}
      type={type}
      variant={variant}
      disabled={disabled || loading}
      // @ts-ignore
      loading={String(loading)}
      {...props}
    >
      {children}
      {loading && <styles.CircularProgress size={20} />}
    </styles.Button>
  );
};
