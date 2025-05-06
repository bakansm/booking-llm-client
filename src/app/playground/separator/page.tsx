import { Separator } from "@/components/ui/separator";

export default function SeparatorPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Separator</h1>
        <p className="text-muted-foreground">
          A visual divider between content, with horizontal or vertical
          orientation.
        </p>
      </div>
      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="max-w-md">
            <div className="space-y-1">
              <h4 className="text-sm font-medium">Content above</h4>
              <Separator />
              <h4 className="text-sm font-medium">Content below</h4>
            </div>
          </div>
        </section>
        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Horizontal</h3>
              <div className="space-y-1">
                <span className="text-muted-foreground text-sm">Above</span>
                <Separator orientation="horizontal" />
                <span className="text-muted-foreground text-sm">Below</span>
              </div>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Vertical</h3>
              <div className="flex h-5 items-center space-x-4">
                <span className="text-muted-foreground text-sm">Left</span>
                <Separator orientation="vertical" />
                <span className="text-muted-foreground text-sm">Right</span>
              </div>
            </div>
          </div>
        </section>
        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Custom Style</h3>
              <div className="space-y-1">
                <span className="text-muted-foreground text-sm">Above</span>
                <Separator className="bg-primary" />
                <span className="text-muted-foreground text-sm">Below</span>
              </div>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">With Thickness</h3>
              <div className="space-y-1">
                <span className="text-muted-foreground text-sm">Above</span>
                <Separator className="h-0.5" />
                <span className="text-muted-foreground text-sm">Below</span>
              </div>
            </div>
          </div>
        </section>
        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Form Fields</h3>
              <div className="max-w-md space-y-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input
                    type="text"
                    className="border-input mt-1 block w-full rounded-md border px-3 py-2"
                    placeholder="John Doe"
                  />
                </div>
                <Separator />
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    type="email"
                    className="border-input mt-1 block w-full rounded-md border px-3 py-2"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Menu Items</h3>
              <div className="max-w-xs">
                <nav className="space-y-1 rounded-md border p-2">
                  <a
                    href="#"
                    className="hover:bg-accent block rounded-md px-3 py-2">
                    Dashboard
                  </a>
                  <Separator />
                  <a
                    href="#"
                    className="hover:bg-accent block rounded-md px-3 py-2">
                    Settings
                  </a>
                  <Separator />
                  <a
                    href="#"
                    className="hover:bg-accent block rounded-md px-3 py-2">
                    Notifications
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </section>
        {/* Props Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Props</h2>
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
                    orientation
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;horizontal&quot; | &quot;vertical&quot;
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;horizontal&quot;
                  </td>
                  <td className="border-border border px-4 py-2">
                    The orientation of the separator.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    decorative
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    boolean
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    true
                  </td>
                  <td className="border-border border px-4 py-2">
                    Whether the separator is purely decorative. When true, it is
                    hidden from screen readers.
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
                    Additional classes for the separator.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    ...props
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    HTMLAttributes&lt;div&gt;
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    Any other props are spread to the root div.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
