import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function AlertPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Alert</h1>
        <p className="text-muted-foreground">
          Displays a callout for user attention with important messages or
          notifications.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="max-w-xl">
            <Alert>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components and dependencies to your app using the
                cli.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="grid max-w-xl gap-4">
            <Alert variant="warning">
              <AlertTitle>Warning Alert</AlertTitle>
              <AlertDescription>
                This is a warning alert — check it out!
              </AlertDescription>
            </Alert>

            <Alert variant="error">
              <AlertTitle>Error Alert</AlertTitle>
              <AlertDescription>
                This is an error alert for critical warnings.
              </AlertDescription>
            </Alert>

            <Alert variant="success">
              <AlertTitle>Success Alert</AlertTitle>
              <AlertDescription>
                This is a success alert for confirmations.
              </AlertDescription>
            </Alert>

            <Alert variant="secondary">
              <AlertTitle>Secondary Alert</AlertTitle>
              <AlertDescription>
                This is a secondary alert for less critical information.
              </AlertDescription>
            </Alert>

            <Alert variant="primary">
              <AlertTitle>Primary Alert</AlertTitle>
              <AlertDescription>
                This is a primary alert for important information.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* With Icons Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">With Icons</h2>
          <div className="grid max-w-xl gap-4">
            <Alert variant="primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
              </svg>
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                This alert contains important information for your attention.
              </AlertDescription>
            </Alert>

            <Alert variant="warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
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
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                This action cannot be undone. Please proceed with caution.
              </AlertDescription>
            </Alert>

            <Alert variant="success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your changes have been saved successfully.
              </AlertDescription>
            </Alert>

            <Alert variant="error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <line
                  x1="15"
                  y1="9"
                  x2="9"
                  y2="15"
                />
                <line
                  x1="9"
                  y1="9"
                  x2="15"
                  y2="15"
                />
              </svg>
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Something went wrong. Please try again later.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="grid max-w-xl gap-4">
            {/* Custom Background */}
            <Alert className="border-blue-200 bg-blue-50 text-blue-800">
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
                className="text-blue-500">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              <AlertTitle>Custom Info Style</AlertTitle>
              <AlertDescription className="text-blue-700">
                You can customize the background, border, and text colors.
              </AlertDescription>
            </Alert>

            {/* Custom Border */}
            <Alert className="border-l-4 border-l-green-500">
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
                className="text-green-500">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <AlertTitle>Left Border</AlertTitle>
              <AlertDescription>
                This alert has a custom left border for a different visual
                style.
              </AlertDescription>
            </Alert>

            {/* Banner Style */}
            <Alert className="rounded-none border-r-0 border-l-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.8a2 2 0 0 0 1.4-.58l3.4-3.42a2 2 0 0 1 1.4-.58h4.2a2 2 0 0 1 2 2v2.4" />
                <polyline points="7 13 12 18 17 13" />
                <line
                  x1="12"
                  y1="18"
                  x2="12"
                  y2="11"
                />
              </svg>
              <AlertTitle>Banner Style</AlertTitle>
              <AlertDescription>
                This alert is styled as a banner with no rounded corners.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Form Validation</h3>
              <div className="max-w-xl rounded-lg border p-6">
                <div className="mb-6 space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full rounded-md border px-3 py-2"
                    placeholder="Enter your email"
                  />
                </div>
                <Alert
                  variant="error"
                  className="mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                    />
                    <line
                      x1="12"
                      y1="8"
                      x2="12"
                      y2="12"
                    />
                    <line
                      x1="12"
                      y1="16"
                      x2="12.01"
                      y2="16"
                    />
                  </svg>
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>
                    Please enter a valid email address to continue.
                  </AlertDescription>
                </Alert>
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow">
                  Submit
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">System Notification</h3>
              <div className="max-w-xl rounded-lg border p-6">
                <Alert variant="warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
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
                  <AlertTitle>System Maintenance</AlertTitle>
                  <AlertDescription>
                    The system will be down for scheduled maintenance on Sunday,
                    July 15th from 2:00 AM to 4:00 AM UTC.
                  </AlertDescription>
                </Alert>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Feature Announcement</h3>
              <div className="max-w-xl rounded-lg border p-6">
                <Alert variant="primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                  <AlertTitle>New Feature Available</AlertTitle>
                  <AlertDescription>
                    We&apos;ve just released our new reporting dashboard! Check
                    it out in your account settings.
                    <div className="mt-2">
                      <button className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-xs font-medium text-white shadow hover:bg-blue-700">
                        Try it now
                      </button>
                    </div>
                  </AlertDescription>
                </Alert>
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
                    Alert
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    variant
                  </td>
                  <td className="border-border border px-4 py-2">
                    &quot;warning&quot; | &quot;error&quot; |
                    &quot;success&quot; | &quot;secondary&quot; |
                    &quot;primary&quot; - controls the visual style of the alert
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    Alert
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes to customize the alert
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    AlertTitle
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes for the alert title
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    AlertDescription
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes for the alert description
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
