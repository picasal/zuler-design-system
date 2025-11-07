import React from 'react';

// Demo Component
export const TableDemo = () => {
  return (
    <div className="w-full max-w-lg border rounded-lg overflow-hidden">
        <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b bg-neutral-100 dark:bg-neutral-800">
                <tr className="border-b transition-colors">
                    <th className="h-12 px-4 text-left align-middle font-medium">Invoice</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                    <th className="h-12 px-4 text-left align-middle font-medium">Method</th>
                    <th className="h-12 px-4 text-right align-middle font-medium">Amount</th>
                </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
                <tr className="border-b transition-colors">
                    <td className="p-4 align-middle font-medium">INV001</td>
                    <td className="p-4 align-middle">Paid</td>
                    <td className="p-4 align-middle">Credit Card</td>
                    <td className="p-4 align-middle text-right">$250.00</td>
                </tr>
                <tr className="border-b transition-colors bg-neutral-50 dark:bg-neutral-900/50">
                    <td className="p-4 align-middle font-medium">INV002</td>
                    <td className="p-4 align-middle">Pending</td>
                    <td className="p-4 align-middle">PayPal</td>
                    <td className="p-4 align-middle text-right">$150.00</td>
                </tr>
                <tr className="border-b transition-colors">
                    <td className="p-4 align-middle font-medium">INV003</td>
                    <td className="p-4 align-middle">Paid</td>
                    <td className="p-4 align-middle">Bank Transfer</td>
                    <td className="p-4 align-middle text-right">$350.00</td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};

// Code string for display
export const tableDemoCode = `
// NOTE: Simplified for demo.
export function MyTable() {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b">
          <th className="p-4 text-left">Invoice</th>
          <th className="p-4 text-left">Status</th>
          <th className="p-4 text-right">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b">
          <td className="p-4">INV001</td>
          <td className="p-4">Paid</td>
          <td className="p-4 text-right">$250.00</td>
        </tr>
      </tbody>
    </table>
  );
}
`;
