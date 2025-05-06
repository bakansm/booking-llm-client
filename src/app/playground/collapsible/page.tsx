import { BasicCollapsibleDemo } from "@/components/playground/collapsible/basic-collapsible-demo";
import { CollapsibleProps } from "@/components/playground/collapsible/collapsible-props";
import { CollapsibleWithIcon } from "@/components/playground/collapsible/collapsible-with-icon";
import { ControlledCollapsible } from "@/components/playground/collapsible/controlled-collapsible";
import { CustomStyledCollapsible } from "@/components/playground/collapsible/custom-styled-collapsible";
import { FaqCollapsible } from "@/components/playground/collapsible/faq-collapsible";
import { NestedCollapsible } from "@/components/playground/collapsible/nested-collapsible";
import { OpenByDefaultCollapsible } from "@/components/playground/collapsible/open-by-default-collapsible";
import { SidebarCollapsible } from "@/components/playground/collapsible/sidebar-collapsible";

export default function CollapsiblePage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Collapsible</h1>
        <p className="text-muted-foreground">
          An interactive component that expands/collapses content with a
          trigger.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="max-w-md">
            <BasicCollapsibleDemo />
          </div>
        </section>

        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            {/* Open by Default */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Open by Default</h3>
              <OpenByDefaultCollapsible />
            </div>
            {/* Controlled */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Controlled</h3>
              <ControlledCollapsible />
            </div>
            {/* Nested */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Nested</h3>
              <NestedCollapsible />
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
              <CustomStyledCollapsible />
            </div>
            {/* With Icon */}
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">With Icon</h3>
              <CollapsibleWithIcon />
            </div>
          </div>
        </section>

        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">FAQ Collapsible</h3>
              <div className="max-w-md">
                <FaqCollapsible />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">
                Sidebar Collapsible Section
              </h3>
              <div className="max-w-md rounded-lg border p-4">
                <SidebarCollapsible />
              </div>
            </div>
          </div>
        </section>

        {/* Props Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Props</h2>
          <CollapsibleProps />
        </section>
      </div>
    </div>
  );
}
