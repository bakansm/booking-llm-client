import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Accordion</h1>
        <p className="text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="max-w-xl">
            <Accordion
              type="single"
              collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that match the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Multiple Items Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Multiple Items</h2>
          <div className="max-w-xl">
            <Accordion type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger>Multiple Item 1</AccordionTrigger>
                <AccordionContent>
                  You can open multiple items at once in this configuration.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Multiple Item 2</AccordionTrigger>
                <AccordionContent>
                  This accordion is configured to allow multiple items to be
                  open simultaneously.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Multiple Item 3</AccordionTrigger>
                <AccordionContent>
                  Try opening all items at once!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Default Value Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Default Value</h2>
          <div className="max-w-xl">
            <Accordion
              type="single"
              defaultValue="item-2">
              <AccordionItem value="item-1">
                <AccordionTrigger>First Section</AccordionTrigger>
                <AccordionContent>
                  This section is closed by default.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Second Section (Open by Default)
                </AccordionTrigger>
                <AccordionContent>
                  This section is open by default because we set
                  defaultValue=&quot;item-2&quot;.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Third Section</AccordionTrigger>
                <AccordionContent>
                  This section is closed by default.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Customized Accordion Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="max-w-xl space-y-6">
            {/* Custom Styling */}
            <div>
              <h3 className="mb-3 text-lg font-medium">Custom Styling</h3>
              <Accordion
                type="single"
                collapsible
                className="rounded-md border">
                <AccordionItem
                  value="item-1"
                  className="border-b px-4">
                  <AccordionTrigger className="py-3 hover:no-underline">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary">
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                        />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                      <span>Custom Header Style</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-muted/50 pt-2 pb-2">
                    This accordion item has custom styling applied to change its
                    appearance.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="border-b px-4">
                  <AccordionTrigger className="py-3 hover:no-underline">
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary">
                        <path d="M6 9H4.5a2.5 2.5 0 0 0 0 5H6" />
                        <path d="M18 9h1.5a2.5 2.5 0 0 1 0 5H18" />
                        <path d="M8 9h8" />
                        <path d="M8 15h8" />
                      </svg>
                      <span>Another Custom Item</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-muted/50 pt-2 pb-2">
                    You can customize the appearance of each accordion item
                    individually.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* No Border */}
            <div>
              <h3 className="mb-3 text-lg font-medium">No Border</h3>
              <Accordion
                type="single"
                collapsible>
                <AccordionItem
                  value="item-1"
                  className="border-none">
                  <AccordionTrigger className="font-bold">
                    Borderless Accordion
                  </AccordionTrigger>
                  <AccordionContent>
                    This accordion item has no borders for a cleaner look.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem
                  value="item-2"
                  className="border-none">
                  <AccordionTrigger className="font-bold">
                    Another Borderless Item
                  </AccordionTrigger>
                  <AccordionContent>
                    This style can be used for a more minimalist design.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">FAQ Section</h3>
              <div className="max-w-xl rounded-lg border p-6">
                <h4 className="mb-4 text-xl font-semibold">
                  Frequently Asked Questions
                </h4>
                <Accordion
                  type="single"
                  collapsible
                  className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      What is your return policy?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our return policy allows you to return items within 30
                      days of purchase. Items must be unused and in their
                      original packaging to qualify for a full refund.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      How do I track my order?
                    </AccordionTrigger>
                    <AccordionContent>
                      Once your order has shipped, you will receive a
                      confirmation email with a tracking number. You can use
                      this number on our website or the carrier&apos;s website
                      to track your package.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Do you ship internationally?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes, we ship to most countries worldwide. International
                      shipping rates and delivery times vary by location. You
                      can see the shipping options available to you during
                      checkout.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      How can I contact customer support?
                    </AccordionTrigger>
                    <AccordionContent>
                      Our customer support team is available Monday through
                      Friday, 9am to 5pm EST. You can reach us by email at
                      support@example.com or by phone at (123) 456-7890.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Product Specifications</h3>
              <div className="max-w-xl rounded-lg border p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-xl font-semibold">Product Details</h4>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
                    In Stock
                  </span>
                </div>
                <Accordion
                  type="multiple"
                  className="w-full">
                  <AccordionItem value="specs">
                    <AccordionTrigger>
                      Technical Specifications
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-inside list-disc space-y-1">
                        <li>Processor: Intel Core i7, 11th Generation</li>
                        <li>RAM: 16GB DDR4</li>
                        <li>Storage: 512GB SSD</li>
                        <li>Display: 15.6&quot; 4K UHD</li>
                        <li>Graphics: NVIDIA GeForce RTX 3060</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="dimensions">
                    <AccordionTrigger>Dimensions & Weight</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-inside list-disc space-y-1">
                        <li>Height: 0.7 inches (17.8 mm)</li>
                        <li>Width: 14.1 inches (358.1 mm)</li>
                        <li>Depth: 9.7 inches (246.4 mm)</li>
                        <li>Weight: 4.4 pounds (2 kg)</li>
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="warranty">
                    <AccordionTrigger>Warranty Information</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        This product comes with a 2-year limited warranty
                        covering manufacturing defects and hardware failures.
                        Extended warranty options are available at checkout.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
                    Accordion
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    type
                  </td>
                  <td className="border-border border px-4 py-2">
                    &quot;single&quot; or &quot;multiple&quot; - determines if
                    only one or multiple items can be open at once
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    Accordion
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    collapsible
                  </td>
                  <td className="border-border border px-4 py-2">
                    When type is &quot;single&quot;, allows the open item to be
                    closed (boolean)
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    Accordion
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    defaultValue
                  </td>
                  <td className="border-border border px-4 py-2">
                    The initial value or values to open by default
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    Accordion
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    value
                  </td>
                  <td className="border-border border px-4 py-2">
                    The controlled value or values of the open accordion items
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    Accordion
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    onValueChange
                  </td>
                  <td className="border-border border px-4 py-2">
                    Callback when the value changes
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    AccordionItem
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    value
                  </td>
                  <td className="border-border border px-4 py-2">
                    Unique identifier for the accordion item (required)
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    AccordionItem
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    disabled
                  </td>
                  <td className="border-border border px-4 py-2">
                    When true, prevents the user from interacting with the
                    accordion item
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
