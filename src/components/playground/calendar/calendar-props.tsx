"use client";

export function CalendarProps() {
  return (
    <div className="overflow-auto">
      <table className="min-w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
              Prop
            </th>
            <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
              Type
            </th>
            <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
              Default
            </th>
            <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              mode
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              &quot;single&quot; | &quot;multiple&quot; | &quot;range&quot;
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              &quot;single&quot;
            </td>
            <td className="border-border border px-4 py-2">
              Selection mode for the calendar.
            </td>
          </tr>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              selected
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              Date | Date[] | &#123; from: Date; to: Date &#125;
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              -
            </td>
            <td className="border-border border px-4 py-2">
              The selected date(s) or range.
            </td>
          </tr>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              onSelect
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              (date: Date | Date[] | &#123; from: Date; to: Date &#125;) =&gt;
              void
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              -
            </td>
            <td className="border-border border px-4 py-2">
              Callback when the selection changes.
            </td>
          </tr>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              showOutsideDays
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              boolean
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              true
            </td>
            <td className="border-border border px-4 py-2">
              Show days from previous/next month.
            </td>
          </tr>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              weekStartsOn
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              number
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              0
            </td>
            <td className="border-border border px-4 py-2">
              Day the week starts on (0=Sunday, 1=Monday, ...).
            </td>
          </tr>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              disabled
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              boolean | Date | Date[] | ((date: Date) =&gt; boolean)
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              false
            </td>
            <td className="border-border border px-4 py-2">
              Disable specific dates or use a function for custom logic.
            </td>
          </tr>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              fromDate
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              Date
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              -
            </td>
            <td className="border-border border px-4 py-2">
              The minimum date that can be selected.
            </td>
          </tr>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              toDate
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              Date
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              -
            </td>
            <td className="border-border border px-4 py-2">
              The maximum date that can be selected.
            </td>
          </tr>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              modifiers
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              Record&lt;string, Date | Date[] | ((date: Date) =&gt; boolean)&gt;
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              -
            </td>
            <td className="border-border border px-4 py-2">
              Custom modifiers to apply to specific dates.
            </td>
          </tr>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              modifiersClassNames
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              Record&lt;string, string&gt;
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              -
            </td>
            <td className="border-border border px-4 py-2">
              Custom classes to apply to modifiers.
            </td>
          </tr>
          <tr>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              className
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              string
            </td>
            <td className="border-border border px-4 py-2 font-mono text-xs">
              -
            </td>
            <td className="border-border border px-4 py-2">
              Additional CSS classes for the calendar container.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
