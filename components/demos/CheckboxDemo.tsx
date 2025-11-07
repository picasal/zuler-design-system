import React from 'react';

// Demo Component
export const CheckboxDemo = () => {
  return (
    <div className="flex items-center space-x-2">
      <button className="peer h-4 w-4 shrink-0 rounded-sm border border-neutral-300 dark:border-neutral-700 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-neutral-900 data-[state=checked]:text-neutral-50 dark:ring-offset-neutral-950 dark:data-[state=checked]:bg-neutral-50 dark:data-[state=checked]:text-neutral-900">
        {/* Check icon would go here */}
      </button>
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        Accept terms and conditions
      </label>
    </div>
  );
};

// Code string for display
export const checkboxDemoCode = `
// NOTE: Simplified for demo.
export function MyCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <input type="checkbox" id="terms" />
      <label htmlFor="terms">Accept terms and conditions</label>
    </div>
  );
}
`;
