import React from 'react';
import type { ComponentDoc } from '../types';
import { ComponentPreview } from './ComponentPreview';

export const MainContent: React.FC<MainContentProps> = ({ doc }) => {
  return (
    <article className="px-4 py-6 md:p-8 lg:p-12">
      <header className="mb-8">
        <div className="flex items-center space-x-4 mb-2">
            <span className="bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 text-xs font-medium px-2.5 py-1 rounded-full">
              Component
            </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">{doc.name}</h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">{doc.description}</p>
      </header>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-2">Installation</h2>
        <div className="bg-neutral-100 dark:bg-neutral-900 rounded-md p-4 font-mono text-sm text-neutral-800 dark:text-neutral-200 relative group">
          <code>{doc.installation}</code>
        </div>
      </section>

      {doc.tokensUsed && doc.tokensUsed.length > 0 && (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold tracking-tight mb-4">Tokens Used</h2>
            <div className="border border-neutral-200 dark:border-neutral-800 rounded-md">
                <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                    {doc.tokensUsed.map(token => (
                        <div key={token.name} className="p-4 grid grid-cols-1 md:grid-cols-3 gap-2 items-start">
                            <div className="font-mono text-sm text-blue-600 dark:text-blue-400">{token.name}</div>
                            <div className="font-mono text-sm text-neutral-700 dark:text-neutral-300">{token.value}</div>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400 md:col-span-3 pt-2 md:pt-0">{token.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      )}

      <div className="space-y-12">
        {doc.examples.map(example => (
          <section key={example.id}>
            <h2 className="text-2xl font-semibold tracking-tight">{example.title}</h2>
            {example.description && <p className="mt-2 text-neutral-600 dark:text-neutral-400">{example.description}</p>}
            <ComponentPreview code={example.code}>
              {example.component}
            </ComponentPreview>
          </section>
        ))}
      </div>
    </article>
  );
};
interface MainContentProps {
  doc: ComponentDoc;
}
