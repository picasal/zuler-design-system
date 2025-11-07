
import React, { useState } from 'react';
import type { ComponentDoc, Theme, TokenCategory } from '../types';
import { SunIcon, MoonIcon, SearchIcon } from './icons';

interface SidebarProps {
  docs: ComponentDoc[];
  tokenCategories: TokenCategory[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  theme: Theme;
  toggleTheme: () => void;
}

const NavLink: React.FC<{id: string, name: string, selectedId: string | null, onSelect: (id: string) => void;}> = ({ id, name, selectedId, onSelect }) => (
    <a
      href={`#${id}`}
      onClick={(e) => {
        e.preventDefault();
        onSelect(id);
      }}
      className={`block px-3 py-2 text-sm rounded-md transition-colors ${
        selectedId === id
          ? 'bg-neutral-200 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium'
          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-800'
      }`}
    >
      {name}
    </a>
);

const NavHeader: React.FC<{children: React.ReactNode}> = ({ children }) => (
    <h2 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 px-3 mt-6 mb-2">{children}</h2>
);


export const Sidebar: React.FC<SidebarProps> = ({ docs, tokenCategories, selectedId, onSelect, theme, toggleTheme }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredDocs = docs.filter(doc =>
    doc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <aside className="w-72 h-full bg-neutral-50 dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 flex flex-col">
      <div className="p-4 border-b border-neutral-200 dark:border-neutral-800">
        <h1 className="text-xl font-bold tracking-tight">Zuler Design System</h1>
        <div className="relative mt-4">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-4 space-y-1">
        <NavHeader>Getting Started</NavHeader>
        <NavLink id="introduction" name="Introduction" selectedId={selectedId} onSelect={onSelect} />
        <NavLink id="installation" name="Installation" selectedId={selectedId} onSelect={onSelect} />

        <NavHeader>Tokens</NavHeader>
        {tokenCategories.map(category => (
            <NavLink key={category.id} id={category.id} name={category.name} selectedId={selectedId} onSelect={onSelect} />
        ))}

        <NavHeader>Components</NavHeader>
        {filteredDocs.map(doc => (
            <NavLink key={doc.id} id={doc.id} name={doc.name} selectedId={selectedId} onSelect={onSelect} />
        ))}
      </nav>
      <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
        <button
          onClick={toggleTheme}
          className="w-full flex items-center justify-center p-2 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <SunIcon className="w-5 h-5" />
          ) : (
            <MoonIcon className="w-5 h-5" />
          )}
        </button>
      </div>
    </aside>
  );
};