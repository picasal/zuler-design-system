import React, { useState } from 'react';

// Demo Component
export const DialogDemo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors px-4 py-2 bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90">
        Edit Profile
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center" onClick={() => setIsOpen(false)}>
          <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-lg w-full max-w-lg p-6" onClick={e => e.stopPropagation()}>
            <h2 className="text-lg font-semibold">Edit Profile</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
              Make changes to your profile here. Click save when you're done.
            </p>
            <div className="mt-4 space-y-4">
                {/* Form fields would go here */}
                <div>
                    <label className="text-sm font-medium">Name</label>
                    <input className="mt-1 flex h-10 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm dark:border-neutral-700" defaultValue="John Doe"/>
                </div>
                 <div>
                    <label className="text-sm font-medium">Username</label>
                    <input className="mt-1 flex h-10 w-full rounded-md border border-neutral-300 bg-transparent px-3 py-2 text-sm dark:border-neutral-700" defaultValue="@johndoe"/>
                </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button onClick={() => setIsOpen(false)} className="px-4 py-2 text-sm rounded-md bg-neutral-900 text-neutral-50 hover:bg-neutral-900/80 dark:bg-neutral-200 dark:text-neutral-800">Save changes</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Code string for display
export const dialogDemoCode = `
// NOTE: Simplified for demo.
export function MyDialog() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>Edit Profile</button>
      {isOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6">
            <h2 className="font-semibold">Edit Profile</h2>
            <p className="mt-2 text-sm">Make changes to your profile.</p>
            {/* Form fields here */}
            <div className="mt-6 flex justify-end">
              <button onClick={() => setIsOpen(false)}>Save changes</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
`;
