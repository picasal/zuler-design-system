import React from 'react';

const Skeleton = ({ className }: { className?: string }) => (
    <div className={`animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800 ${className || ''}`} />
);

// Demo Component
export const SkeletonDemo = () => {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};

// Code string for display
export const skeletonDemoCode = `
const Skeleton = ({ className }) => (
    <div className={\`animate-pulse rounded-md bg-neutral-200 \${className}\`} />
);

export function MySkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}
`;
