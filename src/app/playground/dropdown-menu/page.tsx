import { EditorOptionsDropdown } from "@/components/playground/dropdown-menu/editor-options-dropdown";
import { ThemeDropdown } from "@/components/playground/dropdown-menu/theme-dropdown";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Dropdown Menu</h1>
        <p className="text-muted-foreground">
          Displays a menu to the user triggered by a button or other element.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="max-w-md">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </section>

        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            {/* Checkbox Items */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Checkbox Items</h3>
              <EditorOptionsDropdown />
            </div>
            {/* Radio Group */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Radio Group</h3>
              <ThemeDropdown />
            </div>
            {/* Submenu */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Submenu</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">More Options</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Account</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>Share</DropdownMenuSubTrigger>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Copy Link</DropdownMenuItem>
                      <DropdownMenuItem>Twitter</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap gap-8">
            {/* Custom Shortcuts */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">With Shortcuts</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">File</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    New File
                    <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Save As…
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    Print…
                    <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {/* Destructive Item */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Destructive Item</h3>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="destructive">Danger</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem variant="destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">User Menu</h3>
              <div className="max-w-md">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">User</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Logout</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Context Menu</h3>
              <div className="max-w-md">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Right Click Me</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Copy</DropdownMenuItem>
                    <DropdownMenuItem>Paste</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Inspect</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
                    DropdownMenu
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    open, onOpenChange
                  </td>
                  <td className="border-border border px-4 py-2">
                    Root dropdown menu component. <code>open</code> and{" "}
                    <code>onOpenChange</code> allow controlled state.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    DropdownMenuTrigger
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
                    DropdownMenuContent
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className, sideOffset
                  </td>
                  <td className="border-border border px-4 py-2">
                    The dropdown content area. Accepts custom classes and
                    offset.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    DropdownMenuItem
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    variant, inset
                  </td>
                  <td className="border-border border px-4 py-2">
                    A menu item. <code>variant</code> can be &quot;default&quot;
                    or &quot;destructive&quot;.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    DropdownMenuCheckboxItem
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    checked, onCheckedChange
                  </td>
                  <td className="border-border border px-4 py-2">
                    A menu item with a checkbox.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    DropdownMenuRadioGroup
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    value, onValueChange
                  </td>
                  <td className="border-border border px-4 py-2">
                    A group of radio items.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    DropdownMenuRadioItem
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    value
                  </td>
                  <td className="border-border border px-4 py-2">
                    A radio item in the group.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    DropdownMenuSub
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    A submenu container.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    DropdownMenuSubTrigger
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    inset
                  </td>
                  <td className="border-border border px-4 py-2">
                    Trigger for the submenu.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    DropdownMenuSubContent
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Content for the submenu.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    DropdownMenuShortcut
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Displays a keyboard shortcut.
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
