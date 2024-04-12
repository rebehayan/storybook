import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className: string;
}

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <>
      <div className={className}>{children}</div>
    </>
  );
};
export default Badge;
