import Link from "next/link";
import { ButtonProps } from "@/types";
import { cn } from "@/lib/utils";
import { FaSpinner } from "react-icons/fa";

const buttonVariants = {
  primary:
    "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-blue-500/25",
  secondary: "bg-white text-black hover:bg-gray-200",
  outline:
    "border border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400 bg-transparent",
  ghost: "text-gray-400 hover:text-white hover:bg-gray-800/50 bg-transparent",
};

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  onClick,
  disabled = false,
  loading = false,
  href,
  external = false,
  ...props
}: ButtonProps) {
  const baseClasses =
    "font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 disabled:hover:scale-100";

  const classes = cn(
    baseClasses,
    buttonVariants[variant],
    buttonSizes[size],
    className
  );

  const content = (
    <>
      {loading && <FaSpinner className="animate-spin" />}
      {children}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...props}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}
