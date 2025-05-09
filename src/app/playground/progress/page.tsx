import { AnimatedProgress } from "@/components/playground/progress/animated-progress";
import { Progress } from "@/components/ui/progress";

export default function ProgressPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Progress</h1>
        <p className="text-muted-foreground">
          Displays an indicator showing the completion progress of a task,
          typically as a horizontal bar.
        </p>
      </div>
      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="max-w-md">
            <AnimatedProgress />
          </div>
        </section>
        {/* Color Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Color Variants</h2>
          <div className="flex flex-col gap-4">
            <div className="w-full max-w-md">
              <h3 className="mb-2 text-lg font-medium">Primary (Default)</h3>
              <Progress
                value={70}
                color="primary"
              />
            </div>
            <div className="w-full max-w-md">
              <h3 className="mb-2 text-lg font-medium">Secondary</h3>
              <Progress
                value={70}
                color="secondary"
              />
            </div>
            <div className="w-full max-w-md">
              <h3 className="mb-2 text-lg font-medium">Success</h3>
              <Progress
                value={70}
                color="success"
              />
            </div>
            <div className="w-full max-w-md">
              <h3 className="mb-2 text-lg font-medium">Warning</h3>
              <Progress
                value={70}
                color="warning"
              />
            </div>
            <div className="w-full max-w-md">
              <h3 className="mb-2 text-lg font-medium">Error</h3>
              <Progress
                value={70}
                color="error"
              />
            </div>
          </div>
        </section>
        {/* Size Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Size Variants</h2>
          <div className="flex flex-col gap-4">
            <div className="w-full max-w-md">
              <h3 className="mb-2 text-lg font-medium">Extra Small (xs)</h3>
              <Progress
                value={70}
                size="xs"
              />
            </div>
            <div className="w-full max-w-md">
              <h3 className="mb-2 text-lg font-medium">Small (sm)</h3>
              <Progress
                value={70}
                size="sm"
              />
            </div>
            <div className="w-full max-w-md">
              <h3 className="mb-2 text-lg font-medium">
                Medium (md - Default)
              </h3>
              <Progress
                value={70}
                size="md"
              />
            </div>
            <div className="w-full max-w-md">
              <h3 className="mb-2 text-lg font-medium">Large (lg)</h3>
              <Progress
                value={70}
                size="lg"
              />
            </div>
            <div className="w-full max-w-md">
              <h3 className="mb-2 text-lg font-medium">Extra Large (xl)</h3>
              <Progress
                value={70}
                size="xl"
              />
            </div>
          </div>
        </section>
        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Default</h3>
              <Progress value={50} />
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Indeterminate</h3>
              <Progress />
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Custom Color</h3>
              <Progress
                value={80}
                className="bg-green-200 [&_[role=progressbar]]:bg-green-600"
              />
            </div>
          </div>
        </section>
        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">With Label</h3>
              <div className="flex items-center gap-2">
                <Progress value={70} />
                <span className="text-sm font-medium">70%</span>
              </div>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Custom Height</h3>
              <Progress
                value={40}
                className="h-1.5"
              />
            </div>
          </div>
        </section>
        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">File Upload</h3>
              <div className="max-w-md space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Uploading file...</span>
                  <span className="text-muted-foreground text-xs">45%</span>
                </div>
                <Progress
                  value={45}
                  color="primary"
                  size="sm"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Task Completion</h3>
              <div className="max-w-md space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tasks Completed</span>
                  <span className="text-muted-foreground text-xs">3/5</span>
                </div>
                <Progress
                  value={60}
                  color="success"
                  size="md"
                />
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
                    value
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    number
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    The current progress value (0-100). If not set, shows
                    indeterminate state.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    color
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;primary&quot; | &quot;secondary&quot; |
                    &quot;success&quot; | &quot;warning&quot; |
                    &quot;error&quot;
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;primary&quot;
                  </td>
                  <td className="border-border border px-4 py-2">
                    The color variant of the progress bar.
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
                    The size (height) of the progress bar.
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
                    Additional classes for the progress bar container.
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
