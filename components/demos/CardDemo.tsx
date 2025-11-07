
import React from 'react';

// Basic Card Component Implementation
const Card = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <div className={`rounded-xl border bg-white text-neutral-900 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 ${className || ''}`}>
    {children}
  </div>
);

const CardHeader = ({ children }: { children: React.ReactNode }) => <div className="flex flex-col space-y-1.5 p-6">{children}</div>;
const CardTitle = ({ children }: { children: React.ReactNode }) => <h3 className="font-semibold tracking-tight">{children}</h3>;
const CardDescription = ({ children }: { children: React.ReactNode }) => <p className="text-sm text-neutral-500 dark:text-neutral-400">{children}</p>;
const CardContent = ({ children }: { children: React.ReactNode }) => <div className="p-6 pt-0">{children}</div>;
const CardFooter = ({ children }: { children: React.ReactNode }) => <div className="flex items-center p-6 pt-0">{children}</div>;


// Demo Component
export const CardDemo = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content area of the card where detailed information can be placed.</p>
      </CardContent>
      <CardFooter>
        <button className="w-full bg-black text-white dark:bg-white dark:text-black h-10 rounded-md text-sm">Deploy</button>
      </CardFooter>
    </Card>
  );
};

// Code string for display
export const cardDemoCode = `
import React from 'react';

// NOTE: This is a simplified implementation for demonstration.
const Card = ({ children, className }) => <div className={\`rounded-xl border bg-white text-neutral-900 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 \${className}\`}>{children}</div>;
const CardHeader = ({ children }) => <div className="flex flex-col space-y-1.5 p-6">{children}</div>;
const CardTitle = ({ children }) => <h3 className="font-semibold tracking-tight">{children}</h3>;
const CardDescription = ({ children }) => <p className="text-sm text-neutral-500 dark:text-neutral-400">{children}</p>;
const CardContent = ({ children }) => <div className="p-6 pt-0">{children}</div>;
const CardFooter = ({ children }) => <div className="flex items-center p-6 pt-0">{children}</div>;

// Usage
export function MyCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content area of the card where detailed information can be placed.</p>
      </CardContent>
      <CardFooter>
        <button className="w-full bg-black text-white dark:bg-white dark:text-black h-10 rounded-md text-sm">Deploy</button>
      </CardFooter>
    </Card>
  );
}
`;