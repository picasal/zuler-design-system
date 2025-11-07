import React from 'react';

// Demo Component
export const SwitchDemo = () => {
  return (
    <div className="flex items-center space-x-2">
        <button
            type="button"
            className="group inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-neutral-200 dark:bg-neutral-700 transition-colors"
        >
            <span className="pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition-transform translate-x-5 dark:bg-neutral-300"></span>
        </button>
      <label className="text-sm font-medium">Airplane Mode</label>
    </div>
  );
};

// Code string for display
export const switchDemoCode = `
// NOTE: Simplified for demo.
export function MySwitch() {
  return (
    <div className="flex items-center space-x-2">
      <button className="inline-flex h-6 w-11 shrink-0 items-center rounded-full border-2 border-transparent bg-neutral-200">
        <span className="h-5 w-5 transform rounded-full bg-white shadow-lg" />
      </button>
      <label>Airplane Mode</label>
    </div>
  );
}
`;
