import { Button } from "@/components/ui/button";

export default function ButtonPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Button</h1>
        <p className="text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        {/* Sizes Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button
              size="icon"
              className="rounded-full">
              🔍
            </Button>
          </div>
        </section>

        {/* Combinations Section */}
        <section className="grid gap-6">
          <h2 className="mb-4 text-xl font-semibold">
            Variant and Size Combinations
          </h2>

          <div className="grid gap-4">
            <h3 className="text-lg font-medium">Default</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="default"
                size="default">
                Default
              </Button>
              <Button
                variant="default"
                size="sm">
                Small
              </Button>
              <Button
                variant="default"
                size="lg">
                Large
              </Button>
              <Button
                variant="default"
                size="icon">
                🔍
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <h3 className="text-lg font-medium">Destructive</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="destructive"
                size="default">
                Default
              </Button>
              <Button
                variant="destructive"
                size="sm">
                Small
              </Button>
              <Button
                variant="destructive"
                size="lg">
                Large
              </Button>
              <Button
                variant="destructive"
                size="icon">
                🗑️
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <h3 className="text-lg font-medium">Outline</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                size="default">
                Default
              </Button>
              <Button
                variant="outline"
                size="sm">
                Small
              </Button>
              <Button
                variant="outline"
                size="lg">
                Large
              </Button>
              <Button
                variant="outline"
                size="icon">
                ✏️
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <h3 className="text-lg font-medium">Secondary</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="secondary"
                size="default">
                Default
              </Button>
              <Button
                variant="secondary"
                size="sm">
                Small
              </Button>
              <Button
                variant="secondary"
                size="lg">
                Large
              </Button>
              <Button
                variant="secondary"
                size="icon">
                📋
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <h3 className="text-lg font-medium">Ghost</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="ghost"
                size="default">
                Default
              </Button>
              <Button
                variant="ghost"
                size="sm">
                Small
              </Button>
              <Button
                variant="ghost"
                size="lg">
                Large
              </Button>
              <Button
                variant="ghost"
                size="icon">
                👻
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <h3 className="text-lg font-medium">Link</h3>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="link"
                size="default">
                Default
              </Button>
              <Button
                variant="link"
                size="sm">
                Small
              </Button>
              <Button
                variant="link"
                size="lg">
                Large
              </Button>
              <Button
                variant="link"
                size="icon">
                🔗
              </Button>
            </div>
          </div>
        </section>

        {/* States Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">States</h2>

          <div className="grid gap-4">
            <h3 className="text-lg font-medium">Disabled</h3>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Default</Button>
              <Button
                variant="destructive"
                disabled>
                Destructive
              </Button>
              <Button
                variant="outline"
                disabled>
                Outline
              </Button>
              <Button
                variant="secondary"
                disabled>
                Secondary
              </Button>
              <Button
                variant="ghost"
                disabled>
                Ghost
              </Button>
              <Button
                variant="link"
                disabled>
                Link
              </Button>
            </div>
          </div>

          <div className="mt-4 grid gap-4">
            <h3 className="text-lg font-medium">With Icon</h3>
            <div className="flex flex-wrap gap-4">
              <Button>
                <span className="mr-2">✉️</span>
                Email
              </Button>
              <Button variant="outline">
                <span className="mr-2">⭐</span>
                Star
              </Button>
              <Button variant="secondary">
                <span className="mr-2">💾</span>
                Save
              </Button>
            </div>
          </div>
        </section>

        {/* Button Props */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Props</h2>
          <div className="overflow-auto">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr>
                  <th className="border-border bg-muted border px-4 py-2 text-left font-medium">
                    Name
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
                    variant
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;default&quot; | &quot;destructive&quot; |
                    &quot;outline&quot; | &quot;secondary&quot; |
                    &quot;ghost&quot; | &quot;link&quot;
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;default&quot;
                  </td>
                  <td className="border-border border px-4 py-2">
                    The visual style of the button
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    size
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;default&quot; | &quot;sm&quot; | &quot;lg&quot; |
                    &quot;icon&quot;
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;default&quot; | &quot;sm&quot; | &quot;lg&quot; |
                    &quot;icon&quot;
                  </td>
                  <td className="border-border border px-4 py-2">
                    The size of the button
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    asChild
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    boolean
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    false
                  </td>
                  <td className="border-border border px-4 py-2">
                    When true, the component will render its child directly,
                    applying props and behavior to it
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
