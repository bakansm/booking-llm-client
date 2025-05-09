import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TooltipPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Tooltip</h1>
        <p className="text-muted-foreground">
          Displays informative text when users hover over, focus on, or tap an
          element.
        </p>
      </div>
      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="flex max-w-md items-center gap-4">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outlined">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>Tooltip content</TooltipContent>
            </Tooltip>
          </div>
        </section>
        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">With Arrow</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outlined">With Arrow</Button>
                </TooltipTrigger>
                <TooltipContent>Tooltip with arrow</TooltipContent>
              </Tooltip>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Custom Offset</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outlined">Offset 12px</Button>
                </TooltipTrigger>
                <TooltipContent sideOffset={12}>Offset 12px</TooltipContent>
              </Tooltip>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Placement</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outlined">Right</Button>
                </TooltipTrigger>
                <TooltipContent side="right">Tooltip on right</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </section>
        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Custom Color</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outlined">Custom Color</Button>
                </TooltipTrigger>
                <TooltipContent className="bg-green-600 text-white">
                  Green tooltip
                </TooltipContent>
              </Tooltip>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Long Content</h3>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outlined">Long Content</Button>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs">
                  This is a longer tooltip content that wraps to multiple lines
                  for demonstration purposes.
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
        </section>
        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Icon Button</h3>
              <div className="flex max-w-md items-center gap-4">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="text"
                      icon
                      aria-label="Edit">
                      ✏️
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Edit</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="text"
                      icon
                      aria-label="Delete">
                      🗑️
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Delete</TooltipContent>
                </Tooltip>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Form Field Help</h3>
              <div className="flex max-w-md items-center gap-2">
                <label
                  htmlFor="username"
                  className="text-sm font-medium">
                  Username
                </label>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="text"
                      icon
                      aria-label="Help">
                      ?
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>Enter a unique username.</TooltipContent>
                </Tooltip>
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
                    Tooltip
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    children, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Root tooltip. Accepts all props from Radix Tooltip.Root.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    TooltipTrigger
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    asChild, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Trigger element for the tooltip.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    TooltipContent
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className, side, sideOffset, children, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Content of the tooltip. Accepts all props from Radix
                    Tooltip.Content.
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
