import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

export default function PopoverPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Popover</h1>
        <p className="text-muted-foreground">
          Displays rich content in a portal, triggered by a button. Useful for
          building floating menus or dialogs.
        </p>
      </div>
      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="max-w-md">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-2">
                  <h4 className="font-medium">Popover Content</h4>
                  <p className="text-muted-foreground text-sm">
                    This is the content of the popover. It can contain any React
                    element.
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </section>
        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Alignment</h3>
              <div className="flex gap-4">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Start</Button>
                  </PopoverTrigger>
                  <PopoverContent align="start">
                    <p className="text-sm">
                      This popover is aligned to the start
                    </p>
                  </PopoverContent>
                </Popover>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">End</Button>
                  </PopoverTrigger>
                  <PopoverContent align="end">
                    <p className="text-sm">
                      This popover is aligned to the end
                    </p>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Side Offset</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Offset</Button>
                </PopoverTrigger>
                <PopoverContent sideOffset={10}>
                  <p className="text-sm">
                    This popover has a side offset of 10px
                  </p>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>
        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Custom Width</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Custom Width</Button>
                </PopoverTrigger>
                <PopoverContent className="w-96">
                  <p className="text-sm">
                    This popover has a custom width of 24rem (w-96)
                  </p>
                </PopoverContent>
              </Popover>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">With Close Button</h3>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">With Close</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <h4 className="font-medium">Popover with Close</h4>
                      <p className="text-muted-foreground text-sm">
                        This popover has a close button.
                      </p>
                    </div>
                    <div className="flex justify-end">
                      <PopoverClose asChild>
                        <Button
                          variant="outline"
                          size="sm">
                          Close
                        </Button>
                      </PopoverClose>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </section>
        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Login Form</h3>
              <div className="max-w-md">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline">Login</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80">
                    <form className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Login</h4>
                        <p className="text-muted-foreground text-sm">
                          Enter your credentials to sign in to your account.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="m@example.com"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                        />
                      </div>
                      <Button className="w-full">Sign In</Button>
                    </form>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Color Picker</h3>
              <div className="max-w-md">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-[180px] justify-start text-left font-normal">
                      <div className="bg-primary mr-2 h-4 w-4 rounded-full" />
                      <span>Pick a color</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-64">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Colors</h4>
                        <p className="text-muted-foreground text-sm">
                          Select a color for your profile.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {[
                          "bg-red-500",
                          "bg-blue-500",
                          "bg-green-500",
                          "bg-yellow-500",
                          "bg-purple-500",
                          "bg-pink-500",
                          "bg-indigo-500",
                          "bg-gray-500",
                        ].map((color) => (
                          <div
                            key={color}
                            className={`h-8 w-8 cursor-pointer rounded-full ${color}`}
                          />
                        ))}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
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
                    Popover
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    open, onOpenChange, modal, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Root popover component. Accepts all props from Radix
                    Popover.Root.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    PopoverTrigger
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    asChild, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Button that opens the popover. Use with asChild to
                    customize.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    PopoverContent
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className, align, sideOffset, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Popover content container. The align prop can be
                    &quot;center&quot;, &quot;start&quot;, or &quot;end&quot;.
                    sideOffset sets the distance from the trigger.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    PopoverAnchor
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    An anchor element to position the popover against
                    (optional).
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
