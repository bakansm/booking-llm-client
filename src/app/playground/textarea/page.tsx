import { ControlledTextarea } from "@/components/playground/textarea/controlled-textarea";
import { Textarea } from "@/components/ui/textarea";

export default function TextareaPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Textarea</h1>
        <p className="text-muted-foreground">
          A multi-line text input for entering longer form content.
        </p>
      </div>
      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="max-w-md">
            <Textarea placeholder="Type your message here..." />
          </div>
        </section>
        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Disabled</h3>
              <Textarea
                placeholder="Disabled textarea"
                disabled
              />
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">With Error</h3>
              <Textarea
                placeholder="Invalid input"
                aria-invalid
                className="border-destructive focus-visible:ring-destructive"
              />
            </div>
          </div>
        </section>
        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Controlled</h3>
              <ControlledTextarea />
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">
                Auto Resize (min 3 rows)
              </h3>
              <Textarea
                placeholder="Auto-resizing textarea"
                rows={3}
                style={{ resize: "vertical" }}
              />
            </div>
          </div>
        </section>
        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Comment Box</h3>
              <div className="max-w-md">
                <form className="space-y-2">
                  <Textarea
                    placeholder="Leave a comment..."
                    rows={4}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary mt-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Feedback Form</h3>
              <div className="max-w-md">
                <form className="space-y-2">
                  <label
                    htmlFor="feedback"
                    className="text-sm font-medium">
                    Your Feedback
                  </label>
                  <Textarea
                    id="feedback"
                    placeholder="Share your thoughts..."
                    rows={5}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary mt-2">
                    Send
                  </button>
                </form>
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
                    value
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    string
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    Controlled value of the textarea.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    defaultValue
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    string
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    Initial value of the textarea.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    placeholder
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    string
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    Placeholder text.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    disabled
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    boolean
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    false
                  </td>
                  <td className="border-border border px-4 py-2">
                    Disables the textarea.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    rows
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    number
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    Number of visible text lines.
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
                    Additional classes for the textarea.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    ...props
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    HTMLAttributes&lt;textarea&gt;
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    -
                  </td>
                  <td className="border-border border px-4 py-2">
                    Any other props are spread to the textarea element.
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
