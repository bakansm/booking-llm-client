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
