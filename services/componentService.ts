import React from 'react';
import type { ComponentDoc, TokenCategory } from '../types';

// Import all demo components
import { ButtonDemo, buttonDemoCode } from '../components/demos/ButtonDemo';
import { CardDemo, cardDemoCode } from '../components/demos/CardDemo';
import { InputDemo, inputDemoCode } from '../components/demos/InputDemo';
import { TabsDemo, tabsDemoCode } from '../components/demos/TabsDemo';
import { AccordionDemo, accordionDemoCode } from '../components/demos/AccordionDemo';
import { AlertDemo, alertDemoCode } from '../components/demos/AlertDemo';
import { AlertDialogDemo, alertDialogDemoCode } from '../components/demos/AlertDialogDemo';
import { AvatarDemo, avatarDemoCode } from '../components/demos/AvatarDemo';
import { BadgeDemo, badgeDemoCode } from '../components/demos/BadgeDemo';
import { CheckboxDemo, checkboxDemoCode } from '../components/demos/CheckboxDemo';
import { DialogDemo, dialogDemoCode } from '../components/demos/DialogDemo';
import { DropdownMenuDemo, dropdownMenuDemoCode } from '../components/demos/DropdownMenuDemo';
import { ProgressDemo, progressDemoCode } from '../components/demos/ProgressDemo';
import { SelectDemo, selectDemoCode } from '../components/demos/SelectDemo';
import { SkeletonDemo, skeletonDemoCode } from '../components/demos/SkeletonDemo';
import { SliderDemo, sliderDemoCode } from '../components/demos/SliderDemo';
import { SwitchDemo, switchDemoCode } from '../components/demos/SwitchDemo';
import { TableDemo, tableDemoCode } from '../components/demos/TableDemo';
import { TextareaDemo, textareaDemoCode } from '../components/demos/TextareaDemo';
import { ToastDemo, toastDemoCode } from '../components/demos/ToastDemo';


const mockTokens: TokenCategory[] = [
  {
    id: 'colors',
    name: 'Colors',
    description: 'The color palette for the application, used for backgrounds, text, borders, and component states.',
    tokens: [
      { name: '--background', value: '0 0% 100%', description: 'Default background color' },
      { name: '--foreground', value: '222.2 47.4% 11.2%', description: 'Default text color' },
      { name: '--primary', value: '222.2 47.4% 11.2%', description: 'Primary interactive elements' },
      { name: '--primary-foreground', value: '210 40% 98%', description: 'Text on primary elements' },
      { name: '--secondary', value: '210 40% 96.1%', description: 'Secondary UI elements' },
      { name: '--secondary-foreground', value: '222.2 47.4% 11.2%', description: 'Text on secondary elements' },
      { name: '--destructive', value: '0 84.2% 60.2%', description: 'Destructive actions (delete, error)' },
      { name: '--border', value: '214.3 31.8% 91.4%', description: 'Default border color' },
      { name: '--ring', value: '222.2 84% 4.9%', description: 'Focus ring color' },
    ],
  },
  {
    id: 'spacing',
    name: 'Spacing',
    description: 'Used for margins, padding, and positioning elements in the layout. Based on a 4px grid.',
    tokens: [
      { name: 'space-1', value: '0.25rem' }, { name: 'space-2', value: '0.5rem' },
      { name: 'space-4', value: '1rem' }, { name: 'space-6', value: '1.5rem' },
      { name: 'space-8', value: '2rem' },
    ],
  },
  {
    id: 'radii',
    name: 'Radii',
    description: 'The border radius values used for rounding corners of elements like buttons and cards.',
    tokens: [
      { name: '--radius-sm', value: '0.25rem' },
      { name: '--radius-md', value: '0.5rem' },
      { name: '--radius-lg', value: '0.75rem' },
    ],
  }
];


const mockDocs: ComponentDoc[] = [
  {
    id: 'button',
    name: 'Button',
    description: 'Displays a button or a link with button styling.',
    installation: 'npx your-cli-tool add button',
    tokensUsed: [
      { name: '--primary', value: 'hsl(222.2 47.4% 11.2%)', description: 'Background for the primary button.' },
      { name: '--primary-foreground', value: 'hsl(210 40% 98%)', description: 'Text color for the primary button.' },
      { name: '--radius-md', value: '0.5rem', description: 'The border radius for the button.' },
    ],
    examples: [
      {
        id: 'button-primary', title: 'Variants',
        component: React.createElement(ButtonDemo), code: buttonDemoCode,
      },
    ],
  },
  {
    id: 'card',
    name: 'Card',
    description: 'A container for content with a header, content, and footer sections.',
    installation: 'npx your-cli-tool add card',
    tokensUsed: [
        { name: '--background', value: 'hsl(0 0% 100%)', description: 'Card background color.' },
        { name: '--foreground', value: 'hsl(222.2 47.4% 11.2%)', description: 'Card default text color.' },
        { name: '--border', value: 'hsl(214.3 31.8% 91.4%)', description: 'Card border color.' },
        { name: '--radius-lg', value: '0.75rem', description: 'The border radius for the card.' },
    ],
    examples: [
      {
        id: 'card-demo', title: 'Example Card',
        component: React.createElement(CardDemo), code: cardDemoCode,
      },
    ],
  },
  {
    id: 'input',
    name: 'Input',
    description: 'A control to enter and edit text.',
    installation: 'npx your-cli-tool add input',
    tokensUsed: [
        { name: '--border', value: 'hsl(214.3 31.8% 91.4%)', description: 'Input border color.' },
        { name: '--ring', value: 'hsl(222.2 84% 4.9%)', description: 'Focus ring color.' },
        { name: '--radius-md', value: '0.5rem', description: 'The border radius for the input.' },
    ],
    examples: [
      {
        id: 'input-demo', title: 'Text Input',
        component: React.createElement(InputDemo), code: inputDemoCode,
      },
    ],
  },
  {
    id: 'tabs',
    name: 'Tabs',
    description: 'A set of layered sections of content, known as tab panels, that are displayed one at a time.',
    installation: 'npx your-cli-tool add tabs',
    tokensUsed: [
        { name: '--background', value: 'hsl(0 0% 100%)', description: 'Active tab background.' },
        { name: '--secondary', value: 'hsl(210 40% 96.1%)', description: 'Tab list background.' },
        { name: '--radius-md', value: '0.5rem', description: 'Border radius for the tab list.' },
    ],
    examples: [
      {
        id: 'tabs-demo', title: 'Example Tabs',
        component: React.createElement(TabsDemo), code: tabsDemoCode,
      },
    ],
  },
  {
    id: 'accordion', name: 'Accordion', description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
    installation: 'npx your-cli-tool add accordion',
    examples: [{ id: 'accordion-demo', title: 'Example', component: React.createElement(AccordionDemo), code: accordionDemoCode }]
  },
  {
    id: 'alert', name: 'Alert', description: 'Displays a callout for user attention.',
    installation: 'npx your-cli-tool add alert',
    examples: [{ id: 'alert-demo', title: 'Example', component: React.createElement(AlertDemo), code: alertDemoCode }]
  },
  {
    id: 'alert-dialog', name: 'Alert Dialog', description: 'A modal dialog that interrupts the user with important content and expects a response.',
    installation: 'npx your-cli-tool add alert-dialog',
    examples: [{ id: 'alert-dialog-demo', title: 'Example', component: React.createElement(AlertDialogDemo), code: alertDialogDemoCode }]
  },
  {
    id: 'avatar', name: 'Avatar', description: 'An image element with a fallback for representing a user.',
    installation: 'npx your-cli-tool add avatar',
    examples: [{ id: 'avatar-demo', title: 'Example', component: React.createElement(AvatarDemo), code: avatarDemoCode }]
  },
  {
    id: 'badge', name: 'Badge', description: 'Displays a badge or a tag.',
    installation: 'npx your-cli-tool add badge',
    examples: [{ id: 'badge-demo', title: 'Example', component: React.createElement(BadgeDemo), code: badgeDemoCode }]
  },
  {
    id: 'checkbox', name: 'Checkbox', description: 'A control that allows the user to toggle between checked and not checked.',
    installation: 'npx your-cli-tool add checkbox',
    examples: [{ id: 'checkbox-demo', title: 'Example', component: React.createElement(CheckboxDemo), code: checkboxDemoCode }]
  },
  {
    id: 'dialog', name: 'Dialog', description: 'A window overlaid on either the primary window or another dialog window.',
    installation: 'npx your-cli-tool add dialog',
    examples: [{ id: 'dialog-demo', title: 'Example', component: React.createElement(DialogDemo), code: dialogDemoCode }]
  },
  {
    id: 'dropdown-menu', name: 'Dropdown Menu', description: 'Displays a menu to the user — such as a set of actions or functions — triggered by a button.',
    installation: 'npx your-cli-tool add dropdown-menu',
    examples: [{ id: 'dropdown-menu-demo', title: 'Example', component: React.createElement(DropdownMenuDemo), code: dropdownMenuDemoCode }]
  },
  {
    id: 'progress', name: 'Progress', description: 'Displays an indicator showing the completion progress of a task.',
    installation: 'npx your-cli-tool add progress',
    examples: [{ id: 'progress-demo', title: 'Example', component: React.createElement(ProgressDemo), code: progressDemoCode }]
  },
  {
    id: 'select', name: 'Select', description: 'Displays a list of options for the user to pick from—triggered by a button.',
    installation: 'npx your-cli-tool add select',
    examples: [{ id: 'select-demo', title: 'Example', component: React.createElement(SelectDemo), code: selectDemoCode }]
  },
  {
    id: 'skeleton', name: 'Skeleton', description: 'Use to show a placeholder while content is loading.',
    installation: 'npx your-cli-tool add skeleton',
    examples: [{ id: 'skeleton-demo', title: 'Example', component: React.createElement(SkeletonDemo), code: skeletonDemoCode }]
  },
  {
    id: 'slider', name: 'Slider', description: 'An input where the user selects a value from within a given range.',
    installation: 'npx your-cli-tool add slider',
    examples: [{ id: 'slider-demo', title: 'Example', component: React.createElement(SliderDemo), code: sliderDemoCode }]
  },
  {
    id: 'switch', name: 'Switch', description: 'A control that allows the user to toggle between checked and not checked.',
    installation: 'npx your-cli-tool add switch',
    examples: [{ id: 'switch-demo', title: 'Example', component: React.createElement(SwitchDemo), code: switchDemoCode }]
  },
  {
    id: 'table', name: 'Table', description: 'A responsive table component.',
    installation: 'npx your-cli-tool add table',
    examples: [{ id: 'table-demo', title: 'Example', component: React.createElement(TableDemo), code: tableDemoCode }]
  },
  {
    id: 'textarea', name: 'Textarea', description: 'A control to enter and edit multi-line text.',
    installation: 'npx your-cli-tool add textarea',
    examples: [{ id: 'textarea-demo', title: 'Example', component: React.createElement(TextareaDemo), code: textareaDemoCode }]
  },
  {
    id: 'toast', name: 'Toast', description: 'A succinct message that is displayed temporarily.',
    installation: 'npx your-cli-tool add toast',
    examples: [{ id: 'toast-demo', title: 'Example', component: React.createElement(ToastDemo), code: toastDemoCode }]
  },
].sort((a, b) => a.name.localeCompare(b.name));

export const getComponentDocs = (): Promise<ComponentDoc[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDocs);
    }, 300);
  });
};

export const getDesignTokens = (): Promise<TokenCategory[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTokens);
    }, 300);
  });
};
