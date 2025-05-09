import {
  BasicInputExample,
  InputSizesExample,
  InputStatesExample,
  InputTypesExample,
  InputWithButtonExample,
  InputWithIconsExample,
  PasswordToggleExample,
} from "@/components/playground/input/input-examples";

export default function InputPage() {
  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Input</h1>
        <p className="text-muted-foreground">
          A form control for entering text data.
        </p>
      </div>

      <div className="grid gap-10">
        {/* Basic Usage Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Basic Usage</h2>
          <div className="grid max-w-md gap-8">
            <BasicInputExample />
          </div>
        </section>

        {/* Input Types Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Input Types</h2>
          <div className="grid max-w-md gap-6">
            <InputTypesExample />
          </div>
        </section>

        {/* States Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">States</h2>
          <div className="grid max-w-md gap-6">
            <InputStatesExample />
          </div>
        </section>

        {/* Sizes Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Sizes</h2>
          <div className="grid max-w-md gap-6">
            <InputSizesExample />
          </div>
        </section>

        {/* Input with Icons Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">With Icons</h2>
          <div className="grid max-w-md gap-6">
            <InputWithIconsExample />
          </div>
        </section>

        {/* Password Toggle Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Password Toggle</h2>
          <div className="grid max-w-md gap-6">
            <PasswordToggleExample />
          </div>
        </section>

        {/* Input with Button Section */}
        <section>
          <h2 className="mb-4 text-xl font-semibold">Input with Button</h2>
          <div className="grid max-w-md gap-6">
            <InputWithButtonExample />
          </div>
        </section>
      </div>
    </div>
  );
}
