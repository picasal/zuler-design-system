import React from 'react';

// Demo Component
export const ProgressDemo = () => {
    const progress = 66;
    return (
        <div className="relative h-4 w-full max-w-sm overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
            <div 
                className="h-full w-full flex-1 bg-neutral-900 dark:bg-neutral-50 transition-all" 
                style={{ transform: `translateX(-${100 - progress}%)` }}
            />
        </div>
    );
};

// Code string for display
export const progressDemoCode = `
// NOTE: Simplified for demo.
export function MyProgress() {
    const progress = 66; // value between 0 and 100
    return (
        <div className="relative h-4 w-full overflow-hidden rounded-full bg-neutral-200">
            <div 
                className="h-full bg-neutral-900" 
                style={{ width: \`\${progress}%\` }}
            />
        </div>
    );
}
`;
