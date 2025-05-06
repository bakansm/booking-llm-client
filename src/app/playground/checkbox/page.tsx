import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Checkbox</h1>
        <p className="text-muted-foreground">
          A control that allows the user to toggle between checked and not
          checked.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="flex items-center space-x-2">
            <Checkbox id="basic" />
            <Label htmlFor="basic">Accept terms and conditions</Label>
          </div>
        </section>

        {/* States Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">States</h2>

          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Unchecked</h3>
              <div className="flex items-center space-x-2">
                <Checkbox id="unchecked" />
                <Label htmlFor="unchecked">Unchecked by default</Label>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Checked</h3>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="checked"
                  defaultChecked
                />
                <Label htmlFor="checked">Checked by default</Label>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Disabled</h3>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="disabled"
                  disabled
                />
                <Label
                  htmlFor="disabled"
                  className="text-muted-foreground">
                  Disabled checkbox
                </Label>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Disabled and Checked</h3>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="disabled-checked"
                  disabled
                  defaultChecked
                />
                <Label
                  htmlFor="disabled-checked"
                  className="text-muted-foreground">
                  Disabled and checked
                </Label>
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>

          <div className="grid gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Form Example</h3>
              <div className="space-y-4 rounded-lg border p-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms">Accept terms and conditions</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="announcements" />
                  <Label htmlFor="announcements">
                    Receive product announcements
                  </Label>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Todo List Example</h3>
              <div className="space-y-3 rounded-lg border p-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="task-1"
                    defaultChecked
                  />
                  <Label
                    htmlFor="task-1"
                    className="text-muted-foreground line-through">
                    Create project structure
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="task-2"
                    defaultChecked
                  />
                  <Label
                    htmlFor="task-2"
                    className="text-muted-foreground line-through">
                    Set up UI components
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="task-3" />
                  <Label htmlFor="task-3">Implement authentication</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="task-4" />
                  <Label htmlFor="task-4">Complete user dashboard</Label>
                </div>
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
                    checked
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    boolean
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    The controlled checked state of the checkbox.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    defaultChecked
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    boolean
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    false
                  </td>
                  <td className="border-border border px-4 py-2">
                    The default checked state when initially rendered.
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
                    When true, prevents the user from interacting with the
                    checkbox.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    onCheckedChange
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    function
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    Event handler called when the checked state changes.
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
