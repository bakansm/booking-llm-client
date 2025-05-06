"use client";

export function CollapsibleProps() {
  return (
    <div className="overflow-auto">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
              Component
            </th>
            <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
              Props
            </th>
            <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              Collapsible
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              open, defaultOpen, onOpenChange
            </td>
            <td className="border-border border px-4 py-2">
              Root collapsible component. <code>open</code> and{" "}
              <code>onOpenChange</code> allow controlled state.
            </td>
          </tr>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              CollapsibleTrigger
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              asChild
            </td>
            <td className="border-border border px-4 py-2">
              Renders the trigger as a child element (e.g., a button).
            </td>
          </tr>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              CollapsibleContent
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              -
            </td>
            <td className="border-border border px-4 py-2">
              The collapsible content area.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
