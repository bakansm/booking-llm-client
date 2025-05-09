import { ControlledRadioGroup } from "@/components/playground/radio-group/controlled-radio-group";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function RadioGroupPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Radio Group</h1>
        <p className="text-muted-foreground">
          A set of radio buttons allowing a single selection from a list of
          options.
        </p>
      </div>
      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="max-w-md">
            <RadioGroup defaultValue="option-1">
              <div className="mb-2 flex items-center gap-2">
                <RadioGroupItem
                  value="option-1"
                  id="r1"
                />
                <Label htmlFor="r1">Option 1</Label>
              </div>
              <div className="mb-2 flex items-center gap-2">
                <RadioGroupItem
                  value="option-2"
                  id="r2"
                />
                <Label htmlFor="r2">Option 2</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  value="option-3"
                  id="r3"
                />
                <Label htmlFor="r3">Option 3</Label>
              </div>
            </RadioGroup>
          </div>
        </section>
        {/* Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Horizontal</h3>
              <RadioGroup
                defaultValue="a"
                className="flex flex-row gap-4">
                <RadioGroupItem
                  value="a"
                  id="h1"
                />
                <Label htmlFor="h1">A</Label>
                <RadioGroupItem
                  value="b"
                  id="h2"
                />
                <Label htmlFor="h2">B</Label>
                <RadioGroupItem
                  value="c"
                  id="h3"
                />
                <Label htmlFor="h3">C</Label>
              </RadioGroup>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Disabled Option</h3>
              <RadioGroup defaultValue="1">
                <div className="mb-2 flex items-center gap-2">
                  <RadioGroupItem
                    value="1"
                    id="d1"
                  />
                  <Label htmlFor="d1">Enabled</Label>
                </div>
                <div className="mb-2 flex items-center gap-2">
                  <RadioGroupItem
                    value="2"
                    id="d2"
                    disabled
                  />
                  <Label
                    htmlFor="d2"
                    className="text-muted-foreground">
                    Disabled
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="3"
                    id="d3"
                  />
                  <Label htmlFor="d3">Enabled</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Color Variants Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Color Variants</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Default</h3>
              <RadioGroup defaultValue="default">
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="default"
                    id="color-default"
                    color="primary"
                  />
                  <Label htmlFor="color-default">Default</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Destructive</h3>
              <RadioGroup defaultValue="destructive">
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="destructive"
                    id="color-destructive"
                    color="error"
                  />
                  <Label htmlFor="color-destructive">Destructive</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Warning</h3>
              <RadioGroup defaultValue="warning">
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="warning"
                    id="color-warning"
                    color="warning"
                  />
                  <Label htmlFor="color-warning">Warning</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Success</h3>
              <RadioGroup defaultValue="success">
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="success"
                    id="color-success"
                    color="success"
                  />
                  <Label htmlFor="color-success">Success</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* Customization Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Customization</h2>
          <div className="flex flex-wrap gap-8">
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Controlled</h3>
              <ControlledRadioGroup />
            </div>
            <div className="w-72">
              <h3 className="mb-2 text-lg font-medium">Custom Size</h3>
              <RadioGroup
                defaultValue="big"
                className="gap-4">
                <div className="mb-2 flex items-center gap-2">
                  <RadioGroupItem
                    value="big"
                    id="s1"
                    size="xl"
                  />
                  <Label
                    htmlFor="s1"
                    className="text-base">
                    Big
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="small"
                    id="s2"
                    size="xs"
                  />
                  <Label
                    htmlFor="s2"
                    className="text-xs">
                    Small
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>
        {/* Examples Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Examples</h2>
          <div className="grid gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Survey</h3>
              <div className="max-w-md">
                <form className="space-y-4">
                  <div>
                    <Label className="mb-2 block font-medium">
                      How satisfied are you with our service?
                    </Label>
                    <RadioGroup
                      name="satisfaction"
                      defaultValue="neutral"
                      className="mt-2 flex flex-row gap-4">
                      <div className="flex flex-col items-center">
                        <RadioGroupItem
                          value="bad"
                          id="survey-bad"
                        />
                        <Label
                          htmlFor="survey-bad"
                          className="text-xs">
                          Bad
                        </Label>
                      </div>
                      <div className="flex flex-col items-center">
                        <RadioGroupItem
                          value="neutral"
                          id="survey-neutral"
                        />
                        <Label
                          htmlFor="survey-neutral"
                          className="text-xs">
                          Neutral
                        </Label>
                      </div>
                      <div className="flex flex-col items-center">
                        <RadioGroupItem
                          value="good"
                          id="survey-good"
                        />
                        <Label
                          htmlFor="survey-good"
                          className="text-xs">
                          Good
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium">Settings</h3>
              <div className="max-w-md">
                <RadioGroup defaultValue="email">
                  <div className="mb-2 flex items-center gap-2">
                    <RadioGroupItem
                      value="email"
                      id="set-email"
                    />
                    <Label htmlFor="set-email">Email Notifications</Label>
                  </div>
                  <div className="mb-2 flex items-center gap-2">
                    <RadioGroupItem
                      value="sms"
                      id="set-sms"
                    />
                    <Label htmlFor="set-sms">SMS Notifications</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="none"
                      id="set-none"
                    />
                    <Label htmlFor="set-none">No Notifications</Label>
                  </div>
                </RadioGroup>
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
                    RadioGroup
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className, value, defaultValue, onValueChange, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    Root radio group. Accepts all props from Radix
                    RadioGroup.Root.
                  </td>
                </tr>
                <tr>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    RadioGroupItem
                  </td>
                  <td className="border-border border px-4 py-2 font-mono text-xs">
                    className, value, disabled, color, size, ...props
                  </td>
                  <td className="border-border border px-4 py-2">
                    A radio button item. The color prop can be
                    &ldquo;primary&rdquo;, &ldquo;secondary&rdquo;,
                    &ldquo;error&rdquo;, &ldquo;warning&rdquo;, or
                    &ldquo;success&rdquo;. The size prop can be
                    &ldquo;xs&rdquo;, &ldquo;sm&rdquo;, &ldquo;md&rdquo;,
                    &ldquo;lg&rdquo;, or &ldquo;xl&rdquo;. Accepts all props
                    from Radix RadioGroup.Item.
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
