import { SectionProps } from "@/types";
import { cn } from "@/lib/utils";

const backgroundVariants = {
  default: "bg-transparent",
  secondary: "bg-gray-900/30",
  gradient: "bg-gradient-to-r from-blue-900/20 to-purple-900/20",
};

export default function Section({
  children,
  className,
  id,
  background = "default",
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-12 md:py-20 px-4 relative z-10",
        backgroundVariants[background],
        className
      )}
      {...props}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
