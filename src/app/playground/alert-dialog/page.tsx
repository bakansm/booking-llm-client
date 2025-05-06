import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertDialogPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Alert Dialog</h1>
        <p className="text-muted-foreground">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="flex flex-wrap gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Show Alert Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>

        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-4">
            {/* Destructive */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Item</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Delete Item</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to delete this item? This action
                    cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* Confirmation */}
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>Confirm Action</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Confirm Action</AlertDialogTitle>
                  <AlertDialogDescription>
                    Please confirm that you want to perform this action.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Confirm</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>

        {/* Custom Content Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Custom Content</h2>
          <div className="flex flex-wrap gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">With Form</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="sm:max-w-md">
                <AlertDialogHeader>
                  <AlertDialogTitle>Subscribe to Newsletter</AlertDialogTitle>
                  <AlertDialogDescription>
                    Enter your email to receive our weekly newsletter with the
                    latest updates.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="consent"
                      className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300"
                    />
                    <label
                      htmlFor="consent"
                      className="text-muted-foreground ml-2 block text-sm">
                      I agree to receive marketing emails
                    </label>
                  </div>
                </div>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Subscribe</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">With Icon</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <div className="flex justify-center pt-2 pb-4">
                  <div className="rounded-full bg-yellow-100 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-600">
                      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      <line
                        x1="12"
                        y1="9"
                        x2="12"
                        y2="13"
                      />
                      <line
                        x1="12"
                        y1="17"
                        x2="12.01"
                        y2="17"
                      />
                    </svg>
                  </div>
                </div>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-center">
                    Warning
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-center">
                    This operation will make changes that cannot be reverted.
                    Are you sure you want to continue?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="flex-row justify-center gap-2 sm:justify-center">
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Delete Confirmation</h3>
              <div className="flex flex-wrap gap-4">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="destructive">Delete Account</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Account</AlertDialogTitle>
                      <AlertDialogDescription>
                        This will permanently delete your account and all
                        associated data. This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="bg-muted my-4 rounded-md p-4">
                      <p className="text-sm font-medium">
                        To confirm, please type &quot;delete my account&quot;
                      </p>
                      <input
                        type="text"
                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring mt-2 flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="delete my account"
                      />
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                        Delete Account
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Logout Confirmation</h3>
              <div className="flex flex-wrap gap-4">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">Logout</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you sure you want to logout?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        You will be logged out of your account on this device.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Logout</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Payment Confirmation</h3>
              <div className="flex flex-wrap gap-4">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button>Complete Purchase</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="sm:max-w-md">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Confirm Payment</AlertDialogTitle>
                      <AlertDialogDescription>
                        You are about to be charged $99.99 for the Pro Plan
                        (Annual).
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="bg-muted rounded-md p-4">
                        <div className="mb-2 flex justify-between">
                          <span className="text-sm font-medium">
                            Pro Plan (Annual)
                          </span>
                          <span className="text-sm font-medium">$99.99</span>
                        </div>
                        <div className="text-muted-foreground flex justify-between">
                          <span className="text-sm">Tax</span>
                          <span className="text-sm">$0.00</span>
                        </div>
                        <div className="my-3 border-t"></div>
                        <div className="flex justify-between font-medium">
                          <span>Total</span>
                          <span>$99.99</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        By clicking &quot;Confirm Payment&quot;, you agree to
                        our Terms of Service and Privacy Policy.
                      </p>
                    </div>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction>Confirm Payment</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
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
                    AlertDialog
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    open, onOpenChange
                  </td>
                  <td className="border-border border px-4 py-2">
                    Control the open state of the dialog
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    AlertDialogTrigger
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    asChild
                  </td>
                  <td className="border-border border px-4 py-2">
                    When true, the trigger will be the child element rather than
                    a button
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    AlertDialogContent
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes for the dialog content
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    AlertDialogAction
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes for the action button
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    AlertDialogCancel
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes for the cancel button
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
