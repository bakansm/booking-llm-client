import { ControlledSwitch } from "@/components/playground/switch/controlled-switch";
import { NotificationSwitch } from "@/components/playground/switch/notification-switch";
import { Switch } from "@/components/ui/switch";

export default function SwitchPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Switch</h1>
        <p className="text-muted-foreground">
          A control that allows the user to toggle between checked and not
          checked states.
        </p>
      </div>
      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="flex max-w-md items-center gap-4">
            <Switch id="basic-switch" />
            <label
              htmlFor="basic-switch"
              className="text-sm">
              Enable feature
            </label>
          </div>
        </section>
        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Checked</h3>
              <Switch
                defaultChecked
                id="checked-switch"
              />
              <label
                htmlFor="checked-switch"
                className="ml-2 text-sm">
                Checked by default
              </label>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Disabled</h3>
              <Switch
                disabled
                id="disabled-switch"
              />
              <label
                htmlFor="disabled-switch"
                className="text-muted-foreground ml-2 text-sm">
                Disabled
              </label>
            </div>
          </div>
        </section>
        {/* Sizes Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Sizes</h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Switch
                size="xs"
                id="size-xs"
                defaultChecked
              />
              <label
                htmlFor="size-xs"
                className="text-sm">
                Extra Small (xs)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                size="sm"
                id="size-sm"
                defaultChecked
              />
              <label
                htmlFor="size-sm"
                className="text-sm">
                Small (sm)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                size="md"
                id="size-md"
                defaultChecked
              />
              <label
                htmlFor="size-md"
                className="text-sm">
                Medium (md) - Default
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                size="lg"
                id="size-lg"
                defaultChecked
              />
              <label
                htmlFor="size-lg"
                className="text-sm">
                Large (lg)
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                size="xl"
                id="size-xl"
                defaultChecked
              />
              <label
                htmlFor="size-xl"
                className="text-sm">
                Extra Large (xl)
              </label>
            </div>
          </div>
        </section>
        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Controlled</h3>
              <ControlledSwitch />
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Custom Size</h3>
              <Switch
                id="large-switch"
                className="h-8 w-16"
              />
              <label
                htmlFor="large-switch"
                className="ml-2 text-sm">
                Large switch
              </label>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Custom Colors</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <Switch
                    id="custom-unchecked"
                    checked={false}
                  />
                  <label
                    htmlFor="custom-unchecked"
                    className="text-sm">
                    Unchecked: sub-background, thumb: background
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <Switch
                    id="custom-checked"
                    checked
                  />
                  <label
                    htmlFor="custom-checked"
                    className="text-sm">
                    Checked: primary, thumb: foreground
                  </label>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Switch
                      checked
                      color="primary"
                      id="color-primary"
                    />
                    <label
                      htmlFor="color-primary"
                      className="text-sm">
                      Checked: primary
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked
                      color="secondary"
                      id="color-secondary"
                    />
                    <label
                      htmlFor="color-secondary"
                      className="text-sm">
                      Checked: secondary
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked
                      color="success"
                      id="color-success"
                    />
                    <label
                      htmlFor="color-success"
                      className="text-sm">
                      Checked: success
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked
                      color="error"
                      id="color-error"
                    />
                    <label
                      htmlFor="color-error"
                      className="text-sm">
                      Checked: error
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked
                      color="warning"
                      id="color-warning"
                    />
                    <label
                      htmlFor="color-warning"
                      className="text-sm">
                      Checked: warning
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Notification Settings</h3>
              <NotificationSwitch />
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Dark Mode Toggle</h3>
              <div className="flex max-w-md items-center gap-4">
                <Switch id="darkmode-switch" />
                <label
                  htmlFor="darkmode-switch"
                  className="text-sm">
                  Dark Mode
                </label>
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
                    checked
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    boolean
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    Controlled checked state.
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
                    Initial checked state.
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
                    Disables the switch.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    onCheckedChange
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    (checked: boolean) =&gt; void
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    Callback when checked state changes.
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
                    Additional classes for the switch container.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    thumbClassName
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    string
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional classes for the switch thumb.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    color
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;default&quot; | &quot;primary&quot; |
                    &quot;secondary&quot; | &quot;success&quot; |
                    &quot;error&quot; | &quot;warning&quot;
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;default&quot;
                  </td>
                  <td className="border-border border px-4 py-2">
                    Changes the color of the switch when checked.
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
                    Controls the size of the switch.
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
