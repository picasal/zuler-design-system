import React, { useState, useRef, useEffect } from 'react';

// Demo Component
export const DropdownMenuDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef]);
    
    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-md border text-sm font-medium px-4 py-2"
            >
                Open
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-neutral-900 ring-1 ring-black dark:ring-neutral-700 ring-opacity-5">
                    <div className="py-1">
                        <a href="#/" className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">Profile</a>
                        <a href="#/" className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">Billing</a>
                        <a href="#/" className="block px-4 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-800">Settings</a>
                        <a href="#/" className="block px-4 py-2 text-sm text-red-700 dark:text-red-400 hover:bg-neutral-100 dark:hover:bg-neutral-800">Log out</a>
                    </div>
                </div>
            )}
        </div>
    );
};

// Code string for display
export const dropdownMenuDemoCode = `
// NOTE: Simplified for demo.
export function MyDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="relative">
            <button onClick={() => setIsOpen(!isOpen)}>Open</button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white">
                    {/* Menu items */}
                </div>
            )}
        </div>
    );
}
`;
