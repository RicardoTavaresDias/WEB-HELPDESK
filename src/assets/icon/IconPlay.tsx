import type { SVGProps } from "react";

export function IconPlay({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <div>
      <svg
        viewBox="0 0 24 24"
        {...props}
      >
        <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
      </svg>
    </div>
  );
}
