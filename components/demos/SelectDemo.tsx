import React from 'react';

// Demo Component
export const SelectDemo = () => {
  return (
    <select className="flex h-10 items-center justify-between rounded-md border border-neutral-200 bg-white px-3 py-2 text-sm dark:border-neutral-800 dark:bg-neutral-950 w-[180px]">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="blueberry">Blueberry</option>
        <option value="grapes">Grapes</option>
        <option value="pineapple">Pineapple</option>
    </select>
  );
};

// Code string for display
export const selectDemoCode = `
// NOTE: Simplified for demo using native select.
export function MySelect() {
  return (
    <select className="h-10 rounded-md border bg-transparent px-3 py-2 text-sm w-[180px]">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="blueberry">Blueberry</option>
    </select>
  );
}
`;
