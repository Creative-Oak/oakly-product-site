import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

// Define proper types for our custom button props
type ButtonVariant = "primary" | "secondary" | "outlined" | "ghost" | "cta";
type ButtonSize = "sm" | "md" | "lg";

// Create a separate interface for our custom props
interface CustomButtonProps {
  variant?: ButtonVariant;
  btnSize?: ButtonSize; // Using btnSize instead of size to avoid conflicts
  class?: string;
  href?: string; // Add href prop to support anchor elements
}

// Create separate types for button and anchor props
type ButtonElementProps =
  & JSX.HTMLAttributes<HTMLButtonElement>
  & CustomButtonProps;
type AnchorElementProps =
  & JSX.HTMLAttributes<HTMLAnchorElement>
  & CustomButtonProps;

// Use a union type for the component props
type ButtonProps = ButtonElementProps | AnchorElementProps;

export function Button(props: ButtonProps) {
  const variants = {
    primary: `
      bg-[#62929E] 
      hover:bg-[#517982] 
      text-white 
      border-[#62929E] 
      shadow-md
      hover:shadow-lg
      hover:-translate-y-0.5
      font-medium
      cursor-pointer
    `,
    secondary: `
      bg-white 
      hover:bg-[#edf5f7] 
      text-[#62929E] 
      border-2 
      border-[#62929E] 
      shadow-sm
      hover:shadow-md
      hover:-translate-y-0.5
      font-medium
      cursor-pointer
    `,
    outlined: `
      bg-transparent 
      hover:bg-[#edf5f7] 
      text-[#62929E] 
      border-2 
      border-[#62929E] 
      hover:shadow-sm
      hover:-translate-y-0.5
      font-medium
      cursor-pointer
    `,
    ghost: `
      bg-transparent 
      hover:bg-[#edf5f7] 
      text-[#62929E] 
      border-2 
      border-transparent 
      hover:border-[#62929E] 
      hover:-translate-y-0.5
      font-medium
      cursor-pointer
    `,
    cta: `
      bg-[#62929E] 
      hover:bg-[#517982] 
      text-white 
      border-2 
      border-white 
      shadow-lg 
      hover:shadow-xl
      hover:-translate-y-0.5
      font-semibold
      text-lg
      cursor-pointer
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5",
    lg: "px-8 py-3 text-lg",
  };

  // Extract our custom props
  const {
    variant = "primary",
    btnSize = "md",
    class: className = "",
    href,
    ...rest
  } = props;

  // Get the appropriate classes
  const variantClass = variants[variant];
  const sizeClass = sizes[btnSize];

  const commonClasses = `
    ${variantClass} 
    ${sizeClass} 
    rounded-lg 
    transition-all 
    duration-200 
    ease-in-out
    focus:outline-none 
    focus:ring-2 
    focus:ring-[#62929E] 
    focus:ring-opacity-50
    disabled:opacity-50 
    disabled:cursor-not-allowed
    disabled:hover:transform-none
    disabled:hover:shadow-none
    ${className}
  `;

  // If href is provided, render an anchor element
  if (href) {
    return (
      <a
        href={href}
        {...rest as JSX.HTMLAttributes<HTMLAnchorElement>}
        class={commonClasses}
      />
    );
  }

  // Otherwise render a button element
  return (
    <button
      {...rest as JSX.HTMLAttributes<HTMLButtonElement>}
      disabled={!IS_BROWSER || props.disabled}
      class={commonClasses}
    />
  );
}
