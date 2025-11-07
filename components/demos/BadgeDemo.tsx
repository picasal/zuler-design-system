import React from 'react';

const Badge = ({ children, variant }: { children: React.ReactNode, variant?: 'destructive' | 'secondary' }) => {
    const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors";
    const variantClasses = {
        destructive: "border-transparent bg-red-500 text-neutral-50 hover:bg-red-500/80",
        secondary: "border-transparent bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        default: "border-transparent bg-neutral-900 text-neutral-50 hover:bg-neutral-900/80 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/80"
    };
    return <div className={`${baseClasses} ${variantClasses[variant || 'default']}`}>{children}</div>;
}

// Demo Component
export const BadgeDemo = () => {
  return (
      <div className="flex gap-2">
        <Badge>Primary</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>
  );
};

// Code string for display
export const badgeDemoCode = `
// NOTE: Simplified for demo.
const Badge = ({ children, variant }) => {
    // ... logic to apply variant styles
    return <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">{children}</div>
}

export function MyBadge() {
  return <Badge>Badge</Badge>;
}
`;
