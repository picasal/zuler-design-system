import React, { useState, useEffect } from 'react';

// Demo Component
export const ToastDemo = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isVisible) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    return (
        <div>
            <button onClick={() => setIsVisible(true)} className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors px-4 py-2 bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90">
                Show Toast
            </button>
            {isVisible && (
                <div className="fixed bottom-5 right-5 w-full max-w-xs p-4 rounded-lg shadow-lg bg-neutral-900 text-white dark:bg-neutral-100 dark:text-black">
                    <h3 className="font-semibold">Event has been created</h3>
                    <p className="text-sm opacity-80">Sunday, December 03, 2023 at 9:00 AM</p>
                </div>
            )}
        </div>
    );
};

// Code string for display
export const toastDemoCode = `
// NOTE: Simplified for demo.
export function MyToast() {
    const [isVisible, setIsVisible] = useState(false);

    // Logic to show/hide toast
    
    return (
        <div>
            <button onClick={() => setIsVisible(true)}>Show Toast</button>
            {isVisible && (
                <div className="fixed bottom-5 right-5 p-4 rounded-lg shadow-lg bg-black text-white">
                    Event created.
                </div>
            )}
        </div>
    );
}
`;
