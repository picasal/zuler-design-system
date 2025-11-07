import React from 'react';

// Demo Component
export const SliderDemo = () => {
    return (
        <div className="relative flex w-full max-w-sm touch-none select-none items-center">
            <div className="relative h-2 w-full grow overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800">
                <div className="absolute h-full bg-neutral-900 dark:bg-neutral-50" style={{left: '0%', width: '50%'}}></div>
            </div>
            <span className="block h-5 w-5 rounded-full border-2 border-neutral-900 bg-white dark:border-neutral-50 dark:bg-neutral-950" style={{left: '50%'}}></span>
        </div>
    );
};

// Code string for display
export const sliderDemoCode = `
// NOTE: Simplified for demo. A real implementation would use JS for interactivity.
export function MySlider() {
    return (
        <div className="relative flex w-full items-center">
            <div className="relative h-2 w-full grow rounded-full bg-neutral-200">
                <div className="absolute h-full bg-neutral-900" style={{width: '50%'}} />
            </div>
            <span className="block h-5 w-5 rounded-full border-2 border-neutral-900 bg-white" />
        </div>
    );
}
`;
