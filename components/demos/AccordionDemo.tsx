import React, { useState } from 'react';

// Demo Component
export const AccordionDemo = () => {
  const [openItem, setOpenItem] = useState('item-1');

  const AccordionItem = ({ value, title, children }: { value: string, title: string, children: React.ReactNode }) => {
    const isOpen = openItem === value;
    return (
      <div className="border-b border-neutral-200 dark:border-neutral-800">
        <h3>
          <button
            onClick={() => setOpenItem(isOpen ? '' : value)}
            className="flex w-full items-center justify-between py-4 font-medium text-left"
          >
            {title}
            <svg
              className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </h3>
        {isOpen && <div className="pb-4 pt-0 text-neutral-600 dark:text-neutral-400">{children}</div>}
      </div>
    );
  };
  
  return (
    <div className="w-full max-w-md">
      <AccordionItem value="item-1" title="Is it accessible?">
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionItem>
      <AccordionItem value="item-2" title="Is it styled?">
        Yes. It comes with default styles that matches the other components' aesthetic.
      </AccordionItem>
      <AccordionItem value="item-3" title="Is it animated?">
        Yes. It's animated by default, but you can disable it if you prefer.
      </AccordionItem>
    </div>
  );
};

// Code string for display
export const accordionDemoCode = `
// NOTE: Simplified for demo. Your implementation would be more robust.
const AccordionDemo = () => {
  const [openItem, setOpenItem] = useState('item-1');

  const AccordionItem = ({ value, title, children }) => {
    const isOpen = openItem === value;
    return (
      <div className="border-b">
        <button onClick={() => setOpenItem(isOpen ? '' : value)} className="flex w-full items-center justify-between py-4 font-medium">
          {title} <span>{isOpen ? '-' : '+'}</span>
        </button>
        {isOpen && <div className="pb-4">{children}</div>}
      </div>
    );
  };
  
  return (
    <div className="w-full max-w-md">
      <AccordionItem value="item-1" title="Is it accessible?">Yes.</AccordionItem>
      <AccordionItem value="item-2" title="Is it styled?">Yes.</AccordionItem>
      <AccordionItem value="item-3" title="Is it animated?">Yes.</AccordionItem>
    </div>
  );
};
`;
