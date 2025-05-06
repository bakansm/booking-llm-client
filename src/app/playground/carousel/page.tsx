import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const images = Array(5).fill("/carousel-demo.webp");

export default function CarouselPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Carousel</h1>
        <p className="text-muted-foreground">
          A slideshow component for cycling through elements—images, cards, or
          custom content.
        </p>
      </div>

      <div className="space-y-16">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="mx-auto max-w-xs">
            <Carousel>
              <CarouselContent>
                {images.map((src, i) => (
                  <CarouselItem key={i}>
                    <Image
                      src={src}
                      alt={`Slide ${i + 1}`}
                      className="rounded-xl object-cover"
                      loading="lazy"
                      width={400}
                      height={225}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </section>

        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="mx-auto max-w-xs space-y-20">
            {/* Horizontal */}
            <div>
              <h3 className="mb-2 text-lg font-medium">Horizontal</h3>
              <Carousel orientation="horizontal">
                <CarouselContent>
                  {images.map((src, i) => (
                    <CarouselItem key={i}>
                      <Image
                        src={src}
                        alt={`Slide ${i + 1}`}
                        className="rounded-xl object-cover"
                        loading="lazy"
                        width={400}
                        height={225}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            {/* Vertical */}
            <div>
              <h3 className="mb-16 text-lg font-medium">Vertical</h3>
              <Carousel orientation="vertical">
                <CarouselContent className="h-56">
                  {images.map((src, i) => (
                    <CarouselItem key={i}>
                      <Image
                        src={src}
                        alt={`Slide ${i + 1}`}
                        className="rounded-xl object-cover"
                        loading="lazy"
                        width={400}
                        height={225}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
            {/* With Cards */}
            <div>
              <h3 className="mb-2 text-lg font-medium">With Cards</h3>
              <Carousel>
                <CarouselContent>
                  {[1, 2, 3].map((n) => (
                    <CarouselItem key={n}>
                      <Card className="flex h-40 items-center justify-center">
                        <CardContent className="flex h-full w-full items-center justify-center">
                          <span className="text-2xl font-bold">Card {n}</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Responsive Horizontal */}
            <div>
              <h3 className="mb-2 text-lg font-medium">
                Responsive Horizontal
              </h3>
              <Carousel>
                <CarouselContent>
                  {Array.from({ length: 6 }).map((_, n) => (
                    <CarouselItem
                      key={n}
                      className="basis-1/2">
                      <Card className="flex h-40 items-center justify-center">
                        <CardContent className="flex h-full w-full items-center justify-center">
                          <span className="text-2xl font-bold">Card {n}</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            {/* Responsive Vertical */}
            <div>
              <h3 className="mb-16 text-lg font-medium">Responsive Vertical</h3>
              <Carousel orientation="vertical">
                <CarouselContent className="h-90">
                  {Array.from({ length: 6 }).map((_, n) => (
                    <CarouselItem
                      key={n}
                      className="basis-1/2">
                      <Card className="flex h-40 items-center justify-center">
                        <CardContent className="flex h-full w-full items-center justify-center">
                          <span className="text-2xl font-bold">Card {n}</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
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
                    Carousel
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    orientation, opts, plugins, className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Root carousel component. <code>orientation</code> can be
                    &quot;horizontal&quot; or &quot;vertical&quot;.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    CarouselContent
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Container for carousel items.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    CarouselItem
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    A single carousel slide.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    CarouselPrevious
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Button to go to the previous slide.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    CarouselNext
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className
                  </td>
                  <td className="border-border border px-4 py-2">
                    Button to go to the next slide.
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
