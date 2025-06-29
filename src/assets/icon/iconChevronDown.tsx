import type { SVGProps } from "react";

export function IconChevronDown({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <div>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M7.05721 11.0573C7.57791 10.5366 8.42213 10.5366 8.94283 11.0573L16 18.1145L23.0572 11.0573C23.5779 10.5366 24.4221 10.5366 24.9428 11.0573C25.4635 11.578 25.4635 12.4222 24.9428 12.9429L16.9428 20.9429C16.4221 21.4636 15.5779 21.4636 15.0572 20.9429L7.05721 12.9429C6.53651 12.4222 6.53651 11.578 7.05721 11.0573Z"
        />
      </svg>
    </div>
  );
}
