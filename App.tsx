import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar } from './components/Sidebar';
import { MainContent } from './components/MainContent';
import { GettingStartedContent } from './components/GettingStartedContent';
import { TokenContent } from './components/TokenContent';
import { getComponentDocs, getDesignTokens } from './services/componentService';
import type { ComponentDoc, Theme, TokenCategory } from './types';
import { HamburgerIcon } from './components/icons';

const App: React.FC = () => {
  const [docs, setDocs] = useState<ComponentDoc[]>([]);
  const [tokenCategories, setTokenCategories] = useState<TokenCategory[]>([]);
  const [selectedId, setSelectedId] = useState<string>('introduction');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedTheme = window.localStorage.getItem('theme');
      if (storedTheme === 'dark' || storedTheme === 'light') {
        return storedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const [componentDocs, designTokens] = await Promise.all([getComponentDocs(), getDesignTokens()]);
      setDocs(componentDocs);
      setTokenCategories(designTokens);
    } catch (err) {
      setError('Failed to fetch documentation.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setIsSidebarOpen(false);
  };

  const renderContent = () => {
    if (loading) return <div className="p-8">Loading documentation...</div>;
    if (error) return <div className="p-8 text-red-500">{error}</div>;

    if (selectedId === 'introduction' || selectedId === 'installation') {
        return <GettingStartedContent page={selectedId} />;
    }

    const selectedDoc = docs.find((doc) => doc.id === selectedId);
    if (selectedDoc) return <MainContent doc={selectedDoc} />;

    const selectedTokenCategory = tokenCategories.find(cat => cat.id === selectedId);
    if (selectedTokenCategory) return <TokenContent category={selectedTokenCategory} />;

    return <div className="p-8">Select an item from the sidebar.</div>;
  };

  return (
    <div className="flex h-screen w-full">
      <div className={`fixed z-30 h-full transition-transform duration-300 md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar
            docs={docs}
            tokenCategories={tokenCategories}
            selectedId={selectedId}
            onSelect={handleSelect}
            theme={theme}
            toggleTheme={toggleTheme}
        />
      </div>

      <main className="flex-1 overflow-y-auto relative">
        <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden fixed top-4 left-4 z-40 p-2 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
            aria-label="Toggle navigation"
        >
            <HamburgerIcon className="w-6 h-6" />
        </button>
        {isSidebarOpen && <div onClick={() => setIsSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-20 md:hidden" />}

        {renderContent()}
      </main>
    </div>
  );
};

export default App;
