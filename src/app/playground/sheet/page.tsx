import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function SheetPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Sheet</h1>
        <p className="text-muted-foreground">
          A panel that slides out from the edge of the screen. It can be
          triggered by a button and is often used for mobile navigation or
          forms.
        </p>
      </div>
      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="max-w-md">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outlined">Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Basic Sheet</SheetTitle>
                  <SheetDescription>
                    This is a basic sheet panel that slides in from the side.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-muted-foreground text-sm">
                    Sheet content goes here. You can add any content you want
                    inside the sheet.
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </section>
        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Left Side</h3>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outlined">Open Left</Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Left Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet opens from the left side.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Right Side</h3>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outlined">Open Right</Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Right Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet opens from the right side.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Top Side</h3>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outlined">Open Top</Button>
                </SheetTrigger>
                <SheetContent side="top">
                  <SheetHeader>
                    <SheetTitle>Top Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet opens from the top.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Bottom Side</h3>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outlined">Open Bottom</Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle>Bottom Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet opens from the bottom.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </section>
        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">With Footer</h3>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outlined">With Footer</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Sheet with Footer</SheetTitle>
                    <SheetDescription>
                      This sheet has a footer section for actions.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p className="text-muted-foreground text-sm">
                      Content goes here. The footer will automatically position
                      itself at the bottom.
                    </p>
                  </div>
                  <SheetFooter>
                    <Button className="w-full">Save Changes</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Custom Styling</h3>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outlined">Custom Styling</Button>
                </SheetTrigger>
                <SheetContent className="bg-muted/30 border-l-primary">
                  <SheetHeader className="border-b pb-4">
                    <SheetTitle className="text-primary">
                      Custom Sheet
                    </SheetTitle>
                    <SheetDescription>
                      This sheet has custom styling applied.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4">
                    <p className="text-sm">
                      You can customize the appearance of the sheet with
                      additional classes.
                    </p>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </section>
        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Mobile Navigation</h3>
              <div className="max-w-md">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outlined">Open Menu</Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Navigation</SheetTitle>
                    </SheetHeader>
                    <nav className="grid gap-2 py-4">
                      <a
                        href="#"
                        className="hover:bg-accent flex items-center rounded-md px-3 py-2">
                        Dashboard
                      </a>
                      <a
                        href="#"
                        className="hover:bg-accent flex items-center rounded-md px-3 py-2">
                        Projects
                      </a>
                      <a
                        href="#"
                        className="hover:bg-accent flex items-center rounded-md px-3 py-2">
                        Team
                      </a>
                      <a
                        href="#"
                        className="hover:bg-accent flex items-center rounded-md px-3 py-2">
                        Reports
                      </a>
                      <a
                        href="#"
                        className="hover:bg-accent flex items-center rounded-md px-3 py-2">
                        Settings
                      </a>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Edit Profile Form</h3>
              <div className="max-w-md">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outlined">Edit Profile</Button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle>Edit Profile</SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                      </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label
                          htmlFor="name"
                          className="text-right text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          value="John Doe"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label
                          htmlFor="email"
                          className="text-right text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          value="john@example.com"
                          className="col-span-3"
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <label
                          htmlFor="username"
                          className="text-right text-sm font-medium">
                          Username
                        </label>
                        <Input
                          id="username"
                          value="johndoe"
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <SheetFooter>
                      <Button type="submit">Save changes</Button>
                    </SheetFooter>
                  </SheetContent>
                </Sheet>
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
                    Sheet
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    open, onOpenChange, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Root sheet component. Accepts all props from Radix
                    Dialog.Root.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    SheetTrigger
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    asChild, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Button that opens the sheet. Use with asChild to customize.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    SheetContent
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    side, className, children, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Sheet content container. Side can be &quot;top&quot;,
                    &quot;right&quot;, &quot;bottom&quot;, or &quot;left&quot;.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    SheetHeader
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Header section of the sheet.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    SheetTitle
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Title of the sheet.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    SheetDescription
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Optional description text for the sheet.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    SheetFooter
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Footer section of the sheet, often containing action
                    buttons.
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
