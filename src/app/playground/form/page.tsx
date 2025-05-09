import { BasicFormExample } from "@/components/playground/form/basic-form";
import { DynamicFormExample } from "@/components/playground/form/dynamic-form";
import { ValidationFormExample } from "@/components/playground/form/validation-form";

export default function FormPlayground() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="mb-4 text-3xl font-bold">Form</h1>
        <p className="text-muted-foreground mb-8">
          A set of components for building forms using React Hook Form and Zod
          validation.
        </p>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Basic Form</h2>
            <p className="text-muted-foreground">
              A simple form with basic fields and validation.
            </p>
            <div className="rounded-md border p-4">
              <BasicFormExample />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold">Validation Form</h2>
            <p className="text-muted-foreground">
              A form with Zod schema validation and custom error messages.
            </p>
            <div className="rounded-md border p-4">
              <ValidationFormExample />
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:col-span-2">
            <h2 className="text-2xl font-bold">Dynamic Form</h2>
            <p className="text-muted-foreground">
              A dynamic form with conditional fields and validation.
            </p>
            <div className="rounded-md border p-4">
              <DynamicFormExample />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
