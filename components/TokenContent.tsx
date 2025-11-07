import React from 'react';
import type { TokenCategory } from '../types';

interface TokenContentProps {
  category: TokenCategory;
}

const ColorSwatch: React.FC<{ value: string }> = ({ value }) => (
  <div
    className="w-10 h-10 rounded-md border border-neutral-200 dark:border-neutral-700"
    style={{ backgroundColor: `hsl(${value})` }}
  />
);

export const TokenContent: React.FC<TokenContentProps> = ({ category }) => {
  const isColor = category.id === 'colors';

  return (
    <article className="px-4 py-6 md:p-8 lg:p-12">
      <header className="mb-8">
        <div className="flex items-center space-x-4 mb-2">
            <span className="bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 text-xs font-medium px-2.5 py-1 rounded-full">
              Design Token
            </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">{category.name}</h1>
        <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">{category.description}</p>
      </header>
      
      <div className="border border-neutral-200 dark:border-neutral-800 rounded-lg">
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {category.tokens.map(token => (
                <div key={token.name} className={`p-4 grid grid-cols-1 md:grid-cols-3 gap-4 items-center ${isColor ? 'min-h-[80px]' : ''}`}>
                    <div className="flex items-center gap-4">
                      {isColor && <ColorSwatch value={token.value} />}
                      <span className="font-mono text-sm text-blue-600 dark:text-blue-400">{token.name}</span>
                    </div>
                    <div className="font-mono text-sm text-neutral-700 dark:text-neutral-300">{token.value}</div>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 col-span-1 md:col-span-3 lg:col-span-1">{token.description}</p>
                </div>
            ))}
        </div>
      </div>
    </article>
  );
};
