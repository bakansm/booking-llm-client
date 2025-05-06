import { BasicToast } from "@/components/playground/sonner/basic-toast";
import {
  ActionToast,
  CustomDurationToast,
} from "@/components/playground/sonner/toast-customization";
import {
  FormSubmissionToast,
  PromiseToast,
} from "@/components/playground/sonner/toast-examples";
import {
  DescriptionToast,
  ErrorToast,
  SuccessToast,
} from "@/components/playground/sonner/toast-variants";
import { Toaster } from "@/components/ui/sonner";

export default function SonnerPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Toaster (Sonner)</h1>
        <p className="text-muted-foreground">
          A toast notification component for displaying brief, non-intrusive
          messages.
        </p>
      </div>
      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="max-w-md">
            <BasicToast />
            <Toaster />
          </div>
        </section>
        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Success</h3>
              <SuccessToast />
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Error</h3>
              <ErrorToast />
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">With Description</h3>
              <DescriptionToast />
            </div>
          </div>
        </section>
        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Custom Duration</h3>
              <CustomDurationToast />
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">With Action</h3>
              <ActionToast />
            </div>
          </div>
        </section>
        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Form Submission</h3>
              <div className="max-w-md">
                <FormSubmissionToast />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Promise Toast</h3>
              <div className="flex max-w-md gap-4">
                <PromiseToast />
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
                    Toaster
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    theme, position, richColors, ...
                  </td>
                  <td className="border-border border px-4 py-2">
                    The main container for toast notifications. Inherits all
                    props from sonner&apos;s Toaster.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    toast()
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    message, options
                  </td>
                  <td className="border-border border px-4 py-2">
                    Function to trigger a toast notification. Options include
                    duration, action, description, etc.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    toast.success()
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    message, options
                  </td>
                  <td className="border-border border px-4 py-2">
                    Shows a success toast notification.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    toast.error()
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    message, options
                  </td>
                  <td className="border-border border px-4 py-2">
                    Shows an error toast notification.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    toast.promise()
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    promise, options
                  </td>
                  <td className="border-border border px-4 py-2">
                    Shows toast notifications for promise states (loading,
                    success, error).
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
