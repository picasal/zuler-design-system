import React from 'react';

interface GettingStartedContentProps {
    page: 'introduction' | 'installation';
}

export const GettingStartedContent: React.FC<GettingStartedContentProps> = ({ page }) => {
    const content = {
        introduction: {
            title: 'Introduction',
            body: (
                <>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        Welcome to our component library documentation. This is a collection of reusable, accessible, and beautiful components built for our projects.
                    </p>
                    <p className="mt-4">
                        This library is built using React, TypeScript, and Tailwind CSS. Each component is designed to be self-contained and easily integrated into your projects. You can browse the components in the sidebar, view live previews, and copy the code to use them.
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">Philosophy</h2>
                    <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400">
                        <li><strong>Composable:</strong> Built with composition in mind. You can mix and match components to build complex UIs.</li>
                        <li><strong>Accessible:</strong> We follow WAI-ARIA standards to ensure all components are accessible to all users.</li>
                        <li><strong>Customizable:</strong> Easily extend and style components to match your brand's look and feel.</li>
                    </ul>
                </>
            ),
        },
        installation: {
            title: 'Installation',
            body: (
                <>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400">
                        To get started with the component library, you need to add the components to your project.
                    </p>
                    <h2 className="text-2xl font-semibold tracking-tight mt-8 mb-4">Using the CLI</h2>
                    <p>
                        The easiest way to add components is by using our command-line tool. You can add any component directly to your codebase.
                    </p>
                    <div className="mt-4 bg-neutral-100 dark:bg-neutral-900 rounded-md p-4 font-mono text-sm text-neutral-800 dark:text-neutral-200">
                        <code>npx your-cli-tool add [component-name]</code>
                    </div>
                    <p className="mt-4">For example, to add the button component, you would run:</p>
                    <div className="mt-4 bg-neutral-100 dark:bg-neutral-900 rounded-md p-4 font-mono text-sm text-neutral-800 dark:text-neutral-200">
                        <code>npx your-cli-tool add button</code>
                    </div>
                </>
            )
        }
    };

    const selectedContent = content[page];

    return (
        <article className="px-4 py-6 md:p-8 lg:p-12">
            <header className="mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-100">{selectedContent.title}</h1>
            </header>
            <div className="prose dark:prose-invert max-w-none">
                {selectedContent.body}
            </div>
        </article>
    );
};
