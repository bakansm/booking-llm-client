import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function ScrollAreaPage() {
  return (
    <div className="container py-10">
      <header className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Scroll Area</h1>
        <p className="text-muted-foreground">
          A scrollable area with custom scrollbars for an enhanced user
          experience.
        </p>
      </header>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="max-w-md">
            <ScrollArea className="h-40 w-full rounded-md border">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium">Lorem Ipsum</h4>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam sit amet eros vel nulla iaculis interdum. Proin in enim
                  quis magna vestibulum interdum. Ut at vestibulum nibh. Fusce
                  vitae tortor vitae eros facilisis porta. Quisque molestie orci
                  vel felis rhoncus, non bibendum quam imperdiet. Nam vel tellus
                  odio. Mauris imperdiet ipsum odio, vel fringilla est commodo
                  ac. Maecenas viverra eros non condimentum lacinia.
                </p>
                <p className="mt-4 text-sm">
                  Praesent sagittis nulla vitae libero hendrerit, nec tempus
                  velit condimentum. Vestibulum gravida vel tortor et
                  condimentum. Phasellus lacinia justo ut mi faucibus, a tempus
                  enim sodales. Suspendisse luctus sapien vitae faucibus
                  hendrerit. Suspendisse ex odio, varius sit amet nulla eu,
                  feugiat elementum mauris.
                </p>
              </div>
            </ScrollArea>
          </div>
        </section>

        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-80">
              <h3 className="mb-2 text-lg font-medium">Horizontal Scrolling</h3>
              <ScrollArea className="w-full rounded-md border">
                <div className="flex p-4">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-accent mr-4 flex h-8 w-20 flex-shrink-0 items-center justify-center rounded-md">
                      Item {i + 1}
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

            <div className="w-80">
              <h3 className="mb-2 text-lg font-medium">Vertical Scrollbars</h3>
              <ScrollArea className="h-40 w-full rounded-md border">
                <div className="h-80 w-80 p-4">
                  <h4 className="mb-4 text-sm font-medium">
                    Content with vertical scrollbars
                  </h4>
                  <p className="text-sm">
                    This content is both wider and taller than the container, so
                    you&apos;ll see both horizontal and vertical scrollbars.
                  </p>
                  <div className="mt-4 grid h-40 w-72 grid-cols-3 gap-4">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="bg-accent flex h-12 items-center justify-center rounded-md">
                        Box {i + 1}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-80">
              <h3 className="mb-2 text-lg font-medium">Custom Size</h3>
              <ScrollArea className="h-60 w-full rounded-md border">
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium">
                    Custom Sized Scroll Area
                  </h4>
                  <p className="text-sm">
                    This scroll area has a custom height of 15rem (h-60). You
                    can adjust the size to fit your needs.
                  </p>
                  <p className="mt-4 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam sit amet eros vel nulla iaculis interdum. Proin in
                    enim quis magna vestibulum interdum. Ut at vestibulum nibh.
                    Fusce vitae tortor vitae eros facilisis porta.
                  </p>
                  <p className="mt-4 text-sm">
                    Quisque molestie orci vel felis rhoncus, non bibendum quam
                    imperdiet. Nam vel tellus odio. Mauris imperdiet ipsum odio,
                    vel fringilla est commodo ac. Maecenas viverra eros non
                    condimentum lacinia.
                  </p>
                </div>
              </ScrollArea>
            </div>

            <div className="w-80">
              <h3 className="mb-2 text-lg font-medium">Custom Styling</h3>
              <ScrollArea className="bg-muted/20 h-40 w-full rounded-md border">
                <div className="p-4">
                  <h4 className="mb-4 text-sm font-medium">
                    Styled Scroll Area
                  </h4>
                  <p className="text-sm">
                    You can customize the appearance of the scroll area by
                    adding additional classes. This one has a subtle background.
                  </p>
                  <p className="mt-4 text-sm">
                    Praesent sagittis nulla vitae libero hendrerit, nec tempus
                    velit condimentum. Vestibulum gravida vel tortor et
                    condimentum.
                  </p>
                </div>
              </ScrollArea>
            </div>

            <div className="w-80">
              <h3 className="mb-2 text-lg font-medium">Scroll Types</h3>
              <div className="space-y-6">
                {[
                  {
                    type: "auto",
                    label: 'type="auto" (default)',
                    description:
                      "Scrollbars are visible when content overflows and automatically hide after a delay.",
                  },
                  {
                    type: "always",
                    label: 'type="always"',
                    description:
                      "Scrollbars are always visible whether content overflows or not.",
                  },
                  {
                    type: "hover",
                    label: 'type="hover"',
                    description:
                      "Scrollbars are only visible when hovering over the scroll area.",
                  },
                  {
                    type: "scroll",
                    label: 'type="scroll"',
                    description:
                      "Scrollbars are only visible during scrolling and hide after a delay.",
                  },
                ].map(({ type, label, description }) => (
                  <div key={type}>
                    <p className="mb-1 text-sm font-medium">{label}</p>
                    <ScrollArea
                      type={type as "auto" | "always" | "hover" | "scroll"}
                      className="h-24 w-full rounded-md border">
                      <div className="p-4">
                        <p className="text-sm">{description}</p>
                        <p className="mt-2 text-sm">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam at magna quis libero.
                        </p>
                      </div>
                    </ScrollArea>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Chat Messages</h3>
              <div className="max-w-md">
                <div className="rounded-md border">
                  <div className="border-b p-4">
                    <h4 className="text-sm font-medium">Chat with Support</h4>
                  </div>
                  <ScrollArea className="h-60">
                    <div className="space-y-4 p-4">
                      {Array.from({ length: 10 }).map((_, i) => {
                        const isUser = i % 2 !== 0;
                        return (
                          <div
                            key={i}
                            className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
                            <div
                              className={`max-w-[80%] rounded-lg p-3 ${
                                isUser
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted"
                              }`}>
                              <p className="text-sm">
                                {isUser
                                  ? "I'm having an issue with my recent order. Can you check the status?"
                                  : "Hi there! How can I help you today?"}
                              </p>
                              <span className="mt-1 block text-xs opacity-70">
                                {new Date().toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </ScrollArea>
                  <div className="border-t p-4">
                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="border-input flex-1 rounded-l-md border px-3 py-2 text-sm"
                      />
                      <button className="bg-primary text-primary-foreground rounded-r-md px-3 py-2">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Table with Fixed Header</h3>
              <div className="max-w-md rounded-md border">
                <div className="bg-muted border-b p-2">
                  <div className="grid grid-cols-3 gap-4 font-medium">
                    <div>Name</div>
                    <div>Email</div>
                    <div>Status</div>
                  </div>
                </div>
                <ScrollArea className="h-60">
                  <div className="p-2">
                    {Array.from({ length: 15 }).map((_, i) => {
                      const statusType = i % 3;
                      const statusColors = {
                        0: "bg-green-100 text-green-800",
                        1: "bg-yellow-100 text-yellow-800",
                        2: "bg-red-100 text-red-800",
                      };
                      const statusText = {
                        0: "Active",
                        1: "Pending",
                        2: "Inactive",
                      };

                      return (
                        <div
                          key={i}
                          className="grid grid-cols-3 gap-4 border-b py-2 last:border-0">
                          <div className="text-sm">User {i + 1}</div>
                          <div className="text-sm">user{i + 1}@example.com</div>
                          <div className="text-sm">
                            <span
                              className={`inline-block rounded-full px-2 py-1 text-xs ${statusColors[statusType as keyof typeof statusColors]}`}>
                              {
                                statusText[
                                  statusType as keyof typeof statusText
                                ]
                              }
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
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
                    ScrollArea
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className, type, scrollHideDelay, children
                  </td>
                  <td className="border-border border px-4 py-2">
                    Root scroll area component. The type can be &quot;auto&quot;
                    (default), &quot;always&quot;, &quot;hover&quot;,
                    &quot;scroll&quot;, or &quot;none&quot; to control scrollbar
                    visibility. scrollHideDelay controls the delay in ms before
                    scrollbars hide.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    ScrollBar
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className, orientation
                  </td>
                  <td className="border-border border px-4 py-2">
                    Scrollbar component. Orientation can be &quot;vertical&quot;
                    or &quot;horizontal&quot;.
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
