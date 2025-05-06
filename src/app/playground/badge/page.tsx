import { Badge } from "@/components/ui/badge";

export default function BadgePage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Badge</h1>
        <p className="text-muted-foreground">
          Displays a small badge or label for status, counts, or categories.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        {/* With Icons Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">With Icons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Badge
              variant="default"
              className="gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0">
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Verified
            </Badge>

            <Badge
              variant="secondary"
              className="gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              Paid
            </Badge>

            <Badge
              variant="outline"
              className="gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0">
                <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
                <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
                <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
                <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
              </svg>
              Settings
            </Badge>

            <Badge
              variant="destructive"
              className="gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0">
                <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                <circle
                  cx="17"
                  cy="7"
                  r="5"
                />
              </svg>
              Blocked
            </Badge>
          </div>
        </section>

        {/* Sizes Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Badge
              variant="default"
              className="text-xs">
              Extra Small
            </Badge>

            <Badge variant="default">Default</Badge>

            <Badge
              variant="default"
              className="px-3 py-1 text-base">
              Medium
            </Badge>

            <Badge
              variant="default"
              className="px-4 py-2 text-lg">
              Large
            </Badge>
          </div>
        </section>

        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap items-center gap-4">
            {/* Custom Colors */}
            <Badge className="bg-blue-500 hover:bg-blue-600">Blue</Badge>

            <Badge className="bg-green-500 hover:bg-green-600">Green</Badge>

            <Badge className="bg-purple-500 hover:bg-purple-600">Purple</Badge>

            <Badge className="bg-orange-500 hover:bg-orange-600">Orange</Badge>

            {/* Custom Radius */}
            <Badge className="rounded-full px-4">Rounded</Badge>

            {/* Custom Border */}
            <Badge
              variant="outline"
              className="border-primary border-2">
              Thick Border
            </Badge>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>

          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Status Indicators</h3>
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="border-green-500 text-green-500">
                  Active
                </Badge>
                <Badge
                  variant="outline"
                  className="border-yellow-500 text-yellow-500">
                  Pending
                </Badge>
                <Badge
                  variant="outline"
                  className="border-red-500 text-red-500">
                  Failed
                </Badge>
                <Badge
                  variant="outline"
                  className="border-gray-500 text-gray-500">
                  Inactive
                </Badge>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Category Tags</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Technology</Badge>
                <Badge variant="secondary">Science</Badge>
                <Badge variant="secondary">Design</Badge>
                <Badge variant="secondary">Business</Badge>
                <Badge variant="secondary">Health</Badge>
                <Badge variant="secondary">Education</Badge>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Notifications</h3>
              <div className="max-w-md space-y-2">
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                      <span>📬</span>
                    </div>
                    <span>New message from John</span>
                  </div>
                  <Badge>New</Badge>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                      <span>📅</span>
                    </div>
                    <span>Meeting scheduled for tomorrow</span>
                  </div>
                  <Badge variant="destructive">Urgent</Badge>
                </div>

                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200">
                      <span>📊</span>
                    </div>
                    <span>Weekly report is available</span>
                  </div>
                  <Badge variant="outline">Info</Badge>
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
                    variant
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;default&quot; | &quot;secondary&quot; |
                    &quot;outline&quot; | &quot;destructive&quot;
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    &quot;default&quot;
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    The visual style of the badge.
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
                    Additional CSS classes to customize the badge.
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
