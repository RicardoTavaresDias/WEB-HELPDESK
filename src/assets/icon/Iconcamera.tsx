import type { SVGProps } from "react";

export function IconCamera({...props}: SVGProps<SVGSVGElement> ) {
  return (
    <div>
      <svg
        viewBox="0 0 24 24"
        stroke="#E3E5E8"
        strokeWidth="2"
        {...props}
      >
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    </div>
  );
}