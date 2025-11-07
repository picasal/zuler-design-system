
import React, { useState } from 'react';

// Basic Tabs Component Implementation
const TabsContext = React.createContext<{ activeTab: string; setActiveTab: (id: string) => void; }>({ activeTab: '', setActiveTab: () => {} });

const Tabs = ({ defaultValue, children, className }: { defaultValue: string; children: React.ReactNode; className?: string; }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children }: { children: React.ReactNode; }) => (
  <div className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-100 p-1 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
    {children}
  </div>
);

const TabsTrigger = ({ value, children }: { value: string; children: React.ReactNode; }) => {
  const { activeTab, setActiveTab } = React.useContext(TabsContext);
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive ? 'bg-white shadow-sm text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50' : ''}`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children }: { value: string; children: React.ReactNode; }) => {
  const { activeTab } = React.useContext(TabsContext);
  return activeTab === value ? <div className="mt-4 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:ring-offset-neutral-950">{children}</div> : null;
};


// Demo Component
export const TabsDemo = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Make changes to your account here. Click save when you're done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Change your password here. After saving, you'll be logged out.
        </p>
      </TabsContent>
    </Tabs>
  );
};

// Code string for display
export const tabsDemoCode = `
import React, { useState } from 'react';

// NOTE: This is a simplified implementation for demonstration.
const TabsContext = React.createContext({ activeTab: '', setActiveTab: (id) => {} });

const Tabs = ({ defaultValue, children, className }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children }) => (
  <div className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-100 p-1 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
    {children}
  </div>
);

const TabsTrigger = ({ value, children }) => {
  const { activeTab, setActiveTab } = React.useContext(TabsContext);
  const isActive = activeTab === value;
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={\`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all \${isActive ? 'bg-white shadow-sm text-neutral-950 dark:bg-neutral-950 dark:text-neutral-50' : ''}\`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children }) => {
  const { activeTab } = React.useContext(TabsContext);
  return activeTab === value ? <div className="mt-4">{children}</div> : null;
};

// Usage
export function MyTabs() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Make changes to your account here. Click save when you're done.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Change your password here. After saving, you'll be logged out.
        </p>
      </TabsContent>
    </Tabs>
  );
}
`;