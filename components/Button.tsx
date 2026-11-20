import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "green" | "blue" | "white" | "ghost";

const STYLES: Record<Variant, string> = {
  green: "btn btn-green",
  blue: "btn btn-blue",
  white: "btn btn-white",
  ghost: "btn btn-ghost",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export default function Button({ href, children, variant = "green", className = "" }: Props) {
  const classes = `${STYLES[variant]} ${className}`.trim();
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
