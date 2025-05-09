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
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
          </div>
        </section>

        {/* Link Styling section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Link Styling</h2>
          <div className="flex flex-wrap gap-4">
            <Button link>Underlined Button</Button>
            <Button
              link
              variant="outlined">
              Outlined + Link
            </Button>
            <Button
              link
              variant="text">
              Text + Link
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <Button
              link
              color="primary">
              Primary
            </Button>
            <Button
              link
              color="secondary">
              Secondary
            </Button>
            <Button
              link
              color="error">
              Error
            </Button>
            <Button
              link
              color="warning">
              Warning
            </Button>
            <Button
              link
              color="success">
              Success
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Button
              link
              size="xs">
              XS Link
            </Button>
            <Button
              link
              size="sm">
              SM Link
            </Button>
            <Button
              link
              size="md">
              MD Link
            </Button>
            <Button
              link
              size="lg">
              LG Link
            </Button>
            <Button
              link
              size="xl">
              XL Link
            </Button>
          </div>
        </section>

        {/* Colors Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Colors</h2>
          <div className="flex flex-wrap gap-4">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="error">Error</Button>
            <Button color="warning">Warning</Button>
            <Button color="success">Success</Button>
          </div>
        </section>

        {/* Sizes Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="xs">XS</Button>
            <Button size="sm">SM</Button>
            <Button size="md">MD</Button>
            <Button size="lg">LG</Button>
            <Button size="xl">XL</Button>
          </div>
        </section>

        {/* Icon Button Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Icon Button</h2>
          <div className="flex flex-wrap gap-4">
            <Button
              icon
              size="xs"
              aria-label="icon xs">
              🔍
            </Button>
            <Button
              icon
              size="sm"
              aria-label="icon sm">
              🔍
            </Button>
            <Button
              icon
              size="md"
              aria-label="icon md">
              🔍
            </Button>
            <Button
              icon
              size="lg"
              aria-label="icon lg">
              🔍
            </Button>
            <Button
              icon
              size="xl"
              aria-label="icon xl">
              🔍
            </Button>
          </div>
        </section>

        {/* Tooltip Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Tooltip</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button tooltip="Tooltip on contained">Contained</Button>
            <Button
              variant="outlined"
              tooltip="Tooltip on outlined">
              Outlined
            </Button>
            <Button
              variant="text"
              tooltip="Tooltip on text">
              Text
            </Button>
            <Button
              link
              tooltip="Tooltip on link">
              Link
            </Button>
            <Button
              icon
              tooltip="Icon tooltip"
              aria-label="icon with tooltip">
              🛈
            </Button>
            <Button
              tooltip="Custom side tooltip"
              tooltipOptions={{ side: "bottom" }}>
              Bottom Tooltip
            </Button>
          </div>
        </section>

        {/* Full Width & Rounded Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Full Width & Rounded</h2>
          <div className="flex w-full max-w-md flex-col gap-4">
            <Button fullWidth>Full Width</Button>
            <Button fullRounded>Rounded</Button>
            <Button
              fullWidth
              fullRounded>
              Full Width & Rounded
            </Button>
          </div>
        </section>

        {/* Loading State Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Loading State</h2>
          <div className="flex flex-wrap gap-4">
            <Button loading>Loading</Button>
            <Button
              variant="outlined"
              loading>
              Loading
            </Button>
            <Button
              variant="text"
              loading>
              Loading
            </Button>
            <Button
              link
              loading>
              Loading
            </Button>
            <Button
              icon
              loading
              aria-label="loading icon"
            />
          </div>
        </section>

        {/* Disabled State Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Disabled State</h2>
          <div className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button
              variant="outlined"
              disabled>
              Disabled
            </Button>
            <Button
              variant="text"
              disabled>
              Disabled
            </Button>
            <Button
              link
              disabled>
              Disabled
            </Button>
            <Button
              icon
              disabled
              aria-label="disabled icon"
            />
          </div>
        </section>

        {/* Combinations Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Combinations</h2>
          <div className="grid gap-4">
            {(["contained", "outlined", "text"] as const).map((variant) => (
              <div key={variant}>
                <h3 className="mb-2 text-lg font-medium capitalize">
                  {variant}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {(
                    [
                      "primary",
                      "secondary",
                      "error",
                      "warning",
                      "success",
                    ] as const
                  ).map((color) => (
                    <Button
                      key={color}
                      variant={variant}
                      color={color}>
                      {variant} {color}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
            <div>
              <h3 className="mb-2 text-lg font-medium">Link</h3>
              <div className="flex flex-wrap gap-4">
                {(
                  [
                    "primary",
                    "secondary",
                    "error",
                    "warning",
                    "success",
                  ] as const
                ).map((color) => (
                  <Button
                    key={color}
                    link
                    color={color}>
                    Link {color}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Props Table */}
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
                    &quot;contained&quot; | &quot;outlined&quot; |
                    &quot;text&quot;
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;contained&quot;
                  </td>
                  <td className="border-border border px-4 py-2">
                    The visual style of the button
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    color
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;primary&quot; | &quot;secondary&quot; |
                    &quot;error&quot; | &quot;warning&quot; |
                    &quot;success&quot;
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;primary&quot;
                  </td>
                  <td className="border-border border px-4 py-2">
                    The color of the button
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    size
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;xs&quot; | &quot;sm&quot; | &quot;md&quot; |
                    &quot;lg&quot; | &quot;xl&quot;
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;md&quot;
                  </td>
                  <td className="border-border border px-4 py-2">
                    The size of the button
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    loading
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    boolean
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    false
                  </td>
                  <td className="border-border border px-4 py-2">
                    Show loading spinner and disable button
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    disabled
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    boolean
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    false
                  </td>
                  <td className="border-border border px-4 py-2">
                    Disable the button
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    fullWidth
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    boolean
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    false
                  </td>
                  <td className="border-border border px-4 py-2">
                    Set button to 100% width
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    rounded
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    boolean
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    false
                  </td>
                  <td className="border-border border px-4 py-2">
                    Set button to rounded-full
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    icon
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    boolean
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    false
                  </td>
                  <td className="border-border border px-4 py-2">
                    Set button as icon button (square)
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
                    Render child directly, applying props and behavior
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    fullRounded
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    boolean
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    false
                  </td>
                  <td className="border-border border px-4 py-2">
                    Whether the button should have full rounded corners
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    link
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    boolean
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    false
                  </td>
                  <td className="border-border border px-4 py-2">
                    Whether the button should have link styling (underline)
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
