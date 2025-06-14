import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export const Button = forwardRef(
  ({ children, size = "md", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-roboto font-normal bg-black text-white hover:bg-blue hover:text-black transition-colors cursor-pointer",
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
