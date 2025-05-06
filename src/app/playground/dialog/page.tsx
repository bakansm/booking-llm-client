import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DialogPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Dialog</h1>
        <p className="text-muted-foreground">
          A window overlaid on the UI, used for modal interactions and content.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="max-w-md">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Dialog Title</DialogTitle>
                  <DialogDescription>
                    This is a simple dialog. You can place any content here.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">Dialog body content goes here.</div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="secondary">Close</Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            {/* Centered Dialog */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Centered</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Centered</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-xs">
                  <DialogHeader>
                    <DialogTitle>Centered Dialog</DialogTitle>
                  </DialogHeader>
                  <div className="py-2">
                    This dialog is centered and smaller.
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="secondary">Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            {/* With Form */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">With Form</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Form</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogDescription>
                      Enter your email to subscribe.
                    </DialogDescription>
                  </DialogHeader>
                  <form className="grid gap-4 py-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-md border px-3 py-2 text-sm"
                    />
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="submit">Subscribe</Button>
                      </DialogClose>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            {/* Custom Close */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Custom Close</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open Custom Close</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Custom Close Button</DialogTitle>
                  </DialogHeader>
                  <div className="py-2">
                    This dialog uses a custom close button.
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="destructive">Dismiss</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap gap-8">
            {/* Custom Styling */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Custom Styling</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                    Open Custom
                  </Button>
                </DialogTrigger>
                <DialogContent className="border-2 border-blue-500 bg-blue-50 text-blue-900">
                  <DialogHeader>
                    <DialogTitle>Custom Styled Dialog</DialogTitle>
                  </DialogHeader>
                  <div className="py-2">
                    This dialog has custom colors and border.
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="secondary">Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            {/* With Icon */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">With Icon</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Open With Icon</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>
                      <span
                        role="img"
                        aria-label="info"
                        className="mr-2">
                        ℹ️
                      </span>
                      Dialog With Icon
                    </DialogTitle>
                  </DialogHeader>
                  <div className="py-2">
                    This dialog includes an icon in the title.
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                      <Button variant="secondary">Close</Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Profile Edit Dialog</h3>
              <div className="max-w-md">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Edit Profile</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Profile</DialogTitle>
                      <DialogDescription>
                        Update your profile information below.
                      </DialogDescription>
                    </DialogHeader>
                    <form className="grid gap-4 py-4">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full rounded-md border px-3 py-2 text-sm"
                      />
                      <input
                        type="email"
                        placeholder="Email"
                        className="w-full rounded-md border px-3 py-2 text-sm"
                      />
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button type="submit">Save</Button>
                        </DialogClose>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Dialog with Long Content</h3>
              <div className="max-w-md">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Open Long Content</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Terms and Conditions</DialogTitle>
                    </DialogHeader>
                    <div className="max-h-48 overflow-y-auto py-2 text-sm">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque euismod, urna eu tincidunt consectetur,
                        nisi nisl aliquam enim, eget facilisis enim nisl nec
                        elit. Etiam euismod, urna eu tincidunt consectetur, nisi
                        nisl aliquam enim, eget facilisis enim nisl nec elit.
                      </p>
                      <p className="mt-2">
                        Sed euismod, urna eu tincidunt consectetur, nisi nisl
                        aliquam enim, eget facilisis enim nisl nec elit. Etiam
                        euismod, urna eu tincidunt consectetur, nisi nisl
                        aliquam enim, eget facilisis enim nisl nec elit.
                      </p>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button variant="secondary">Close</Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
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
                    Dialog
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    open, onOpenChange
                  </td>
                  <td className="border-border border px-4 py-2">
                    Root dialog component. <code>open</code> and{" "}
                    <code>onOpenChange</code> allow controlled state.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    DialogTrigger
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
                    DialogContent
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    The dialog content area. Accepts custom classes.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    DialogClose
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    asChild
                  </td>
                  <td className="border-border border px-4 py-2">
                    Renders the close button as a child element.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    DialogTitle
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Dialog title element. Accepts custom classes.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    DialogDescription
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Dialog description element. Accepts custom classes.
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
