import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { H1, H2, H3, P } from "@/components/ui/typography";
import Image from "next/image";

export default function CardPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <H1 className="mb-2">Card</H1>
        <P className="text-muted-foreground">
          Flexible content container with multiple sections, used for grouping
          related information.
        </P>
      </div>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <H2 className="mb-4">Basic Usage</H2>
          <div className="max-w-md">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  This is a simple card description.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <P>
                  This is the card content. You can place any elements here.
                </P>
              </CardContent>
              <CardFooter>
                <Button>Action</Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Variants Section */}
        <section>
          <H2 className="mb-4">Variants</H2>
          <div className="flex flex-wrap gap-6">
            {/* With Action */}
            <Card className="max-w-xs">
              <CardHeader>
                <CardTitle>Card with Action</CardTitle>
                <CardAction>
                  <Button
                    size="sm"
                    variant="outlined">
                    Edit
                  </Button>
                </CardAction>
                <CardDescription>
                  Card header with an action button.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <P>
                  Use <code>CardAction</code> for header actions.
                </P>
              </CardContent>
            </Card>

            {/* No Footer */}
            <Card className="max-w-xs">
              <CardHeader>
                <CardTitle>No Footer</CardTitle>
                <CardDescription>
                  Card without a footer section.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <P>Cards are flexible and can omit any section.</P>
              </CardContent>
            </Card>

            {/* Only Content */}
            <Card className="max-w-xs">
              <CardContent>
                <P>Minimal card with only content.</P>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Customization Section */}
        <section>
          <H2 className="mb-4">Customization</H2>
          <div className="flex flex-wrap gap-6">
            {/* Custom Colors */}
            <Card className="max-w-xs border-blue-200 bg-blue-50 text-blue-900">
              <CardHeader>
                <CardTitle>Info Card</CardTitle>
                <CardDescription>
                  Custom background and border color.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <P>This card uses custom Tailwind classes for color.</P>
              </CardContent>
            </Card>

            {/* With Image */}
            <Card className="max-w-xs">
              <Image
                src="/carousel-demo.webp"
                alt="Nature"
                className="h-32 w-full rounded-t-xl object-cover"
                loading="lazy"
                width={400}
                height={128}
              />
              <CardHeader>
                <CardTitle>Card with Image</CardTitle>
                <CardDescription>Header below the image.</CardDescription>
              </CardHeader>
              <CardContent>
                <P>Images can be placed above the card header/content.</P>
              </CardContent>
            </Card>

            {/* Custom Padding & Radius */}
            <Card className="max-w-xs rounded-2xl p-8">
              <CardHeader>
                <CardTitle>Custom Padding</CardTitle>
                <CardDescription>
                  Extra padding and rounded corners.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <P>
                  Use <code>className</code> to adjust spacing and radius.
                </P>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <H2 className="mb-4">Examples</H2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <H3 className="font-medium">User Profile Card</H3>
              <div className="max-w-sm">
                <Card>
                  <CardHeader>
                    <CardTitle>Jane Doe</CardTitle>
                    <CardDescription>Product Designer</CardDescription>
                    <CardAction>
                      <Button
                        size="sm"
                        variant="outlined">
                        Message
                      </Button>
                    </CardAction>
                  </CardHeader>
                  <CardContent>
                    <P className="text-muted-foreground mb-2 text-sm">
                      jane.doe@example.com
                    </P>
                    <P>
                      Jane is a creative product designer with 5+ years of
                      experience.
                    </P>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">View Profile</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <H3 className="font-medium">Product Card</H3>
              <div className="max-w-sm">
                <Card>
                  <Image
                    src="/carousel-demo.webp"
                    alt="Product"
                    className="h-40 w-full rounded-t-xl object-cover"
                    loading="lazy"
                    width={400}
                    height={160}
                  />
                  <CardHeader>
                    <CardTitle>Wireless Headphones</CardTitle>
                    <CardDescription>
                      High-quality sound, 20h battery
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <P className="mb-2 text-lg font-bold">$199.99</P>
                    <P className="text-muted-foreground text-sm">
                      Free shipping worldwide
                    </P>
                  </CardContent>
                  <CardFooter>
                    <Button size="sm">Add to Cart</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <H3 className="font-medium">Blog Post Card</H3>
              <div className="max-w-sm">
                <Card>
                  <CardHeader>
                    <CardTitle>How to Build Accessible UIs</CardTitle>
                    <CardDescription>
                      April 10, 2024 • 8 min read
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <P className="mb-2 text-base font-medium">
                      Learn the best practices for building accessible user
                      interfaces with React and Tailwind CSS.
                    </P>
                    <P className="text-muted-foreground text-sm">
                      Accessibility is essential for modern web apps. This post
                      covers ARIA roles, keyboard navigation, and more.
                    </P>
                  </CardContent>
                  <CardFooter>
                    <Button
                      size="sm"
                      variant="outlined">
                      Read More
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Props Section */}
        <section>
          <H2 className="mb-4">Props</H2>
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
                    Card
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes for the card container.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    CardHeader
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes for the card header.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    CardTitle
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes for the card title.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    CardDescription
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes for the card description.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    CardAction
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes for the card action area.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    CardContent
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes for the card content.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    CardFooter
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Additional CSS classes for the card footer.
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
