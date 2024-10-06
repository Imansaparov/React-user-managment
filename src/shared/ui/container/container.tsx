import { DetailedHTMLProps, HTMLAttributes } from "react";

import { sharedStyles } from "@/shared/styles";

export type ContainerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Container = ({ className = "", ...props }: ContainerProps) => {
  return (
    <div className={`${sharedStyles.container} ${className}`} {...props} />
  );
};
