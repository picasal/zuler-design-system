import React from 'react';

// Demo Component
export const TextareaDemo = () => {
  return (
    <textarea
        className="flex min-h-[80px] w-full max-w-sm rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-neutral-700"
        placeholder="Type your message here."
    />
  );
};

// Code string for display
export const textareaDemoCode = `
// NOTE: Simplified for demo.
export function MyTextarea() {
  return (
    <textarea
        className="flex w-full rounded-md border bg-transparent px-3 py-2 text-sm"
        placeholder="Type your message here."
    />
  );
}
`;
