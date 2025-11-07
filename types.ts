import type React from 'react';

export type Theme = 'light' | 'dark';

export interface ComponentExample {
  id: string;
  title: string;
  description?: string;
  component: React.ReactNode;
  code: string;
}

export interface DesignToken {
  name: string;
  value: string;
  description?: string;
}

export interface TokenCategory {
  id: string;
  name: string;
  description: string;
  tokens: DesignToken[];
}

export interface ComponentDoc {
  id: string;
  name: string;
  description: string;
  installation: string;
  examples: ComponentExample[];
  tokensUsed?: DesignToken[];
}
