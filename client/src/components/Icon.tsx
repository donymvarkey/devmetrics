// Icon.tsx
import React from "react";
import type { IconType } from "react-icons";

export interface IconProps {
  icon: IconType; // The icon component (e.g., FaReact, FiSun, etc.)
  size?: number | string; // Size of the icon
  color?: string; // Icon color
  className?: string; // Extra classes (e.g., Tailwind)
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 18,
  color = "currentColor",
  className = "",
}) => {
  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
