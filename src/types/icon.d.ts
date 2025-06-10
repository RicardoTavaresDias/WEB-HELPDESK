import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement> & {
  color?: string
  children?: React.ReactNode 
  to?: string
}