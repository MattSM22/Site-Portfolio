import type { ElementType } from "react";

interface ButtonIconProps {
  icon: ElementType;
  hasIcon?: boolean;
}

export default function ButtonIcon({
  icon: Icon,
  hasIcon = false,
}: ButtonIconProps) {
  return <>{hasIcon ? <Icon className="w-4 h-4 text-background" /> : ""}</>;
}
