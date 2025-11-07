import React from 'react';

const AlertIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M12 2L2 22h20L12 2z"></path><path d="M12 16h.01"></path><path d="M12 8v4"></path></svg>
);

const Alert = ({ children }: { children: React.ReactNode }) => (
    <div className="relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg+div]:translate-y-[-3px] [&>svg~*]:pl-7 border-yellow-300/50 text-yellow-500 dark:border-yellow-500/50">
        <AlertIcon />
        <div>{children}</div>
    </div>
);
const AlertTitle = ({ children }: { children: React.ReactNode }) => <h5 className="mb-1 font-medium leading-none tracking-tight text-yellow-600 dark:text-yellow-400">{children}</h5>;
const AlertDescription = ({ children }: { children: React.ReactNode }) => <div className="text-sm">{children}</div>;


// Demo Component
export const AlertDemo = () => {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  );
};

// Code string for display
export const alertDemoCode = `
const Alert = ({children}) => <div className="w-full rounded-lg border p-4">{children}</div>;
const AlertTitle = ({children}) => <h5 className="font-medium">{children}</h5>;
const AlertDescription = ({children}) => <div className="text-sm">{children}</div>;

export function MyAlert() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the CLI.
      </AlertDescription>
    </Alert>
  );
}
`;
