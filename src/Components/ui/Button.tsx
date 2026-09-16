import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../helper/cn";

const buttonVaraint = cva(
  "w-full py-3.5 bg-slate-900 text-white text-xs font-semibold uppercase tracking-wider hover:bg-indigo-600 transition-colors",
  {
    variants: {
      intent: {
        default: "bg-slate-900 text-white hover:bg-indigo-600",
        success: "bg-green-600 text-white hover:bg-green-500",
        danger: "bg-red-600 text-white hover:bg-red-500",
      },
      bordered: {
        true: "border-2 border-white",
        false: "",
      },
      defaultVariants: {
        intent: "default",
        border: false,
      },
    },
  },
);

type ButtonPorps = VariantProps<typeof buttonVaraint> & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className, title, intent, bordered }: ButtonPorps) {
  return (
    <button className={cn(buttonVaraint({ intent, bordered }), className)}>
      {title}
    </button>
  );
}
