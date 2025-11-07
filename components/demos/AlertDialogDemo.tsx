import React, { useState } from 'react';

// Demo Component
export const AlertDialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors px-4 py-2 bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90">
        Show Dialog
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg w-full max-w-sm p-6">
            <h2 className="text-lg font-semibold">Are you absolutely sure?</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </p>
            <div className="mt-6 flex justify-end space-x-2">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm rounded-md border hover:bg-neutral-100 dark:hover:bg-neutral-800">Cancel</button>
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm rounded-md bg-red-500 text-white hover:bg-red-600">Continue</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Code string for display
export const alertDialogDemoCode = `
// NOTE: Simplified for demo.
export function MyAlertDialog() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Show Dialog</button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6">
            <h2 className="font-semibold">Are you sure?</h2>
            <p className="mt-2 text-sm">This action cannot be undone.</p>
            <div className="mt-6 flex justify-end space-x-2">
              <button onClick={() => setIsOpen(false)}>Cancel</button>
              <button onClick={() => setIsOpen(false)} className="bg-red-500 text-white">Continue</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
`;
