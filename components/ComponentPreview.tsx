
import React, { useState, useCallback } from 'react';
import { CopyIcon, CheckIcon } from './icons';

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
}

export const ComponentPreview: React.FC<ComponentPreviewProps> = ({ children, code }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [code]);

  const TabButton = ({ name, label }: { name: 'preview' | 'code', label: string }) => (
    <button
      onClick={() => setActiveTab(name)}
      className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
        activeTab === name
          ? 'bg-neutral-200 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100'
          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="mt-4 border border-neutral-200 dark:border-neutral-800 rounded-lg">
      <div className="p-2 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
        <div className="flex space-x-1">
          <TabButton name="preview" label="Preview" />
          <TabButton name="code" label="Code" />
        </div>
      </div>
      
      {activeTab === 'preview' && (
        <div className="p-6 md:p-8 min-h-[200px] flex items-center justify-center bg-neutral-50/50 dark:bg-neutral-900/50">
          {children}
        </div>
      )}

      {activeTab === 'code' && (
        <div className="relative">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 p-2 rounded-md text-neutral-500 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          >
            {copied ? <CheckIcon className="w-4 h-4 text-green-500" /> : <CopyIcon className="w-4 h-4" />}
          </button>
          <pre className="p-6 md:p-8 bg-[#0d1117] text-white text-sm overflow-x-auto rounded-b-lg">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};
