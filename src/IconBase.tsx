import type { ReactNode, SVGProps } from "react";

export type IconProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  size?: number | string;
};

type IconBaseProps = IconProps & {
  viewBox: string;
  children: ReactNode;
};

export function IconBase({ size = 24, viewBox, children, ...props }: IconBaseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      aria-hidden={props["aria-label"] ? undefined : true}
      role={props["aria-label"] ? "img" : "presentation"}
      {...props}
    >
      {children}
    </svg>
  );
}
