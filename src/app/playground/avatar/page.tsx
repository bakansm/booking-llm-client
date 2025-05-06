import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Avatar</h1>
        <p className="text-muted-foreground">
          An image element with a fallback for representing a user.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Sizes Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Fallback Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">With Fallback</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar>
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <Avatar>
              <AvatarImage
                src="/nonexistent-image.jpg"
                alt="Unknown"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap items-center gap-4">
            {/* Custom Colors */}
            <Avatar className="bg-blue-500 text-white">
              <AvatarFallback>BL</AvatarFallback>
            </Avatar>

            <Avatar className="bg-red-500 text-white">
              <AvatarFallback>RD</AvatarFallback>
            </Avatar>

            <Avatar className="bg-green-500 text-white">
              <AvatarFallback>GN</AvatarFallback>
            </Avatar>

            {/* Custom Border */}
            <Avatar className="border-primary border-2">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* Custom Radius */}
            <Avatar className="rounded-md">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            {/* Square */}
            <Avatar className="rounded-none">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>

          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">User Profile</h3>
              <div className="flex max-w-md items-center gap-4 rounded-lg border p-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="text-lg font-semibold">John Doe</h4>
                  <p className="text-muted-foreground text-sm">
                    Product Designer
                  </p>
                  <p className="text-muted-foreground text-sm">
                    john.doe@example.com
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Avatar Group</h3>
              <div className="flex -space-x-3">
                <Avatar className="border-background border-2">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar className="border-background border-2">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Avatar className="border-background border-2">
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>
                <Avatar className="border-background border-2">
                  <AvatarFallback>+3</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Comment Thread</h3>
              <div className="max-w-2xl space-y-4">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 rounded-lg border p-3">
                    <p className="font-medium">John Doe</p>
                    <p className="text-muted-foreground text-sm">
                      Just pushed the latest update to the repo.
                    </p>
                    <p className="text-muted-foreground mt-1 text-xs">
                      1 hour ago
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 rounded-lg border p-3">
                    <p className="font-medium">Jane Smith</p>
                    <p className="text-muted-foreground text-sm">
                      Great work! I&apos;ll check it out.
                    </p>
                    <p className="text-muted-foreground mt-1 text-xs">
                      45 minutes ago
                    </p>
                  </div>
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
                    Avatar
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes to apply to the avatar container.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    AvatarImage
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    src, alt
                  </td>
                  <td className="border-border border px-4 py-2">
                    The src and alt attributes for the image element.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    AvatarFallback
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    delayMs
                  </td>
                  <td className="border-border border px-4 py-2">
                    Delay in milliseconds before showing the fallback avatar
                    (defaults to 600ms).
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
