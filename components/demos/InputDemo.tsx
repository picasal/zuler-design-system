
import React from 'react';

// Basic Input Component Implementation
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-blue-500 dark:focus:ring-offset-neutral-900 ${className || ''}`}
      {...props}
    />
  );
};

// Demo Component
export const InputDemo = () => {
    return <Input type="email" placeholder="Email" className="w-[300px]" />;
};

// Code string for display
export const inputDemoCode = `
import React from 'react';

// NOTE: This is a simplified implementation for demonstration.
type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={\`flex h-10 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:text-neutral-50 dark:focus:ring-blue-500 dark:focus:ring-offset-neutral-900 \${className}\`}
      {...props}
    />
  );
};

// Usage
export function MyInput() {
  return <Input type="email" placeholder="Email" className="w-[300px]" />;
}
`;