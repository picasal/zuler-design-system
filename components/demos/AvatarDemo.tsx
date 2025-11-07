import React from 'react';

// Demo Component
export const AvatarDemo = () => {
    return (
        <div className="flex -space-x-2">
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-neutral-800">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-700">
                    <img className="aspect-square h-full w-full" src="https://i.pravatar.cc/40?u=a042581f4e29026024d" alt="User 1"/>
                </span>
            </div>
            <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-neutral-800">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-700">
                    AB
                </span>
            </div>
             <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white dark:border-neutral-800">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-neutral-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </span>
            </div>
        </div>
    );
};

// Code string for display
export const avatarDemoCode = `
// NOTE: Simplified for demo.
export function MyAvatar() {
  return (
    <div className="flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
        {/* With Image */}
        <img src="https://i.pravatar.cc/40" alt="User"/>
        
        {/* With Fallback Text */}
        <span className="flex h-full w-full items-center justify-center rounded-full bg-neutral-200">
            AB
        </span>
    </div>
  );
}
`;
